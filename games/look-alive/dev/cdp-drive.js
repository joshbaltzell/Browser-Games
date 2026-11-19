// Headless Chrome driver over CDP for Look Alive. Usage (from the repo root):  node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough.js
// Env: VW, VH (viewport, default 1280x720), MOB=1 for a phone. Uses the Chrome that Playwright cached under ~/Library/Caches/ms-playwright. A steps file exports async (api) => { api.eval, api.sleep, api.shot }.
// temp driver: node drive.js steps.js  (steps exports async (api)=>{...}); true 1280x720 viewport
const fs=require('fs'),os=require('os'),net=require('net'),path=require('path'),{spawn}=require('child_process');
const root=path.join(os.homedir(),'Library/Caches/ms-playwright');
function findChrome(){const dirs=fs.readdirSync(root).filter(d=>/^chromium-\d+$/.test(d)).sort((a,b)=>parseInt(b.split('-')[1])-parseInt(a.split('-')[1]));
 for(const d of dirs){const base=path.join(root,d,'chrome-mac-arm64');if(!fs.existsSync(base))continue;for(const app of fs.readdirSync(base).filter(n=>n.endsWith('.app'))){const exe=path.join(base,app,'Contents/MacOS',app.replace(/\.app$/,''));if(fs.existsSync(exe))return exe;}}}
const freePort=()=>new Promise((res)=>{const s=net.createServer();s.listen(0,'127.0.0.1',()=>{const p=s.address().port;s.close(()=>res(p));});});
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const steps=require(path.resolve(process.argv[2]));
 const extra=(process.argv[3]||'').split(' ').filter(Boolean);
 const port=await freePort(),profile=fs.mkdtempSync(path.join(os.tmpdir(),'drive-'));
 const chrome=spawn(findChrome(),['--headless=new','--use-mock-keychain','--password-store=basic','--remote-debugging-port='+port,'--user-data-dir='+profile,'--no-first-run','--window-size=1280,800','--enable-unsafe-swiftshader','--ignore-gpu-blocklist',...extra,'about:blank'],{stdio:'ignore'});
 const errors=[];let ws;
 const cleanup=()=>{try{ws.close()}catch(e){}try{chrome.kill('SIGKILL')}catch(e){}try{fs.rmSync(profile,{recursive:true,force:true})}catch(e){}};
 try{
  let tab=null;for(let i=0;i<100&&!tab;i++){try{const l=await(await fetch('http://127.0.0.1:'+port+'/json')).json();tab=l.find(t=>t.type==='page');}catch(e){}if(!tab)await sleep(100);}
  ws=new WebSocket(tab.webSocketDebuggerUrl);await new Promise(r=>ws.onopen=r);
  let id=0;const pend=new Map();
  ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id&&pend.has(m.id)){pend.get(m.id)(m);pend.delete(m.id);return;}
   if(m.method==='Runtime.exceptionThrown'){const d=m.params.exceptionDetails;errors.push('exception: '+((d.exception&&d.exception.description)||d.text));}
   else if(m.method==='Runtime.consoleAPICalled'&&m.params.type==='error')errors.push('console.error: '+m.params.args.map(a=>a.value!==undefined?a.value:a.description).join(' '));
   else if(m.method==='Log.entryAdded'&&m.params.entry.level==='error')errors.push('log: '+m.params.entry.text);};
  const send=(method,params={})=>new Promise(r=>{const i=++id;pend.set(i,r);ws.send(JSON.stringify({id:i,method,params}));});
  await send('Runtime.enable');await send('Log.enable');await send('Page.enable');await send('Page.bringToFront');
  if(process.env.REDUCED)await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  await send('Emulation.setDeviceMetricsOverride',{width:+(process.env.VW||1280),height:+(process.env.VH||720),deviceScaleFactor:1,mobile:!!process.env.MOB});
  await send('Page.navigate',{url:'file://'+path.resolve(__dirname, '../index.html')});await sleep(1500);
  const api={sleep,
   eval:async(expr)=>{const r=await send('Runtime.evaluate',{expression:expr,returnByValue:true,awaitPromise:true});if(r.result.exceptionDetails){errors.push('eval failed: '+JSON.stringify(r.result.exceptionDetails).slice(0,300));return null;}return r.result.result.value;},
   shot:async(name,clip)=>{const p={format:'png',captureBeyondViewport:true};if(clip)p.clip=Object.assign({scale:1},clip);const r=await send('Page.captureScreenshot',p);fs.writeFileSync(path.resolve(name),Buffer.from(r.result.data,'base64'));console.log('shot',name);},
   send};
  await steps(api);
 }catch(e){errors.push('driver: '+e.stack);}
 cleanup();
 console.log(errors.length?'ERRORS '+errors.length+'\n  '+errors.join('\n  '):'0 errors');process.exit(0);
})();
