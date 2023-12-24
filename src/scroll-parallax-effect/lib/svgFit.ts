import Fit, { Motion } from './fit';
import { _offset } from '../utils/util';
import { getMaxPathLength } from '../utils/svg';
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

  constructor(opt: SvgFitOotions) {
    this.path = opt.path;
    this.pathLength = getMaxPathLength(this.path ? [this.path] : undefined);

    this.fit = new Fit(this.path);

    const motion = opt.motion;
    if (motion) {
      this.fit.setMotion(
        this.generateSvgMotion(Array.isArray(motion) ? motion : [motion])
      );
    }
  }

  generateSvgMotion(motions: SvgFitMotion[]) {
    return motions.map((motion) => {
      const m: Motion = {
        start: motion.start,
        end: motion.end,
        easing: motion.easing,
      };
      const fromPath = motion.from && this.pathLength * (1 - motion.from);
      const toPath = this.pathLength * (1 - motion.to);

      if (fromPath) {
        m.fromStyle = {
          strokeDashoffset: fromPath,
        };
      }

      m.toStyle = {
        strokeDashoffset: toPath,
      };

      return m;
    });
  }
}
