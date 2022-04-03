import Timing from './timing';
import type { Ele, TriggerPosiiton, ScrollEventOpt } from '../utils/util';
import type { Easing, EasingFunction } from '../utils/easing';
export interface SvgTimingOotions extends ScrollEventOpt {
    el?: Element | HTMLElement;
    paths?: NodeListOf<SVGGeometryElement>;
    speed?: number;
    easing?: Easing | EasingFunction;
    triggerPosition?: TriggerPosiiton;
}
export default class SvgTiming {
    el?: Ele;
    timingValue: number;
    maxPathLength: number;
    speed: number;
    easingName: Easing | EasingFunction;
    paths?: NodeListOf<SVGGeometryElement>;
    timing: Timing;
    constructor(opt?: SvgTimingOotions);
    startPathDrawing(isStart?: boolean): void;
}
