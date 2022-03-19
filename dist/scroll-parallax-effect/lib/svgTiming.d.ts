import ScrollStatus from './scrollStatus';
import Timing from './timing';
import { Ele, TriggerPosiiton } from '../utils/util';
import { Easing, EasingFunction } from '../utils/easing';
export interface SvgTimingOotions {
    el?: Element | HTMLElement;
    paths?: NodeListOf<SVGGeometryElement>;
    speed?: number;
    easing?: Easing | EasingFunction;
    status?: ScrollStatus;
    targetPercentage?: number;
    threshold?: number;
    triggerPosition?: TriggerPosiiton;
    eventTriggerWindowPercentage?: number;
}
export default class SvgTiming {
    el: Ele;
    timingValue: number;
    maxPathLength: number;
    speed: number;
    easingName: Easing | EasingFunction;
    paths?: NodeListOf<SVGGeometryElement>;
    timing: Timing;
    eventScrollElementPosition: TriggerPosiiton;
    constructor(opt?: SvgTimingOotions);
    startPathDrawing(isStart?: boolean): void;
}
