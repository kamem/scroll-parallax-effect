/*!
 * scroll-parallax-effect
 * Implementing parallax effect by utilizing various events of scroll.
 * https://github.com/kamem/scroll-parallax-effect.git
 * @version 1.0.0
 * @license Released under MIT license
 * @author kamem
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["scroll-parallax-effect"] = factory(require("vue"));
	else
		root["scroll-parallax-effect"] = factory(root["vue"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__748__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ParallaxFit": () => (/* binding */ ParallaxFit)
});

// UNUSED EXPORTS: updateStatus

// EXTERNAL MODULE: ./src/scroll-parallax-effect/lib/scrollStatus.ts
var scrollStatus = __webpack_require__(251);
// EXTERNAL MODULE: ./src/scroll-parallax-effect/utils/util.ts
var util = __webpack_require__(833);
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
            styles[styleName] = (0,util/* getStyleValues */.fL)(motionStyles[styleName].toString());
        }
        return styles;
    };
    Fit.prototype.setStyleValue = function (motionStyles) {
        var styles = {};
        for (var style in motionStyles) {
            var styleName = style;
            styles[styleName] = (0,util/* generateStyleValue */.Mv)(motionStyles[styleName]);
        }
        return styles;
    };
    Fit.prototype.setRangeMotions = function (status) {
        var range = [];
        this.motions.forEach(function (motion) {
            var start = (0,util/* scrollPositionStringToNumber */.U3)(motion.start, status);
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
            var start = (0,util/* scrollPositionStringToNumber */.U3)(motion.start, status);
            var end = (0,util/* scrollPositionStringToNumber */.U3)(motion.end, status);
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
                _this.styleValues[styleName] = (0,util/* generateStyleValueString */.fF)(fromStyleValue, values);
            }
        });
        return this.styleValues;
    };
    return Fit;
}());
/* harmony default export */ const lib_fit = (Fit);

;// CONCATENATED MODULE: ./src/scroll-parallax-effect/fit.ts



var defaultParallaxStatus = scrollStatus/* Status */.qb;
var updateStatus = function (opt) { return defaultParallaxStatus.setVal(opt); };
var ParallaxFit = /** @class */ (function () {
    function ParallaxFit(element, opt, scrollEventOpt) {
        var _this = this;
        var el = (0,util/* getElement */.sb)(element);
        var fit = new lib_fit(el);
        this.fit = fit;
        fit.setMotion(opt);
        fit.setFromStyle();
        fit.setStyleValues();
        fit.setStart();
        (0,util/* setScrollEvents */.Ih)(function (status) {
            fit.setRangeMotions(status);
            fit.setDefaultStyles();
            Object.assign(el.style, fit.getStyleValues(status));
            return _this.fit;
        }, {
            targetPercentage: scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.targetPercentage,
            threshold: scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.threshold,
            status: scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.status
        });
    }
    ParallaxFit.prototype.getValues = function () {
        return this.fit;
    };
    return ParallaxFit;
}());



/***/ }),

/***/ 417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParallaxFit": () => (/* binding */ ParallaxFit),
/* harmony export */   "ParallaxSpeed": () => (/* binding */ ParallaxSpeed),
/* harmony export */   "ParallaxTiming": () => (/* binding */ ParallaxTiming)
/* harmony export */ });
/* unused harmony export updateStatus */
/* harmony import */ var _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(251);
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(388);
/* harmony import */ var _speed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(154);
/* harmony import */ var _fit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(752);




var defaultParallaxStatus = _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_0__/* .Status */ .qb;
var ParallaxTiming = _timing__WEBPACK_IMPORTED_MODULE_1__.ParallaxTiming;
var ParallaxSpeed = _speed__WEBPACK_IMPORTED_MODULE_2__.ParallaxSpeed;
var ParallaxFit = _fit__WEBPACK_IMPORTED_MODULE_3__.ParallaxFit;
var updateStatus = function (opt) { return defaultParallaxStatus.setVal(opt); };
window.Parallax = {
    Timing: ParallaxTiming,
    Speed: ParallaxSpeed,
    Fit: ParallaxFit,
    updateStatus: updateStatus,
    status: defaultParallaxStatus,
    ScrollStatus: _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP
};


/***/ }),

/***/ 251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ij": () => (/* binding */ ScrollPosition),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "qb": () => (/* binding */ Status)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollStatus);
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


/***/ }),

/***/ 154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ParallaxSpeed": () => (/* binding */ ParallaxSpeed)
});

// UNUSED EXPORTS: updateStatus

// EXTERNAL MODULE: ./src/scroll-parallax-effect/lib/scrollStatus.ts
var scrollStatus = __webpack_require__(251);
// EXTERNAL MODULE: ./src/scroll-parallax-effect/utils/util.ts
var util = __webpack_require__(833);
;// CONCATENATED MODULE: ./src/scroll-parallax-effect/lib/speed.ts

var Speed = /** @class */ (function () {
    function Speed(ops) {
        this.el = ops.el;
        this.speeds = typeof ops.speed === 'object' ? ops.speed : ops.speed ? [ops.speed] : [];
        this.mins = typeof ops.min === 'object' ? ops.min : ops.min ? [ops.min] : [];
        this.maxs = typeof ops.max === 'object' ? ops.max : ops.max ? [ops.max] : [];
        this.contentScrollPositionStyleValues = typeof ops.contentScrollPositionStyleValue === 'object' ? ops.contentScrollPositionStyleValue : ops.contentScrollPositionStyleValue ? [ops.contentScrollPositionStyleValue] : [];
        this.contentScrollPosition = ops.contentScrollPosition || 0;
        this.styles = this.generateStyles((typeof ops.style === 'object' ? ops.style : ops.style ? [ops.style] : []));
    }
    Speed.prototype.generateStyles = function (styles) {
        var _this = this;
        return styles.map(function (name, i) {
            var _a;
            var contentScrollPositionStyleValues = _this.contentScrollPositionStyleValues[i] || (_this.el ? (_a = document.defaultView) === null || _a === void 0 ? void 0 : _a.getComputedStyle(_this.el, null)[(0,util/* generateCamelCaseStyle */.Di)(name)] : 0);
            var styleValue = (0,util/* generateStyleValue */.Mv)(contentScrollPositionStyleValues);
            return {
                name: name,
                speed: _this.speeds[i] || _this.speeds[0],
                min: _this.mins[i] || _this.mins[0],
                max: _this.maxs[i] || _this.maxs[0],
                contentStyleValue: styleValue,
                styleValues: (0,util/* getStyleValues */.fL)(styleValue)
            };
        });
    };
    Speed.prototype.generateValues = function (status, style) {
        var _this = this;
        return style.styleValues.map(function (value, j) {
            var _speed = (typeof style.speed === 'object' ? style.speed[j] : style.speed);
            _speed = typeof _speed === 'number' ? _speed : 2;
            var newValue = -(-status.scrollPosition * _speed + (0,util/* scrollPositionStringToNumber */.U3)(_this.contentScrollPosition, status) * _speed) + value;
            var _min = (typeof style.min === 'object' ? style.min && style.min[j] : style.min);
            var _max = (typeof style.max === 'object' ? style.max && style.max[j] : style.max);
            newValue = Math.max(newValue, typeof _min === 'number' ? _min : -99999);
            newValue = Math.min(newValue, typeof _max === 'number' ? _max : 99999);
            if (style.contentStyleValue.indexOf('rgb') >= 0) {
                newValue = Math.max(typeof newValue === 'string' ? parseFloat(newValue) : newValue, 0);
            }
            return newValue;
        });
    };
    Speed.prototype.getStyleValues = function (status) {
        var _this = this;
        return this.styles.reduce(function (result, style) {
            var _a;
            return Object.assign({}, result, (_a = {},
                _a[style.name] = (0,util/* generateStyleValueString */.fF)(style.contentStyleValue, _this.generateValues(status, style)),
                _a));
        }, {});
    };
    return Speed;
}());
/* harmony default export */ const speed = (Speed);

;// CONCATENATED MODULE: ./src/scroll-parallax-effect/speed.ts



var defaultParallaxStatus = scrollStatus/* Status */.qb;
var updateStatus = function (opt) { return defaultParallaxStatus.setVal(opt); };
var ParallaxSpeed = /** @class */ (function () {
    function ParallaxSpeed(element, opt, scrollEventOpt) {
        var _this = this;
        var el = (0,util/* getElement */.sb)(element);
        var s = new speed({
            el: el,
            style: (opt === null || opt === void 0 ? void 0 : opt.style) || (opt === null || opt === void 0 ? void 0 : opt.styles),
            speed: opt === null || opt === void 0 ? void 0 : opt.speed,
            min: opt === null || opt === void 0 ? void 0 : opt.min,
            max: opt === null || opt === void 0 ? void 0 : opt.max,
            contentScrollPosition: (opt === null || opt === void 0 ? void 0 : opt.contentScrollPosition) === 0 || (opt === null || opt === void 0 ? void 0 : opt.contentScrollPosition) ? opt === null || opt === void 0 ? void 0 : opt.contentScrollPosition : el,
            contentScrollPositionStyleValue: opt === null || opt === void 0 ? void 0 : opt.contentScrollPositionStyleValue
        });
        this.speed = s;
        (0,util/* setScrollEvents */.Ih)(function (status) {
            Object.assign(el.style, s.getStyleValues(status));
            return _this.speed;
        }, {
            targetPercentage: (opt === null || opt === void 0 ? void 0 : opt.targetPercentage) || (scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.targetPercentage),
            threshold: (opt === null || opt === void 0 ? void 0 : opt.threshold) || (scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.threshold),
            status: (opt === null || opt === void 0 ? void 0 : opt.status) || (scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.status)
        });
    }
    ParallaxSpeed.prototype.getValues = function () {
        return this.speed;
    };
    return ParallaxSpeed;
}());



/***/ }),

/***/ 388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ParallaxTiming": () => (/* binding */ ParallaxTiming)
});

// UNUSED EXPORTS: updateStatus

// EXTERNAL MODULE: ./src/scroll-parallax-effect/lib/scrollStatus.ts
var scrollStatus = __webpack_require__(251);
// EXTERNAL MODULE: ./src/scroll-parallax-effect/utils/util.ts
var util = __webpack_require__(833);
;// CONCATENATED MODULE: ./src/scroll-parallax-effect/lib/timing.ts

var Timing = /** @class */ (function () {
    function Timing(opt) {
        this.isLineOver = false;
        this.el = opt.el;
        this.eventScrollElementPosition = opt.triggerPosition;
        this.toggle = opt.toggle || [function (e, o) { }, function (e, o) { }];
    }
    Timing.prototype.getEventScrollElementPosition = function (status) {
        return (0,util/* scrollPositionStringToNumber */.U3)(this.eventScrollElementPosition ? this.eventScrollElementPosition : (0,util/* _offset */.LR)(this.el, status.endScrollPosition, status.directionPositionName), status);
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

;// CONCATENATED MODULE: ./src/scroll-parallax-effect/timing.ts



var defaultParallaxStatus = scrollStatus/* Status */.qb;
var updateStatus = function (opt) { return defaultParallaxStatus.setVal(opt); };
var ParallaxTiming = /** @class */ (function () {
    function ParallaxTiming(element, opt, scrollEventOpt) {
        var _this = this;
        var el = element ? (0,util/* getElement */.sb)(element) : undefined;
        var timingEvent = Object.prototype.toString.call(opt) === '[object Array]' ? opt : ((opt === null || opt === void 0 ? void 0 : opt.start) ? [opt === null || opt === void 0 ? void 0 : opt.start, opt === null || opt === void 0 ? void 0 : opt.end] : opt === null || opt === void 0 ? void 0 : opt.toggle);
        var c = (opt === null || opt === void 0 ? void 0 : opt.className) || 'on';
        this.timing = new timing({
            el: (opt === null || opt === void 0 ? void 0 : opt.target) ? (0,util/* getElement */.sb)(opt.target) : el,
            triggerPosition: opt === null || opt === void 0 ? void 0 : opt.triggerPosition,
            toggle: timingEvent || [
                function (t, o) { el === null || el === void 0 ? void 0 : el.classList.add(c); },
                function (t, o) { el === null || el === void 0 ? void 0 : el.classList.remove(c); },
            ]
        });
        (0,util/* setScrollEvents */.Ih)(function (status) {
            _this.timing.timingEvent(status);
            return _this.timing;
        }, {
            targetPercentage: (opt === null || opt === void 0 ? void 0 : opt.targetPercentage) || (scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.targetPercentage),
            threshold: (opt === null || opt === void 0 ? void 0 : opt.threshold) || (scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.threshold),
            status: (opt === null || opt === void 0 ? void 0 : opt.status) || (scrollEventOpt === null || scrollEventOpt === void 0 ? void 0 : scrollEventOpt.status)
        });
    }
    ParallaxTiming.prototype.getValues = function () {
        return this.timing;
    };
    return ParallaxTiming;
}());



/***/ }),

/***/ 833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Di": () => (/* binding */ generateCamelCaseStyle),
/* harmony export */   "Ih": () => (/* binding */ setScrollEvents),
/* harmony export */   "LR": () => (/* binding */ _offset),
/* harmony export */   "Mv": () => (/* binding */ generateStyleValue),
/* harmony export */   "U3": () => (/* binding */ scrollPositionStringToNumber),
/* harmony export */   "fF": () => (/* binding */ generateStyleValueString),
/* harmony export */   "fL": () => (/* binding */ getStyleValues),
/* harmony export */   "sb": () => (/* binding */ getElement)
/* harmony export */ });
/* unused harmony exports kebabToCamelCase, generateHex, generateRGB, hexadecimalToRgb, getStringColor */
/* harmony import */ var _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(251);

var defaultParallaxStatus = _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_0__/* .Status */ .qb;
var ERRROR_PREFIX = '[scroll-parallax-effect]';
var setScrollEvents = function (func, _a) {
    var _b = _a === void 0 ? {} : _a, targetPercentage = _b.targetPercentage, threshold = _b.threshold, _c = _b.status, status = _c === void 0 ? defaultParallaxStatus : _c;
    var isNewScrollPosition = !!(targetPercentage && (targetPercentage !== status.targetPercentage)) || !!(threshold && (threshold !== status.threshold));
    status.functions.push([
        func,
        // targetPercentageが違った場合は新しくScrollPositionを作る、statusが異なった場合もstatusのscrollPositiuonを入れる
        isNewScrollPosition ? new _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_0__/* .ScrollPosition */ .Ij(Object.assign({}, status, { targetPercentage: targetPercentage, threshold: threshold })) :
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


/***/ }),

/***/ 748:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__748__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(748);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(251);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// @ts-nocheck



var generateScrollStatusValues = function (Vue, opt, $scrollStatus) {
    if (opt === void 0) { opt = {}; }
    if (opt.name) {
        var scrollObj = {
            scrollPosition: _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_1__/* .Status.scrollPosition */ .qb.scrollPosition,
            contentSize: _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_1__/* .Status.contentSize */ .qb.contentSize,
            values: {}
        };
        $scrollStatus[opt.name] = Vue.observable ? Vue.observable(scrollObj) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(scrollObj);
    }
    var scrollStatus = opt.name ? $scrollStatus[opt.name] : $scrollStatus;
    return __assign(__assign({}, opt), { updateFunction: function (status) {
            scrollStatus.scrollPosition = status.scrollPosition;
            scrollStatus.contentSize = status.contentSize;
            scrollStatus.values = Object.assign({}, scrollStatus.values, status.functions.map(function (_a) {
                var current = _a[0], scrollPosition = _a[1];
                return current(scrollPosition ?
                    Object.assign({}, status, { scrollPosition: scrollPosition.generateScrollPosition() }) :
                    status);
            }).filter(function (v) { return v; }));
        } });
};
var Parallax = {
    install: function (Vue, opt) {
        var _a, _b, _c;
        var isVue3 = Vue.version.startsWith('3');
        var prototype = isVue3 ? Vue.config.globalProperties : Vue.prototype;
        var beforeMount = isVue3 ? 'beforeMount' : 'bind';
        var scrollObj = {
            scrollPosition: _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_1__/* .Status.scrollPosition */ .qb.scrollPosition,
            contentSize: _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_1__/* .Status.contentSize */ .qb.contentSize,
            values: {}
        };
        var $scrollStatus = Vue.observable ? Vue.observable(scrollObj) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(scrollObj);
        _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_1__/* .Status.setVal */ .qb.setVal(generateScrollStatusValues(Vue, opt, $scrollStatus));
        prototype.$scrollStatus = $scrollStatus;
        Vue.directive('parallax-timing', (_a = {},
            _a[beforeMount] = function (el, _a, d) {
                var value = _a.value;
                var o = isVue3 ? d.props : d.data.attrs;
                var opt = value || o;
                setTimeout(function () {
                    var timing = new _index__WEBPACK_IMPORTED_MODULE_2__.ParallaxTiming(el, opt, {
                        targetPercentage: opt === null || opt === void 0 ? void 0 : opt.targetPercentag,
                        threshold: opt === null || opt === void 0 ? void 0 : opt.threshold,
                        status: opt === null || opt === void 0 ? void 0 : opt.status
                    });
                }, 0);
            },
            _a));
        Vue.directive('parallax-speed', (_b = {},
            _b[beforeMount] = function (el, _a, d) {
                var value = _a.value;
                var o = isVue3 ? d.props : d.data.attrs;
                var opt = value || o;
                setTimeout(function () {
                    var element = opt.el || el;
                    var speed = new _index__WEBPACK_IMPORTED_MODULE_2__.ParallaxSpeed(element, __assign(__assign({}, opt), { style: opt.styles }), {
                        targetPercentage: opt === null || opt === void 0 ? void 0 : opt.targetPercentag,
                        threshold: opt === null || opt === void 0 ? void 0 : opt.threshold,
                        status: opt === null || opt === void 0 ? void 0 : opt.status
                    });
                }, 0);
            },
            _b));
        Vue.directive('parallax-fit', (_c = {},
            _c[beforeMount] = function (el, _a, d) {
                var value = _a.value;
                var o = isVue3 ? d.props : d.data.attrs;
                var opt = value || o;
                setTimeout(function () {
                    var element = opt.el || el;
                    var fit = new _index__WEBPACK_IMPORTED_MODULE_2__.ParallaxFit(element, opt, {
                        targetPercentage: opt === null || opt === void 0 ? void 0 : opt.targetPercentag,
                        threshold: opt === null || opt === void 0 ? void 0 : opt.threshold,
                        status: opt === null || opt === void 0 ? void 0 : opt.status
                    });
                }, 0);
            },
            _c));
        Vue.mixin({
            methods: {
                createStatus: function (opt) {
                    if (opt === void 0) { opt = {}; }
                    var status = new _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP();
                    status.setVal(opt.name ? generateScrollStatusValues(Vue, opt, this.$scrollStatus) : opt);
                    return status;
                },
                parallaxTiming: function (opt) {
                    if (opt === void 0) { opt = {}; }
                    return new _index__WEBPACK_IMPORTED_MODULE_2__.ParallaxTiming(opt.target || opt.el, opt, {
                        targetPercentage: opt === null || opt === void 0 ? void 0 : opt.targetPercentag,
                        threshold: opt === null || opt === void 0 ? void 0 : opt.threshold,
                        status: opt === null || opt === void 0 ? void 0 : opt.status
                    });
                },
                parallaxSpeed: function (opt) {
                    return new _index__WEBPACK_IMPORTED_MODULE_2__.ParallaxSpeed(opt.el, __assign(__assign({}, opt), { style: opt.styles }), {
                        targetPercentage: opt === null || opt === void 0 ? void 0 : opt.targetPercentag,
                        threshold: opt === null || opt === void 0 ? void 0 : opt.threshold,
                        status: opt === null || opt === void 0 ? void 0 : opt.status
                    });
                },
                parallaxFit: function (opt) {
                    return new _index__WEBPACK_IMPORTED_MODULE_2__.ParallaxFit(opt.el, opt, {
                        targetPercentage: opt === null || opt === void 0 ? void 0 : opt.targetPercentag,
                        threshold: opt === null || opt === void 0 ? void 0 : opt.threshold,
                        status: opt === null || opt === void 0 ? void 0 : opt.status
                    });
                },
            }
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Parallax);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});