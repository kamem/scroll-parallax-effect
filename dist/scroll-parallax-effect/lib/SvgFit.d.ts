import ScrollStatus from './scrollStatus';
import Fit, { Motion } from './fit';
import { TriggerPosiiton } from '../utils/util';
import { Easing, EasingFunction } from '../utils/easing';
export interface SvgFitOotions {
    el?: Element | HTMLElement;
    paths?: NodeListOf<SVGGeometryElement>;
    path?: SVGGeometryElement;
    motion: SvgFitMotion | SvgFitMotion[];
    status?: ScrollStatus;
    targetPercentage?: number;
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
    path?: SVGGeometryElement;
    fit: Fit;
    constructor(opt?: SvgFitOotions);
    generateSvgMotion(motions: SvgFitMotion[]): Motion[];
}
