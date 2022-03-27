import ScrollStatus, { Status } from './lib/scrollStatus'
import Fit from './lib/fit'
import { getElement, setScrollEvents } from './utils/util'

import type { Motion } from './lib/fit'
import type { StatusParams } from './lib/scrollStatus'
import type { Ele, ScrollEventOpt } from './utils/util'


const defaultParallaxStatus = Status
export const updateStatus = (opt: StatusParams) => defaultParallaxStatus.setVal(opt)

export class ParallaxFit {
  fit: Fit
  constructor(element: Ele, opt: Motion | Motion[], scrollEventOpt?: ScrollEventOpt) {
    const el = getElement(element)
    const fit = new Fit(el)
    this.fit = fit

    fit.setMotion(opt)

    fit.setFromStyle()
    fit.setStyleValues()
    fit.setStart()

    setScrollEvents((status) => {
      fit.setRangeMotions(status)
      fit.setDefaultStyles()
      Object.assign(el.style, fit.getStyleValues(status));
      return this.fit
    }, {
      targetPercentage: scrollEventOpt?.targetPercentage,
      threshold: scrollEventOpt?.threshold,
      status: scrollEventOpt?.status
    })
  }

  getValues() {
    return this.fit
  }
}

export interface NewParallaxFit {
  new (element: Ele, opt: Motion | Motion[], scrollEventOpt?: ScrollEventOpt): ParallaxFit;
}