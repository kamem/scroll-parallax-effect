import {
  scrollPositionStringToNumber,
  _offset,
} from '../utils/util'
import type { Ele, ScrollEventOpt } from '../utils/util'
import type { TriggerPosiiton } from '../utils/util'
import type ScrollStatus from './scrollStatus'

export type EventFunctionType = (target: Ele | undefined, isOver: boolean) => void

export interface TimingOotions extends ScrollEventOpt {
  el?: Ele
  target?: Ele | keyof HTMLElementTagNameMap | null
  className?: string
  triggerPosition?: TriggerPosiiton
  start?: EventFunctionType
  end?: EventFunctionType
  toggle?: [EventFunctionType, EventFunctionType]
}

export default class Timing {
  el?: Ele
  isLineOver: boolean
  eventScrollElementPosition: TriggerPosiiton
  toggle: [EventFunctionType, EventFunctionType]

  constructor(opt: TimingOotions) {
    this.isLineOver = false
    this.el = opt.el
    this.eventScrollElementPosition = opt.triggerPosition
    this.toggle = opt.toggle || [(e, o) => {}, (e, o) => {}]
  }
  getEventScrollElementPosition(status: ScrollStatus) {
    return scrollPositionStringToNumber(this.eventScrollElementPosition ? this.eventScrollElementPosition : _offset(this.el, status.endScrollPosition, status.directionPositionName), status)
  }
  timingEvent(status: ScrollStatus) {
    const isLineOver = status.scrollPosition >= this.getEventScrollElementPosition(status)

    if(isLineOver !== this.isLineOver) {
      this.isLineOver = isLineOver
      const eventSelect = this.toggle[isLineOver ? 0 : 1]
      const element = typeof this.el === 'string' ? document.querySelector<HTMLElement>(this.el) : this.el
      return eventSelect(element, isLineOver)
    }
  }
}