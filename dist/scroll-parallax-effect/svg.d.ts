import ScrollStatus, { StatusParams } from './lib/scrollStatus';
import SvgTiming, { SvgTimingOotions } from './lib/svgTiming';
import SvgSpeed, { SvgSpeedOotions } from './lib/svgSpeed';
import SvgFit, { SvgFitOotions } from './lib/svgFit';
import { Ele, ScrollEventOpt } from './utils/util';
export declare const updateStatus: (opt: StatusParams) => ScrollStatus;
export declare class SvgParallaxFit {
    svgFits: SvgFit[];
    constructor(element: Ele, opt: Omit<SvgFitOotions, 'path'>, scrollEventOpt?: ScrollEventOpt);
    getValues(): SvgFit[];
}
export declare class SvgParallaxTiming {
    svgTiming: SvgTiming;
    constructor(element: Ele, opt?: SvgTimingOotions, scrollEventOpt?: ScrollEventOpt);
    getValues(): SvgTiming;
}
export declare class SvgParallaxSpeed {
    svgSpeed: SvgSpeed;
    constructor(element: Ele, opt?: SvgSpeedOotions, scrollEventOpt?: ScrollEventOpt);
    getValues(): SvgSpeed;
}
export interface NewSvgParallaxTiming {
    new (element: Ele, opt?: SvgTimingOotions, scrollEventOpt?: ScrollEventOpt): SvgParallaxTiming;
}
export interface NewSvgParallaxSpeed {
    new (element: Ele, opt?: SvgSpeedOotions, scrollEventOpt?: ScrollEventOpt): SvgParallaxSpeed;
}
export interface NewSvgParallaxFit {
    new (element: Ele, opt: Omit<SvgFitOotions, "path">, scrollEventOpt?: ScrollEventOpt): SvgParallaxFit;
}
