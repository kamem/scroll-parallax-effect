import ScrollStatus, { Status, StatusParams } from './lib/scrollStatus'
import SvgTiming, { SvgTimingOotions } from './lib/svgTiming'
import SvgSpeed, { SvgSpeedOotions } from './lib/svgSpeed'
import SvgFit, { SvgFitOotions } from './lib/SvgFit'
import { getElement, setScrollEvents, Ele, ScrollEventOpt } from './utils/util'

const defaultParallaxStatus = Status
export const updateStatus = (opt: StatusParams) => defaultParallaxStatus.setVal(opt)

export class SvgParallaxFit {
  svgFits: SvgFit[]
  constructor(element: Ele, opt: Omit<SvgFitOotions, 'path'>, scrollEventOpt?: ScrollEventOpt) {
    const el = getElement(element)
    const paths = Array.from(opt.paths || el?.querySelectorAll('path'))

    this.svgFits = paths.map((path) => {
      const svgFit = new SvgFit(
        {
          path,
          triggerPosition: opt.triggerPosition,
          motion: opt.motion,
        }
      )
      svgFit.fit.setFromStyle()
      svgFit.fit.setStyleValues()
      svgFit.fit.setStart()

      return svgFit
    })

    setScrollEvents((status) => {
      this.svgFits.forEach((svgFit) => {
        svgFit.fit.setRangeMotions(status)
        svgFit.fit.setDefaultStyles()
        Object.assign(svgFit.path.style, svgFit.fit.getStyleValues(status))
      })

    }, {
      targetPercentage: scrollEventOpt?.targetPercentage,
      threshold: scrollEventOpt?.threshold,
      status: scrollEventOpt?.status
    })
  }

  getValues() {
    return this.svgFits
  }
}

export class SvgParallaxTiming {
  svgTiming: SvgTiming
  constructor(element: Ele, opt?: SvgTimingOotions, scrollEventOpt?: ScrollEventOpt) {
    const el = getElement(element)
    this.svgTiming = new SvgTiming(
      {
        el,
        speed: opt?.speed,
        easing: opt?.easing,
        paths: opt?.paths,
        triggerPosition: opt?.triggerPosition,
        eventTriggerWindowPercentage: opt?.eventTriggerWindowPercentage
      }
    )

    setScrollEvents((status: ScrollStatus) => {
      this.svgTiming.timing.timingEvent(status)
    }, {
      targetPercentage: opt?.targetPercentage || scrollEventOpt?.targetPercentage,
      threshold: opt?.threshold || scrollEventOpt?.threshold,
      status: opt?.status || scrollEventOpt?.status
    })
  }

  getValues() {
    return this.svgTiming
  }
}

export class SvgParallaxSpeed {
  svgSpeed: SvgSpeed
  constructor(element: Ele, opt?: SvgSpeedOotions, scrollEventOpt?: ScrollEventOpt) {
    const el = getElement(element)
    this.svgSpeed = new SvgSpeed(
      {
        el,
        speed: opt?.speed,
        easing: opt?.easing,
        paths: opt?.paths,
        triggerPosition: opt?.triggerPosition,
      }
    )

    setScrollEvents((status: ScrollStatus) => {
      this.svgSpeed.scrollSpeed(status)
    }, {
      targetPercentage: opt?.targetPercentage || scrollEventOpt?.targetPercentage,
      threshold: opt?.threshold || scrollEventOpt?.threshold,
      status: opt?.status || scrollEventOpt?.status
    })
  }

  getValues() {
    return this.svgSpeed
  }
}

export interface NewSvgParallaxTiming {
  new (element: Ele, opt?: SvgTimingOotions, scrollEventOpt?: ScrollEventOpt): SvgParallaxTiming;
}
export interface NewSvgParallaxSpeed {
  new (element: Ele, opt?: SvgSpeedOotions, scrollEventOpt?: ScrollEventOpt): SvgParallaxSpeed;
}
interface NewScrollStatus {
  new (opt?: ScrollStatus): ScrollStatus;
}
interface Window {
  Parallax: {
    SvgTiming: NewSvgParallaxTiming,
    SvgFit: NewSvgParallaxSpeed,
    updateStatus: (opt: ScrollStatus) => void,
    status: ScrollStatus,
    ScrollStatus: NewScrollStatus
  }
}
declare var window: Window

window.Parallax = {
  SvgTiming: SvgParallaxTiming,
  SvgFit: SvgParallaxSpeed,
  updateStatus,
  status: defaultParallaxStatus,
  ScrollStatus
}