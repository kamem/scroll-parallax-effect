import ScrollStatus from './lib/scrollStatus';
import * as timing from './timing';
import * as speed from './speed';
import * as fit from './fit';
import type { StatusParams } from './lib/scrollStatus';
export declare const ParallaxTiming: typeof timing.ParallaxTiming;
export declare const ParallaxSpeed: typeof speed.ParallaxSpeed;
export declare const ParallaxFit: typeof fit.ParallaxFit;
export declare const updateStatus: (opt: StatusParams) => ScrollStatus;
