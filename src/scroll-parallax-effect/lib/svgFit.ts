import ScrollStatus from './scrollStatus'
import Fit, { Motion } from './fit'
import { _offset, Ele, TriggerPosiiton } from '../utils/util'
import { Easing, EasingFunction } from '../utils/easing'
import { getMaxPathLength } from '../utils/svg'

export interface SvgFitOotions {
  el?: Element | HTMLElement
  paths?: NodeListOf<SVGGeometryElement>
  path?: SVGGeometryElement
  motion: SvgFitMotion | SvgFitMotion[]

  status?: ScrollStatus
  targetPercentage?: number
  triggerPosition?: TriggerPosiiton
}

export interface SvgFitMotion {
  start?: TriggerPosiiton
  end: TriggerPosiiton
  from?: number
  to: number
  easing?: Easing | EasingFunction
}

export default class SvgFit {
  pathLength: number
  path?: SVGGeometryElement
  fit: Fit

  constructor(opt?: SvgFitOotions) {
    this.path = opt?.path
    this.pathLength = getMaxPathLength([this.path])

    this.fit = new Fit(this.path)

    if(Array.isArray(opt.motion)) {
      opt.motion?.forEach((motion) => {
        return this.fit.setMotion(this.generateSvgMotion(motion))
      })
    } else {
      this.fit.setMotion(this.generateSvgMotion(opt.motion))
    }
  }

  generateSvgMotion(motion: SvgFitMotion) {
    const m: Motion  = {
      start: motion.start,
      end: motion.end,
      easing: motion.easing
    }
    const fromPath = motion.from && this.pathLength * (1 - motion.from)
    const toPath = this.pathLength * (1 - motion.to)

    if(fromPath) {
      m.fromStyle = {
        strokeDashoffset: fromPath
      }
    }

    m.toStyle = {
      strokeDashoffset: toPath
    }

    return m
  }
}