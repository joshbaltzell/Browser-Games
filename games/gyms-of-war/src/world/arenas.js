// The run's arenas by name, in order. Pure data: the level modules only.
import { KIOSK_ROW } from './kioskRow.js';
import { SMOOTHIE_BAR } from './smoothieBar.js';
import { CANCELLATION_DESK } from './cancellationDesk.js';

export const ARENA_LEVELS = Object.freeze({ turnstiles: KIOSK_ROW, smoothie: SMOOTHIE_BAR, desk: CANCELLATION_DESK });
