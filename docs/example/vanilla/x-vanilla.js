/*!
 * scroll-parallax-effect
 * This plugin adds a parallax effect by changing the style sheet according to scrolling and by adding classes.
 * https://github.com/kamem/scroll-parallax-effect.git
 * @version 0.3.1
 * @license Released under MIT license
 * @author kamem
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["scroll-parallax-effect"] = factory();
	else
		root["scroll-parallax-effect"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);


Parallax.updateStatus({ direction: 'x' })

document.querySelectorAll('.gnav > ul > *').forEach(function(el) {
  const targetElementName = el.querySelector('a').getAttribute('href')
  new Parallax.Timing(el, { target: document.querySelector(targetElementName) } )
})

new Parallax.Timing('#timing')

const borders = document.createElement('div')
borders.setAttribute('class', 'borders')

new Parallax.Speed(
  'body', 
  {
    contentScrollPosition: 0,
    contentScrollPositionStyleValue: 'rgb(0,0,0)',
    style: ['backgroundColor'],
    speed: [[0.02, 0.03, 0.039]],
    min: [[30, 30, 30]],
    max: [[100, 100, 100]],
  }
)

document.querySelector('.material').append(borders)
const borderContent = 8
for (let i = 0; i < borderContent; i++) {
  const border = document.createElement('div')
  border.setAttribute('class', 'border')
  border.style.width = Math.floor(Math.random() * 300) + 300 + 'px'
  border.style.opacity = (Math.random() + 0.1).toString()
  
  document.querySelector('.borders').append(border)
  
  new Parallax.Speed(
    border, 
    {
      contentScrollPosition: 0,
      style: ['width', 'left'],
      speed: Math.random() * 0.2 + 0.5 * ([-1, 1][Math.floor(Math.random() * 2)]),
    }
  )
}


const bird = new Parallax.Fit('.bird', [
  {
    start: 0,
    end: '#timing',
    fromStyle: {
      top: '30px',
      left: '50%'
    },
    toStyle: {
      left: '60%',
      top: '100px'
    },
    easing: 'easeOutCubic'
  },
  {
    end: '#speed',
    toStyle: {
      left: '40%',
      top: '90px'
    },
    easing: 'easeInQuart'
  },
  {
    end: 'end',
    toStyle: {
      left: '65%',
      top: '80px'
    },
    easing: 'easeInQuart'
  },
])
const birdPath = new Parallax.Fit('.birdPath', [
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
    end: '#speed',
    toStyle: {
      fill: '#ff15d0'
    },
  },
  {
    end: '#fit',
    toStyle: {
      fill: '#1176ff'
    },
  },
])

// setInterval(() => console.log(drop.getValues().styleValues), 100)

new Parallax.Speed('.gear', {
    style: 'transform',
    contentScrollPositionStyleValue: 'rotate(0deg)',
    targetPercentage: 0.05,
    contentScrollPosition: 0,
    speed: -0.2,
  }
)


document.querySelectorAll('.triangle').forEach((el, i) => {
  new Parallax.Speed(el, {
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


document.querySelectorAll('.circle').forEach((el, i) => {
  new Parallax.Fit(el, [
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
        var ts = (t /= d) * t;
        var tc = ts * t;
        return b + c * (-49 * tc * ts + 135 * ts * ts + -130 * tc + 50 * ts + -5 * t);
      }
    },
  ])
})
/******/ 	return __webpack_exports__;
/******/ })()
;
});