import Fit, { Motion } from './fit';
import type { TriggerPosiiton, ScrollEventOpt } from '../utils/util';
import type { Easing, EasingFunction } from '../utils/easing';
export interface SvgFitOotions extends ScrollEventOpt {
    el?: Element | HTMLElement;
    paths?: NodeListOf<SVGGeometryElement>;
    path: SVGGeometryElement;
    motion: SvgFitMotion | SvgFitMotion[];
    triggerPosition?: TriggerPosiiton;
}
export interface SvgFitMotion {
    start?: TriggerPosiiton;
    end: TriggerPosiiton;
    from?: number;
    to: number;
    easing?: Easing | EasingFunction;
}
export default class SvgFit {
    pathLength: number;
    path: SVGGeometryElement;
    fit: Fit;
    constructor(opt: SvgFitOotions);
    generateSvgMotion(motions: SvgFitMotion[]): Motion[];
}
