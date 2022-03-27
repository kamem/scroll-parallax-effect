
import {
  generateCamelCaseStyle,
  getStyleValues,
  generateStyleValue,
  generateStyleValueString,
  scrollPositionStringToNumber,
} from '../utils/util'
import type ScrollStatus from './scrollStatus'
import type {
  TriggerPosiiton,
  CSSStyleDeclarationName
} from '../utils/util'

type Ele = Element | HTMLElement
type OptionValueNumber = number | number[] | number[][]
export interface SpeedOptions {
  status?: ScrollStatus
  el?: Ele
  targetPercentage?: number
  threshold?: number
  contentScrollPosition?: TriggerPosiiton
  style?: (CSSStyleDeclarationName) | (CSSStyleDeclarationName)[]
  styles?: (CSSStyleDeclarationName) | (CSSStyleDeclarationName)[]
  speed?: OptionValueNumber
  min?: OptionValueNumber
  max?: OptionValueNumber
  contentScrollPositionStyleValue?: (number | string) | (number | string)[]
  contentStyleValue?: (number | string) | (number | string)[]
}

interface Style {
  name: CSSStyleDeclarationName
  speed: OptionValueNumber
  min: OptionValueNumber
  max: OptionValueNumber
  contentStyleValue: string
  styleValues: number[]
}

export default class Speed {
  el?: Ele
  styles: Style[]
  speeds?: number[] | number[][]
  mins?: number[] | number[][]
  maxs?: number[] | number[][]
  contentScrollPositionStyleValues: (number | string)[]
  contentScrollPosition: TriggerPosiiton
  
  constructor(ops: SpeedOptions) {
    this.el = ops.el
    this.speeds = typeof ops.speed === 'object' ? ops.speed : ops.speed ? [ops.speed] : []
    this.mins = typeof ops.min === 'object' ? ops.min : ops.min ? [ops.min] : []
    this.maxs = typeof ops.max === 'object' ? ops.max : ops.max ? [ops.max] : []
    this.contentScrollPositionStyleValues = typeof ops.contentScrollPositionStyleValue === 'object' ? ops.contentScrollPositionStyleValue : ops.contentScrollPositionStyleValue ? [ops.contentScrollPositionStyleValue] : []
    this.contentScrollPosition = ops.contentScrollPosition || 0
    this.styles = this.generateStyles((typeof ops.style === 'object' ? ops.style : ops.style ? [ops.style] : []))
  }
  generateStyles(styles: (CSSStyleDeclarationName)[]) {
    return styles.map((name, i: number) => {
      const contentScrollPositionStyleValues = this.contentScrollPositionStyleValues[i] || (this.el ? document.defaultView?.getComputedStyle(this.el, null)[generateCamelCaseStyle(name)] as string | number : 0 )
      const styleValue = generateStyleValue(contentScrollPositionStyleValues)
      return {
        name: name as CSSStyleDeclarationName,
        speed: this.speeds![i] || this.speeds![0],
        min: this.mins![i] || this.mins![0],
        max: this.maxs![i] || this.maxs![0],
        contentStyleValue: styleValue,
        styleValues: getStyleValues(styleValue)
      }
    })
  }
  generateValues(status: ScrollStatus, style: Style) {
    return style.styleValues.map((value, j) => {
      let _speed = (typeof style.speed === 'object' ? style.speed[j] : style.speed)
      _speed = typeof _speed === 'number' ? _speed : 2
      let newValue = -(-status.scrollPosition * _speed + scrollPositionStringToNumber(this.contentScrollPosition, status) * _speed) + value
     
      const _min = (typeof style.min === 'object' ? style.min && style.min[j] : style.min)
      const _max = (typeof style.max === 'object' ? style.max && style.max[j] : style.max)
      newValue = Math.max(newValue, typeof _min === 'number' ? _min : -99999)
      newValue = Math.min(newValue, typeof _max === 'number' ? _max : 99999)

      if(style.contentStyleValue.indexOf('rgb') >= 0) {
        newValue = Math.max(typeof newValue === 'string' ? parseFloat(newValue) : newValue, 0)
      }
      return newValue
    })
  }
  getStyleValues(status: ScrollStatus) {
    return this.styles.reduce((result, style) => {
      return Object.assign(
        {},
        result,
        {
          [style.name]: generateStyleValueString(
            style.contentStyleValue,
            this.generateValues(
              status,
              style
            )
          )
        }
      )
    }, {})
  }
}