/**
 * @jest-environment jsdom
 */

 import ScrollStatus from '../../../src/scroll-parallax-effect/lib/scrollStatus'
import Fit from '../../../src/scroll-parallax-effect/lib/fit'
document.body.innerHTML = '<div id="test">test</div>'

const fit = new Fit(document.querySelector('#test'))

describe('Fit', () => {
  it('setMotionを実行した場合motionsに入れる、easingがない場合はdefaultの値（linearを入れる）', () => {
		fit.setMotion({
			start: 0,
			end: 1000,
			fromStyle: {
        top: '100px'
      },
			toStyle: {
        top: '200px'
      }
		})

    expect(fit.motions).toEqual([{
      easing: 'linear',
			start: 0,
			end: 1000,
			fromStyle: {
        top: '100px'
      },
			toStyle: {
        top: '200px'
      }
		}])
  })

  it('配列で入れた場合は配列でmotionsに入る、【setFromStyle実行時】fromStyleを省略している場合は最後のtoStyleの値を入れる', () => {
    fit.setMotion([{
			start: 0,
			end: 1000,
			fromStyle: {
        top: '100px'
      },
			toStyle: {
        top: '200px'
      }
		},{
			end: 1200,
			toStyle: {
        top: '400px'
      }
		}])

    fit.setFromStyle()

    expect(fit.motions).toEqual([{
      easing: 'linear',
			start: 0,
			end: 1000,
			fromStyle: {
        top: '100px'
      },
			toStyle: {
        top: '200px'
      }
		},
    {
      easing: 'linear',
			end: 1200,
			fromStyle: {
        top: '200px'
      },
			toStyle: {
        top: '400px'
      }
		}])
  })


  it('【setStyleValues実行時】StyleValuesで数値の部分を取り出した配列として入れる', () => {
    expect(fit.motions).toEqual([{
      easing: 'linear',
			start: 0,
			end: 1000,
			fromStyle: {
        top: '100px'
      },
			toStyle: {
        top: '200px'
      }
		},
    {
      easing: 'linear',
			end: 1200,
			fromStyle: {
        top: '200px'
      },
			toStyle: {
        top: '400px'
      }
		}])
    fit.setStyleValues()
    expect(fit.motions).toEqual([{
      easing: 'linear',
			start: 0,
			end: 1000,
			fromStyle: {
        top: '100px'
      },
			toStyle: {
        top: '200px'
      },
      fromStyleValues: {
        top: [100]
      },
      toStyleValues: {
        top: [200]
      },
		},
    {
      easing: 'linear',
			end: 1200,
			fromStyle: {
        top: '200px'
      },
			toStyle: {
        top: '400px'
      },
      fromStyleValues: {
        top: [200]
      },
      toStyleValues: {
        top: [400]
      },
		}])
  })
})