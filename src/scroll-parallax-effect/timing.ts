import ScrollStatus, { Status, StatusParams } from './lib/scrollStatus'
import Timing, { TimingOotions, EventFunctionType } from './lib/timing'
import { getElement, setScrollEvents, Ele, ScrollEventOpt } from './utils/util'

const defaultParallaxStatus = Status
export const updateStatus = (opt: StatusParams) => defaultParallaxStatus.setVal(opt)

export class ParallaxTiming {
  timing: Timing
  constructor(element: Ele, opt?: TimingOotions, scrollEventOpt?: ScrollEventOpt) {
    const el = getElement(element)
    const timingEvent = Object.prototype.toString.call(opt) === '[object Array]' ? opt as [EventFunctionType, EventFunctionType] : (opt?.start ? [opt?.start, opt?.end] as [EventFunctionType, EventFunctionType] : opt?.toggle)
    const c = opt?.className || 'on'
    this.timing = new Timing(
      {
        el: opt?.target ? getElement(opt.target) :  el,
        triggerPosition: opt?.triggerPosition,
        toggle: timingEvent || [
          (t, o) => { el.classList.add(c) },
          (t, o) => { el.classList.remove(c) },
        ] as [EventFunctionType, EventFunctionType]
      }
    )

    setScrollEvents((status: ScrollStatus) => {
      this.timing.timingEvent(status)
    }, {
      targetPercentage: opt?.targetPercentage || scrollEventOpt?.targetPercentage,
      threshold: opt?.threshold || scrollEventOpt?.threshold,
      status: opt?.status || scrollEventOpt?.status
    })
  }

  getValues() {
    return this.timing
  }
}

export interface NewParallaxTiming {
  new (element: Ele, opt?: TimingOotions, scrollEventOpt?: ScrollEventOpt): ParallaxTiming;
}