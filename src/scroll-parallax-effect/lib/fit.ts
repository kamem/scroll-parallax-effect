import {
  getStyleValues,
  generateStyleValue,
  generateStyleValueString,
  scrollPositionStringToNumber,
  TriggerPosiiton,
  CSSStyleDeclarationName
} from '../utils/util'
import { easing, Easing, EasingFunction } from '../utils/easing'
import ScrollStatus from './scrollStatus'
type Ele = Element | HTMLElement

type MotionStyles =  {
  [key in CSSStyleDeclarationName]?: string | number
}
type MotionValues =  {
  [key in CSSStyleDeclarationName]?: number[]
}
export interface Motion {
  start?: TriggerPosiiton
  end: TriggerPosiiton
  fromStyle?: MotionStyles
  toStyle?: MotionStyles
  easing?: Easing | EasingFunction
  fromStyleValues?: MotionValues
  toStyleValues?: MotionValues
}

export default class Fit {
  el: Ele
  motions: Motion[]
  rangeMotions: Motion[]
  styleValues: MotionStyles

  constructor(el: Ele) {
    this.el = typeof el === 'string' ? document.querySelector(el) : el
    this.styleValues = {}
    this.motions = []
    this.rangeMotions = []
  }
  setMotion(motion: Motion | Motion[]) {
    const m = Array.isArray(motion) ? motion : [motion]
    this.motions = m.map(motion => {
    const fromStyle = this.setStyleValue(motion.fromStyle)
    const toStyle = this.setStyleValue(motion.toStyle)
      return Object.assign({}, motion, {
        easing: motion.easing || 'linear',
        fromStyle,
        toStyle,
      })
    })
  }

  setStyleValues() {
    this.motions = this.motions.map((motion) => Object.assign({}, motion, ({
      fromStyleValues: this.generateStyleValues(motion.fromStyle),
      toStyleValues: this.generateStyleValues(motion.toStyle)
    })))
  }

  generateStyleValues(motionStyles: MotionStyles) {
    let styles: MotionValues = {}
    for (let style in motionStyles) {
      styles[style] = getStyleValues(motionStyles[style].toString())
    }
    return styles
  }

  setStyleValue(motionStyles: MotionStyles) {
    let styles: MotionStyles = {}
    for (let style in motionStyles) {
      styles[style] = generateStyleValue(motionStyles[style])
    }
    return styles
  }

  setRangeMotions(status: ScrollStatus) {
    const range: Motion[] = []
    this.motions.forEach((motion) => {
      const start = scrollPositionStringToNumber(motion.start, status)
      if (start <= status.scrollPosition) range.push(motion)
    })

    this.rangeMotions = range
  }

  setDefaultStyles() {
    let defaultStyles: MotionStyles = {}
    this.motions.forEach(({ fromStyle }) => {
      for (let style in fromStyle) {
        if (defaultStyles[style] === undefined) defaultStyles[style] = fromStyle[style]
      }
    })
    this.styleValues = defaultStyles
  }

  setFromStyle() {
    this.motions.forEach(({ fromStyle, toStyle }, i) => {
      for (let style in toStyle) {
        if (fromStyle === undefined) fromStyle = {}
        if (fromStyle[style] === undefined) {
          fromStyle[style] = this.getLastToStyle(style as CSSStyleDeclarationName, i)
        }
      }
    })
  }
  getLastToStyle(style: CSSStyleDeclarationName, i: number) {
    let fromStyle = ''
    const k = Math.max(i - 1, 0)
    for (let j = k; j >= 0; j--) {
      const motion = this.motions[j]
      if (motion.fromStyle[style] !== undefined) {
        fromStyle = motion.toStyle[style].toString()
        break
      }
    }
    // @ts-ignore
    if (fromStyle === '') fromStyle = document.defaultView.getComputedStyle(typeof this.el === 'string' ? document.querySelector(this.el) : this.el, null)[style]

    return fromStyle
  }

  setStart() {
    this.motions.forEach((motion, i) => {
      if (motion.start === undefined) {
        motion.start = this.getLastStart(i) || 0
      }
    })
  }
  getLastStart(i: number) {
    let start: TriggerPosiiton = ''
    const k = Math.max(i - 1, 0)
    for (let j = k; j >= 0; j--) {
      const motion = this.motions[j]
      if (motion.start !== undefined) {
        start = motion.end
        break
      }
    }

    return start
  }

  generateScrollStyleValues(style: string, fromtStyle: number, toStyle: number, easingName: string | Easing, scrollPercent?: number) {
    const abs = Math.abs(fromtStyle - toStyle)
    const fixAbs = fromtStyle < toStyle ? abs : -abs
    const e = typeof easingName === 'string' ? easing[easingName as (keyof typeof easing)] as EasingFunction : easingName
    let styleValue: number = e(scrollPercent, fromtStyle, fixAbs, 1)
    if (style.indexOf('rgb') >= 0) {
      styleValue = styleValue >= 1 ? Math.floor(styleValue) : styleValue < 0 ? 0 : styleValue;
    }
    return styleValue
  }

  getStyleValues(status: ScrollStatus) {
    const { scrollPosition } = status
    this.rangeMotions.forEach((motion, j) => {
      const start = scrollPositionStringToNumber(motion.start, status)
      const end = scrollPositionStringToNumber(motion.end, status)
      const isInRange = start < scrollPosition && scrollPosition < end
      const range = end - start

      const scrollPercent = isInRange ? (scrollPosition - start) / range :
        (scrollPosition > start) ? 1 :
          (scrollPosition < end) ? 0 : 0

      for (let style in motion.fromStyle) {
        const fromStyleValue = motion.fromStyle[style].toString()
        const fromStyleValues = motion.fromStyleValues[style]
        const toStyleValues = motion.toStyleValues[style]

        const values = []
        for (let i = 0; i < fromStyleValues.length; i++) {
          values[i] = this.generateScrollStyleValues(
            fromStyleValue,
            fromStyleValues[i],
            toStyleValues[i],
            motion.easing,
            scrollPercent
          )
        }

        this.styleValues[style] = generateStyleValueString(fromStyleValue, values)
      }
    })

    return this.styleValues
  }
}