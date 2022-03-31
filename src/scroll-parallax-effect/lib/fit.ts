import {
  getStyleValues,
  generateStyleValue,
  generateStyleValueString,
  scrollPositionStringToNumber
} from '../utils/util'
import { easing } from '../utils/easing'
import type {
  TriggerPosiiton,
  CSSStyleDeclarationName
} from '../utils/util'
import type {  Easing, EasingFunction } from '../utils/easing'
import type ScrollStatus from './scrollStatus'
type Ele = Element | HTMLElement | null

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
  el?: Ele
  motions: Motion[]
  rangeMotions: Motion[]
  styleValues: MotionStyles

  constructor(el?: Ele) {
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

  generateStyleValues(motionStyles?: MotionStyles) {
    let styles: MotionValues = {}
    for (let style in motionStyles) {
      const styleName = style as CSSStyleDeclarationName
      styles[styleName] = getStyleValues(motionStyles[styleName]!.toString())
    }
    return styles
  }

  setStyleValue(motionStyles?: MotionStyles) {
    let styles: MotionStyles = {}
    for (let style in motionStyles) {
      const styleName = style as CSSStyleDeclarationName
      styles[styleName] = generateStyleValue(motionStyles[styleName])
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
        const styleName = style as CSSStyleDeclarationName
        if (defaultStyles[styleName] === undefined) defaultStyles[styleName] = fromStyle[styleName]
      }
    })
    this.styleValues = defaultStyles
  }

  setFromStyle() {
    this.motions.forEach(({ fromStyle, toStyle }, i) => {
      for (let style in toStyle) {
        const styleName = style as CSSStyleDeclarationName
        if (fromStyle === undefined) fromStyle = {}
        if (fromStyle[styleName] === undefined) {
          fromStyle[styleName] = this.getLastToStyle(styleName, i)
        }
      }
    })
  }
  getLastToStyle(style: CSSStyleDeclarationName, i: number) {
    let fromStyle = ''
    const k = Math.max(i - 1, 0)
    for (let j = k; j >= 0; j--) {
      const motion = this.motions[j]
      if (motion.fromStyle![style] !== undefined) {
        fromStyle = motion.toStyle![style]!.toString()
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

  generateScrollStyleValues(style: string, fromtStyle: number, toStyle: number, easingName: string | Easing = 'linear', scrollPercent: number) {
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
        const styleName = style as CSSStyleDeclarationName
        const fromStyleValue = motion.fromStyle[styleName]!.toString()
        const fromStyleValues = motion.fromStyleValues![styleName]
        const toStyleValues = motion.toStyleValues![styleName]

        const values: number[] = []
        for (let i = 0; i < fromStyleValues!.length; i++) {
          values[i] = this.generateScrollStyleValues(
            fromStyleValue,
            fromStyleValues![i],
            toStyleValues![i],
            motion.easing,
            scrollPercent
          )
        }

        this.styleValues[styleName] = generateStyleValueString(fromStyleValue, values)
      }
    })

    return this.styleValues
  }
}