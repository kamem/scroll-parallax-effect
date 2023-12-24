import ScrollStatus, { Status } from './lib/scrollStatus';
import * as timing from './timing';
import * as speed from './speed';
import * as fit from './fit';

import type { StatusParams } from './lib/scrollStatus';

const defaultParallaxStatus = Status;

export const ParallaxTiming = timing.ParallaxTiming;
export const ParallaxSpeed = speed.ParallaxSpeed;
export const ParallaxFit = fit.ParallaxFit;

export const updateStatus = (opt: StatusParams) =>
  defaultParallaxStatus.setVal(opt);

interface NewScrollStatus {
  new (opt?: ScrollStatus): ScrollStatus;
}
interface Window {
  Parallax: {
    Timing: timing.NewParallaxTiming;
    Speed: speed.NewParallaxSpeed;
    Fit: fit.NewParallaxFit;
    updateStatus: (opt: ScrollStatus) => void;
    status: ScrollStatus;
    ScrollStatus: NewScrollStatus;
  };
}
declare var window: Window;

window.Parallax = {
  Timing: ParallaxTiming,
  Speed: ParallaxSpeed,
  Fit: ParallaxFit,
  updateStatus,
  status: defaultParallaxStatus,
  ScrollStatus,
};
