export const easing = {
  linear: function (t: number, b: number, c: number) {
    return b + c * t;
  },
  easeInQuad: function (i: number, b: number, c: number, d: number) {
    return c * (i /= d) * i + b;
  },
  easeOutQuad: function (i: number, b: number, c: number, d: number) {
    return -c * (i /= d) * (i - 2) + b;
  },
  easeInOutQuad: function (i: number, b: number, c: number, d: number) {
    if ((i /= d / 2) < 1) {
      return (c / 2) * i * i + b;
    }
    return (-c / 2) * (--i * (i - 2) - 1) + b;
  },
  easeInCubic: function (i: number, b: number, c: number, d: number) {
    return c * (i /= d) * i * i + b;
  },
  easeOutCubic: function (i: number, b: number, c: number, d: number) {
    return c * ((i = i / d - 1) * i * i + 1) + b;
  },
  easeInOutCubic: function (i: number, b: number, c: number, d: number) {
    if ((i /= d / 2) < 1) {
      return (c / 2) * i * i * i + b;
    }
    return (c / 2) * ((i -= 2) * i * i + 2) + b;
  },
  easeInQuart: function (i: number, b: number, c: number, d: number) {
    return c * (i /= d) * i * i * i + b;
  },
  easeOutQuart: function (i: number, b: number, c: number, d: number) {
    return -c * ((i = i / d - 1) * i * i * i - 1) + b;
  },
  easeInOutQuart: function (i: number, b: number, c: number, d: number) {
    if ((i /= d / 2) < 1) {
      return (c / 2) * i * i * i * i + b;
    }
    return (-c / 2) * ((i -= 2) * i * i * i - 2) + b;
  },
  easeInQuint: function (i: number, b: number, c: number, d: number) {
    return c * (i /= d) * i * i * i * i + b;
  },
  easeOutQuint: function (i: number, b: number, c: number, d: number) {
    return c * ((i = i / d - 1) * i * i * i * i + 1) + b;
  },
  easeInOutQuint: function (i: number, b: number, c: number, d: number) {
    if ((i /= d / 2) < 1) {
      return (c / 2) * i * i * i * i * i + b;
    }
    return (c / 2) * ((i -= 2) * i * i * i * i + 2) + b;
  },
  easeInSine: function (i: number, b: number, c: number, d: number) {
    return -c * Math.cos((i / d) * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function (i: number, b: number, c: number, d: number) {
    return c * Math.sin((i / d) * (Math.PI / 2)) + b;
  },
  easeInOutSine: function (i: number, b: number, c: number, d: number) {
    return (-c / 2) * (Math.cos((Math.PI * i) / d) - 1) + b;
  },
  easeInExpo: function (i: number, b: number, c: number, d: number) {
    return i == 0 ? b : c * Math.pow(2, 10 * (i / d - 1)) + b;
  },
  easeOutExpo: function (i: number, b: number, c: number, d: number) {
    return i == d ? b + c : c * (-Math.pow(2, (-10 * i) / d) + 1) + b;
  },
  easeInOutExpo: function (i: number, b: number, c: number, d: number) {
    if (i == 0) {
      return b;
    }
    if (i == d) {
      return b + c;
    }
    if ((i /= d / 2) < 1) {
      return (c / 2) * Math.pow(2, 10 * (i - 1)) + b;
    }
    return (c / 2) * (-Math.pow(2, -10 * --i) + 2) + b;
  },
  easeInCirc: function (i: number, b: number, c: number, d: number) {
    return -c * (Math.sqrt(1 - (i /= d) * i) - 1) + b;
  },
  easeOutCirc: function (i: number, b: number, c: number, d: number) {
    return c * Math.sqrt(1 - (i = i / d - 1) * i) + b;
  },
  easeInOutCirc: function (i: number, b: number, c: number, d: number) {
    if ((i /= d / 2) < 1) {
      return (-c / 2) * (Math.sqrt(1 - i * i) - 1) + b;
    }
    return (c / 2) * (Math.sqrt(1 - (i -= 2) * i) + 1) + b;
  },
  easeInElastic: function (m: number, p: number, a: number, b: number) {
    var d = 1.70158;
    var c = 0;
    var n = a;
    if (m == 0) {
      return p;
    }
    if ((m /= b) == 1) {
      return p + a;
    }
    if (!c) {
      c = b * 0.3;
    }
    if (n < Math.abs(a)) {
      n = a;
      var d = c / 4;
    } else {
      var d = (c / (2 * Math.PI)) * Math.asin(a / n);
    }
    return (
      -(
        n *
        Math.pow(2, 10 * (m -= 1)) *
        Math.sin(((m * b - d) * (2 * Math.PI)) / c)
      ) + p
    );
  },
  easeOutElastic: function (m: number, p: number, a: number, b: number) {
    var d = 1.70158;
    var c = 0;
    var n = a;
    if (m == 0) {
      return p;
    }
    if ((m /= b) == 1) {
      return p + a;
    }
    if (!c) {
      c = b * 0.3;
    }
    if (n < Math.abs(a)) {
      n = a;
      var d = c / 4;
    } else {
      var d = (c / (2 * Math.PI)) * Math.asin(a / n);
    }
    return (
      n * Math.pow(2, -10 * m) * Math.sin(((m * b - d) * (2 * Math.PI)) / c) +
      a +
      p
    );
  },
  easeInOutElastic: function (m: number, p: number, a: number, b: number) {
    var d = 1.70158;
    var c = 0;
    var n = a;
    if (m == 0) {
      return p;
    }
    if ((m /= b / 2) == 2) {
      return p + a;
    }
    if (!c) {
      c = b * (0.3 * 1.5);
    }
    if (n < Math.abs(a)) {
      n = a;
      var d = c / 4;
    } else {
      var d = (c / (2 * Math.PI)) * Math.asin(a / n);
    }
    if (m < 1) {
      return (
        -0.5 *
          (n *
            Math.pow(2, 10 * (m -= 1)) *
            Math.sin(((m * b - d) * (2 * Math.PI)) / c)) +
        p
      );
    }
    return (
      n *
        Math.pow(2, -10 * (m -= 1)) *
        Math.sin(((m * b - d) * (2 * Math.PI)) / c) *
        0.5 +
      a +
      p
    );
  },
  easeInBack: function (k: number, b: number, c: number, d: number, j: number) {
    if (j == undefined) {
      j = 1.70158;
    }
    return c * (k /= d) * k * ((j + 1) * k - j) + b;
  },
  easeOutBack: function (
    k: number,
    b: number,
    c: number,
    d: number,
    j: number
  ) {
    if (j == undefined) {
      j = 1.70158;
    }
    return c * ((k = k / d - 1) * k * ((j + 1) * k + j) + 1) + b;
  },
  easeInOutBack: function (
    k: number,
    b: number,
    c: number,
    d: number,
    j: number
  ) {
    if (j == undefined) {
      j = 1.70158;
    }
    if ((k /= d / 2) < 1) {
      return (c / 2) * (k * k * (((j *= 1.525) + 1) * k - j)) + b;
    }
    return (c / 2) * ((k -= 2) * k * (((j *= 1.525) + 1) * k + j) + 2) + b;
  },
  easeInBounce: function (i: number, b: number, c: number, d: number) {
    return c - easing.easeOutBounce(d - i, 0, c, d) + b;
  },
  easeOutBounce: function (i: number, b: number, c: number, d: number) {
    if ((i /= d) < 1 / 2.75) {
      return c * (7.5625 * i * i) + b;
    } else {
      if (i < 2 / 2.75) {
        return c * (7.5625 * (i -= 1.5 / 2.75) * i + 0.75) + b;
      } else {
        if (i < 2.5 / 2.75) {
          return c * (7.5625 * (i -= 2.25 / 2.75) * i + 0.9375) + b;
        } else {
          return c * (7.5625 * (i -= 2.625 / 2.75) * i + 0.984375) + b;
        }
      }
    }
  },
  easeInOutBounce: function (i: number, b: number, c: number, d: number) {
    if (i < d / 2) {
      return easing.easeInBounce(i * 2, 0, c, d) * 0.5 + b;
    }
    return easing.easeOutBounce(i * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
  },
};
export type EasingFunction = (
  i: number,
  b: number,
  c: number,
  d: number
) => number;
export type Easing =
  | keyof typeof easing
  | ((i: number, b: number, c: number, d: number) => number);
