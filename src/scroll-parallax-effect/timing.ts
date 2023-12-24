import ScrollStatus, { Status } from './lib/scrollStatus';
import Timing from './lib/timing';
import { getElement, setScrollEvents } from './utils/util';

import type { Ele, ScrollEventOpt } from './utils/util';
import type { StatusParams } from './lib/scrollStatus';
import type { TimingOotions, EventFunctionType } from './lib/timing';

const defaultParallaxStatus = Status;
export const updateStatus = (opt: StatusParams) =>
  defaultParallaxStatus.setVal(opt);

export class ParallaxTiming {
  timing: Timing;
  constructor(
    element?: Ele,
    opt?: TimingOotions,
    scrollEventOpt?: ScrollEventOpt
  ) {
    const el = element ? getElement(element) : undefined;
    const timingEvent =
      Object.prototype.toString.call(opt) === '[object Array]'
        ? (opt as [EventFunctionType, EventFunctionType])
        : opt?.start
        ? ([opt?.start, opt?.end] as [EventFunctionType, EventFunctionType])
        : opt?.toggle;
    const c = opt?.className || 'on';
    this.timing = new Timing({
      el: opt?.target ? getElement(opt.target) : el,
      triggerPosition: opt?.triggerPosition,
      toggle:
        timingEvent ||
        ([
          (t, o) => {
            el?.classList.add(c);
          },
          (t, o) => {
            el?.classList.remove(c);
          },
        ] as [EventFunctionType, EventFunctionType]),
    });

    setScrollEvents(
      (status: ScrollStatus) => {
        this.timing.timingEvent(status);

        return this.timing;
      },
      {
        targetPercentage:
          opt?.targetPercentage || scrollEventOpt?.targetPercentage,
        threshold: opt?.threshold || scrollEventOpt?.threshold,
        status: opt?.status || scrollEventOpt?.status,
      }
    );
  }

  getValues() {
    return this.timing;
  }
}

export interface NewParallaxTiming {
  new (
    element: Ele,
    opt?: TimingOotions,
    scrollEventOpt?: ScrollEventOpt
  ): ParallaxTiming;
}
