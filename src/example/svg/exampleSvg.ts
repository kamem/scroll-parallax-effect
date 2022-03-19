import { SvgParallaxTiming, SvgParallaxSpeed, SvgParallaxFit, updateStatus } from '../../scroll-parallax-effect/svg'

updateStatus({ threshold: 0.5 })

const main = new SvgParallaxTiming('#main')

const music = new SvgParallaxSpeed('#music', {
  triggerPosition: ['#music', -300],
  speed: 0.2,
  threshold: 0.5
})


const music3 = new SvgParallaxFit('#music2', { motion: [
  {
    start: 0,
    end: ['#music2', -300],
    from: 0,
    to: 0.5,
    easing: 'easeOutCubic'
  },
  {
    end: ['#music2', -100],
    to: 0.3,
  },
  {
    end: '#music2',
    to: 1,
    easing: 'easeInOutQuart'
  },
]})


const clover = new SvgParallaxTiming('#clover', {
  speed: 6,
  easing: 'easeOutCubic',
})