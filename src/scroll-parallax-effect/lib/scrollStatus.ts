const requestAnimationFrame = window.requestAnimationFrame

type Ele = Element | HTMLElement
type Direction = 'y' | 'x'
type Stage = typeof globalThis | Window | Ele
export type DirectionPositionName = 'Top' | 'Left'
export type StageSizeName = 'Height' | 'Width'
type ScrollName = 'pageYOffset' | 'pageXOffset' |'scrollTop' | 'scrollLeft'

export interface StatusParams {
  stage?: Stage
  direction?: Direction
  functions?: ([(status: ScrollStatus) => void, ScrollPosition])[]
  targetPercentage?: number
  threshold?: number
  updateFunction?: (status: ScrollStatus) => void
}

export default class ScrollStatus {
  stage?: Stage
  direction?: Direction
  functions?: ([(status: ScrollStatus) => void, ScrollPosition])[]
  targetPercentage?: number
  scrollPosition?: number
  endScrollPosition?: number
  threshold?: number
  ScrollPosition?: ScrollPosition
  updateFunction?: (status: ScrollStatus) => void
  stageSize?: number
  contentSize?: number
  stageSizeName?: StageSizeName
  directionPositionName?: DirectionPositionName
  
  constructor() {
    this.stage = global
    this.direction = 'y'
    this.functions = []
    this.targetPercentage = 0.2
    this.setDirectionInfo()
    this.ScrollPosition = new ScrollPosition(this)
    this.scrollPosition = this.ScrollPosition.generateScrollPosition()
    this.endScrollPosition = this.ScrollPosition.endScrollPosition
    this.scrollEventUpdate()
  }
  setVal(opt: StatusParams) {
    this.stage = opt.stage ? opt.stage : global
    this.direction = opt.direction || this.direction
    this.targetPercentage = opt.targetPercentage || 0.2
    this.updateFunction = opt.updateFunction
    this.threshold = opt.threshold || 0
    this.ScrollPosition = new ScrollPosition(this)
    this.scrollPosition = this.ScrollPosition.generateScrollPosition()
    this.endScrollPosition = this.ScrollPosition.endScrollPosition
    this.setDirectionInfo()
    return this
  }
  scrollEventUpdate() {
    this.update()

    if(this.updateFunction) {
      this.updateFunction(this)
    } else {
      this.functions.forEach(([func, scrollPosition]) => {
        func(
          scrollPosition ?
            Object.assign({}, this, { scrollPosition: scrollPosition.generateScrollPosition() }) :
            this
        )
      })
    }

    requestAnimationFrame(this.scrollEventUpdate.bind(this))
  }
  update() {
    this.scrollPosition = this.ScrollPosition.generateScrollPosition()
    
    this.endScrollPosition = this.ScrollPosition.endScrollPosition

    // @ts-ignore
    this.stageSize = this.stage[`inner${this.stageSizeName}`] || this.stage[`client${this.stageSizeName}`]
    // @ts-ignore
    this.contentSize = this.stage[`scroll${this.stageSizeName}`] || document.documentElement[`scroll${this.stageSizeName}`]
  }

  setDirectionInfo() {
    this.directionPositionName = this.direction === 'y' ? 'Top' : 'Left' 
    this.stageSizeName = this.direction === 'y' ? 'Height' : 'Width' 
  }
}

export class ScrollPosition {
  stage: Stage
  targetPercentage?: number
  threshold?: number
  stageSize: number
  direction: Direction

  scrollPosition: number
  endScrollPosition: number
  scrollName: ScrollName

  constructor(opt: ScrollStatus) {
    this.stage = opt.stage
    this.direction = opt.direction
    this.stageSize = opt.stageSize
    this.targetPercentage = opt.targetPercentage || 0.2
    this.threshold = opt.threshold || 0
    this.scrollName = this.stage === window ? `page${this.direction.toUpperCase() as 'Y' | 'X'}Offset` : `scroll${opt.directionPositionName}`
    const scrollPosition = this.getScrollPosition()
    this.scrollPosition = scrollPosition // 実際にスクロール
    this.endScrollPosition = scrollPosition // 最後スクロールが止まる位置
  }

  getScrollPosition() {
    const stageThreshold = (this.stageSize || 0) * (this.threshold || 0)
    // @ts-ignore
    return this.stage[this.scrollName] as number + stageThreshold
  }
  generateScrollPosition() {
    const scrollPosition = this.getScrollPosition()
    const offset = (scrollPosition - this.scrollPosition) * this.targetPercentage
    this.scrollPosition += offset
    this.endScrollPosition = scrollPosition

    return Math.round(this.scrollPosition * 100) / 100
  }
}

export const Status = new ScrollStatus()