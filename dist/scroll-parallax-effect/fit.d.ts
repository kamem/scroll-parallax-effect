import ScrollStatus, { StatusParams } from './lib/scrollStatus';
import Fit, { Motion } from './lib/fit';
import { Ele, ScrollEventOpt } from './utils/util';
export declare const updateStatus: (opt: StatusParams) => ScrollStatus;
export declare class ParallaxFit {
    fit: Fit;
    constructor(element: Ele, opt: Motion | Motion[], scrollEventOpt?: ScrollEventOpt);
    getValues(): Fit;
}
export interface NewParallaxFit {
    new (element: Ele, opt: Motion | Motion[], scrollEventOpt?: ScrollEventOpt): ParallaxFit;
}
