/**
 * @jest-environment jsdom
 */
 document.body.innerHTML = '<div id="test">test</div>'

 import ScrollStatus from '../../../src/scroll-parallax-effect/lib/scrollStatus'
import Timing from '../../../src/scroll-parallax-effect/lib/timing'

const timing = new Timing({
  el: document.querySelector('#test'),
  triggerPosition: 500,
  toggle: [(e, isOver) => [e, isOver, 1], (e, isOver) => [e, isOver, 2]]
})

const status = new ScrollStatus()
status.endScrollPosition = 0
status.stageSize = 250
status.contentSize = 500
status.directionPositionName = 'Top'
status.direction = 'y'

describe('Timing', () => {
  it('timingEvent実行時任意のscrollPositionを超えた場合に関数1番目を実行する', () => {
    status.endScrollPosition = 0
    status.scrollPosition = 0
    expect(timing.timingEvent(status)).toEqual(undefined)
    status.endScrollPosition = 249
    status.scrollPosition = 249
    expect(timing.timingEvent(status)).toEqual(undefined)
    status.endScrollPosition = 250
    status.scrollPosition = 250
    expect(timing.timingEvent(status)).toEqual([ document.querySelector('#test'), true, 1])
  })
  it('一度関数1が実行されたあと、再度scrollPositionが小さくなった場合関数2を実行する', () => {
    status.endScrollPosition = 251
    status.scrollPosition = 251
    expect(timing.timingEvent(status)).toEqual(undefined)
    status.endScrollPosition = 250
    status.scrollPosition = 250
    expect(timing.timingEvent(status)).toEqual(undefined)
    status.endScrollPosition = 0
    status.scrollPosition = 0
    expect(timing.timingEvent(status)).toEqual([ document.querySelector('#test'), false, 2])
  })
})