import ScrollStatus from './scrollStatus';
import type { Ele, TriggerPosiiton, ScrollEventOpt } from '../utils/util';
import type { Easing, EasingFunction } from '../utils/easing';
export interface SvgSpeedOotions extends ScrollEventOpt {
    el?: Element | HTMLElement;
    paths?: NodeListOf<SVGGeometryElement>;
    speed?: number;
    easing?: Easing | EasingFunction;
    triggerPosition?: TriggerPosiiton;
}
export default class SvgSpeed {
    el?: Ele;
    maxPathLength: number;
    speed: number;
    easingName: Easing | EasingFunction;
    paths?: NodeListOf<SVGGeometryElement>;
    eventScrollElementPosition?: TriggerPosiiton;
    constructor(opt?: SvgSpeedOotions);
    getEventScrollElementPosition(status: ScrollStatus): number;
    scrollSpeed(status: ScrollStatus): void;
}
