import ScrollStatus, { Status, StatusParams } from './lib/scrollStatus'
import Speed, { SpeedOptions } from './lib/speed'
import { getElement, setScrollEvents, Ele, ScrollEventOpt } from './utils/util'

const defaultParallaxStatus = Status
export const updateStatus = (opt: StatusParams) => defaultParallaxStatus.setVal(opt)

export class ParallaxSpeed {
  speed: Speed
  constructor(element: Ele, opt?: SpeedOptions, scrollEventOpt?: ScrollEventOpt) {
    const el = getElement(element)
    
    const s = new Speed(
      {
        el,
        style: opt?.style || opt?.styles,
        speed: opt?.speed,
        min: opt?.min,
        max: opt?.max,
        contentScrollPosition: opt?.contentScrollPosition === 0 || opt?.contentScrollPosition ? opt?.contentScrollPosition : el,
        contentScrollPositionStyleValue: opt?.contentScrollPositionStyleValue
      },
    )

    this.speed = s

    setScrollEvents((status: ScrollStatus) => {
      Object.assign(el.style, s.getStyleValues(status));
      return this.speed
    }, {
      targetPercentage: opt?.targetPercentage || scrollEventOpt?.targetPercentage,
      threshold: opt?.threshold || scrollEventOpt?.threshold,
      status: opt?.status || scrollEventOpt?.status
    })
  }

  getValues() {
    return this.speed
  }
}

export interface NewParallaxSpeed {
  new (element: Ele, opt?: SpeedOptions, scrollEventOpt?: ScrollEventOpt): ParallaxSpeed;
}