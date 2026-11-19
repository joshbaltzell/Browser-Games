// OUT=/path/prefix- node games/look-alive/dev/cdp-drive.js games/look-alive/dev/u1-shots.js
module.exports=async(a)=>{const P=process.env.OUT||'u1-';const E=s=>a.eval(s+';1');
 await E(`localStorage.clear();__la.S.seenIntro=true;__la.S.unlocked=true;__la.show('list')`);await a.sleep(700);await a.shot(P+'list.png');
 await E(`__la.selectDish(1);if(__la.info().screen==='world')__la.worldContinue()`);await a.sleep(2400);await a.shot(P+'brief.png');
 await E(`__la.selectDish(4);__la.show('adapt')`);await a.sleep(800);await a.shot(P+'adapt.png');
 await E(`__la.selectDish(3);__la.show('adapt');__la.run();__la.S.playing=false;__la.seek(80)`);await a.sleep(2000);await a.shot(P+'run.png');
 await E(`__la.selectDish(1);__la.show('adapt');__la.run();__la.S.playing=false;__la.seek(__la.S.run.T);__la.showResult()`);await a.sleep(1500);await a.shot(P+'loss.png');
 await E(`document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;__la.selectDish(1);__la.show('adapt');__la.setBuild(LookAliveLevels.carry(2));__la.run();__la.S.playing=false;__la.seek(__la.S.run.T);__la.showResult()`);await a.sleep(1500);await a.shot(P+'win.png');};
