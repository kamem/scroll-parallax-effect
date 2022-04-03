import ScrollStatus from './scrollStatus'
import Timing, { EventFunctionType } from './timing'
import { getMaxPathLength, strokeDraw } from '../utils/svg'
import type { Ele, TriggerPosiiton, ScrollEventOpt } from '../utils/util'
import type { Easing, EasingFunction } from '../utils/easing'


export interface SvgTimingOotions extends ScrollEventOpt {
  el?: Element | HTMLElement
  paths?: NodeListOf<SVGGeometryElement>
  speed?: number
  easing?: Easing | EasingFunction
  triggerPosition?: TriggerPosiiton
}

export default class SvgTiming {
  el?: Ele
  timingValue: number
  maxPathLength: number
  speed: number
  easingName: Easing | EasingFunction
  paths?: NodeListOf<SVGGeometryElement>
  timing: Timing

  constructor(opt?: SvgTimingOotions) {
    this.el = opt?.el
    this.paths = opt?.paths || opt?.el ? opt?.el?.querySelectorAll('path') : undefined
    this.speed = opt?.speed || 2
    this.easingName = opt?.easing || 'linear'
    this.timingValue = 0
    this.maxPathLength = getMaxPathLength(this.paths)

    const toggle = ((el, isLineOver) => {
      this.startPathDrawing(isLineOver)
     }) as EventFunctionType

    this.timing = new Timing({
      el: opt?.el,
      triggerPosition: opt?.triggerPosition,
      toggle: [toggle , toggle]
    })
  }

  startPathDrawing(isStart?: boolean) {
    setTimeout(() => {
      this.timingValue += this.timing.isLineOver ? this.speed : -this.speed
      
      this.paths?.forEach((path) => {
        strokeDraw(this.timingValue, path, this.easingName)
      })

      if(!(this.timingValue > this.maxPathLength || this.timingValue < 0) && this.timing.isLineOver === isStart) {
        this.startPathDrawing(isStart)
      }
    }, 0)
  }
}