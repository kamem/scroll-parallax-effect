import ScrollStatus from './scrollStatus'
import { scrollPositionStringToNumber, _offset } from '../utils/util'
import { getMaxPathLength, strokeDraw } from '../utils/svg'
import type { Ele, TriggerPosiiton, ScrollEventOpt } from '../utils/util'
import type { Easing, EasingFunction } from '../utils/easing'

export interface SvgSpeedOotions extends ScrollEventOpt {
  el?: Element | HTMLElement
  paths?: NodeListOf<SVGGeometryElement>
  speed?: number
  easing?: Easing | EasingFunction

  triggerPosition?: TriggerPosiiton
}

export default class SvgSpeed {
  el?: Ele
  maxPathLength: number
  speed: number
  easingName: Easing | EasingFunction
  paths?: NodeListOf<SVGGeometryElement>
  eventScrollElementPosition?: TriggerPosiiton

  constructor(opt?: SvgSpeedOotions) {
    this.el = opt?.el
    this.paths = opt?.paths || opt?.el?.querySelectorAll('path')
    this.speed = opt?.speed || 2
    this.easingName = opt?.easing || 'linear'
    this.eventScrollElementPosition = opt?.triggerPosition
    this.maxPathLength = getMaxPathLength(this.paths)
  }

  getEventScrollElementPosition(status: ScrollStatus) {
    return scrollPositionStringToNumber(this.eventScrollElementPosition ? this.eventScrollElementPosition : _offset(this.el, status.endScrollPosition, status.directionPositionName), status)
  }

  scrollSpeed(status: ScrollStatus) {
    const value = -(-status.scrollPosition / this.speed + this.getEventScrollElementPosition(status) / this.speed) + this.maxPathLength
    this.paths?.forEach((path) => {
      strokeDraw(value, path, this.easingName)
    })
  }
}