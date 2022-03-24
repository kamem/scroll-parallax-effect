/**
 * @jest-environment jsdom
 */
 document.body.innerHTML = '<div id="test">test</div>'

 import ScrollStatus from '../../../src/scroll-parallax-effect/lib/scrollStatus'
import Speed from '../../../src/scroll-parallax-effect/lib/speed'


const status = new ScrollStatus()
status.scrollPosition = 0
status.endScrollPosition = 0
status.stageSize = 250
status.contentSize = 500
status.directionPositionName = 'Top'
status.direction = 'y'

describe('Speed', () => {
  it('【backgroundColor】3つの値がそれぞれ割合に合わせて変更される', () => {
    status.scrollPosition = 100
    status.endScrollPosition = 100

    const speed = new Speed({
      el: document.querySelector('#test'),
      contentScrollPosition: 0,
      contentScrollPositionStyleValue: 'rgb(0,0,0)',
      style: ['backgroundColor'],
      speed: [[1, 0.5, 0.3]],
      min: [[30, 30, 30]],
    })
    expect(speed.getStyleValues(status)).toEqual({backgroundColor: 'rgb(100,50,30)'})
  })
  it('【top】speedに応じて値が変更されるべき（(-[status.scrollPosition] * speed) + デフォルトの値[contentScrollPositionStyleValue] + スクロール量[status.scrollPosition] * speed）', () => {
    status.scrollPosition = 200
    status.endScrollPosition = 200
    const speed = new Speed({
      el: document.querySelector('#test'),
      contentScrollPosition: 0,
      contentScrollPositionStyleValue: '100px',
      style: 'top',
      speed: 2,
    })

    expect(speed.getStyleValues(status)).toEqual({top: '500px'})

    speed.contentScrollPosition = 100
    status.scrollPosition = 100
    status.endScrollPosition = 100
    expect(speed.getStyleValues(status)).toEqual({top: '100px'})
  })
})