import '../css/y.css'
import {
  ParallaxTiming,
  ParallaxSpeed,
  ParallaxFit
} from '../../scroll-parallax-effect/index'


document.querySelectorAll('.gnav > ul > *').forEach(function(el) {
  const targetElementName = el.querySelector('a')?.getAttribute('href')
  new ParallaxTiming(el, { target: targetElementName } )
})

new ParallaxTiming('#timing', {
  threshold: 0.5
})

const borders = document.createElement('div')
borders.setAttribute('class', 'borders')

new ParallaxSpeed(
  'body', 
  {
    contentScrollPosition: 0,
    contentScrollPositionStyleValue: 'rgb(0,0,0)',
    style: ['background-color'],
    speed: [[0.02, 0.03, 0.039]],
    min: [[30, 30, 30]],
  }
)

document.querySelector('.material')?.append(borders)
const borderContent = 8
for (let i = 0; i < borderContent; i++) {
  const border = document.createElement('div')
  border.setAttribute('class', 'border')
  border.style.width = Math.floor(Math.random() * 300) + 300 + 'px'
  border.style.opacity = (Math.random() + 0.1).toString()
  
  document.querySelector('.borders')?.append(border)
  
  new ParallaxSpeed(
    border, 
    {
      contentScrollPosition: 0,
      style: ['width', 'left'],
      speed: Math.random() * 0.2 + 0.5 * ([-1, 1][Math.floor(Math.random() * 2)]),
    }
  )
}


const drop = new ParallaxFit('.drop', [
  {
    start: 0,
    end: 'end',
    fromStyle: {
      top: '5%'
    },
    toStyle: {
      top: '80%'
    },
  }
])

// setInterval(() => console.log(drop.getValues().styleValues), 100)

const dropPath = new ParallaxFit('.dropPath', [
  {
    start: 0,
    end: '#timing',
    fromStyle: {
      fill: '#1176ff'
    },
    toStyle: {
      fill: '#67ad0c'
    },
  },
  {
    end: ['#speed', -300],
    toStyle: {
      fill: '#ff15d0'
    },
  },
  {
    end: 'end',
    toStyle: {
      fill: '#1176ff'
    },
  },
])


new ParallaxSpeed('.gear', {
    style: 'transform',
    contentScrollPositionStyleValue: 'rotate(0deg)',
    targetPercentage: 0.05,
    contentScrollPosition: 0,
    speed: -0.2,
  }
)


document.querySelectorAll('.triangle').forEach((el, i) => {
  new ParallaxSpeed(el, {
    style: [
      'transform',
      'top',
      'opacity'
    ],
    contentScrollPositionStyleValue: `rotate(${Math.floor(Math.random() * 60 * i)}deg)`,
    speed: [
      Math.random() * 0.05 * ([-1, 1][Math.floor(Math.random() * 2)]),
      Math.random() * 0.15,
      0.005
    ],
    contentScrollPosition: '#speed',
  })
})


document.querySelectorAll<HTMLElement>('.circle').forEach((el, i) => {
  new ParallaxFit(el, [
    {
      start: ['#fit', -300 + i * 50],
      end: ['#fit', i * 100],
      fromStyle: {
        opacity: '0',
        transform: 'scale(0.3)',
        top: el.style.top
      },
      toStyle: {
        opacity: '1',
        transform: 'scale(1)',
        top: el.style.top
      },
      easing: function (t, b, c, d) {
        const ts = (t /= d) * t;
        const tc = ts * t;
        return b + c * (-49 * tc * ts + 135 * ts * ts + -130 * tc + 50 * ts + -5 * t);
      }
    },
  ])
})