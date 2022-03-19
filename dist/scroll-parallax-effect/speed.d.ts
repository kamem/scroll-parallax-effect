import ScrollStatus, { StatusParams } from './lib/scrollStatus';
import Speed, { SpeedOptions } from './lib/speed';
import { Ele, ScrollEventOpt } from './utils/util';
export declare const updateStatus: (opt: StatusParams) => ScrollStatus;
export declare class ParallaxSpeed {
    speed: Speed;
    constructor(element: Ele, opt?: SpeedOptions, scrollEventOpt?: ScrollEventOpt);
    getValues(): Speed;
}
export interface NewParallaxSpeed {
    new (element: Ele, opt?: SpeedOptions, scrollEventOpt?: ScrollEventOpt): ParallaxSpeed;
}
