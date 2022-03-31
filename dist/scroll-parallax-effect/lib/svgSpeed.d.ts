import ScrollStatus from './scrollStatus';
import type { Ele, TriggerPosiiton } from '../utils/util';
import type { Easing, EasingFunction } from '../utils/easing';
export interface SvgSpeedOotions {
    el?: Element | HTMLElement;
    paths?: NodeListOf<SVGGeometryElement>;
    speed?: number;
    easing?: Easing | EasingFunction;
    status?: ScrollStatus;
    targetPercentage?: number;
    threshold?: number;
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
