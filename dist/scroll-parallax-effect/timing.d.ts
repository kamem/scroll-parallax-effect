import ScrollStatus from './lib/scrollStatus';
import Timing from './lib/timing';
import type { Ele, ScrollEventOpt } from './utils/util';
import type { StatusParams } from './lib/scrollStatus';
import type { TimingOotions } from './lib/timing';
export declare const updateStatus: (opt: StatusParams) => ScrollStatus;
export declare class ParallaxTiming {
    timing: Timing;
    constructor(element?: Ele, opt?: TimingOotions, scrollEventOpt?: ScrollEventOpt);
    getValues(): Timing;
}
export interface NewParallaxTiming {
    new (element: Ele, opt?: TimingOotions, scrollEventOpt?: ScrollEventOpt): ParallaxTiming;
}
