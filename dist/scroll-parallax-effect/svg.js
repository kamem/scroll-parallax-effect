/*!
 * scroll-parallax-effect
 * This plugin adds a parallax effect by changing the style sheet according to scrolling and by adding classes.
 * https://github.com/kamem/scroll-parallax-effect.git
 * @version 0.3.0
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SvgParallaxFit": () => (/* binding */ SvgParallaxFit),
  "SvgParallaxSpeed": () => (/* binding */ SvgParallaxSpeed),
  "SvgParallaxTiming": () => (/* binding */ SvgParallaxTiming),
  "updateStatus": () => (/* binding */ updateStatus)
});

;// CONCATENATED MODULE: ./src/scroll-parallax-effect/lib/scrollStatus.ts
var requestAnimationFrame = window.requestAnimationFrame;
var ScrollStatus = /** @class */ (function () {
    function ScrollStatus() {
        this.stage = globalThis || window;
        this.stageSize = 0;
        this.contentSize = 0;
        this.direction = 'y';
        this.directionPositionName = 'Top';
        this.functions = [];
        this.targetPercentage = 0.2;
        this.setDirectionInfo();
        this.ScrollPosition = new ScrollPosition(this);
        this.scrollPosition = this.ScrollPosition.generateScrollPosition();
        this.endScrollPosition = this.ScrollPosition.endScrollPosition;
        this.scrollEventUpdate();
    }
    ScrollStatus.prototype.setVal = function (opt) {
        this.stage = opt.stage ? opt.stage : globalThis || window;
        this.direction = opt.direction || this.direction;
        this.targetPercentage = opt.targetPercentage || 0.2;
        this.updateFunction = opt.updateFunction;
        this.threshold = opt.threshold || 0;
        this.ScrollPosition = new ScrollPosition(this);
        this.scrollPosition = this.ScrollPosition.generateScrollPosition();
        this.endScrollPosition = this.ScrollPosition.endScrollPosition;
        this.setDirectionInfo();
        return this;
    };
    ScrollStatus.prototype.scrollEventUpdate = function () {
        var _this = this;
        var _a;
        this.update();
        if (this.updateFunction) {
            this.updateFunction(this);
        }
        else {
            (_a = this.functions) === null || _a === void 0 ? void 0 : _a.forEach(function (_a) {
                var func = _a[0], scrollPosition = _a[1];
                func(scrollPosition ?
                    Object.assign({}, _this, { scrollPosition: scrollPosition.generateScrollPosition() }) :
                    _this);
            });
        }
        requestAnimationFrame(this.scrollEventUpdate.bind(this));
    };
    ScrollStatus.prototype.update = function () {
        var _a;
        this.scrollPosition = this.ScrollPosition.generateScrollPosition();
        this.endScrollPosition = (_a = this.ScrollPosition) === null || _a === void 0 ? void 0 : _a.endScrollPosition;
        // @ts-ignore
        this.stageSize = this.stage["inner".concat(this.stageSizeName)] || this.stage["client".concat(this.stageSizeName)];
        // @ts-ignore
        this.contentSize = this.stage["scroll".concat(this.stageSizeName)] || document.documentElement["scroll".concat(this.stageSizeName)];
    };
    ScrollStatus.prototype.setDirectionInfo = function () {
        this.directionPositionName = this.direction === 'y' ? 'Top' : 'Left';
        this.stageSizeName = this.direction === 'y' ? 'Height' : 'Width';
    };
    return ScrollStatus;
}());
/* harmony default export */ const scrollStatus = (ScrollStatus);
var ScrollPosition = /** @class */ (function () {
    function ScrollPosition(opt) {
        this.stage = opt.stage;
        this.direction = opt.direction;
        this.stageSize = opt.stageSize;
        this.targetPercentage = opt.targetPercentage || 0.2;
        this.threshold = opt.threshold || 0;
        this.scrollName = this.stage === window ? "page".concat(this.direction.toUpperCase(), "Offset") : "scroll".concat(opt.directionPositionName);
        var scrollPosition = this.getScrollPosition();
        this.scrollPosition = scrollPosition; // 実際にスクロール
        this.endScrollPosition = scrollPosition; // 最後スクロールが止まる位置
    }
    ScrollPosition.prototype.getScrollPosition = function () {
        var stageThreshold = (this.stageSize || 0) * (this.threshold || 0);
        // @ts-ignore
        return this.stage[this.scrollName] + stageThreshold;
    };
    ScrollPosition.prototype.generateScrollPosition = function () {
        var scrollPosition = this.getScrollPosition();
        var offset = (scrollPosition - this.scrollPosition) * this.targetPercentage;
        this.scrollPosition += offset;
        this.endScrollPosition = scrollPosition;
        return Math.round(this.scrollPosition * 100) / 100;
    };
    return ScrollPosition;
}());

var Status = new ScrollStatus();

;// CONCATENATED MODULE: ./src/scroll-parallax-effect/utils/util.ts

var defaultParallaxStatus = Status;
var ERRROR_PREFIX = '[scroll-parallax-effect]';
var setScrollEvents = function (func, _a) {
    var _b = _a === void 0 ? {} : _a, targetPercentage = _b.targetPercentage, threshold = _b.threshold, _c = _b.status, status = _c === void 0 ? defaultParallaxStatus : _c;
    var isNewScrollPosition = !!(targetPercentage && (targetPercentage !== status.targetPercentage)) || !!(threshold && (threshold !== status.threshold));
    status.functions.push([
        func,
        // targetPercentageが違った場合は新しくScrollPositionを作る、statusが異なった場合もstatusのscrollPositiuonを入れる
        isNewScrollPosition ? new ScrollPosition(Object.assign({}, status, { targetPercentage: targetPercentage, threshold: threshold })) :
            status !== defaultParallaxStatus ? status.ScrollPosition : undefined
    ]);
};
var kebabToCamelCase = function (str) {
    if (!~str.indexOf('-'))
        return str;
    return str.split('-').map(function (word, i) {
        if (i === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
};
var generateCamelCaseStyle = function (str) {
    return kebabToCamelCase(str);
};
var getElement = function (element) {
    var el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el)
        throw new Error("".concat(ERRROR_PREFIX, " [").concat(getElement.name, "] undefined element \"").concat(element, "\""));
    return el;
};
var numRegExp = /([-]?([1-9]\d*|0)(\.\d+)?)(deg|\)|px|em|rem|%|$|\,)/g;
// 文字列の特定単位がついた数値部分を取得して配列で返す
var getStyleValues = function (value) {
    var valueRegAry;
    var valueAry = [];
    while ((valueRegAry = numRegExp.exec(value)) !== null) {
        valueAry.push(parseFloat(valueRegAry[1]));
    }
    return valueAry;
};
// カラーの値や、16真数カラーがあった場合は数値(rgb(0,0,0))に変換して返す
var generateStyleValue = function (styleValue) {
    if (styleValue === undefined)
        return '';
    var value = String(styleValue);
    value = getStringColor(value);
    value = hexadecimalToRgb(value);
    return value;
};
// style文字列の数値部分をvaluesの配列の順番通りに上書きする
var generateStyleValueString = function (style, values) {
    var i = 0;
    return style.replace(numRegExp, function (styleValue) {
        return styleValue.replace(/[-]?([1-9]\d*|0)(\.\d+)?/, values[i++]);
    });
};
// 色変換周りの処理
var plusColor = function (s) { return s + s; };
var generateHex = function (colorString) {
    if (colorString.length > 4)
        return colorString;
    return "#".concat(plusColor(colorString[1])).concat(plusColor(colorString[2])).concat(plusColor(colorString[3]));
};
var generateRGB = function (colorString) {
    var c = colorString.substring(1);
    return [
        parseInt(c.substring(0, 2), 16) || 0,
        parseInt(c.substring(2, 4), 16) || 0,
        parseInt(c.substring(4, 6), 16) || 0
    ];
};
var hexadecimalToRgb = function (value) {
    return value.replace(/#[0-9a-fA-F]{3,6}/g, function (color) {
        var _a = generateRGB(generateHex(color)), r = _a[0], g = _a[1], b = _a[2];
        return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
    });
};
var getStringColor = function (styleValue) {
    var colors = { red: 'f00', blue: '00f', yellow: 'ff0', green: '008000' };
    return styleValue.replace(/red|blue|green|yellow/g, function (color) { return '#' + colors[color]; });
};
// elementの位置を取得する
var _offset = function (element, endScrollPosition, directionPositionName) {
    var el = typeof element === 'string' ? element ? document.querySelector(element) : '' : element;
    var dir = directionPositionName === 'Left' ? 'left' : 'top';
    return el ? el.getBoundingClientRect()[dir] + endScrollPosition : 0; // window表示領域内の位置 + 今のスクロール量とすることでブラウザ実際の位置を取得する
};
var isEnd = function (value) {
    return typeof value === 'string' && ~['end'].indexOf(value);
};
var scrollPositionStringToNumber = function (triggerPosition, status) {
    if (status === void 0) { status = defaultParallaxStatus; }
    var stageEndScrollNum = status.contentSize - status.stageSize;
    if (triggerPosition > stageEndScrollNum || isEnd(triggerPosition)) {
        return stageEndScrollNum;
    }
    // [#test, -100]のような値を想定
    if (~['string', 'object'].indexOf(typeof triggerPosition)) {
        var triggerPositionArray = (typeof triggerPosition === 'string' ? triggerPosition.split(',') : triggerPosition);
        var positionName = triggerPositionArray[0] || '';
        var position = isEnd(positionName) ? stageEndScrollNum : _offset(positionName, status.endScrollPosition, status.directionPositionName);
        var s = (parseInt(String(triggerPositionArray[1])) || 0) + Math.min(position, stageEndScrollNum);
        return Math.min(s, stageEndScrollNum);
    }
    if (typeof triggerPosition === 'number') {
        return Math.min(triggerPosition, stageEndScrollNum);
    }
    return 0;
};

;// CONCATENATED MODULE: ./src/scroll-parallax-effect/lib/timing.ts

var Timing = /** @class */ (function () {
    function Timing(opt) {
        this.isLineOver = false;
        this.el = opt.el;
        this.eventScrollElementPosition = opt.triggerPosition;
        this.toggle = opt.toggle || [function (e, o) { }, function (e, o) { }];
    }
    Timing.prototype.getEventScrollElementPosition = function (status) {
        return scrollPositionStringToNumber(this.eventScrollElementPosition ? this.eventScrollElementPosition : _offset(this.el, status.endScrollPosition, status.directionPositionName), status);
    };
    Timing.prototype.timingEvent = function (status) {
        var isLineOver = status.scrollPosition >= this.getEventScrollElementPosition(status);
        if (isLineOver !== this.isLineOver) {
            this.isLineOver = isLineOver;
            var eventSelect = this.toggle[isLineOver ? 0 : 1];
            var element = typeof this.el === 'string' ? document.querySelector(this.el) : this.el;
            return eventSelect(element, isLineOver);
        }
    };
    return Timing;
}());
/* harmony default export */ const timing = (Timing);

;// CONCATENATED MODULE: ./src/scroll-parallax-effect/utils/easing.ts
var easing = {
    linear: function (t, b, c) { return b + c * t; },
    easeInQuad: function (i, b, c, d) { return c * (i /= d) * i + b; },
    easeOutQuad: function (i, b, c, d) { return -c * (i /= d) * (i - 2) + b; },
    easeInOutQuad: function (i, b, c, d) { if ((i /= d / 2) < 1) {
        return c / 2 * i * i + b;
    } return -c / 2 * ((--i) * (i - 2) - 1) + b; },
    easeInCubic: function (i, b, c, d) { return c * (i /= d) * i * i + b; },
    easeOutCubic: function (i, b, c, d) { return c * ((i = i / d - 1) * i * i + 1) + b; },
    easeInOutCubic: function (i, b, c, d) { if ((i /= d / 2) < 1) {
        return c / 2 * i * i * i + b;
    } return c / 2 * ((i -= 2) * i * i + 2) + b; },
    easeInQuart: function (i, b, c, d) { return c * (i /= d) * i * i * i + b; },
    easeOutQuart: function (i, b, c, d) { return -c * ((i = i / d - 1) * i * i * i - 1) + b; },
    easeInOutQuart: function (i, b, c, d) { if ((i /= d / 2) < 1) {
        return c / 2 * i * i * i * i + b;
    } return -c / 2 * ((i -= 2) * i * i * i - 2) + b; },
    easeInQuint: function (i, b, c, d) { return c * (i /= d) * i * i * i * i + b; },
    easeOutQuint: function (i, b, c, d) { return c * ((i = i / d - 1) * i * i * i * i + 1) + b; },
    easeInOutQuint: function (i, b, c, d) { if ((i /= d / 2) < 1) {
        return c / 2 * i * i * i * i * i + b;
    } return c / 2 * ((i -= 2) * i * i * i * i + 2) + b; },
    easeInSine: function (i, b, c, d) { return -c * Math.cos(i / d * (Math.PI / 2)) + c + b; },
    easeOutSine: function (i, b, c, d) { return c * Math.sin(i / d * (Math.PI / 2)) + b; },
    easeInOutSine: function (i, b, c, d) { return -c / 2 * (Math.cos(Math.PI * i / d) - 1) + b; },
    easeInExpo: function (i, b, c, d) { return (i == 0) ? b : c * Math.pow(2, 10 * (i / d - 1)) + b; },
    easeOutExpo: function (i, b, c, d) { return (i == d) ? b + c : c * (-Math.pow(2, -10 * i / d) + 1) + b; },
    easeInOutExpo: function (i, b, c, d) { if (i == 0) {
        return b;
    } if (i == d) {
        return b + c;
    } if ((i /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (i - 1)) + b;
    } return c / 2 * (-Math.pow(2, -10 * --i) + 2) + b; },
    easeInCirc: function (i, b, c, d) { return -c * (Math.sqrt(1 - (i /= d) * i) - 1) + b; },
    easeOutCirc: function (i, b, c, d) { return c * Math.sqrt(1 - (i = i / d - 1) * i) + b; },
    easeInOutCirc: function (i, b, c, d) { if ((i /= d / 2) < 1) {
        return -c / 2 * (Math.sqrt(1 - i * i) - 1) + b;
    } return c / 2 * (Math.sqrt(1 - (i -= 2) * i) + 1) + b; },
    easeInElastic: function (m, p, a, b) { var d = 1.70158; var c = 0; var n = a; if (m == 0) {
        return p;
    } if ((m /= b) == 1) {
        return p + a;
    } if (!c) {
        c = b * 0.3;
    } if (n < Math.abs(a)) {
        n = a;
        var d = c / 4;
    }
    else {
        var d = c / (2 * Math.PI) * Math.asin(a / n);
    } return -(n * Math.pow(2, 10 * (m -= 1)) * Math.sin((m * b - d) * (2 * Math.PI) / c)) + p; },
    easeOutElastic: function (m, p, a, b) { var d = 1.70158; var c = 0; var n = a; if (m == 0) {
        return p;
    } if ((m /= b) == 1) {
        return p + a;
    } if (!c) {
        c = b * 0.3;
    } if (n < Math.abs(a)) {
        n = a;
        var d = c / 4;
    }
    else {
        var d = c / (2 * Math.PI) * Math.asin(a / n);
    } return n * Math.pow(2, -10 * m) * Math.sin((m * b - d) * (2 * Math.PI) / c) + a + p; },
    easeInOutElastic: function (m, p, a, b) { var d = 1.70158; var c = 0; var n = a; if (m == 0) {
        return p;
    } if ((m /= b / 2) == 2) {
        return p + a;
    } if (!c) {
        c = b * (0.3 * 1.5);
    } if (n < Math.abs(a)) {
        n = a;
        var d = c / 4;
    }
    else {
        var d = c / (2 * Math.PI) * Math.asin(a / n);
    } if (m < 1) {
        return -0.5 * (n * Math.pow(2, 10 * (m -= 1)) * Math.sin((m * b - d) * (2 * Math.PI) / c)) + p;
    } return n * Math.pow(2, -10 * (m -= 1)) * Math.sin((m * b - d) * (2 * Math.PI) / c) * 0.5 + a + p; },
    easeInBack: function (k, b, c, d, j) { if (j == undefined) {
        j = 1.70158;
    } return c * (k /= d) * k * ((j + 1) * k - j) + b; },
    easeOutBack: function (k, b, c, d, j) { if (j == undefined) {
        j = 1.70158;
    } return c * ((k = k / d - 1) * k * ((j + 1) * k + j) + 1) + b; },
    easeInOutBack: function (k, b, c, d, j) { if (j == undefined) {
        j = 1.70158;
    } if ((k /= d / 2) < 1) {
        return c / 2 * (k * k * (((j *= (1.525)) + 1) * k - j)) + b;
    } return c / 2 * ((k -= 2) * k * (((j *= (1.525)) + 1) * k + j) + 2) + b; },
    easeInBounce: function (i, b, c, d) { return c - easing.easeOutBounce(d - i, 0, c, d) + b; },
    easeOutBounce: function (i, b, c, d) { if ((i /= d) < (1 / 2.75)) {
        return c * (7.5625 * i * i) + b;
    }
    else {
        if (i < (2 / 2.75)) {
            return c * (7.5625 * (i -= (1.5 / 2.75)) * i + 0.75) + b;
        }
        else {
            if (i < (2.5 / 2.75)) {
                return c * (7.5625 * (i -= (2.25 / 2.75)) * i + 0.9375) + b;
            }
            else {
                return c * (7.5625 * (i -= (2.625 / 2.75)) * i + 0.984375) + b;
            }
        }
    } },
    easeInOutBounce: function (i, b, c, d) { if (i < d / 2) {
        return easing.easeInBounce(i * 2, 0, c, d) * 0.5 + b;
    } return easing.easeOutBounce(i * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b; }
};

;// CONCATENATED MODULE: ./src/scroll-parallax-effect/utils/svg.ts

var strokeDraw = function (value, path, easingName) {
    var style = path.style;
    var strokeDasharray = path.getTotalLength();
    var percent = value / strokeDasharray;
    percent = percent < 0 ? 0 : percent;
    percent = percent > 1 ? 1 : percent;
    var e = typeof easingName === 'string' ? easing[easingName] : easingName;
    style.strokeDashoffset = (strokeDasharray - e(percent, 0, strokeDasharray, 1)).toString();
};
var getMaxPathLength = function (paths) {
    var pathLengths = [];
    paths === null || paths === void 0 ? void 0 : paths.forEach(function (path, i) {
        var style = path.style;
        style.strokeDasharray = style.strokeDashoffset = path.getTotalLength().toString();
        pathLengths[i] = parseFloat(path.getTotalLength().toString()) || 0;
    });
    return Math.max.apply(Math, pathLengths);
};

;// CONCATENATED MODULE: ./src/scroll-parallax-effect/lib/svgTiming.ts


var SvgTiming = /** @class */ (function () {
    function SvgTiming(opt) {
        var _this = this;
        var _a;
        this.el = opt === null || opt === void 0 ? void 0 : opt.el;
        this.paths = (opt === null || opt === void 0 ? void 0 : opt.paths) || (opt === null || opt === void 0 ? void 0 : opt.el) ? (_a = opt === null || opt === void 0 ? void 0 : opt.el) === null || _a === void 0 ? void 0 : _a.querySelectorAll('path') : undefined;
        this.speed = (opt === null || opt === void 0 ? void 0 : opt.speed) || 2;
        this.easingName = (opt === null || opt === void 0 ? void 0 : opt.easing) || 'linear';
        this.timingValue = 0;
        this.maxPathLength = getMaxPathLength(this.paths);
        var toggle = (function (el, isLineOver) {
            _this.startPathDrawing(isLineOver);
        });
        this.timing = new timing({
            el: opt === null || opt === void 0 ? void 0 : opt.el,
            triggerPosition: opt === null || opt === void 0 ? void 0 : opt.triggerPosition,
            toggle: [toggle, toggle]
        });
    }
    SvgTiming.prototype.startPathDrawing = function (isStart) {
        var _this = this;
        setTimeout(function () {
            var _a;
            _this.timingValue += _this.timing.isLineOver ? _this.speed : -_this.speed;
            (_a = _this.paths) === null || _a === void 0 ? void 0 : _a.forEach(function (path) {
                strokeDraw(_this.timingValue, path, _this.easingName);
            });
            if (!(_this.timingValue > _this.maxPathLength || _this.timingValue < 0) && _this.timing.isLineOver === isStart) {
                _this.startPathDrawing(isStart);
            }
        }, 0);
    };
    return SvgTiming;
}());
/* harmony default export */ const svgTiming = (SvgTiming);

;// CONCATENATED MODULE: ./src/scroll-parallax-effect/lib/svgSpeed.ts


var SvgSpeed = /** @class */ (function () {
    function SvgSpeed(opt) {
        var _a;
        this.el = opt === null || opt === void 0 ? void 0 : opt.el;
        this.paths = (opt === null || opt === void 0 ? void 0 : opt.paths) || ((_a = opt === null || opt === void 0 ? void 0 : opt.el) === null || _a === void 0 ? void 0 : _a.querySelectorAll('path'));
        this.speed = (opt === null || opt === void 0 ? void 0 : opt.speed) || 2;
        this.easingName = (opt === null || opt === void 0 ? void 0 : opt.easing) || 'linear';
        this.eventScrollElementPosition = opt === null || opt === void 0 ? void 0 : opt.triggerPosition;
        this.maxPathLength = getMaxPathLength(this.paths);
    }
    SvgSpeed.prototype.getEventScrollElementPosition = function (status) {
        return scrollPositionStringToNumber(this.eventScrollElementPosition ? this.eventScrollElementPosition : _offset(this.el, status.endScrollPosition, status.directionPositionName), status);
    };
    SvgSpeed.prototype.scrollSpeed = function (status) {
        var _this = this;
        var _a;
        var value = -(-status.scrollPosition / this.speed + this.getEventScrollElementPosition(status) / this.speed) + this.maxPathLength;
        (_a = this.paths) === null || _a === void 0 ? void 0 : _a.forEach(function (path) {
            strokeDraw(value, path, _this.easingName);
        });
    };
    return SvgSpeed;
}());
/* harmony default export */ const svgSpeed = (SvgSpeed);

;// CONCATENATED MODULE: ./src/scroll-parallax-effect/lib/fit.ts


var Fit = /** @class */ (function () {
    function Fit(el) {
        this.el = typeof el === 'string' ? document.querySelector(el) : el;
        this.styleValues = {};
        this.motions = [];
        this.rangeMotions = [];
    }
    Fit.prototype.setMotion = function (motion) {
        var _this = this;
        var m = Array.isArray(motion) ? motion : [motion];
        this.motions = m.map(function (motion) {
            var fromStyle = _this.setStyleValue(motion.fromStyle);
            var toStyle = _this.setStyleValue(motion.toStyle);
            return Object.assign({}, motion, {
                easing: motion.easing || 'linear',
                fromStyle: fromStyle,
                toStyle: toStyle,
            });
        });
    };
    Fit.prototype.setStyleValues = function () {
        var _this = this;
        this.motions = this.motions.map(function (motion) { return Object.assign({}, motion, ({
            fromStyleValues: _this.generateStyleValues(motion.fromStyle),
            toStyleValues: _this.generateStyleValues(motion.toStyle)
        })); });
    };
    Fit.prototype.generateStyleValues = function (motionStyles) {
        var styles = {};
        for (var style in motionStyles) {
            var styleName = style;
            styles[styleName] = getStyleValues(motionStyles[styleName].toString());
        }
        return styles;
    };
    Fit.prototype.setStyleValue = function (motionStyles) {
        var styles = {};
        for (var style in motionStyles) {
            var styleName = style;
            styles[styleName] = generateStyleValue(motionStyles[styleName]);
        }
        return styles;
    };
    Fit.prototype.setRangeMotions = function (status) {
        var range = [];
        this.motions.forEach(function (motion) {
            var start = scrollPositionStringToNumber(motion.start, status);
            if (start <= status.scrollPosition)
                range.push(motion);
        });
        this.rangeMotions = range;
    };
    Fit.prototype.setDefaultStyles = function () {
        var defaultStyles = {};
        this.motions.forEach(function (_a) {
            var fromStyle = _a.fromStyle;
            for (var style in fromStyle) {
                var styleName = style;
                if (defaultStyles[styleName] === undefined)
                    defaultStyles[styleName] = fromStyle[styleName];
            }
        });
        this.styleValues = defaultStyles;
    };
    Fit.prototype.setFromStyle = function () {
        var _this = this;
        this.motions.forEach(function (_a, i) {
            var fromStyle = _a.fromStyle, toStyle = _a.toStyle;
            for (var style in toStyle) {
                var styleName = style;
                if (fromStyle === undefined)
                    fromStyle = {};
                if (fromStyle[styleName] === undefined) {
                    fromStyle[styleName] = _this.getLastToStyle(styleName, i);
                }
            }
        });
    };
    Fit.prototype.getLastToStyle = function (style, i) {
        var fromStyle = '';
        var k = Math.max(i - 1, 0);
        for (var j = k; j >= 0; j--) {
            var motion = this.motions[j];
            if (motion.fromStyle[style] !== undefined) {
                fromStyle = motion.toStyle[style].toString();
                break;
            }
        }
        // @ts-ignore
        if (fromStyle === '')
            fromStyle = document.defaultView.getComputedStyle(typeof this.el === 'string' ? document.querySelector(this.el) : this.el, null)[style];
        return fromStyle;
    };
    Fit.prototype.setStart = function () {
        var _this = this;
        this.motions.forEach(function (motion, i) {
            if (motion.start === undefined) {
                motion.start = _this.getLastStart(i) || 0;
            }
        });
    };
    Fit.prototype.getLastStart = function (i) {
        var start = '';
        var k = Math.max(i - 1, 0);
        for (var j = k; j >= 0; j--) {
            var motion = this.motions[j];
            if (motion.start !== undefined) {
                start = motion.end;
                break;
            }
        }
        return start;
    };
    Fit.prototype.generateScrollStyleValues = function (style, fromtStyle, toStyle, easingName, scrollPercent) {
        if (easingName === void 0) { easingName = 'linear'; }
        var abs = Math.abs(fromtStyle - toStyle);
        var fixAbs = fromtStyle < toStyle ? abs : -abs;
        var e = typeof easingName === 'string' ? easing[easingName] : easingName;
        var styleValue = e(scrollPercent, fromtStyle, fixAbs, 1);
        if (style.indexOf('rgb') >= 0) {
            styleValue = styleValue >= 1 ? Math.floor(styleValue) : styleValue < 0 ? 0 : styleValue;
        }
        return styleValue;
    };
    Fit.prototype.getStyleValues = function (status) {
        var _this = this;
        var scrollPosition = status.scrollPosition;
        this.rangeMotions.forEach(function (motion, j) {
            var start = scrollPositionStringToNumber(motion.start, status);
            var end = scrollPositionStringToNumber(motion.end, status);
            var isInRange = start < scrollPosition && scrollPosition < end;
            var range = end - start;
            var scrollPercent = isInRange ? (scrollPosition - start) / range :
                (scrollPosition > start) ? 1 :
                    (scrollPosition < end) ? 0 : 0;
            for (var style in motion.fromStyle) {
                var styleName = style;
                var fromStyleValue = motion.fromStyle[styleName].toString();
                var fromStyleValues = motion.fromStyleValues[styleName];
                var toStyleValues = motion.toStyleValues[styleName];
                var values = [];
                for (var i = 0; i < fromStyleValues.length; i++) {
                    values[i] = _this.generateScrollStyleValues(fromStyleValue, fromStyleValues[i], toStyleValues[i], motion.easing, scrollPercent);
                }
                _this.styleValues[styleName] = generateStyleValueString(fromStyleValue, values);
            }
        });
        return this.styleValues;
    };
    return Fit;
}());
/* harmony default export */ const fit = (Fit);

;// CONCATENATED MODULE: ./src/scroll-parallax-effect/lib/svgFit.ts


var SvgFit = /** @class */ (function () {
    function SvgFit(opt) {
        this.path = opt.path;
        this.pathLength = getMaxPathLength(this.path ? [this.path] : undefined);
        this.fit = new fit(this.path);
        var motion = opt.motion;
        if (motion) {
            this.fit.setMotion(this.generateSvgMotion(Array.isArray(motion) ? motion : [motion]));
        }
    }
    SvgFit.prototype.generateSvgMotion = function (motions) {
        var _this = this;
        return motions.map(function (motion) {
            var m = {
                start: motion.start,
                end: motion.end,
                easing: motion.easing
            };
            var fromPath = motion.from && _this.pathLength * (1 - motion.from);
            var toPath = _this.pathLength * (1 - motion.to);
            if (fromPath) {
                m.fromStyle = {
                    strokeDashoffset: fromPath
                };
            }
            m.toStyle = {
                strokeDashoffset: toPath
            };
            return m;
        });
    };
    return SvgFit;
}());
/* harmony default export */ const lib_svgFit = (SvgFit);

;// CONCATENATED MODULE: ./src/scroll-parallax-effect/svg.ts





var svg_defaultStatus = Status;
var updateStatus = function (opt) { return svg_defaultStatus.setVal(opt); };
var SvgParallaxFit = /** @class */ (function () {
    function SvgParallaxFit(element, opt, scrollEventOpt) {
        var _this = this;
        var el = getElement(element);
        var paths = Array.from(opt.paths || (el === null || el === void 0 ? void 0 : el.querySelectorAll('path')));
        this.svgFits = paths.map(function (path) {
            var svgFit = new lib_svgFit({
                path: path,
                triggerPosition: opt.triggerPosition,
                motion: opt.motion,
            });
            svgFit.fit.setFromStyle();
            svgFit.fit.setStyleValues();
            svgFit.fit.setStart();
            return svgFit;
        });
        setScrollEvents(function (status) {
            _this.svgFits.forEach(function (svgFit) {
                svgFit.fit.setRangeMotions(status);
                svgFit.fit.setDefaultStyles();
                Object.assign(svgFit.path.style, svgFit.fit.getStyleValues(status));
            });
        }, {
            targetPercentage: scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.targetPercentage,
            threshold: scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.threshold,
            status: scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.status
        });
    }
    SvgParallaxFit.prototype.getValues = function () {
        return this.svgFits;
    };
    return SvgParallaxFit;
}());

var SvgParallaxTiming = /** @class */ (function () {
    function SvgParallaxTiming(element, opt, scrollEventOpt) {
        var _this = this;
        var el = getElement(element);
        this.svgTiming = new svgTiming({
            el: el,
            speed: opt === null || opt === void 0 ? void 0 : opt.speed,
            easing: opt === null || opt === void 0 ? void 0 : opt.easing,
            paths: opt === null || opt === void 0 ? void 0 : opt.paths,
            triggerPosition: opt === null || opt === void 0 ? void 0 : opt.triggerPosition
        });
        setScrollEvents(function (status) {
            _this.svgTiming.timing.timingEvent(status);
        }, {
            targetPercentage: (opt === null || opt === void 0 ? void 0 : opt.targetPercentage) || (scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.targetPercentage),
            threshold: (opt === null || opt === void 0 ? void 0 : opt.threshold) || (scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.threshold),
            status: (opt === null || opt === void 0 ? void 0 : opt.status) || (scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.status)
        });
    }
    SvgParallaxTiming.prototype.getValues = function () {
        return this.svgTiming;
    };
    return SvgParallaxTiming;
}());

var SvgParallaxSpeed = /** @class */ (function () {
    function SvgParallaxSpeed(element, opt, scrollEventOpt) {
        var _this = this;
        var el = getElement(element);
        this.svgSpeed = new svgSpeed({
            el: el,
            speed: opt === null || opt === void 0 ? void 0 : opt.speed,
            easing: opt === null || opt === void 0 ? void 0 : opt.easing,
            paths: opt === null || opt === void 0 ? void 0 : opt.paths,
            triggerPosition: opt === null || opt === void 0 ? void 0 : opt.triggerPosition,
        });
        setScrollEvents(function (status) {
            _this.svgSpeed.scrollSpeed(status);
        }, {
            targetPercentage: (opt === null || opt === void 0 ? void 0 : opt.targetPercentage) || (scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.targetPercentage),
            threshold: (opt === null || opt === void 0 ? void 0 : opt.threshold) || (scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.threshold),
            status: (opt === null || opt === void 0 ? void 0 : opt.status) || (scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.status)
        });
    }
    SvgParallaxSpeed.prototype.getValues = function () {
        return this.svgSpeed;
    };
    return SvgParallaxSpeed;
}());

window.Parallax = {
    SvgTiming: SvgParallaxTiming,
    SvgSpeed: SvgParallaxSpeed,
    SvgFit: SvgParallaxFit,
    updateStatus: updateStatus,
    status: svg_defaultStatus,
    ScrollStatus: scrollStatus
};

/******/ 	return __webpack_exports__;
/******/ })()
;
});