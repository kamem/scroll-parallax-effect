import {
  scrollPositionStringToNumber,
  _offset,
  TriggerPosiiton,
} from '../utils/util'

import ScrollStatus from './scrollStatus'

export type EventFunctionType = (target: Ele, isOver: boolean) => {}

type Ele = Element | HTMLElement
export interface TimingOotions {
  el?: Ele
  target?: Ele
  status?: ScrollStatus
  className?: string
  triggerPosition?: TriggerPosiiton
  targetPercentage?: number
  threshold?: number
  start?: EventFunctionType
  end?: EventFunctionType
  toggle?: [EventFunctionType, EventFunctionType]
}

export default class Timing {
  el: Ele
  isLineOver: boolean
  triggerPosition: number
  eventScrollElementPosition: TriggerPosiiton
  toggle: [EventFunctionType, EventFunctionType]

  constructor(opt: TimingOotions) {
    this.isLineOver = false
    this.el = opt.el
    this.eventScrollElementPosition = opt.triggerPosition
    this.toggle = opt.toggle
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