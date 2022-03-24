import ScrollStatus from './scrollStatus'
import Timing, { EventFunctionType } from './timing'
import { Ele, TriggerPosiiton } from '../utils/util'
import { Easing, EasingFunction } from '../utils/easing'
import { getMaxPathLength, strokeDraw } from '../utils/svg'


export interface SvgTimingOotions {
  el?: Element | HTMLElement
  paths?: NodeListOf<SVGGeometryElement>
  speed?: number
  easing?: Easing | EasingFunction

  status?: ScrollStatus
  targetPercentage?: number
  threshold?: number
  triggerPosition?: TriggerPosiiton
  eventTriggerWindowPercentage?: number
}

export default class SvgTiming {
  el: Ele
  timingValue: number
  maxPathLength: number
  speed: number
  easingName: Easing | EasingFunction
  paths?: NodeListOf<SVGGeometryElement>
  timing: Timing
  eventScrollElementPosition: TriggerPosiiton

  constructor(opt?: SvgTimingOotions) {
    this.el = opt.el
    this.paths = opt?.paths || opt.el?.querySelectorAll('path')
    this.speed = opt?.speed || 2
    this.easingName = opt?.easing || 'linear'
    this.timingValue = 0
    this.eventScrollElementPosition = opt.triggerPosition
    this.maxPathLength = getMaxPathLength(this.paths)

    const toggle = ((el, isLineOver) => {
      this.startPathDrawing(isLineOver)
     }) as EventFunctionType

    this.timing = new Timing({
      el: opt.el,
      triggerPosition: opt.triggerPosition,
      toggle: [toggle , toggle]
    })
  }

  startPathDrawing(isStart?: boolean) {
    setTimeout(() => {
      this.timingValue += this.timing.isLineOver ? this.speed : -this.speed
      
      this.paths.forEach((path) => {
        strokeDraw(this.timingValue, path, this.easingName)
      })

      if(!(this.timingValue > this.maxPathLength || this.timingValue < 0) && this.timing.isLineOver === isStart) {
        this.startPathDrawing(isStart)
      }
    }, 0)
  }
}