// @ts-nocheck
import _Vue, { reactive } from 'vue'

import ScrollStatus, { Status, StatusParams } from './lib/scrollStatus'
import * as p from './index'

const generateScrollStatusValues = (Vue, opt: any = {}, $scrollStatus) => {
  if(opt.name) {
    const scrollObj = {
      scrollPosition: Status.scrollPosition,
      contentSize: Status.contentSize,
      values: {}
    }
    $scrollStatus[opt.name] = Vue.observable ? Vue.observable(scrollObj) : reactive(scrollObj)
  }

  const scrollStatus = opt.name ? $scrollStatus[opt.name] : $scrollStatus
  
  return {
    ...opt, updateFunction: (status) => {
      scrollStatus.scrollPosition = status.scrollPosition
      scrollStatus.contentSize = status.contentSize

      scrollStatus.values = Object.assign(
        {},
        scrollStatus.values,
        status.functions.map(([current, scrollPosition]) => {
          return current(
            scrollPosition ?
              Object.assign({}, status, { scrollPosition: scrollPosition.generateScrollPosition() }) :
              status)
        }).filter(v => v)
      )
    }
  }
}


const Parallax = {
  install(Vue, opt) {
    const isVue3 = Vue.version.startsWith('3')
    const prototype = isVue3 ? Vue.config.globalProperties : Vue.prototype
    const beforeMount = isVue3 ? 'beforeMount' : 'bind'

    const scrollObj = {
      scrollPosition: Status.scrollPosition,
      contentSize: Status.contentSize,
      values: {}
    }
    const $scrollStatus = Vue.observable ? Vue.observable(scrollObj) : reactive(scrollObj)

    Status.setVal(generateScrollStatusValues(Vue, opt, $scrollStatus))

    prototype.$scrollStatus = $scrollStatus

    Vue.directive('parallax-timing', {
      [beforeMount]: (el, { value }, d) => {
        const o = isVue3 ? d.props : d.data.attrs
        const opt = value || o

        setTimeout(() => {
          const timing = new p.ParallaxTiming(
            el,
            opt,
            {
              targetPercentage: opt?.targetPercentag,
              threshold: opt?.threshold,
              status: opt?.status
            }
          )
      }, 0)
      }
    })

    Vue.directive('parallax-speed', {
      [beforeMount]: (el, { value }, d) => {
        const o = isVue3 ? d.props : d.data.attrs
        const opt = value || o

        setTimeout(() => {
          const element = opt.el || el
          const speed = new p.ParallaxSpeed(
            element,
            {
              ...opt,
              style: opt.styles,
            },
            {
              targetPercentage: opt?.targetPercentag,
              threshold: opt?.threshold,
              status: opt?.status
            }
          )
        }, 0)
      }
    })

    Vue.directive('parallax-fit', {
      [beforeMount]: (el, { value }, d) => {
        const o = isVue3 ? d.props : d.data.attrs
        const opt = value || o

        setTimeout(() => {
          const element = opt.el || el
          const fit = new p.ParallaxFit(
            element,
            opt,
            {
              targetPercentage: opt?.targetPercentag,
              threshold: opt?.threshold,
              status: opt?.status
            }
          )
        }, 0)
      }
    })


    Vue.mixin({
      methods: {
        createStatus(opt = {}) {
          const status = new ScrollStatus()
          status.setVal(opt.name ? generateScrollStatusValues(Vue, opt, this.$scrollStatus) : opt)
          return status
        },
        parallaxTiming(opt = {}) {
          const timing = new p.ParallaxTiming(
            opt.target || opt.el,
            opt,
            {
              targetPercentage: opt?.targetPercentag,
              threshold: opt?.threshold,
              status: opt?.status
            }
          )
        },
        parallaxSpeed(opt) {
          const speed = new p.ParallaxSpeed(
            opt.el,
            {
              ...opt,
              style: opt.styles,
            },
            {
              targetPercentage: opt?.targetPercentag,
              threshold: opt?.threshold,
              status: opt?.status
            }
          )
        },
        parallaxFit(opt) {
          const fit = new p.ParallaxFit(
            opt.el,
            opt,
            {
              targetPercentage: opt?.targetPercentag,
              threshold: opt?.threshold,
              status: opt?.status
            }
          )
        },
      }
    })
  }
}

export default Parallax