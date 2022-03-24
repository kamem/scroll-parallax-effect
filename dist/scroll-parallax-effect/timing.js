(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["scroll-parallax-effect"] = factory();
	else
		root["scroll-parallax-effect"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ij": () => (/* binding */ ScrollPosition),
/* harmony export */   "qb": () => (/* binding */ Status)
/* harmony export */ });
var requestAnimationFrame = window.requestAnimationFrame;
var ScrollStatus = /** @class */ (function () {
    function ScrollStatus() {
        this.stage = __webpack_require__.g;
        this.direction = 'y';
        this.functions = [];
        this.targetPercentage = 0.2;
        this.setDirectionInfo();
        this.ScrollPosition = new ScrollPosition(this);
        this.scrollPosition = this.ScrollPosition.generateScrollPosition();
        this.endScrollPosition = this.ScrollPosition.endScrollPosition;
        this.scrollEventUpdate();
    }
    ScrollStatus.prototype.setVal = function (opt) {
        this.stage = opt.stage ? opt.stage : __webpack_require__.g;
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
        this.update();
        if (this.updateFunction) {
            this.updateFunction(this);
        }
        else {
            this.functions.forEach(function (_a) {
                var func = _a[0], scrollPosition = _a[1];
                func(scrollPosition ?
                    Object.assign({}, _this, { scrollPosition: scrollPosition.generateScrollPosition() }) :
                    _this);
            });
        }
        requestAnimationFrame(this.scrollEventUpdate.bind(this));
    };
    ScrollStatus.prototype.update = function () {
        this.scrollPosition = this.ScrollPosition.generateScrollPosition();
        this.endScrollPosition = this.ScrollPosition.endScrollPosition;
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
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ScrollStatus)));
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

/***/ 833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ih": () => (/* binding */ setScrollEvents),
/* harmony export */   "LR": () => (/* binding */ _offset),
/* harmony export */   "U3": () => (/* binding */ scrollPositionStringToNumber),
/* harmony export */   "sb": () => (/* binding */ getElement)
/* harmony export */ });
/* unused harmony exports kebabToCamelCase, generateCamelCaseStyle, getStyleValues, generateStyleValue, generateStyleValueString, generateHex, generateRGB, hexadecimalToRgb, getStringColor */
/* harmony import */ var _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(251);

var defaultParallaxStatus = _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_0__/* .Status */ .qb;
var setScrollEvents = function (func, _a) {
    var _b = _a === void 0 ? {} : _a, targetPercentage = _b.targetPercentage, threshold = _b.threshold, _c = _b.status, status = _c === void 0 ? defaultParallaxStatus : _c;
    var isNewScrollPosition = !!(targetPercentage && (targetPercentage !== status.targetPercentage)) || !!(threshold && (threshold !== status.threshold));
    status.functions.push([
        func,
        // targetPercentageが違った場合は新しくScrollPositionを作る、statusが異なった場合もstatusのscrollPositiuonを入れる
        isNewScrollPosition ? new _lib_scrollStatus__WEBPACK_IMPORTED_MODULE_0__/* .ScrollPosition */ .Ij(Object.assign({}, status, { targetPercentage: targetPercentage, threshold: threshold })) :
            status !== defaultParallaxStatus && status.ScrollPosition
    ]);
};
var kebabToCamelCase = function (str) {
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
        throw "undefined element \"".concat(element, "\"");
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
var _offset = function (element, endScrollPosition, directionPositionName) {
    var el = typeof element === 'string' ? document.querySelector(element) : element;
    var dir = directionPositionName === 'Left' ? 'left' : 'top';
    return el ? el.getBoundingClientRect()[dir] + endScrollPosition : 0;
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
};


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ParallaxTiming": () => (/* binding */ ParallaxTiming),
  "updateStatus": () => (/* binding */ updateStatus)
});

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
        this.toggle = opt.toggle;
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
        var el = (0,util/* getElement */.sb)(element);
        var timingEvent = Object.prototype.toString.call(opt) === '[object Array]' ? opt : ((opt === null || opt === void 0 ? void 0 : opt.start) ? [opt === null || opt === void 0 ? void 0 : opt.start, opt === null || opt === void 0 ? void 0 : opt.end] : opt === null || opt === void 0 ? void 0 : opt.toggle);
        var c = (opt === null || opt === void 0 ? void 0 : opt.className) || 'on';
        this.timing = new timing({
            el: (opt === null || opt === void 0 ? void 0 : opt.target) ? (0,util/* getElement */.sb)(opt.target) : el,
            triggerPosition: opt === null || opt === void 0 ? void 0 : opt.triggerPosition,
            toggle: timingEvent || [
                function (t, o) { el.classList.add(c); },
                function (t, o) { el.classList.remove(c); },
            ]
        });
        (0,util/* setScrollEvents */.Ih)(function (status) {
            _this.timing.timingEvent(status);
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


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});