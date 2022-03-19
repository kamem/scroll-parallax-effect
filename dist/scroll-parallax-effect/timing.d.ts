import ScrollStatus, { StatusParams } from './lib/scrollStatus';
import Timing, { TimingOotions } from './lib/timing';
import { Ele, ScrollEventOpt } from './utils/util';
export declare const updateStatus: (opt: StatusParams) => ScrollStatus;
export declare class ParallaxTiming {
    timing: Timing;
    constructor(element: Ele, opt?: TimingOotions, scrollEventOpt?: ScrollEventOpt);
    getValues(): Timing;
}
export interface NewParallaxTiming {
    new (element: Ele, opt?: TimingOotions, scrollEventOpt?: ScrollEventOpt): ParallaxTiming;
}
