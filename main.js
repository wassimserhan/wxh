function pickHex(e, t, n) {
  var o = n,
    i = 2 * o - 1,
    r = (i / 1 + 1) / 2,
    a = 1 - r,
    s = [
      Math.round(e[0] * r + t[0] * a),
      Math.round(e[1] * r + t[1] * a),
      Math.round(e[2] * r + t[2] * a)
    ];
  return 'rgb(' + s[0] + ',' + s[1] + ',' + s[2] + ')';
}
function getRGB(e) {
  return one
    .color(e)
    .cssa()
    .replace('rgba(', '')
    .replace(')', '')
    .split(',')
    .map(function (e) {
      return parseFloat(e);
    });
}
function findObjectByKey(e, t, n) {
  for (var o = 0; o < e.length; o++) if (e[o][t] === n) return e[o];
  return null;
}
function loadFacts() {
  if (isMobile) {
    $('.index-fact').on('click', toggleFact);
  }
}
function toggleFact() {
  this.classList.toggle('is-active');
}
function loadOptions() {
  var e = $('.js-rsvp-option');
  e.on('click', function () {
    e.toArray().forEach(function (e) {
      e.classList.remove('is-active');
    }),
      this.classList.add('is-active'),
      this == e[0] && this.classList.contains('is-active')
        ? $('.js-rsvp-show')[0].classList.add('is-active')
        : $('.js-rsvp-show')[0].classList.remove('is-active');
  });
}
// function loadForm() {
//   var e = document.querySelector('.js-form'),
//     t = document.querySelector('.js-form-submit'),
//     n =
//       (document.querySelector('.js-form-error'),
//       document.querySelector('.js-form-success'));
//   t.addEventListener('click', function () {
//     console.log('click');
//     var o = {
//       NAME: document.querySelector('.js-form-name').value,
//       RESPONSE: document.querySelector('.js-rsvp-option.is-active').dataset
//         .value,
//       ATTENDING: document.querySelector('.js-form-attending').value,
//       DIET: document.querySelector('.js-form-diet').value
//     };
//     t.classList.add('is-disabled'),
//       (t.innerHTML = 'Submitting...'),
//       (t.disabled = !0),
//       $.post(
//         'https://script.google.com/macros/s/AKfycbwXJKOxUkeMWbaWtaaN7y5vqJqnoxItCrihQkz4-Q/exec',
//         o,
//         function (t) {
//           console.log(t),
//             (e.style.display = 'none'),
//             (n.style.display = 'block');
//         }
//       );
//   });
// }
function loadNav() {
  var e = $('.nav')[0];
  animate({
    el: e,
    translateY: ['-100%', '0%'],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutBack'
  });
}
function indexAnimation() {
  var e = 800,
    t = $('.index-bl-green-outline')[0];
  animate({
    el: t,
    rotate: ['-3deg', '0deg'],
    opacity: [0, 1],
    duration: e + 3e3,
    delay: 250,
    easing: 'easeOutBack'
  });
  var n = $('.index-bl-yellow-flower')[0];
  animate({
    el: n,
    scale: [0.9, 1],
    opacity: [0, 1],
    duration: e + 1500,
    delay: 2e3,
    easing: 'easeOutBack'
  });
  var o = $('.index-bl-cactus')[0];
  animate({
    el: o,
    rotate: ['-3deg', '0deg'],
    opacity: [0, 1],
    duration: e + 3e3,
    delay: 650,
    easing: 'easeOutBack'
  });
  var i = $('.index-bl-red-flower')[0];
  animate({
    el: i,
    scale: [0.9, 1],
    opacity: [0, 1],
    duration: e + 1500,
    delay: 1800,
    easing: 'easeOutBack'
  });
  var r = $('.index-bl-moss-outline')[0];
  animate({
    el: r,
    scaleY: [0.9, 1],
    opacity: [0, 1],
    duration: e + 1500,
    delay: 800,
    easing: 'easeOutBack'
  });
  var a = $('.index-bl-pink-md')[0];
  animate({
    el: a,
    rotate: ['10deg', '0deg'],
    opacity: [0, 1],
    duration: e + 1500,
    delay: 900,
    easing: 'easeOutBack'
  });
  var s = $('.index-bl-yellow-md')[0];
  animate({
    el: s,
    scaleY: [0.9, 1],
    opacity: [0, 1],
    duration: e + 1800,
    delay: 900,
    easing: 'easeOutBack'
  });
  var l = $('.index-bl-green-dots')[0];
  animate({
    el: l,
    scale: [0.9, 1],
    opacity: [0, 1],
    duration: e + 1500,
    delay: 1400,
    easing: 'easeOutBack'
  });
  var u = $('.index-br-pink')[0];
  animate({
    el: u,
    rotate: ['-9deg', '0deg'],
    opacity: [0, 1],
    duration: e + 2400,
    delay: 850,
    easing: 'easeOutBack'
  });
  var c = $('.index-br-red-dots')[0];
  animate({
    el: c,
    scale: [0.9, 1],
    opacity: [0, 1],
    duration: e + 1500,
    delay: 2e3,
    easing: 'easeOutBack'
  });
  var d = $('.index-br-green-outline')[0];
  animate({
    el: d,
    rotate: ['-3deg', '0deg'],
    opacity: [0, 1],
    duration: e + 3e3,
    delay: 250,
    easing: 'easeOutBack'
  });
  var f = $('.index-br-green-big')[0];
  animate({
    el: f,
    rotate: ['-3deg', '0deg'],
    opacity: [0, 1],
    duration: e + 3e3,
    delay: 650,
    easing: 'easeOutBack'
  });
  var p = $('.index-br-red-outline')[0];
  animate({
    el: p,
    rotate: ['7deg', '0deg'],
    opacity: [0, 1],
    duration: e + 2800,
    delay: 1050,
    easing: 'easeOutBack'
  });
  var m = $('.index-br-dark-outline')[0];
  animate({
    el: m,
    scaleY: [0.9, 1],
    opacity: [0, 1],
    duration: e + 2800,
    delay: 350,
    easing: 'easeOutBack'
  });
  var h = $('.index-br-green-leaf')[0];
  animate({
    el: h,
    rotate: ['3deg', '0deg'],
    opacity: [0, 1],
    duration: e + 2800,
    delay: 250,
    easing: 'easeOutBack'
  });
  var g = $('.index-br-green-dots')[0];
  animate({
    el: g,
    scale: [0.9, 1],
    opacity: [0, 1],
    duration: e + 2800,
    delay: 1650,
    easing: 'easeOutBack'
  });
}
function startAnimation() {
  var e = $('.save-bl-pink')[0];
  animate({
    el: e,
    rotate: ['-3deg', '0deg'],
    opacity: [0, 1],
    duration: 1500,
    delay: 250,
    easing: 'easeOutBack'
  });
  var t = $('.save-bl-green-small')[0];
  animate({
    el: t,
    rotate: ['-5deg', '0deg'],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutBack'
  });
  var n = $('.save-bl-red-dots')[0];
  animate({
    el: n,
    scale: [0.9, 1],
    opacity: [0, 1],
    delay: 500,
    duration: 1500,
    easing: 'easeOutBack'
  });
  var o = $('.save-bl-green-big')[0];
  animate({
    el: o,
    rotate: ['3deg', '0deg'],
    opacity: [0, 1],
    delay: 0,
    duration: 1500,
    easing: 'easeOutBack'
  });
  var i = $('.save-bl-red-leaf')[0];
  animate({
    el: i,
    rotate: ['10deg', '0deg'],
    opacity: [0, 1],
    delay: 300,
    duration: 2200,
    easing: 'easeOutBack'
  });
  var r = $('.save-bl-green-med')[0];
  animate({
    el: r,
    scale: [0.9, 1],
    opacity: [0, 1],
    delay: 0,
    duration: 2200,
    easing: 'easeOutBack'
  });
  var a = $('.save-bl-green-leaf')[0];
  animate({
    el: a,
    rotate: ['10deg', '0deg'],
    opacity: [0, 1],
    delay: 300,
    duration: 1800,
    easing: 'easeOutBack'
  });
  var s = $('.save-bl-green-dots')[0];
  animate({
    el: s,
    scale: [0.9, 1],
    opacity: [0, 1],
    delay: 500,
    duration: 1800,
    easing: 'easeOutBack'
  });
  var l = $('.save-br-yellow-star')[0];
  animate({
    el: l,
    scale: [0.9, 1],
    opacity: [0, 1],
    delay: 500,
    duration: 1800,
    easing: 'easeOutBack'
  });
  var u = $('.save-br-green-light')[0];
  animate({
    el: u,
    rotate: ['10deg', '0deg'],
    scale: [0.9, 1],
    opacity: [0, 1],
    delay: 0,
    duration: 2200,
    easing: 'easeOutBack'
  });
  var c = $('.save-br-cactus')[0];
  animate({
    el: c,
    translateX: ['10px', '0px'],
    opacity: [0, 1],
    delay: 0,
    duration: 1700,
    easing: 'easeOutBack'
  });
  var d = $('.save-br-red')[0];
  animate({
    el: d,
    scale: [0.9, 1],
    opacity: [0, 1],
    delay: 350,
    duration: 1900,
    easing: 'easeOutBack'
  });
  var d = $('.save-br-green-big')[0];
  animate({
    el: d,
    rotate: ['4deg', '0deg'],
    opacity: [0, 1],
    delay: 200,
    duration: 1900,
    easing: 'easeOutBack'
  });
  var f = $('.save-br-yellow')[0];
  animate({
    el: f,
    scale: [0.9, 1],
    opacity: [0, 1],
    delay: 0,
    duration: 1600,
    easing: 'easeOutBack'
  });
  var p = $('.save-br-pink')[0];
  animate({
    el: p,
    rotate: ['-2deg', '0deg'],
    opacity: [0, 1],
    delay: 300,
    duration: 1800,
    easing: 'easeOutBack'
  });
  var m = $('.save-br-green-dots')[0];
  animate({
    el: m,
    scale: [0.9, 1],
    opacity: [0, 1],
    delay: 500,
    duration: 1700,
    easing: 'easeOutBack'
  });
}
var animate = (function () {
  function e(e) {
    return Array.isArray(e) ? e : Array.prototype.slice.call(e);
  }
  var t = function (e) {
      var t = e.length;
      return function n() {
        for (var o = arguments.length, i = Array(o), r = 0; r < o; r++)
          i[r] = arguments[r];
        return i.length < t
          ? function () {
              for (var e = arguments.length, t = Array(e), o = 0; o < e; o++)
                t[o] = arguments[o];
              return n.apply(void 0, i.concat(t));
            }
          : e.apply(void 0, i);
      };
    },
    n = function () {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e) {
        return t.reduce(function (e, t) {
          return t(e);
        }, e);
      };
    },
    o = function (e) {
      return function () {
        return !e.apply(void 0, arguments);
      };
    },
    i = {
      linear: function (e, t, n, o) {
        return t + (e / o) * n;
      },
      easeInQuad: function (e, t, n, o) {
        return n * (e /= o) * e + t;
      },
      easeInCubic: function (e, t, n, o) {
        return n * (e /= o) * e * e + t;
      },
      easeInQuart: function (e, t, n, o) {
        return n * (e /= o) * e * e * e + t;
      },
      easeInQuint: function (e, t, n, o) {
        return n * (e /= o) * e * e * e * e + t;
      },
      easeInSine: function (e, t, n, o) {
        return -n * Math.cos((e / o) * (Math.PI / 2)) + n + t;
      },
      easeInExpo: function (e, t, n, o) {
        return 0 == e ? t : n * Math.pow(2, 10 * (e / o - 1)) + t;
      },
      easeInCirc: function (e, t, n, o) {
        return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + t;
      },
      easeInElastic: function (e, t, n, o) {
        var i =
          4 >= arguments.length || void 0 === arguments[4] ? 500 : arguments[4];
        if (0 == e) return t;
        if (1 == (e /= o)) return t + n;
        var i = o * (1 - Math.min(i, 999) / 1e3),
          r = n < Math.abs(n) ? i / 4 : (i / (2 * Math.PI)) * Math.asin(n / n);
        return (
          -n *
            Math.pow(2, 10 * --e) *
            Math.sin((2 * (e * o - r) * Math.PI) / i) +
          t
        );
      },
      easeInBack: function (e, t, n, o) {
        return n * (e /= o) * e * (2.70158 * e - 1.70158) + t;
      },
      easeOutQuad: function (e, t, n, o) {
        return -n * (e /= o) * (e - 2) + t;
      },
      easeOutCubic: function (e, t, n, o) {
        return n * ((e = e / o - 1) * e * e + 1) + t;
      },
      easeOutQuart: function (e, t, n, o) {
        return -n * ((e = e / o - 1) * e * e * e - 1) + t;
      },
      easeOutQuint: function (e, t, n, o) {
        return n * ((e = e / o - 1) * e * e * e * e + 1) + t;
      },
      easeOutSine: function (e, t, n, o) {
        return n * Math.sin((e / o) * (Math.PI / 2)) + t;
      },
      easeOutExpo: function (e, t, n, o) {
        return e == o ? t + n : n * (1 - Math.pow(2, (-10 * e) / o)) + t;
      },
      easeOutCirc: function (e, t, n, o) {
        return n * Math.sqrt(1 - (e = e / o - 1) * e) + t;
      },
      easeOutElastic: function (e, t, n, o) {
        var i =
          4 >= arguments.length || void 0 === arguments[4] ? 500 : arguments[4];
        return 0 == e
          ? t
          : 1 == (e /= o)
          ? t + n
          : ((i = o * (1 - Math.min(i, 999) / 1e3)),
            n *
              Math.pow(2, -10 * e) *
              Math.sin(
                (2 *
                  (e * o -
                    (n < Math.abs(n)
                      ? i / 4
                      : (i / (2 * Math.PI)) * Math.asin(n / n))) *
                  Math.PI) /
                  i
              ) +
              n +
              t);
      },
      easeOutBack: function (e, t, n, o) {
        return n * ((e = e / o - 1) * e * (2.70158 * e + 1.70158) + 1) + t;
      },
      easeOutBounce: function (e, t, n, o) {
        return (e /= o) < 1 / 2.75
          ? 7.5625 * n * e * e + t
          : e < 2 / 2.75
          ? n * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t
          : e < 2.5 / 2.75
          ? n * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t
          : n * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t;
      },
      easeInOutQuad: function (e, t, n, o) {
        return 1 > (e /= o / 2)
          ? (n / 2) * e * e + t
          : (-n / 2) * (--e * (e - 2) - 1) + t;
      },
      easeInOutCubic: function (e, t, n, o) {
        return 1 > (e /= o / 2)
          ? (n / 2) * e * e * e + t
          : (n / 2) * ((e -= 2) * e * e + 2) + t;
      },
      easeInOutQuart: function (e, t, n, o) {
        return 1 > (e /= o / 2)
          ? (n / 2) * e * e * e * e + t
          : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
      },
      easeInOutQuint: function (e, t, n, o) {
        return 1 > (e /= o / 2)
          ? (n / 2) * e * e * e * e * e + t
          : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
      },
      easeInOutSine: function (e, t, n, o) {
        return (-n / 2) * (Math.cos((Math.PI * e) / o) - 1) + t;
      },
      easeInOutExpo: function (e, t, n, o) {
        return 0 == e
          ? t
          : e == o
          ? t + n
          : 1 > (e /= o / 2)
          ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
          : (n / 2) * (2 - Math.pow(2, -10 * --e)) + t;
      },
      easeInOutCirc: function (e, t, n, o) {
        return 1 > (e /= o / 2)
          ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
          : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
      },
      easeInOutElastic: function (e, t, n, o) {
        var i =
          4 >= arguments.length || void 0 === arguments[4] ? 500 : arguments[4];
        if (0 == e) return t;
        if (2 == (e /= o / 2)) return t + n;
        var i = o * (1 - Math.min(i, 999) / 1e3) * 1.5,
          r = n < Math.abs(n) ? i / 4 : (i / (2 * Math.PI)) * Math.asin(n / n);
        return 1 > e
          ? -0.5 *
              n *
              Math.pow(2, 10 * --e) *
              Math.sin((2 * (e * o - r) * Math.PI) / i) +
              t
          : n *
              Math.pow(2, -10 * --e) *
              Math.sin((2 * (e * o - r) * Math.PI) / i) *
              0.5 +
              n +
              t;
      },
      easeInOutBack: function (e, t, n, o) {
        var i = 1.70158;
        return 1 > (e /= o / 2)
          ? (n / 2) * e * e * ((1 + (i *= 1.525)) * e - i) + t
          : (n / 2) * ((e -= 2) * e * ((1 + (i *= 1.525)) * e + i) + 2) + t;
      }
    },
    r = function (e) {
      return e[0];
    },
    a = function (e) {
      return e.reduce(function (e, t) {
        return e.concat(t);
      });
    },
    s = (function () {
      return Array.prototype.includes
        ? function (e, t) {
            return e.includes(t);
          }
        : function (e, t) {
            return e.some(function (e) {
              return e === t;
            });
          };
    })(),
    l = function (e) {
      for (
        var t = arguments.length, n = Array(1 < t ? t - 1 : 0), i = 1;
        i < t;
        i++
      )
        n[i - 1] = arguments[i];
      var r = a(n);
      return e.filter(function (e) {
        return o(s)(r, e);
      });
    },
    u = (function () {
      return Array.from
        ? function (e) {
            return Array.from(e.keys());
          }
        : function (e) {
            var t = [];
            return (
              e.forEach(function (e, n) {
                return t.push(n);
              }),
              t
            );
          };
    })(),
    c = (function () {
      var e = function (e) {
        var t = new Map();
        return (
          Object.keys(e).forEach(function (n) {
            return t.set(n, e[n]);
          }),
          t
        );
      };
      return function (t) {
        return t instanceof Map ? t : e(t);
      };
    })(),
    d = (function () {
      try {
        if (!new Map(new Map().set(null, null)).size) throw Error();
      } catch (e) {
        return function (e) {
          var t = new Map();
          return (
            e.forEach(function (e, n) {
              return t.set(n, e);
            }),
            t
          );
        };
      }
      return function (e) {
        return new Map(e);
      };
    })(),
    f = function (e) {
      return /^#/.test(e);
    },
    p = function (e) {
      return /^rgb/.test(e);
    },
    m = (function () {
      var e = function (e) {
          return 7 > e.length
            ? e.split('').reduce(function (e, t) {
                return e + t + t;
              })
            : e;
        },
        t = function (e) {
          return e.match(/[\d\w]{2}/g).map(function (e) {
            return parseInt(e, 16);
          });
        };
      return function (o) {
        return p(o)
          ? o
          : ((o = n(e, t)(o)), 'rgb(' + o[0] + ', ' + o[1] + ', ' + o[2] + ')');
      };
    })(),
    h = function (t) {
      return (
        (t =
          'string' == typeof t
            ? /^[\#.]?[\w-]+$/.test(t)
              ? '.' == t[0]
                ? document.getElementsByClassName(t.slice(1))
                : '#' == t[0]
                ? document.getElementById(t.slice(1))
                : document.getElementsByTagName(t)
              : document.querySelectorAll(t)
            : t),
        Array.isArray(t)
          ? t
          : t.nodeType
          ? [t]
          : t instanceof NodeList || t instanceof HTMLCollection
          ? [].concat(e(t))
          : t.get()
      );
    },
    g = new Map();
  'el delay begin complete loop direction'.split(' ').forEach(function (e) {
    return g.set(e, null);
  }),
    g.set('duration', 1e3),
    g.set('easing', 'easeOutElastic');
  var v = (function () {
      var e = u(g).filter(function (e) {
          return g.get(e);
        }),
        t = function (t) {
          return e.every(function (e) {
            return t.has(e);
          });
        },
        n = function (t) {
          var n = d(t);
          return (
            e.forEach(function (e) {
              n.has(e) || n.set(e, g.get(e));
            }),
            n
          );
        };
      return function (e) {
        return t(e) ? e : n(e);
      };
    })(),
    y = (function () {
      var e = t(function (e, t) {
          return Array.isArray(e.get(t));
        }),
        n = function (t) {
          return O(t).every(e(t));
        },
        i = function (t) {
          return O(t).filter(o(e(t)));
        };
      return function (e) {
        if (n(e)) return e;
        var t = d(e);
        return (
          i(t).forEach(function (e) {
            return t.set(e, [k.get(e), t.get(e)]);
          }),
          t
        );
      };
    })(),
    w = (function () {
      var e = function (e) {
          return /\D$/.test(e);
        },
        n = t(function (t, n) {
          return e(n) || /scale/.test(t)
            ? n
            : /rotate|skew/.test(t)
            ? n + 'deg'
            : n + 'px';
        }),
        o = function (t, n) {
          return n.every(function (n) {
            return t.get(n).every(e);
          });
        };
      return function (e) {
        var t = O(e).filter(S);
        if (o(e, t)) return e;
        var i = d(e);
        return (
          t.forEach(function (t) {
            return i.set(t, e.get(t).map(n(t)));
          }),
          i
        );
      };
    })(),
    x = (function () {
      var e = t(function (e, t) {
          return e.get(t).some(f);
        }),
        n = function (t) {
          return !T(t).some(e(t));
        },
        o = function (t) {
          return T(t).filter(e(t));
        };
      return function (e) {
        if (n(e)) return e;
        var t = d(e);
        return (
          o(e).forEach(function (e) {
            return t.set(e, t.get(e).map(m));
          }),
          t
        );
      };
    })(),
    b = function (e) {
      var t = d(e);
      return (
        C(e).forEach(function (e) {
          return t.set(e, t.get(e).slice().reverse());
        }),
        t
      );
    },
    I = n(
      c,
      v,
      y,
      w,
      x,
      function (e) {
        var t = d(e);
        return t.set('el', h(e.get('el'))), t;
      },
      function (e) {
        return 'reverse' == e.get('direction') ? b(e) : e;
      }
    ),
    C = (function () {
      var e = u(g),
        t = function (t) {
          return o(s)(e, t);
        };
      return function (e) {
        return u(e).filter(t);
      };
    })(),
    E = (function () {
      var e = n(r, p),
        o = t(function (t, n) {
          var o = t.get(n).map(F),
            i = o[0],
            r = o[1],
            o = new Map();
          return (
            o.set('prop', n),
            o.set('from', i),
            o.set('to', r),
            o.set('isTransformFunction', S(n)),
            o.set('isColor', e(t.get(n))),
            /\d$/.test(t.get('easing'))
              ? ((i = t.get('easing').split(' ')),
                (r = i[1]),
                o.set('easing', i[0]),
                o.set('frequency', r))
              : o.set('easing', t.get('easing')),
            o
          );
        });
      return function (e) {
        return C(e).map(o(e));
      };
    })(),
    O = (function () {
      var e = function (e) {
        return s(M, e);
      };
      return function (t) {
        return u(t).filter(e);
      };
    })(),
    T = function (e) {
      return l(C(e), O(e));
    },
    M =
      'opacity translateX translateY scale rotate scaleX scaleY rotateX rotateY perspective skewX skewY translateZ rotateZ scaleZ'.split(
        ' '
      ),
    k = new Map();
  M.forEach(function (e) {
    return k.set(e, s(['opacity', 'scale', 'scaleX', 'scaleY'], e) ? 1 : 0);
  });
  var S = (function () {
      var e = M.filter(function (e) {
        return 'opacity' != e;
      });
      return function (t) {
        return s(e, t);
      };
    })(),
    A = function (e) {
      var t = O(e);
      if (t.length) {
        var n = [];
        t.some(S) && n.push('transform'), s(t, 'opacity') && n.push('opacity');
        var o = n.join();
        e.get('el').forEach(function (e) {
          e.style.willChange || (e.style.willChange = o);
        });
      }
    },
    D = function (e, t) {
      return t.reduce(function (t, n, o) {
        return t + e[o - 1] + n;
      });
    },
    F = (function () {
      var e = /-?\d*\.?\d+/g;
      return function (t) {
        var n = new Map();
        return (
          n.set(
            'digits',
            ('string' == typeof t ? t : String(t)).match(e).map(Number)
          ),
          n.set('others', ('string' == typeof t ? t : String(t)).split(e)),
          n
        );
      };
    })(),
    L = t(function (e, t, n) {
      var o = n
        .get('to')
        .get('digits')
        .map(function (o, r) {
          var a = n.get('from').get('digits')[r];
          if (a == o) return a;
          var s = o - a,
            a = i[n.get('easing')](
              t,
              a,
              s,
              e.get('duration'),
              n.get('frequency')
            );
          return n.get('isColor') ? Math.round(a) : a;
        });
      return D(o, n.get('to').get('others'));
    }),
    _ = t(function (e, t) {
      var n = e.get(t.get('prop'));
      return r(n.slice(-1));
    }),
    R = (function () {
      var e = void 0;
      return t(function (t, n, o) {
        var i = void 0;
        t.forEach(function (e, t) {
          e.get('isTransformFunction')
            ? (i || (i = []), i.push(e.get('prop') + '(' + n[t] + ')'))
            : 'opacity' == e.get('prop')
            ? (o.style.opacity = n[t])
            : o.setAttribute(e.get('prop'), n[t]);
        }),
          i &&
            (e ||
              (e =
                'transform' in document.body.style
                  ? 'transform'
                  : '-webkit-transform'),
            (o.style[e] = i.join(' ')));
      });
    })(),
    P = (function () {
      var e = function (e, t) {
        t.get('begin') && t.get('begin')(t.get('el')), requestAnimationFrame(e);
      };
      return function (t, n) {
        return n.get('delay')
          ? setTimeout(function () {
              return e(t, n);
            }, n.get('delay'))
          : e(t, n);
      };
    })(),
    B = function (e) {
      return Z(
        (function () {
          if ('alternate' == e.get('direction')) return b(e);
          if ('reverse' == e.get('direction')) {
            var t = d(e);
            return t['delete']('direction'), t;
          }
          return e;
        })()
      );
    },
    z = new Map(),
    N = (function () {
      var e = 0;
      return function (t) {
        var n = e++,
          o = d(z);
        return o.set(n, t), (z = o), n;
      };
    })(),
    Z = function (e) {
      var t = I(e),
        n = E(t),
        o = N(t.get('el')),
        i = new Map();
      A(t),
        P(function e(r) {
          if (z.has(o)) {
            i.has('start') || i.set('start', r),
              i.set('elapsed', r - i.get('start')),
              (r = i.get('elapsed') < t.get('duration'));
            var a = n.map(r ? L(t, i.get('elapsed')) : _(t));
            z.get(o).forEach(R(n, a)),
              r
                ? requestAnimationFrame(e)
                : ((r = d(z)),
                  r['delete'](o),
                  (z = r),
                  t.get('complete') && t.get('complete')(t.get('el')),
                  t.get('loop') && B(t));
          }
        }, t);
    };
  return (
    (Z.stop = function (e) {
      var t = h(e),
        n = d(z);
      n.forEach(function (e, o) {
        var i = l(e, t);
        i.length ? n.set(o, i) : n['delete'](o);
      }),
        (z = n);
    }),
    Z
  );
})();
'undefined' != typeof module && module.exports && (module.exports = animate);
var yall = (function () {
  'use strict';
  function e() {
    return (e =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      }).apply(this, arguments);
  }
  return function (t) {
    var n = {
        intersectionObserverSupport:
          'IntersectionObserver' in window &&
          'IntersectionObserverEntry' in window &&
          'intersectionRatio' in window.IntersectionObserverEntry.prototype,
        mutationObserverSupport: 'MutationObserver' in window,
        idleCallbackSupport: 'requestIdleCallback' in window,
        eventsToBind: [
          [document, 'scroll'],
          [document, 'touchmove'],
          [window, 'resize'],
          [window, 'orientationchange']
        ]
      },
      o = e(
        {
          lazyClass: 'lazy',
          lazyBackgroundClass: 'lazy-bg',
          lazyBackgroundLoaded: 'lazy-bg-loaded',
          throttleTime: 200,
          idlyLoad: !1,
          idleLoadTimeout: 100,
          threshold: 200,
          observeChanges: !1,
          observeRootSelector: 'body',
          mutationObserverOptions: { childList: !0, subtree: !0 }
        },
        t
      ),
      i =
        'img.' +
        o.lazyClass +
        ',video.' +
        o.lazyClass +
        ',iframe.' +
        o.lazyClass +
        ',.' +
        o.lazyBackgroundClass,
      r = { timeout: o.idleLoadTimeout },
      a = function (e) {
        return [].slice.call(e);
      },
      s = function (e) {
        if ('IMG' === e.tagName) {
          var t = e.parentNode;
          'PICTURE' === t.tagName &&
            a(t.querySelectorAll('source')).forEach(function (e) {
              return l(e);
            }),
            l(e);
        }
        'VIDEO' === e.tagName &&
          (a(e.querySelectorAll('source')).forEach(function (e) {
            return l(e);
          }),
          l(e),
          !0 === e.autoplay && e.load()),
          'IFRAME' === e.tagName && l(e),
          e.classList.contains(o.lazyBackgroundClass) &&
            (e.classList.remove(o.lazyBackgroundClass),
            e.classList.add(o.lazyBackgroundLoaded));
      },
      l = function (e) {
        null !== e.getAttribute('data-srcset') &&
          e.setAttribute('srcset', e.getAttribute('data-srcset')),
          null !== e.getAttribute('data-src') &&
            e.setAttribute('src', e.getAttribute('data-src')),
          null !== e.getAttribute('data-poster') &&
            e.setAttribute('poster', e.getAttribute('data-poster'));
      },
      u = function e() {
        var t = !1;
        !1 === t &&
          c.length > 0 &&
          ((t = !0),
          setTimeout(function () {
            c.forEach(function (e) {
              e.getBoundingClientRect().top <=
                window.innerHeight + o.threshold &&
                e.getBoundingClientRect().bottom >= -o.threshold &&
                'none' !== getComputedStyle(e).display &&
                (!0 === o.idlyLoad && !0 === n.idleCallbackSupport
                  ? requestIdleCallback(function () {
                      s(e);
                    }, r)
                  : s(e),
                e.classList.remove(o.lazyClass),
                (c = c.filter(function (t) {
                  return t !== e;
                })));
            }),
              (t = !1),
              0 === c.length &&
                !1 === o.observeChanges &&
                n.eventsToBind.forEach(function (t) {
                  return t[0].removeEventListener(t[1], e);
                });
          }, o.throttleTime));
      },
      c = a(document.querySelectorAll(i));
    if (!0 === n.intersectionObserverSupport) {
      var d = new IntersectionObserver(
        function (e, t) {
          e.forEach(function (e) {
            if (!0 === e.isIntersecting || e.intersectionRatio > 0) {
              var i = e.target;
              !0 === o.idlyLoad && !0 === n.idleCallbackSupport
                ? requestIdleCallback(function () {
                    return s(i);
                  }, r)
                : s(i),
                i.classList.remove(o.lazyClass),
                t.unobserve(i),
                (c = c.filter(function (e) {
                  return e !== i;
                }));
            }
          });
        },
        { rootMargin: o.threshold + 'px 0%' }
      );
      c.forEach(function (e) {
        return d.observe(e);
      });
    } else
      n.eventsToBind.forEach(function (e) {
        return e[0].addEventListener(e[1], u);
      }),
        u();
    !0 === n.mutationObserverSupport &&
      !0 === o.observeChanges &&
      new MutationObserver(function (e) {
        return e.forEach(function () {
          a(document.querySelectorAll(i)).forEach(function (e) {
            -1 === c.indexOf(e) &&
              (c.push(e),
              !0 === n.intersectionObserverSupport ? d.observe(e) : u());
          });
        });
      }).observe(
        document.querySelector(o.observeRootSelector),
        o.mutationObserverOptions
      );
  };
})();
/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
 * http://photoswipe.com
 * Copyright (c) 2019 Dmitry Semenov; */
!(function (e, t) {
  'function' == typeof define && define.amd
    ? define(t)
    : 'object' == typeof exports
    ? (module.exports = t())
    : (e.PhotoSwipeUI_Default = t());
})(this, function () {
  'use strict';
  return function (e, t) {
    var n,
      o,
      i,
      r,
      a,
      s,
      l,
      u,
      c,
      d,
      f,
      p,
      m,
      h,
      g,
      v,
      y,
      w,
      x,
      b = this,
      I = !1,
      C = !0,
      E = !0,
      O = {
        barsSize: { top: 44, bottom: 'auto' },
        closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
        timeToIdle: 4e3,
        timeToIdleOutside: 1e3,
        loadingIndicatorDelay: 1e3,
        addCaptionHTMLFn: function (e, t) {
          return e.title
            ? ((t.children[0].innerHTML = e.title), !0)
            : ((t.children[0].innerHTML = ''), !1);
        },
        closeEl: !0,
        captionEl: !0,
        fullscreenEl: !0,
        zoomEl: !0,
        shareEl: !0,
        counterEl: !0,
        arrowEl: !0,
        preloaderEl: !0,
        tapToClose: !1,
        tapToToggleControls: !0,
        clickToCloseNonZoomable: !0,
        shareButtons: [
          {
            id: 'facebook',
            label: 'Share on Facebook',
            url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}'
          },
          {
            id: 'twitter',
            label: 'Tweet',
            url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'
          },
          {
            id: 'pinterest',
            label: 'Pin it',
            url: 'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'
          },
          {
            id: 'download',
            label: 'Download image',
            url: '{{raw_image_url}}',
            download: !0
          }
        ],
        getImageURLForShare: function () {
          return e.currItem.src || '';
        },
        getPageURLForShare: function () {
          return window.location.href;
        },
        getTextForShare: function () {
          return e.currItem.title || '';
        },
        indexIndicatorSep: ' / ',
        fitControlsWidth: 1200
      },
      T = function (e) {
        if (v) return !0;
        (e = e || window.event), g.timeToIdle && g.mouseUsed && !c && P();
        for (
          var n,
            o,
            i = e.target || e.srcElement,
            r = i.getAttribute('class') || '',
            a = 0;
          a < K.length;
          a++
        )
          (n = K[a]),
            n.onTap &&
              r.indexOf('pswp__' + n.name) > -1 &&
              (n.onTap(), (o = !0));
        if (o) {
          e.stopPropagation && e.stopPropagation(), (v = !0);
          var s = t.features.isOldAndroid ? 600 : 30;
          y = setTimeout(function () {
            v = !1;
          }, s);
        }
      },
      M = function () {
        return (
          !e.likelyTouchDevice ||
          g.mouseUsed ||
          screen.width > g.fitControlsWidth
        );
      },
      k = function (e, n, o) {
        t[(o ? 'add' : 'remove') + 'Class'](e, 'pswp__' + n);
      },
      S = function () {
        var e = 1 === g.getNumItemsFn();
        e !== h && (k(o, 'ui--one-slide', e), (h = e));
      },
      A = function () {
        k(l, 'share-modal--hidden', E);
      },
      D = function () {
        return (
          (E = !E),
          E
            ? (t.removeClass(l, 'pswp__share-modal--fade-in'),
              setTimeout(function () {
                E && A();
              }, 300))
            : (A(),
              setTimeout(function () {
                E || t.addClass(l, 'pswp__share-modal--fade-in');
              }, 30)),
          E || L(),
          !1
        );
      },
      F = function (t) {
        t = t || window.event;
        var n = t.target || t.srcElement;
        return (
          e.shout('shareLinkClick', t, n),
          !(
            !n.href ||
            (!n.hasAttribute('download') &&
              (window.open(
                n.href,
                'pswp_share',
                'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=' +
                  (window.screen ? Math.round(screen.width / 2 - 275) : 100)
              ),
              E || D(),
              1))
          )
        );
      },
      L = function () {
        for (var e, t, n, o, i, r = '', a = 0; a < g.shareButtons.length; a++)
          (e = g.shareButtons[a]),
            (n = g.getImageURLForShare(e)),
            (o = g.getPageURLForShare(e)),
            (i = g.getTextForShare(e)),
            (t = e.url
              .replace('{{url}}', encodeURIComponent(o))
              .replace('{{image_url}}', encodeURIComponent(n))
              .replace('{{raw_image_url}}', n)
              .replace('{{text}}', encodeURIComponent(i))),
            (r +=
              '<a href="' +
              t +
              '" target="_blank" class="pswp__share--' +
              e.id +
              '"' +
              (e.download ? 'download' : '') +
              '>' +
              e.label +
              '</a>'),
            g.parseShareButtonOut && (r = g.parseShareButtonOut(e, r));
        (l.children[0].innerHTML = r), (l.children[0].onclick = F);
      },
      _ = function (e) {
        for (var n = 0; n < g.closeElClasses.length; n++)
          if (t.hasClass(e, 'pswp__' + g.closeElClasses[n])) return !0;
      },
      R = 0,
      P = function () {
        clearTimeout(x), (R = 0), c && b.setIdle(!1);
      },
      B = function (e) {
        e = e || window.event;
        var t = e.relatedTarget || e.toElement;
        (t && 'HTML' !== t.nodeName) ||
          (clearTimeout(x),
          (x = setTimeout(function () {
            b.setIdle(!0);
          }, g.timeToIdleOutside)));
      },
      z = function () {
        g.fullscreenEl &&
          !t.features.isOldAndroid &&
          (n || (n = b.getFullscreenAPI()),
          n
            ? (t.bind(document, n.eventK, b.updateFullscreen),
              b.updateFullscreen(),
              t.addClass(e.template, 'pswp--supports-fs'))
            : t.removeClass(e.template, 'pswp--supports-fs'));
      },
      N = function () {
        g.preloaderEl &&
          (Z(!0),
          d('beforeChange', function () {
            clearTimeout(m),
              (m = setTimeout(function () {
                e.currItem && e.currItem.loading
                  ? (!e.allowProgressiveImg() ||
                      (e.currItem.img && !e.currItem.img.naturalWidth)) &&
                    Z(!1)
                  : Z(!0);
              }, g.loadingIndicatorDelay));
          }),
          d('imageLoadComplete', function (t, n) {
            e.currItem === n && Z(!0);
          }));
      },
      Z = function (e) {
        p !== e && (k(f, 'preloader--active', !e), (p = e));
      },
      $ = function (e) {
        var n = e.vGap;
        if (M()) {
          var a = g.barsSize;
          if (g.captionEl && 'auto' === a.bottom)
            if (
              (r ||
                ((r = t.createEl('pswp__caption pswp__caption--fake')),
                r.appendChild(t.createEl('pswp__caption__center')),
                o.insertBefore(r, i),
                t.addClass(o, 'pswp__ui--fit')),
              g.addCaptionHTMLFn(e, r, !0))
            ) {
              var s = r.clientHeight;
              n.bottom = parseInt(s, 10) || 44;
            } else n.bottom = a.top;
          else n.bottom = 'auto' === a.bottom ? 0 : a.bottom;
          n.top = a.top;
        } else n.top = n.bottom = 0;
      },
      q = function () {
        g.timeToIdle &&
          d('mouseUsed', function () {
            t.bind(document, 'mousemove', P),
              t.bind(document, 'mouseout', B),
              (w = setInterval(function () {
                2 === ++R && b.setIdle(!0);
              }, g.timeToIdle / 2));
          });
      },
      U = function () {
        d('onVerticalDrag', function (e) {
          C && e < 0.95
            ? b.hideControls()
            : !C && e >= 0.95 && b.showControls();
        });
        var e;
        d('onPinchClose', function (t) {
          C && t < 0.9
            ? (b.hideControls(), (e = !0))
            : e && !C && t > 0.9 && b.showControls();
        }),
          d('zoomGestureEnded', function () {
            (e = !1) && !C && b.showControls();
          });
      },
      K = [
        {
          name: 'caption',
          option: 'captionEl',
          onInit: function (e) {
            i = e;
          }
        },
        {
          name: 'share-modal',
          option: 'shareEl',
          onInit: function (e) {
            l = e;
          },
          onTap: function () {
            D();
          }
        },
        {
          name: 'button--share',
          option: 'shareEl',
          onInit: function (e) {
            s = e;
          },
          onTap: function () {
            D();
          }
        },
        { name: 'button--zoom', option: 'zoomEl', onTap: e.toggleDesktopZoom },
        {
          name: 'counter',
          option: 'counterEl',
          onInit: function (e) {
            a = e;
          }
        },
        { name: 'button--close', option: 'closeEl', onTap: e.close },
        { name: 'button--arrow--left', option: 'arrowEl', onTap: e.prev },
        { name: 'button--arrow--right', option: 'arrowEl', onTap: e.next },
        {
          name: 'button--fs',
          option: 'fullscreenEl',
          onTap: function () {
            n.isFullscreen() ? n.exit() : n.enter();
          }
        },
        {
          name: 'preloader',
          option: 'preloaderEl',
          onInit: function (e) {
            f = e;
          }
        }
      ],
      H = function () {
        var e,
          n,
          i,
          r = function (o) {
            if (o)
              for (var r = o.length, a = 0; a < r; a++) {
                (e = o[a]), (n = e.className);
                for (var s = 0; s < K.length; s++)
                  (i = K[s]),
                    n.indexOf('pswp__' + i.name) > -1 &&
                      (g[i.option]
                        ? (t.removeClass(e, 'pswp__element--disabled'),
                          i.onInit && i.onInit(e))
                        : t.addClass(e, 'pswp__element--disabled'));
              }
          };
        r(o.children);
        var a = t.getChildByClass(o, 'pswp__top-bar');
        a && r(a.children);
      };
    (b.init = function () {
      t.extend(e.options, O, !0),
        (g = e.options),
        (o = t.getChildByClass(e.scrollWrap, 'pswp__ui')),
        (d = e.listen),
        U(),
        d('beforeChange', b.update),
        d('doubleTap', function (t) {
          var n = e.currItem.initialZoomLevel;
          e.getZoomLevel() !== n
            ? e.zoomTo(n, t, 333)
            : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333);
        }),
        d('preventDragEvent', function (e, t, n) {
          var o = e.target || e.srcElement;
          o &&
            o.getAttribute('class') &&
            e.type.indexOf('mouse') > -1 &&
            (o.getAttribute('class').indexOf('__caption') > 0 ||
              /(SMALL|STRONG|EM)/i.test(o.tagName)) &&
            (n.prevent = !1);
        }),
        d('bindEvents', function () {
          t.bind(o, 'pswpTap click', T),
            t.bind(e.scrollWrap, 'pswpTap', b.onGlobalTap),
            e.likelyTouchDevice ||
              t.bind(e.scrollWrap, 'mouseover', b.onMouseOver);
        }),
        d('unbindEvents', function () {
          E || D(),
            w && clearInterval(w),
            t.unbind(document, 'mouseout', B),
            t.unbind(document, 'mousemove', P),
            t.unbind(o, 'pswpTap click', T),
            t.unbind(e.scrollWrap, 'pswpTap', b.onGlobalTap),
            t.unbind(e.scrollWrap, 'mouseover', b.onMouseOver),
            n &&
              (t.unbind(document, n.eventK, b.updateFullscreen),
              n.isFullscreen() && ((g.hideAnimationDuration = 0), n.exit()),
              (n = null));
        }),
        d('destroy', function () {
          g.captionEl &&
            (r && o.removeChild(r), t.removeClass(i, 'pswp__caption--empty')),
            l && (l.children[0].onclick = null),
            t.removeClass(o, 'pswp__ui--over-close'),
            t.addClass(o, 'pswp__ui--hidden'),
            b.setIdle(!1);
        }),
        g.showAnimationDuration || t.removeClass(o, 'pswp__ui--hidden'),
        d('initialZoomIn', function () {
          g.showAnimationDuration && t.removeClass(o, 'pswp__ui--hidden');
        }),
        d('initialZoomOut', function () {
          t.addClass(o, 'pswp__ui--hidden');
        }),
        d('parseVerticalMargin', $),
        H(),
        g.shareEl && s && l && (E = !0),
        S(),
        q(),
        z(),
        N();
    }),
      (b.setIdle = function (e) {
        (c = e), k(o, 'ui--idle', e);
      }),
      (b.update = function () {
        C && e.currItem
          ? (b.updateIndexIndicator(),
            g.captionEl &&
              (g.addCaptionHTMLFn(e.currItem, i),
              k(i, 'caption--empty', !e.currItem.title)),
            (I = !0))
          : (I = !1),
          E || D(),
          S();
      }),
      (b.updateFullscreen = function (o) {
        o &&
          setTimeout(function () {
            e.setScrollOffset(0, t.getScrollY());
          }, 50),
          t[(n.isFullscreen() ? 'add' : 'remove') + 'Class'](
            e.template,
            'pswp--fs'
          );
      }),
      (b.updateIndexIndicator = function () {
        g.counterEl &&
          (a.innerHTML =
            e.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn());
      }),
      (b.onGlobalTap = function (n) {
        n = n || window.event;
        var o = n.target || n.srcElement;
        if (!v)
          if (n.detail && 'mouse' === n.detail.pointerType) {
            if (_(o)) return void e.close();
            t.hasClass(o, 'pswp__img') &&
              (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio
                ? g.clickToCloseNonZoomable && e.close()
                : e.toggleDesktopZoom(n.detail.releasePoint));
          } else if (
            (g.tapToToggleControls && (C ? b.hideControls() : b.showControls()),
            g.tapToClose && (t.hasClass(o, 'pswp__img') || _(o)))
          )
            return void e.close();
      }),
      (b.onMouseOver = function (e) {
        e = e || window.event;
        var t = e.target || e.srcElement;
        k(o, 'ui--over-close', _(t));
      }),
      (b.hideControls = function () {
        t.addClass(o, 'pswp__ui--hidden'), (C = !1);
      }),
      (b.showControls = function () {
        (C = !0), I || b.update(), t.removeClass(o, 'pswp__ui--hidden');
      }),
      (b.supportsFullscreen = function () {
        var e = document;
        return !!(
          e.exitFullscreen ||
          e.mozCancelFullScreen ||
          e.webkitExitFullscreen ||
          e.msExitFullscreen
        );
      }),
      (b.getFullscreenAPI = function () {
        var t,
          n = document.documentElement,
          o = 'fullscreenchange';
        return (
          n.requestFullscreen
            ? (t = {
                enterK: 'requestFullscreen',
                exitK: 'exitFullscreen',
                elementK: 'fullscreenElement',
                eventK: o
              })
            : n.mozRequestFullScreen
            ? (t = {
                enterK: 'mozRequestFullScreen',
                exitK: 'mozCancelFullScreen',
                elementK: 'mozFullScreenElement',
                eventK: 'moz' + o
              })
            : n.webkitRequestFullscreen
            ? (t = {
                enterK: 'webkitRequestFullscreen',
                exitK: 'webkitExitFullscreen',
                elementK: 'webkitFullscreenElement',
                eventK: 'webkit' + o
              })
            : n.msRequestFullscreen &&
              (t = {
                enterK: 'msRequestFullscreen',
                exitK: 'msExitFullscreen',
                elementK: 'msFullscreenElement',
                eventK: 'MSFullscreenChange'
              }),
          t &&
            ((t.enter = function () {
              return (
                (u = g.closeOnScroll),
                (g.closeOnScroll = !1),
                'webkitRequestFullscreen' !== this.enterK
                  ? e.template[this.enterK]()
                  : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
              );
            }),
            (t.exit = function () {
              return (g.closeOnScroll = u), document[this.exitK]();
            }),
            (t.isFullscreen = function () {
              return document[this.elementK];
            })),
          t
        );
      });
  };
}),
  (function (e, t) {
    'function' == typeof define && define.amd
      ? define(t)
      : 'object' == typeof exports
      ? (module.exports = t())
      : (e.PhotoSwipe = t());
  })(this, function () {
    'use strict';
    return function (e, t, n, o) {
      var i = {
        features: null,
        bind: function (e, t, n, o) {
          var i = (o ? 'remove' : 'add') + 'EventListener';
          t = t.split(' ');
          for (var r = 0; r < t.length; r++) t[r] && e[i](t[r], n, !1);
        },
        isArray: function (e) {
          return e instanceof Array;
        },
        createEl: function (e, t) {
          var n = document.createElement(t || 'div');
          return e && (n.className = e), n;
        },
        getScrollY: function () {
          var e = window.pageYOffset;
          return void 0 !== e ? e : document.documentElement.scrollTop;
        },
        unbind: function (e, t, n) {
          i.bind(e, t, n, !0);
        },
        removeClass: function (e, t) {
          var n = new RegExp('(\\s|^)' + t + '(\\s|$)');
          e.className = e.className
            .replace(n, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
        },
        addClass: function (e, t) {
          i.hasClass(e, t) || (e.className += (e.className ? ' ' : '') + t);
        },
        hasClass: function (e, t) {
          return (
            e.className &&
            new RegExp('(^|\\s)' + t + '(\\s|$)').test(e.className)
          );
        },
        getChildByClass: function (e, t) {
          for (var n = e.firstChild; n; ) {
            if (i.hasClass(n, t)) return n;
            n = n.nextSibling;
          }
        },
        arraySearch: function (e, t, n) {
          for (var o = e.length; o--; ) if (e[o][n] === t) return o;
          return -1;
        },
        extend: function (e, t, n) {
          for (var o in t)
            if (t.hasOwnProperty(o)) {
              if (n && e.hasOwnProperty(o)) continue;
              e[o] = t[o];
            }
        },
        easing: {
          sine: {
            out: function (e) {
              return Math.sin(e * (Math.PI / 2));
            },
            inOut: function (e) {
              return -(Math.cos(Math.PI * e) - 1) / 2;
            }
          },
          cubic: {
            out: function (e) {
              return --e * e * e + 1;
            }
          }
        },
        detectFeatures: function () {
          if (i.features) return i.features;
          var e = i.createEl(),
            t = e.style,
            n = '',
            o = {};
          if (
            ((o.oldIE = document.all && !document.addEventListener),
            (o.touch = 'ontouchstart' in window),
            window.requestAnimationFrame &&
              ((o.raf = window.requestAnimationFrame),
              (o.caf = window.cancelAnimationFrame)),
            (o.pointerEvent =
              !!window.PointerEvent || navigator.msPointerEnabled),
            !o.pointerEvent)
          ) {
            var r = navigator.userAgent;
            if (/iP(hone|od)/.test(navigator.platform)) {
              var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              a &&
                a.length > 0 &&
                (a = parseInt(a[1], 10)) >= 1 &&
                a < 8 &&
                (o.isOldIOSPhone = !0);
            }
            var s = r.match(/Android\s([0-9\.]*)/),
              l = s ? s[1] : 0;
            (l = parseFloat(l)),
              l >= 1 &&
                (l < 4.4 && (o.isOldAndroid = !0), (o.androidVersion = l)),
              (o.isMobileOpera = /opera mini|opera mobi/i.test(r));
          }
          for (
            var u,
              c,
              d = ['transform', 'perspective', 'animationName'],
              f = ['', 'webkit', 'Moz', 'ms', 'O'],
              p = 0;
            p < 4;
            p++
          ) {
            n = f[p];
            for (var m = 0; m < 3; m++)
              (u = d[m]),
                (c = n + (n ? u.charAt(0).toUpperCase() + u.slice(1) : u)),
                !o[u] && c in t && (o[u] = c);
            n &&
              !o.raf &&
              ((n = n.toLowerCase()),
              (o.raf = window[n + 'RequestAnimationFrame']),
              o.raf &&
                (o.caf =
                  window[n + 'CancelAnimationFrame'] ||
                  window[n + 'CancelRequestAnimationFrame']));
          }
          if (!o.raf) {
            var h = 0;
            (o.raf = function (e) {
              var t = new Date().getTime(),
                n = Math.max(0, 16 - (t - h)),
                o = window.setTimeout(function () {
                  e(t + n);
                }, n);
              return (h = t + n), o;
            }),
              (o.caf = function (e) {
                clearTimeout(e);
              });
          }
          return (
            (o.svg =
              !!document.createElementNS &&
              !!document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                .createSVGRect),
            (i.features = o),
            o
          );
        }
      };
      i.detectFeatures(),
        i.features.oldIE &&
          (i.bind = function (e, t, n, o) {
            t = t.split(' ');
            for (
              var i,
                r = (o ? 'detach' : 'attach') + 'Event',
                a = function () {
                  n.handleEvent.call(n);
                },
                s = 0;
              s < t.length;
              s++
            )
              if ((i = t[s]))
                if ('object' == typeof n && n.handleEvent) {
                  if (o) {
                    if (!n['oldIE' + i]) return !1;
                  } else n['oldIE' + i] = a;
                  e[r]('on' + i, n['oldIE' + i]);
                } else e[r]('on' + i, n);
          });
      var r = this,
        a = 25,
        s = 3,
        l = {
          allowPanToNext: !0,
          spacing: 0.12,
          bgOpacity: 1,
          mouseUsed: !1,
          loop: !0,
          pinchToClose: !0,
          closeOnScroll: !0,
          closeOnVerticalDrag: !0,
          verticalDragRange: 0.75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: !1,
          focus: !0,
          escKey: !0,
          arrowKeys: !0,
          mainScrollEndFriction: 0.35,
          panEndFriction: 0.35,
          isClickableElement: function (e) {
            return 'A' === e.tagName;
          },
          getDoubleTapZoom: function (e, t) {
            return e ? 1 : t.initialZoomLevel < 0.7 ? 1 : 1.33;
          },
          maxSpreadZoom: 1.33,
          modal: !0,
          scaleMode: 'fit'
        };
      i.extend(l, o);
      var u,
        c,
        d,
        f,
        p,
        m,
        h,
        g,
        v,
        y,
        w,
        x,
        b,
        I,
        C,
        E,
        O,
        T,
        M,
        k,
        S,
        A,
        D,
        F,
        L,
        _,
        R,
        P,
        B,
        z,
        N,
        Z,
        $,
        q,
        U,
        K,
        H,
        Y,
        W,
        G,
        j,
        X,
        V,
        Q,
        J,
        ee,
        te,
        ne,
        oe,
        ie,
        re,
        ae,
        se,
        le,
        ue,
        ce,
        de,
        fe = function () {
          return { x: 0, y: 0 };
        },
        pe = fe(),
        me = fe(),
        he = fe(),
        ge = {},
        ve = 0,
        ye = {},
        we = fe(),
        xe = 0,
        be = !0,
        Ie = [],
        Ce = {},
        Ee = !1,
        Oe = function (e, t) {
          i.extend(r, t.publicMethods), Ie.push(e);
        },
        Te = function (e) {
          var t = en();
          return e > t - 1 ? e - t : e < 0 ? t + e : e;
        },
        Me = {},
        ke = function (e, t) {
          return Me[e] || (Me[e] = []), Me[e].push(t);
        },
        Se = function (e) {
          var t = Me[e];
          if (t) {
            var n = Array.prototype.slice.call(arguments);
            n.shift();
            for (var o = 0; o < t.length; o++) t[o].apply(r, n);
          }
        },
        Ae = function () {
          return new Date().getTime();
        },
        De = function (e) {
          (ue = e), (r.bg.style.opacity = e * l.bgOpacity);
        },
        Fe = function (e, t, n, o, i) {
          (!Ee || (i && i !== r.currItem)) &&
            (o /= i ? i.fitRatio : r.currItem.fitRatio),
            (e[A] = x + t + 'px, ' + n + 'px' + b + ' scale(' + o + ')');
        },
        Le = function (e) {
          ie &&
            (e &&
              (y > r.currItem.fitRatio
                ? Ee || (pn(r.currItem, !1, !0), (Ee = !0))
                : Ee && (pn(r.currItem), (Ee = !1))),
            Fe(ie, he.x, he.y, y));
        },
        _e = function (e) {
          e.container &&
            Fe(
              e.container.style,
              e.initialPosition.x,
              e.initialPosition.y,
              e.initialZoomLevel,
              e
            );
        },
        Re = function (e, t) {
          t[A] = x + e + 'px, 0px' + b;
        },
        Pe = function (e, t) {
          if (!l.loop && t) {
            var n = f + (we.x * ve - e) / we.x,
              o = Math.round(e - wt.x);
            ((n < 0 && o > 0) || (n >= en() - 1 && o < 0)) &&
              (e = wt.x + o * l.mainScrollEndFriction);
          }
          (wt.x = e), Re(e, p);
        },
        Be = function (e, t) {
          var n = xt[e] - ye[e];
          return me[e] + pe[e] + n - n * (t / w);
        },
        ze = function (e, t) {
          (e.x = t.x), (e.y = t.y), t.id && (e.id = t.id);
        },
        Ne = function (e) {
          (e.x = Math.round(e.x)), (e.y = Math.round(e.y));
        },
        Ze = null,
        $e = function () {
          Ze &&
            (i.unbind(document, 'mousemove', $e),
            i.addClass(e, 'pswp--has_mouse'),
            (l.mouseUsed = !0),
            Se('mouseUsed')),
            (Ze = setTimeout(function () {
              Ze = null;
            }, 100));
        },
        qe = function () {
          i.bind(document, 'keydown', r),
            N.transform && i.bind(r.scrollWrap, 'click', r),
            l.mouseUsed || i.bind(document, 'mousemove', $e),
            i.bind(window, 'resize scroll orientationchange', r),
            Se('bindEvents');
        },
        Ue = function () {
          i.unbind(window, 'resize scroll orientationchange', r),
            i.unbind(window, 'scroll', v.scroll),
            i.unbind(document, 'keydown', r),
            i.unbind(document, 'mousemove', $e),
            N.transform && i.unbind(r.scrollWrap, 'click', r),
            W && i.unbind(window, h, r),
            clearTimeout(Z),
            Se('unbindEvents');
        },
        Ke = function (e, t) {
          var n = un(r.currItem, ge, e);
          return t && (oe = n), n;
        },
        He = function (e) {
          return e || (e = r.currItem), e.initialZoomLevel;
        },
        Ye = function (e) {
          return e || (e = r.currItem), e.w > 0 ? l.maxSpreadZoom : 1;
        },
        We = function (e, t, n, o) {
          return o === r.currItem.initialZoomLevel
            ? ((n[e] = r.currItem.initialPosition[e]), !0)
            : ((n[e] = Be(e, o)),
              n[e] > t.min[e]
                ? ((n[e] = t.min[e]), !0)
                : n[e] < t.max[e] && ((n[e] = t.max[e]), !0));
        },
        Ge = function () {
          if (A) {
            var t = N.perspective && !F;
            return (
              (x = 'translate' + (t ? '3d(' : '(')),
              void (b = N.perspective ? ', 0px)' : ')')
            );
          }
          (A = 'left'),
            i.addClass(e, 'pswp--ie'),
            (Re = function (e, t) {
              t.left = e + 'px';
            }),
            (_e = function (e) {
              var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                n = e.container.style,
                o = t * e.w,
                i = t * e.h;
              (n.width = o + 'px'),
                (n.height = i + 'px'),
                (n.left = e.initialPosition.x + 'px'),
                (n.top = e.initialPosition.y + 'px');
            }),
            (Le = function () {
              if (ie) {
                var e = ie,
                  t = r.currItem,
                  n = t.fitRatio > 1 ? 1 : t.fitRatio,
                  o = n * t.w,
                  i = n * t.h;
                (e.width = o + 'px'),
                  (e.height = i + 'px'),
                  (e.left = he.x + 'px'),
                  (e.top = he.y + 'px');
              }
            });
        },
        je = function (e) {
          var t = '';
          l.escKey && 27 === e.keyCode
            ? (t = 'close')
            : l.arrowKeys &&
              (37 === e.keyCode
                ? (t = 'prev')
                : 39 === e.keyCode && (t = 'next')),
            t &&
              (e.ctrlKey ||
                e.altKey ||
                e.shiftKey ||
                e.metaKey ||
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                r[t]()));
        },
        Xe = function (e) {
          e && (X || j || re || H) && (e.preventDefault(), e.stopPropagation());
        },
        Ve = function () {
          r.setScrollOffset(0, i.getScrollY());
        },
        Qe = {},
        Je = 0,
        et = function (e) {
          Qe[e] && (Qe[e].raf && _(Qe[e].raf), Je--, delete Qe[e]);
        },
        tt = function (e) {
          Qe[e] && et(e), Qe[e] || (Je++, (Qe[e] = {}));
        },
        nt = function () {
          for (var e in Qe) Qe.hasOwnProperty(e) && et(e);
        },
        ot = function (e, t, n, o, i, r, a) {
          var s,
            l = Ae();
          tt(e);
          var u = function () {
            if (Qe[e]) {
              if ((s = Ae() - l) >= o) return et(e), r(n), void (a && a());
              r((n - t) * i(s / o) + t), (Qe[e].raf = L(u));
            }
          };
          u();
        },
        it = {
          shout: Se,
          listen: ke,
          viewportSize: ge,
          options: l,
          isMainScrollAnimating: function () {
            return re;
          },
          getZoomLevel: function () {
            return y;
          },
          getCurrentIndex: function () {
            return f;
          },
          isDragging: function () {
            return W;
          },
          isZooming: function () {
            return ee;
          },
          setScrollOffset: function (e, t) {
            (ye.x = e), (z = ye.y = t), Se('updateScrollOffset', ye);
          },
          applyZoomPan: function (e, t, n, o) {
            (he.x = t), (he.y = n), (y = e), Le(o);
          },
          init: function () {
            if (!u && !c) {
              var n;
              (r.framework = i),
                (r.template = e),
                (r.bg = i.getChildByClass(e, 'pswp__bg')),
                (R = e.className),
                (u = !0),
                (N = i.detectFeatures()),
                (L = N.raf),
                (_ = N.caf),
                (A = N.transform),
                (B = N.oldIE),
                (r.scrollWrap = i.getChildByClass(e, 'pswp__scroll-wrap')),
                (r.container = i.getChildByClass(
                  r.scrollWrap,
                  'pswp__container'
                )),
                (p = r.container.style),
                (r.itemHolders = E =
                  [
                    { el: r.container.children[0], wrap: 0, index: -1 },
                    { el: r.container.children[1], wrap: 0, index: -1 },
                    { el: r.container.children[2], wrap: 0, index: -1 }
                  ]),
                (E[0].el.style.display = E[2].el.style.display = 'none'),
                Ge(),
                (v = {
                  resize: r.updateSize,
                  orientationchange: function () {
                    clearTimeout(Z),
                      (Z = setTimeout(function () {
                        ge.x !== r.scrollWrap.clientWidth && r.updateSize();
                      }, 500));
                  },
                  scroll: Ve,
                  keydown: je,
                  click: Xe
                });
              var o = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
              for (
                (N.animationName && N.transform && !o) ||
                  (l.showAnimationDuration = l.hideAnimationDuration = 0),
                  n = 0;
                n < Ie.length;
                n++
              )
                r['init' + Ie[n]]();
              if (t) {
                (r.ui = new t(r, i)).init();
              }
              Se('firstUpdate'),
                (f = f || l.index || 0),
                (isNaN(f) || f < 0 || f >= en()) && (f = 0),
                (r.currItem = Jt(f)),
                (N.isOldIOSPhone || N.isOldAndroid) && (be = !1),
                e.setAttribute('aria-hidden', 'false'),
                l.modal &&
                  (be
                    ? (e.style.position = 'fixed')
                    : ((e.style.position = 'absolute'),
                      (e.style.top = i.getScrollY() + 'px'))),
                void 0 === z && (Se('initialLayout'), (z = P = i.getScrollY()));
              var a = 'pswp--open ';
              for (
                l.mainClass && (a += l.mainClass + ' '),
                  l.showHideOpacity && (a += 'pswp--animate_opacity '),
                  a += F ? 'pswp--touch' : 'pswp--notouch',
                  a += N.animationName ? ' pswp--css_animation' : '',
                  a += N.svg ? ' pswp--svg' : '',
                  i.addClass(e, a),
                  r.updateSize(),
                  m = -1,
                  xe = null,
                  n = 0;
                n < s;
                n++
              )
                Re((n + m) * we.x, E[n].el.style);
              B || i.bind(r.scrollWrap, g, r),
                ke('initialZoomInEnd', function () {
                  r.setContent(E[0], f - 1),
                    r.setContent(E[2], f + 1),
                    (E[0].el.style.display = E[2].el.style.display = 'block'),
                    l.focus && e.focus(),
                    qe();
                }),
                r.setContent(E[1], f),
                r.updateCurrItem(),
                Se('afterInit'),
                be ||
                  (I = setInterval(function () {
                    Je ||
                      W ||
                      ee ||
                      y !== r.currItem.initialZoomLevel ||
                      r.updateSize();
                  }, 1e3)),
                i.addClass(e, 'pswp--visible');
            }
          },
          close: function () {
            u &&
              ((u = !1),
              (c = !0),
              Se('close'),
              Ue(),
              nn(r.currItem, null, !0, r.destroy));
          },
          destroy: function () {
            Se('destroy'),
              jt && clearTimeout(jt),
              e.setAttribute('aria-hidden', 'true'),
              (e.className = R),
              I && clearInterval(I),
              i.unbind(r.scrollWrap, g, r),
              i.unbind(window, 'scroll', r),
              Ot(),
              nt(),
              (Me = null);
          },
          panTo: function (e, t, n) {
            n ||
              (e > oe.min.x ? (e = oe.min.x) : e < oe.max.x && (e = oe.max.x),
              t > oe.min.y ? (t = oe.min.y) : t < oe.max.y && (t = oe.max.y)),
              (he.x = e),
              (he.y = t),
              Le();
          },
          handleEvent: function (e) {
            (e = e || window.event), v[e.type] && v[e.type](e);
          },
          goTo: function (e) {
            e = Te(e);
            var t = e - f;
            (xe = t),
              (f = e),
              (r.currItem = Jt(f)),
              (ve -= t),
              Pe(we.x * ve),
              nt(),
              (re = !1),
              r.updateCurrItem();
          },
          next: function () {
            r.goTo(f + 1);
          },
          prev: function () {
            r.goTo(f - 1);
          },
          updateCurrZoomItem: function (e) {
            if ((e && Se('beforeChange', 0), E[1].el.children.length)) {
              var t = E[1].el.children[0];
              ie = i.hasClass(t, 'pswp__zoom-wrap') ? t.style : null;
            } else ie = null;
            (oe = r.currItem.bounds),
              (w = y = r.currItem.initialZoomLevel),
              (he.x = oe.center.x),
              (he.y = oe.center.y),
              e && Se('afterChange');
          },
          invalidateCurrItems: function () {
            C = !0;
            for (var e = 0; e < s; e++)
              E[e].item && (E[e].item.needsUpdate = !0);
          },
          updateCurrItem: function (e) {
            if (0 !== xe) {
              var t,
                n = Math.abs(xe);
              if (!(e && n < 2)) {
                (r.currItem = Jt(f)),
                  (Ee = !1),
                  Se('beforeChange', xe),
                  n >= s && ((m += xe + (xe > 0 ? -s : s)), (n = s));
                for (var o = 0; o < n; o++)
                  xe > 0
                    ? ((t = E.shift()),
                      (E[s - 1] = t),
                      m++,
                      Re((m + 2) * we.x, t.el.style),
                      r.setContent(t, f - n + o + 1 + 1))
                    : ((t = E.pop()),
                      E.unshift(t),
                      m--,
                      Re(m * we.x, t.el.style),
                      r.setContent(t, f + n - o - 1 - 1));
                if (ie && 1 === Math.abs(xe)) {
                  var i = Jt(O);
                  i.initialZoomLevel !== y && (un(i, ge), pn(i), _e(i));
                }
                (xe = 0), r.updateCurrZoomItem(), (O = f), Se('afterChange');
              }
            }
          },
          updateSize: function (t) {
            if (!be && l.modal) {
              var n = i.getScrollY();
              if (
                (z !== n && ((e.style.top = n + 'px'), (z = n)),
                !t && Ce.x === window.innerWidth && Ce.y === window.innerHeight)
              )
                return;
              (Ce.x = window.innerWidth),
                (Ce.y = window.innerHeight),
                (e.style.height = Ce.y + 'px');
            }
            if (
              ((ge.x = r.scrollWrap.clientWidth),
              (ge.y = r.scrollWrap.clientHeight),
              Ve(),
              (we.x = ge.x + Math.round(ge.x * l.spacing)),
              (we.y = ge.y),
              Pe(we.x * ve),
              Se('beforeResize'),
              void 0 !== m)
            ) {
              for (var o, a, u, c = 0; c < s; c++)
                (o = E[c]),
                  Re((c + m) * we.x, o.el.style),
                  (u = f + c - 1),
                  l.loop && en() > 2 && (u = Te(u)),
                  (a = Jt(u)),
                  a && (C || a.needsUpdate || !a.bounds)
                    ? (r.cleanSlide(a),
                      r.setContent(o, u),
                      1 === c && ((r.currItem = a), r.updateCurrZoomItem(!0)),
                      (a.needsUpdate = !1))
                    : -1 === o.index && u >= 0 && r.setContent(o, u),
                  a && a.container && (un(a, ge), pn(a), _e(a));
              C = !1;
            }
            (w = y = r.currItem.initialZoomLevel),
              (oe = r.currItem.bounds),
              oe && ((he.x = oe.center.x), (he.y = oe.center.y), Le(!0)),
              Se('resize');
          },
          zoomTo: function (e, t, n, o, r) {
            t &&
              ((w = y),
              (xt.x = Math.abs(t.x) - he.x),
              (xt.y = Math.abs(t.y) - he.y),
              ze(me, he));
            var a = Ke(e, !1),
              s = {};
            We('x', a, s, e), We('y', a, s, e);
            var l = y,
              u = { x: he.x, y: he.y };
            Ne(s);
            var c = function (t) {
              1 === t
                ? ((y = e), (he.x = s.x), (he.y = s.y))
                : ((y = (e - l) * t + l),
                  (he.x = (s.x - u.x) * t + u.x),
                  (he.y = (s.y - u.y) * t + u.y)),
                r && r(t),
                Le(1 === t);
            };
            n ? ot('customZoomTo', 0, 1, n, o || i.easing.sine.inOut, c) : c(1);
          }
        },
        rt = 30,
        at = 10,
        st = {},
        lt = {},
        ut = {},
        ct = {},
        dt = {},
        ft = [],
        pt = {},
        mt = [],
        ht = {},
        gt = 0,
        vt = fe(),
        yt = 0,
        wt = fe(),
        xt = fe(),
        bt = fe(),
        It = function (e, t) {
          return e.x === t.x && e.y === t.y;
        },
        Ct = function (e, t) {
          return Math.abs(e.x - t.x) < a && Math.abs(e.y - t.y) < a;
        },
        Et = function (e, t) {
          return (
            (ht.x = Math.abs(e.x - t.x)),
            (ht.y = Math.abs(e.y - t.y)),
            Math.sqrt(ht.x * ht.x + ht.y * ht.y)
          );
        },
        Ot = function () {
          V && (_(V), (V = null));
        },
        Tt = function () {
          W && ((V = L(Tt)), qt());
        },
        Mt = function () {
          return !('fit' === l.scaleMode && y === r.currItem.initialZoomLevel);
        },
        kt = function (e, t) {
          return (
            !(!e || e === document) &&
            !(
              e.getAttribute('class') &&
              e.getAttribute('class').indexOf('pswp__scroll-wrap') > -1
            ) &&
            (t(e) ? e : kt(e.parentNode, t))
          );
        },
        St = {},
        At = function (e, t) {
          return (
            (St.prevent = !kt(e.target, l.isClickableElement)),
            Se('preventDragEvent', e, t, St),
            St.prevent
          );
        },
        Dt = function (e, t) {
          return (t.x = e.pageX), (t.y = e.pageY), (t.id = e.identifier), t;
        },
        Ft = function (e, t, n) {
          (n.x = 0.5 * (e.x + t.x)), (n.y = 0.5 * (e.y + t.y));
        },
        Lt = function (e, t, n) {
          if (e - q > 50) {
            var o = mt.length > 2 ? mt.shift() : {};
            (o.x = t), (o.y = n), mt.push(o), (q = e);
          }
        },
        _t = function () {
          var e = he.y - r.currItem.initialPosition.y;
          return 1 - Math.abs(e / (ge.y / 2));
        },
        Rt = {},
        Pt = {},
        Bt = [],
        zt = function (e) {
          for (; Bt.length > 0; ) Bt.pop();
          return (
            D
              ? ((de = 0),
                ft.forEach(function (e) {
                  0 === de ? (Bt[0] = e) : 1 === de && (Bt[1] = e), de++;
                }))
              : e.type.indexOf('touch') > -1
              ? e.touches &&
                e.touches.length > 0 &&
                ((Bt[0] = Dt(e.touches[0], Rt)),
                e.touches.length > 1 && (Bt[1] = Dt(e.touches[1], Pt)))
              : ((Rt.x = e.pageX),
                (Rt.y = e.pageY),
                (Rt.id = ''),
                (Bt[0] = Rt)),
            Bt
          );
        },
        Nt = function (e, t) {
          var n,
            o,
            i,
            a,
            s = he[e] + t[e],
            u = t[e] > 0,
            c = wt.x + t.x,
            d = wt.x - pt.x;
          return (
            (n = s > oe.min[e] || s < oe.max[e] ? l.panEndFriction : 1),
            (s = he[e] + t[e] * n),
            (!l.allowPanToNext && y !== r.currItem.initialZoomLevel) ||
            (ie
              ? 'h' !== ae ||
                'x' !== e ||
                j ||
                (u
                  ? (s > oe.min[e] &&
                      ((n = l.panEndFriction),
                      oe.min[e] - s,
                      (o = oe.min[e] - me[e])),
                    (o <= 0 || d < 0) && en() > 1
                      ? ((a = c), d < 0 && c > pt.x && (a = pt.x))
                      : oe.min.x !== oe.max.x && (i = s))
                  : (s < oe.max[e] &&
                      ((n = l.panEndFriction),
                      s - oe.max[e],
                      (o = me[e] - oe.max[e])),
                    (o <= 0 || d > 0) && en() > 1
                      ? ((a = c), d > 0 && c < pt.x && (a = pt.x))
                      : oe.min.x !== oe.max.x && (i = s)))
              : (a = c),
            'x' !== e)
              ? void (
                  re ||
                  Q ||
                  (y > r.currItem.fitRatio && (he[e] += t[e] * n))
                )
              : (void 0 !== a && (Pe(a, !0), (Q = a !== pt.x)),
                oe.min.x !== oe.max.x &&
                  (void 0 !== i ? (he.x = i) : Q || (he.x += t.x * n)),
                void 0 !== a)
          );
        },
        Zt = function (e) {
          if (!('mousedown' === e.type && e.button > 0)) {
            if (Qt) return void e.preventDefault();
            if (!Y || 'mousedown' !== e.type) {
              if ((At(e, !0) && e.preventDefault(), Se('pointerDown'), D)) {
                var t = i.arraySearch(ft, e.pointerId, 'id');
                t < 0 && (t = ft.length),
                  (ft[t] = { x: e.pageX, y: e.pageY, id: e.pointerId });
              }
              var n = zt(e),
                o = n.length;
              (J = null),
                nt(),
                (W && 1 !== o) ||
                  ((W = se = !0),
                  i.bind(window, h, r),
                  (K = ce = le = H = Q = X = G = j = !1),
                  (ae = null),
                  Se('firstTouchStart', n),
                  ze(me, he),
                  (pe.x = pe.y = 0),
                  ze(ct, n[0]),
                  ze(dt, ct),
                  (pt.x = we.x * ve),
                  (mt = [{ x: ct.x, y: ct.y }]),
                  (q = $ = Ae()),
                  Ke(y, !0),
                  Ot(),
                  Tt()),
                !ee &&
                  o > 1 &&
                  !re &&
                  !Q &&
                  ((w = y),
                  (j = !1),
                  (ee = G = !0),
                  (pe.y = pe.x = 0),
                  ze(me, he),
                  ze(st, n[0]),
                  ze(lt, n[1]),
                  Ft(st, lt, bt),
                  (xt.x = Math.abs(bt.x) - he.x),
                  (xt.y = Math.abs(bt.y) - he.y),
                  (te = ne = Et(st, lt)));
            }
          }
        },
        $t = function (e) {
          if ((e.preventDefault(), D)) {
            var t = i.arraySearch(ft, e.pointerId, 'id');
            if (t > -1) {
              var n = ft[t];
              (n.x = e.pageX), (n.y = e.pageY);
            }
          }
          if (W) {
            var o = zt(e);
            if (ae || X || ee) J = o;
            else if (wt.x !== we.x * ve) ae = 'h';
            else {
              var r = Math.abs(o[0].x - ct.x) - Math.abs(o[0].y - ct.y);
              Math.abs(r) >= at && ((ae = r > 0 ? 'h' : 'v'), (J = o));
            }
          }
        },
        qt = function () {
          if (J) {
            var e = J.length;
            if (0 !== e)
              if (
                (ze(st, J[0]),
                (ut.x = st.x - ct.x),
                (ut.y = st.y - ct.y),
                ee && e > 1)
              ) {
                if (
                  ((ct.x = st.x), (ct.y = st.y), !ut.x && !ut.y && It(J[1], lt))
                )
                  return;
                ze(lt, J[1]), j || ((j = !0), Se('zoomGestureStarted'));
                var t = Et(st, lt),
                  n = Wt(t);
                n >
                  r.currItem.initialZoomLevel +
                    r.currItem.initialZoomLevel / 15 && (ce = !0);
                var o = 1,
                  i = He(),
                  a = Ye();
                if (n < i)
                  if (
                    l.pinchToClose &&
                    !ce &&
                    w <= r.currItem.initialZoomLevel
                  ) {
                    var s = i - n,
                      u = 1 - s / (i / 1.2);
                    De(u), Se('onPinchClose', u), (le = !0);
                  } else
                    (o = (i - n) / i), o > 1 && (o = 1), (n = i - o * (i / 3));
                else
                  n > a &&
                    ((o = (n - a) / (6 * i)),
                    o > 1 && (o = 1),
                    (n = a + o * i));
                o < 0 && (o = 0),
                  (te = t),
                  Ft(st, lt, vt),
                  (pe.x += vt.x - bt.x),
                  (pe.y += vt.y - bt.y),
                  ze(bt, vt),
                  (he.x = Be('x', n)),
                  (he.y = Be('y', n)),
                  (K = n > y),
                  (y = n),
                  Le();
              } else {
                if (!ae) return;
                if (
                  (se &&
                    ((se = !1),
                    Math.abs(ut.x) >= at && (ut.x -= J[0].x - dt.x),
                    Math.abs(ut.y) >= at && (ut.y -= J[0].y - dt.y)),
                  (ct.x = st.x),
                  (ct.y = st.y),
                  0 === ut.x && 0 === ut.y)
                )
                  return;
                if ('v' === ae && l.closeOnVerticalDrag && !Mt()) {
                  (pe.y += ut.y), (he.y += ut.y);
                  var c = _t();
                  return (H = !0), Se('onVerticalDrag', c), De(c), void Le();
                }
                Lt(Ae(), st.x, st.y), (X = !0), (oe = r.currItem.bounds);
                var d = Nt('x', ut);
                d || (Nt('y', ut), Ne(he), Le());
              }
          }
        },
        Ut = function (e) {
          if (N.isOldAndroid) {
            if (Y && 'mouseup' === e.type) return;
            e.type.indexOf('touch') > -1 &&
              (clearTimeout(Y),
              (Y = setTimeout(function () {
                Y = 0;
              }, 600)));
          }
          Se('pointerUp'), At(e, !1) && e.preventDefault();
          var t;
          if (D) {
            var n = i.arraySearch(ft, e.pointerId, 'id');
            if (n > -1)
              if (((t = ft.splice(n, 1)[0]), navigator.msPointerEnabled)) {
                var o = { 4: 'mouse', 2: 'touch', 3: 'pen' };
                (t.type = o[e.pointerType]),
                  t.type || (t.type = e.pointerType || 'mouse');
              } else t.type = e.pointerType || 'mouse';
          }
          var a,
            s = zt(e),
            u = s.length;
          if (('mouseup' === e.type && (u = 0), 2 === u)) return (J = null), !0;
          1 === u && ze(dt, s[0]),
            0 !== u ||
              ae ||
              re ||
              (t ||
                ('mouseup' === e.type
                  ? (t = { x: e.pageX, y: e.pageY, type: 'mouse' })
                  : e.changedTouches &&
                    e.changedTouches[0] &&
                    (t = {
                      x: e.changedTouches[0].pageX,
                      y: e.changedTouches[0].pageY,
                      type: 'touch'
                    })),
              Se('touchRelease', e, t));
          var c = -1;
          if (
            (0 === u &&
              ((W = !1),
              i.unbind(window, h, r),
              Ot(),
              ee ? (c = 0) : -1 !== yt && (c = Ae() - yt)),
            (yt = 1 === u ? Ae() : -1),
            (a = -1 !== c && c < 150 ? 'zoom' : 'swipe'),
            ee &&
              u < 2 &&
              ((ee = !1),
              1 === u && (a = 'zoomPointerUp'),
              Se('zoomGestureEnded')),
            (J = null),
            X || j || re || H)
          )
            if ((nt(), U || (U = Kt()), U.calculateSwipeSpeed('x'), H)) {
              var d = _t();
              if (d < l.verticalDragRange) r.close();
              else {
                var f = he.y,
                  p = ue;
                ot('verticalDrag', 0, 1, 300, i.easing.cubic.out, function (e) {
                  (he.y = (r.currItem.initialPosition.y - f) * e + f),
                    De((1 - p) * e + p),
                    Le();
                }),
                  Se('onVerticalDrag', 1);
              }
            } else {
              if ((Q || re) && 0 === u) {
                var m = Yt(a, U);
                if (m) return;
                a = 'zoomPointerUp';
              }
              if (!re)
                return 'swipe' !== a
                  ? void Gt()
                  : void (!Q && y > r.currItem.fitRatio && Ht(U));
            }
        },
        Kt = function () {
          var e,
            t,
            n = {
              lastFlickOffset: {},
              lastFlickDist: {},
              lastFlickSpeed: {},
              slowDownRatio: {},
              slowDownRatioReverse: {},
              speedDecelerationRatio: {},
              speedDecelerationRatioAbs: {},
              distanceOffset: {},
              backAnimDestination: {},
              backAnimStarted: {},
              calculateSwipeSpeed: function (o) {
                mt.length > 1
                  ? ((e = Ae() - q + 50), (t = mt[mt.length - 2][o]))
                  : ((e = Ae() - $), (t = dt[o])),
                  (n.lastFlickOffset[o] = ct[o] - t),
                  (n.lastFlickDist[o] = Math.abs(n.lastFlickOffset[o])),
                  n.lastFlickDist[o] > 20
                    ? (n.lastFlickSpeed[o] = n.lastFlickOffset[o] / e)
                    : (n.lastFlickSpeed[o] = 0),
                  Math.abs(n.lastFlickSpeed[o]) < 0.1 &&
                    (n.lastFlickSpeed[o] = 0),
                  (n.slowDownRatio[o] = 0.95),
                  (n.slowDownRatioReverse[o] = 1 - n.slowDownRatio[o]),
                  (n.speedDecelerationRatio[o] = 1);
              },
              calculateOverBoundsAnimOffset: function (e, t) {
                n.backAnimStarted[e] ||
                  (he[e] > oe.min[e]
                    ? (n.backAnimDestination[e] = oe.min[e])
                    : he[e] < oe.max[e] &&
                      (n.backAnimDestination[e] = oe.max[e]),
                  void 0 !== n.backAnimDestination[e] &&
                    ((n.slowDownRatio[e] = 0.7),
                    (n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e]),
                    n.speedDecelerationRatioAbs[e] < 0.05 &&
                      ((n.lastFlickSpeed[e] = 0),
                      (n.backAnimStarted[e] = !0),
                      ot(
                        'bounceZoomPan' + e,
                        he[e],
                        n.backAnimDestination[e],
                        t || 300,
                        i.easing.sine.out,
                        function (t) {
                          (he[e] = t), Le();
                        }
                      ))));
              },
              calculateAnimOffset: function (e) {
                n.backAnimStarted[e] ||
                  ((n.speedDecelerationRatio[e] =
                    n.speedDecelerationRatio[e] *
                    (n.slowDownRatio[e] +
                      n.slowDownRatioReverse[e] -
                      (n.slowDownRatioReverse[e] * n.timeDiff) / 10)),
                  (n.speedDecelerationRatioAbs[e] = Math.abs(
                    n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]
                  )),
                  (n.distanceOffset[e] =
                    n.lastFlickSpeed[e] *
                    n.speedDecelerationRatio[e] *
                    n.timeDiff),
                  (he[e] += n.distanceOffset[e]));
              },
              panAnimLoop: function () {
                if (
                  Qe.zoomPan &&
                  ((Qe.zoomPan.raf = L(n.panAnimLoop)),
                  (n.now = Ae()),
                  (n.timeDiff = n.now - n.lastNow),
                  (n.lastNow = n.now),
                  n.calculateAnimOffset('x'),
                  n.calculateAnimOffset('y'),
                  Le(),
                  n.calculateOverBoundsAnimOffset('x'),
                  n.calculateOverBoundsAnimOffset('y'),
                  n.speedDecelerationRatioAbs.x < 0.05 &&
                    n.speedDecelerationRatioAbs.y < 0.05)
                )
                  return (
                    (he.x = Math.round(he.x)),
                    (he.y = Math.round(he.y)),
                    Le(),
                    void et('zoomPan')
                  );
              }
            };
          return n;
        },
        Ht = function (e) {
          return (
            e.calculateSwipeSpeed('y'),
            (oe = r.currItem.bounds),
            (e.backAnimDestination = {}),
            (e.backAnimStarted = {}),
            Math.abs(e.lastFlickSpeed.x) <= 0.05 &&
            Math.abs(e.lastFlickSpeed.y) <= 0.05
              ? ((e.speedDecelerationRatioAbs.x =
                  e.speedDecelerationRatioAbs.y =
                    0),
                e.calculateOverBoundsAnimOffset('x'),
                e.calculateOverBoundsAnimOffset('y'),
                !0)
              : (tt('zoomPan'), (e.lastNow = Ae()), void e.panAnimLoop())
          );
        },
        Yt = function (e, t) {
          var n;
          re || (gt = f);
          var o;
          if ('swipe' === e) {
            var a = ct.x - dt.x,
              s = t.lastFlickDist.x < 10;
            a > rt && (s || t.lastFlickOffset.x > 20)
              ? (o = -1)
              : a < -rt && (s || t.lastFlickOffset.x < -20) && (o = 1);
          }
          var u;
          o &&
            ((f += o),
            f < 0
              ? ((f = l.loop ? en() - 1 : 0), (u = !0))
              : f >= en() && ((f = l.loop ? 0 : en() - 1), (u = !0)),
            (u && !l.loop) || ((xe += o), (ve -= o), (n = !0)));
          var c,
            d = we.x * ve,
            p = Math.abs(d - wt.x);
          return (
            n || d > wt.x == t.lastFlickSpeed.x > 0
              ? ((c =
                  Math.abs(t.lastFlickSpeed.x) > 0
                    ? p / Math.abs(t.lastFlickSpeed.x)
                    : 333),
                (c = Math.min(c, 400)),
                (c = Math.max(c, 250)))
              : (c = 333),
            gt === f && (n = !1),
            (re = !0),
            Se('mainScrollAnimStart'),
            ot('mainScroll', wt.x, d, c, i.easing.cubic.out, Pe, function () {
              nt(),
                (re = !1),
                (gt = -1),
                (n || gt !== f) && r.updateCurrItem(),
                Se('mainScrollAnimComplete');
            }),
            n && r.updateCurrItem(!0),
            n
          );
        },
        Wt = function (e) {
          return (1 / ne) * e * w;
        },
        Gt = function () {
          var e = y,
            t = He(),
            n = Ye();
          y < t ? (e = t) : y > n && (e = n);
          var o,
            a = ue;
          return le && !K && !ce && y < t
            ? (r.close(), !0)
            : (le &&
                (o = function (e) {
                  De((1 - a) * e + a);
                }),
              r.zoomTo(e, 0, 200, i.easing.cubic.out, o),
              !0);
        };
      Oe('Gestures', {
        publicMethods: {
          initGestures: function () {
            var e = function (e, t, n, o, i) {
              (T = e + t), (M = e + n), (k = e + o), (S = i ? e + i : '');
            };
            (D = N.pointerEvent),
              D && N.touch && (N.touch = !1),
              D
                ? navigator.msPointerEnabled
                  ? e('MSPointer', 'Down', 'Move', 'Up', 'Cancel')
                  : e('pointer', 'down', 'move', 'up', 'cancel')
                : N.touch
                ? (e('touch', 'start', 'move', 'end', 'cancel'), (F = !0))
                : e('mouse', 'down', 'move', 'up'),
              (h = M + ' ' + k + ' ' + S),
              (g = T),
              D &&
                !F &&
                (F =
                  navigator.maxTouchPoints > 1 ||
                  navigator.msMaxTouchPoints > 1),
              (r.likelyTouchDevice = F),
              (v[T] = Zt),
              (v[M] = $t),
              (v[k] = Ut),
              S && (v[S] = v[k]),
              N.touch &&
                ((g += ' mousedown'),
                (h += ' mousemove mouseup'),
                (v.mousedown = v[T]),
                (v.mousemove = v[M]),
                (v.mouseup = v[k])),
              F || (l.allowPanToNext = !1);
          }
        }
      });
      var jt,
        Xt,
        Vt,
        Qt,
        Jt,
        en,
        tn,
        nn = function (t, n, o, a) {
          jt && clearTimeout(jt), (Qt = !0), (Vt = !0);
          var s;
          t.initialLayout
            ? ((s = t.initialLayout), (t.initialLayout = null))
            : (s = l.getThumbBoundsFn && l.getThumbBoundsFn(f));
          var u = o ? l.hideAnimationDuration : l.showAnimationDuration,
            c = function () {
              et('initialZoom'),
                o
                  ? (r.template.removeAttribute('style'),
                    r.bg.removeAttribute('style'))
                  : (De(1),
                    n && (n.style.display = 'block'),
                    i.addClass(e, 'pswp--animated-in'),
                    Se('initialZoom' + (o ? 'OutEnd' : 'InEnd'))),
                a && a(),
                (Qt = !1);
            };
          if (!u || !s || void 0 === s.x)
            return (
              Se('initialZoom' + (o ? 'Out' : 'In')),
              (y = t.initialZoomLevel),
              ze(he, t.initialPosition),
              Le(),
              (e.style.opacity = o ? 0 : 1),
              De(1),
              void (u
                ? setTimeout(function () {
                    c();
                  }, u)
                : c())
            );
          !(function () {
            var n = d,
              a = !r.currItem.src || r.currItem.loadError || l.showHideOpacity;
            t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = 'hidden'),
              o ||
                ((y = s.w / t.w),
                (he.x = s.x),
                (he.y = s.y - P),
                (r[a ? 'template' : 'bg'].style.opacity = 0.001),
                Le()),
              tt('initialZoom'),
              o && !n && i.removeClass(e, 'pswp--animated-in'),
              a &&
                (o
                  ? i[(n ? 'remove' : 'add') + 'Class'](
                      e,
                      'pswp--animate_opacity'
                    )
                  : setTimeout(function () {
                      i.addClass(e, 'pswp--animate_opacity');
                    }, 30)),
              (jt = setTimeout(
                function () {
                  if ((Se('initialZoom' + (o ? 'Out' : 'In')), o)) {
                    var r = s.w / t.w,
                      l = { x: he.x, y: he.y },
                      d = y,
                      f = ue,
                      p = function (t) {
                        1 === t
                          ? ((y = r), (he.x = s.x), (he.y = s.y - z))
                          : ((y = (r - d) * t + d),
                            (he.x = (s.x - l.x) * t + l.x),
                            (he.y = (s.y - z - l.y) * t + l.y)),
                          Le(),
                          a ? (e.style.opacity = 1 - t) : De(f - t * f);
                      };
                    n
                      ? ot('initialZoom', 0, 1, u, i.easing.cubic.out, p, c)
                      : (p(1), (jt = setTimeout(c, u + 20)));
                  } else
                    (y = t.initialZoomLevel),
                      ze(he, t.initialPosition),
                      Le(),
                      De(1),
                      a ? (e.style.opacity = 1) : De(1),
                      (jt = setTimeout(c, u + 20));
                },
                o ? 25 : 90
              ));
          })();
        },
        on = {},
        rn = [],
        an = {
          index: 0,
          errorMsg:
            '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: !1,
          preload: [1, 1],
          getNumItemsFn: function () {
            return Xt.length;
          }
        },
        sn = function () {
          return {
            center: { x: 0, y: 0 },
            max: { x: 0, y: 0 },
            min: { x: 0, y: 0 }
          };
        },
        ln = function (e, t, n) {
          var o = e.bounds;
          (o.center.x = Math.round((on.x - t) / 2)),
            (o.center.y = Math.round((on.y - n) / 2) + e.vGap.top),
            (o.max.x = t > on.x ? Math.round(on.x - t) : o.center.x),
            (o.max.y =
              n > on.y ? Math.round(on.y - n) + e.vGap.top : o.center.y),
            (o.min.x = t > on.x ? 0 : o.center.x),
            (o.min.y = n > on.y ? e.vGap.top : o.center.y);
        },
        un = function (e, t, n) {
          if (e.src && !e.loadError) {
            var o = !n;
            if (
              (o &&
                (e.vGap || (e.vGap = { top: 0, bottom: 0 }),
                Se('parseVerticalMargin', e)),
              (on.x = t.x),
              (on.y = t.y - e.vGap.top - e.vGap.bottom),
              o)
            ) {
              var i = on.x / e.w,
                r = on.y / e.h;
              e.fitRatio = i < r ? i : r;
              var a = l.scaleMode;
              'orig' === a ? (n = 1) : 'fit' === a && (n = e.fitRatio),
                n > 1 && (n = 1),
                (e.initialZoomLevel = n),
                e.bounds || (e.bounds = sn());
            }
            if (!n) return;
            return (
              ln(e, e.w * n, e.h * n),
              o &&
                n === e.initialZoomLevel &&
                (e.initialPosition = e.bounds.center),
              e.bounds
            );
          }
          return (
            (e.w = e.h = 0),
            (e.initialZoomLevel = e.fitRatio = 1),
            (e.bounds = sn()),
            (e.initialPosition = e.bounds.center),
            e.bounds
          );
        },
        cn = function (e, t, n, o, i, a) {
          t.loadError ||
            (o &&
              ((t.imageAppended = !0),
              pn(t, o, t === r.currItem && Ee),
              n.appendChild(o),
              a &&
                setTimeout(function () {
                  t &&
                    t.loaded &&
                    t.placeholder &&
                    ((t.placeholder.style.display = 'none'),
                    (t.placeholder = null));
                }, 500)));
        },
        dn = function (e) {
          (e.loading = !0), (e.loaded = !1);
          var t = (e.img = i.createEl('pswp__img', 'img')),
            n = function () {
              (e.loading = !1),
                (e.loaded = !0),
                e.loadComplete ? e.loadComplete(e) : (e.img = null),
                (t.onload = t.onerror = null),
                (t = null);
            };
          return (
            (t.onload = n),
            (t.onerror = function () {
              (e.loadError = !0), n();
            }),
            (t.src = e.src),
            t
          );
        },
        fn = function (e, t) {
          if (e.src && e.loadError && e.container)
            return (
              t && (e.container.innerHTML = ''),
              (e.container.innerHTML = l.errorMsg.replace('%url%', e.src)),
              !0
            );
        },
        pn = function (e, t, n) {
          if (e.src) {
            t || (t = e.container.lastChild);
            var o = n ? e.w : Math.round(e.w * e.fitRatio),
              i = n ? e.h : Math.round(e.h * e.fitRatio);
            e.placeholder &&
              !e.loaded &&
              ((e.placeholder.style.width = o + 'px'),
              (e.placeholder.style.height = i + 'px')),
              (t.style.width = o + 'px'),
              (t.style.height = i + 'px');
          }
        },
        mn = function () {
          if (rn.length) {
            for (var e, t = 0; t < rn.length; t++)
              (e = rn[t]),
                e.holder.index === e.index &&
                  cn(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
            rn = [];
          }
        };
      Oe('Controller', {
        publicMethods: {
          lazyLoadItem: function (e) {
            e = Te(e);
            var t = Jt(e);
            t &&
              ((!t.loaded && !t.loading) || C) &&
              (Se('gettingData', e, t), t.src && dn(t));
          },
          initController: function () {
            i.extend(l, an, !0),
              (r.items = Xt = n),
              (Jt = r.getItemAt),
              (en = l.getNumItemsFn),
              (tn = l.loop),
              en() < 3 && (l.loop = !1),
              ke('beforeChange', function (e) {
                var t,
                  n = l.preload,
                  o = null === e || e >= 0,
                  i = Math.min(n[0], en()),
                  a = Math.min(n[1], en());
                for (t = 1; t <= (o ? a : i); t++) r.lazyLoadItem(f + t);
                for (t = 1; t <= (o ? i : a); t++) r.lazyLoadItem(f - t);
              }),
              ke('initialLayout', function () {
                r.currItem.initialLayout =
                  l.getThumbBoundsFn && l.getThumbBoundsFn(f);
              }),
              ke('mainScrollAnimComplete', mn),
              ke('initialZoomInEnd', mn),
              ke('destroy', function () {
                for (var e, t = 0; t < Xt.length; t++)
                  (e = Xt[t]),
                    e.container && (e.container = null),
                    e.placeholder && (e.placeholder = null),
                    e.img && (e.img = null),
                    e.preloader && (e.preloader = null),
                    e.loadError && (e.loaded = e.loadError = !1);
                rn = null;
              });
          },
          getItemAt: function (e) {
            return e >= 0 && void 0 !== Xt[e] && Xt[e];
          },
          allowProgressiveImg: function () {
            return (
              l.forceProgressiveLoading ||
              !F ||
              l.mouseUsed ||
              screen.width > 1200
            );
          },
          setContent: function (e, t) {
            l.loop && (t = Te(t));
            var n = r.getItemAt(e.index);
            n && (n.container = null);
            var o,
              a = r.getItemAt(t);
            if (!a) return void (e.el.innerHTML = '');
            Se('gettingData', t, a), (e.index = t), (e.item = a);
            var s = (a.container = i.createEl('pswp__zoom-wrap'));
            if (
              (!a.src &&
                a.html &&
                (a.html.tagName
                  ? s.appendChild(a.html)
                  : (s.innerHTML = a.html)),
              fn(a),
              un(a, ge),
              !a.src || a.loadError || a.loaded)
            )
              a.src &&
                !a.loadError &&
                ((o = i.createEl('pswp__img', 'img')),
                (o.style.opacity = 1),
                (o.src = a.src),
                pn(a, o),
                cn(t, a, s, o, !0));
            else {
              if (
                ((a.loadComplete = function (n) {
                  if (u) {
                    if (e && e.index === t) {
                      if (fn(n, !0))
                        return (
                          (n.loadComplete = n.img = null),
                          un(n, ge),
                          _e(n),
                          void (e.index === f && r.updateCurrZoomItem())
                        );
                      n.imageAppended
                        ? !Qt &&
                          n.placeholder &&
                          ((n.placeholder.style.display = 'none'),
                          (n.placeholder = null))
                        : N.transform && (re || Qt)
                        ? rn.push({
                            item: n,
                            baseDiv: s,
                            img: n.img,
                            index: t,
                            holder: e,
                            clearPlaceholder: !0
                          })
                        : cn(t, n, s, n.img, re || Qt, !0);
                    }
                    (n.loadComplete = null),
                      (n.img = null),
                      Se('imageLoadComplete', t, n);
                  }
                }),
                i.features.transform)
              ) {
                var c = 'pswp__img pswp__img--placeholder';
                c += a.msrc ? '' : ' pswp__img--placeholder--blank';
                var d = i.createEl(c, a.msrc ? 'img' : '');
                a.msrc && (d.src = a.msrc),
                  pn(a, d),
                  s.appendChild(d),
                  (a.placeholder = d);
              }
              a.loading || dn(a),
                r.allowProgressiveImg() &&
                  (!Vt && N.transform
                    ? rn.push({
                        item: a,
                        baseDiv: s,
                        img: a.img,
                        index: t,
                        holder: e
                      })
                    : cn(t, a, s, a.img, !0, !0));
            }
            Vt || t !== f ? _e(a) : ((ie = s.style), nn(a, o || a.img)),
              (e.el.innerHTML = ''),
              e.el.appendChild(s);
          },
          cleanSlide: function (e) {
            e.img && (e.img.onload = e.img.onerror = null),
              (e.loaded = e.loading = e.img = e.imageAppended = !1);
          }
        }
      });
      var hn,
        gn = {},
        vn = function (e, t, n) {
          var o = document.createEvent('CustomEvent'),
            i = {
              origEvent: e,
              target: e.target,
              releasePoint: t,
              pointerType: n || 'touch'
            };
          o.initCustomEvent('pswpTap', !0, !0, i), e.target.dispatchEvent(o);
        };
      Oe('Tap', {
        publicMethods: {
          initTap: function () {
            ke('firstTouchStart', r.onTapStart),
              ke('touchRelease', r.onTapRelease),
              ke('destroy', function () {
                (gn = {}), (hn = null);
              });
          },
          onTapStart: function (e) {
            e.length > 1 && (clearTimeout(hn), (hn = null));
          },
          onTapRelease: function (e, t) {
            if (t && !X && !G && !Je) {
              var n = t;
              if (hn && (clearTimeout(hn), (hn = null), Ct(n, gn)))
                return void Se('doubleTap', n);
              if ('mouse' === t.type) return void vn(e, t, 'mouse');
              if (
                'BUTTON' === e.target.tagName.toUpperCase() ||
                i.hasClass(e.target, 'pswp__single-tap')
              )
                return void vn(e, t);
              ze(gn, n),
                (hn = setTimeout(function () {
                  vn(e, t), (hn = null);
                }, 300));
            }
          }
        }
      });
      var yn;
      Oe('DesktopZoom', {
        publicMethods: {
          initDesktopZoom: function () {
            B ||
              (F
                ? ke('mouseUsed', function () {
                    r.setupDesktopZoom();
                  })
                : r.setupDesktopZoom(!0));
          },
          setupDesktopZoom: function (t) {
            yn = {};
            var n = 'wheel mousewheel DOMMouseScroll';
            ke('bindEvents', function () {
              i.bind(e, n, r.handleMouseWheel);
            }),
              ke('unbindEvents', function () {
                yn && i.unbind(e, n, r.handleMouseWheel);
              }),
              (r.mouseZoomedIn = !1);
            var o,
              a = function () {
                r.mouseZoomedIn &&
                  (i.removeClass(e, 'pswp--zoomed-in'), (r.mouseZoomedIn = !1)),
                  y < 1
                    ? i.addClass(e, 'pswp--zoom-allowed')
                    : i.removeClass(e, 'pswp--zoom-allowed'),
                  s();
              },
              s = function () {
                o && (i.removeClass(e, 'pswp--dragging'), (o = !1));
              };
            ke('resize', a),
              ke('afterChange', a),
              ke('pointerDown', function () {
                r.mouseZoomedIn && ((o = !0), i.addClass(e, 'pswp--dragging'));
              }),
              ke('pointerUp', s),
              t || a();
          },
          handleMouseWheel: function (e) {
            if (y <= r.currItem.fitRatio)
              return (
                l.modal &&
                  (!l.closeOnScroll || Je || W
                    ? e.preventDefault()
                    : A && Math.abs(e.deltaY) > 2 && ((d = !0), r.close())),
                !0
              );
            if ((e.stopPropagation(), (yn.x = 0), 'deltaX' in e))
              1 === e.deltaMode
                ? ((yn.x = 18 * e.deltaX), (yn.y = 18 * e.deltaY))
                : ((yn.x = e.deltaX), (yn.y = e.deltaY));
            else if ('wheelDelta' in e)
              e.wheelDeltaX && (yn.x = -0.16 * e.wheelDeltaX),
                e.wheelDeltaY
                  ? (yn.y = -0.16 * e.wheelDeltaY)
                  : (yn.y = -0.16 * e.wheelDelta);
            else {
              if (!('detail' in e)) return;
              yn.y = e.detail;
            }
            Ke(y, !0);
            var t = he.x - yn.x,
              n = he.y - yn.y;
            (l.modal ||
              (t <= oe.min.x &&
                t >= oe.max.x &&
                n <= oe.min.y &&
                n >= oe.max.y)) &&
              e.preventDefault(),
              r.panTo(t, n);
          },
          toggleDesktopZoom: function (t) {
            t = t || { x: ge.x / 2 + ye.x, y: ge.y / 2 + ye.y };
            var n = l.getDoubleTapZoom(!0, r.currItem),
              o = y === n;
            (r.mouseZoomedIn = !o),
              r.zoomTo(o ? r.currItem.initialZoomLevel : n, t, 333),
              i[(o ? 'remove' : 'add') + 'Class'](e, 'pswp--zoomed-in');
          }
        }
      });
      var wn,
        xn,
        bn,
        In,
        Cn,
        En,
        On,
        Tn,
        Mn,
        kn,
        Sn,
        An,
        Dn = { history: !0, galleryUID: 1 },
        Fn = function () {
          return Sn.hash.substring(1);
        },
        Ln = function () {
          wn && clearTimeout(wn), bn && clearTimeout(bn);
        },
        _n = function () {
          var e = Fn(),
            t = {};
          if (e.length < 5) return t;
          var n,
            o = e.split('&');
          for (n = 0; n < o.length; n++)
            if (o[n]) {
              var i = o[n].split('=');
              i.length < 2 || (t[i[0]] = i[1]);
            }
          if (l.galleryPIDs) {
            var r = t.pid;
            for (t.pid = 0, n = 0; n < Xt.length; n++)
              if (Xt[n].pid === r) {
                t.pid = n;
                break;
              }
          } else t.pid = parseInt(t.pid, 10) - 1;
          return t.pid < 0 && (t.pid = 0), t;
        },
        Rn = function () {
          if ((bn && clearTimeout(bn), Je || W))
            return void (bn = setTimeout(Rn, 500));
          In ? clearTimeout(xn) : (In = !0);
          var e = f + 1,
            t = Jt(f);
          t.hasOwnProperty('pid') && (e = t.pid);
          var n = On + '&gid=' + l.galleryUID + '&pid=' + e;
          Tn || (-1 === Sn.hash.indexOf(n) && (kn = !0));
          var o = Sn.href.split('#')[0] + '#' + n;
          An
            ? '#' + n !== window.location.hash &&
              history[Tn ? 'replaceState' : 'pushState']('', document.title, o)
            : Tn
            ? Sn.replace(o)
            : (Sn.hash = n),
            (Tn = !0),
            (xn = setTimeout(function () {
              In = !1;
            }, 60));
        };
      Oe('History', {
        publicMethods: {
          initHistory: function () {
            if ((i.extend(l, Dn, !0), l.history)) {
              (Sn = window.location),
                (kn = !1),
                (Mn = !1),
                (Tn = !1),
                (On = Fn()),
                (An = 'pushState' in history),
                On.indexOf('gid=') > -1 &&
                  ((On = On.split('&gid=')[0]), (On = On.split('?gid=')[0])),
                ke('afterChange', r.updateURL),
                ke('unbindEvents', function () {
                  i.unbind(window, 'hashchange', r.onHashChange);
                });
              var e = function () {
                (En = !0),
                  Mn ||
                    (kn
                      ? history.back()
                      : On
                      ? (Sn.hash = On)
                      : An
                      ? history.pushState(
                          '',
                          document.title,
                          Sn.pathname + Sn.search
                        )
                      : (Sn.hash = '')),
                  Ln();
              };
              ke('unbindEvents', function () {
                d && e();
              }),
                ke('destroy', function () {
                  En || e();
                }),
                ke('firstUpdate', function () {
                  f = _n().pid;
                });
              var t = On.indexOf('pid=');
              t > -1 &&
                ((On = On.substring(0, t)),
                '&' === On.slice(-1) && (On = On.slice(0, -1))),
                setTimeout(function () {
                  u && i.bind(window, 'hashchange', r.onHashChange);
                }, 40);
            }
          },
          onHashChange: function () {
            return Fn() === On
              ? ((Mn = !0), void r.close())
              : void (In || ((Cn = !0), r.goTo(_n().pid), (Cn = !1)));
          },
          updateURL: function () {
            Ln(), Cn || (Tn ? (wn = setTimeout(Rn, 800)) : Rn());
          }
        }
      }),
        i.extend(r, it);
    };
  });
var isMobile = window.matchMedia('(max-width: 640px)').matches,
  initPhotoSwipeFromDOM = function (e) {
    for (
      var t = function (e) {
          for (
            var t, n, o, i, r = e.childNodes, a = r.length, s = [], l = 0;
            l < a;
            l++
          )
            (t = r[l]),
              1 === t.nodeType &&
                ((n = t.children[0]),
                (o = n.getAttribute('data-size').split('x')),
                (i = {
                  src: n.getAttribute('href'),
                  w: parseInt(o[0], 10),
                  h: parseInt(o[1], 10)
                }),
                t.children.length > 1 && (i.title = t.children[1].innerHTML),
                n.children.length > 0 &&
                  (i.msrc = n.children[0].getAttribute('src')),
                (i.el = t),
                s.push(i));
          return s;
        },
        n = function e(t, n) {
          return t && (n(t) ? t : e(t.parentNode, n));
        },
        o = function (e) {
          (e = e || window.event),
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
          var t = e.target || e.srcElement,
            o = n(t, function (e) {
              return e.tagName && 'FIGURE' === e.tagName.toUpperCase();
            });
          if (o) {
            for (
              var i,
                a = o.parentNode,
                s = o.parentNode.childNodes,
                l = s.length,
                u = 0,
                c = 0;
              c < l;
              c++
            )
              if (1 === s[c].nodeType) {
                if (s[c] === o) {
                  i = u;
                  break;
                }
                u++;
              }
            return i >= 0 && r(i, a), !1;
          }
        },
        i = function () {
          var e = window.location.hash.substring(1),
            t = {};
          if (e.length < 5) return t;
          for (var n = e.split('&'), o = 0; o < n.length; o++)
            if (n[o]) {
              var i = n[o].split('=');
              i.length < 2 || (t[i[0]] = i[1]);
            }
          return t.gid && (t.gid = parseInt(t.gid, 10)), t;
        },
        r = function (e, n, o, i) {
          var r,
            a,
            s,
            l = document.querySelectorAll('.pswp')[0];
          if (
            ((s = t(n)),
            (a = {
              bgOpacity: 0.7,
              galleryUID: n.getAttribute('data-pswp-uid'),
              getThumbBoundsFn: function (e) {
                var t = s[e].el.getElementsByTagName('img')[0],
                  n = window.pageYOffset || document.documentElement.scrollTop,
                  o = t.getBoundingClientRect();
                return { x: o.left, y: o.top + n, w: o.width };
              }
            }),
            i)
          )
            if (a.galleryPIDs) {
              for (var u = 0; u < s.length; u++)
                if (s[u].pid == e) {
                  a.index = u;
                  break;
                }
            } else a.index = parseInt(e, 10) - 1;
          else a.index = parseInt(e, 10);
          isNaN(a.index) ||
            (o && (a.showAnimationDuration = 0),
            (r = new PhotoSwipe(l, PhotoSwipeUI_Default, s, a)),
            r.init(),
            r.listen('afterChange', function () {
              var e = (r.getCurrentIndex(), r.currItem.el),
                t = e.offsetLeft - e.parentNode.offsetLeft - 5;
              e.parentNode.scrollLeft = t;
            }));
        },
        a = document.querySelectorAll(e),
        s = 0,
        l = a.length;
      s < l;
      s++
    )
      a[s].setAttribute('data-pswp-uid', s + 1), (a[s].onclick = o);
    var u = i();
    u.pid && u.gid && r(u.pid, a[u.gid - 1], !0, !0);
  };
document.body.classList.contains('index') &&
  (yall({ threshold: 500 }),
  loadFacts(),
  loadOptions(),
  setTimeout(function () {}, 1200)),
  document.body.classList.contains('index') &&
    (setTimeout(function () {
      indexAnimation();
    }, 1500),
    setTimeout(function () {
      loadNav();
    }, 3500)),
  document.body.classList.contains('save-the-date') &&
    setTimeout(function () {
      startAnimation();
    }, 1200),
  document.body.classList.contains('slideshow') &&
    initPhotoSwipeFromDOM('.js-gallery');

// countdown

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`June 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Run every second
setInterval(updateCountdown, 1000);
