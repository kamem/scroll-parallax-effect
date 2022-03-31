import ScrollStatus from './lib/scrollStatus';
import Fit from './lib/fit';
import type { Motion } from './lib/fit';
import type { StatusParams } from './lib/scrollStatus';
import type { Ele, ScrollEventOpt } from './utils/util';
export declare const updateStatus: (opt: StatusParams) => ScrollStatus;
export declare class ParallaxFit {
    fit: Fit;
    constructor(element: Ele, opt: Motion | Motion[], scrollEventOpt?: ScrollEventOpt);
    getValues(): Fit;
}
export interface NewParallaxFit {
    new (element: Ele, opt: Motion | Motion[], scrollEventOpt?: ScrollEventOpt): ParallaxFit;
}
