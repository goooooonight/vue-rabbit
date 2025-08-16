import { f as b } from './base-Bes0XUun.js'
import {
  K as s,
  f as g,
  v as S,
  S as o,
  g as d,
  o as p,
  t as y,
  c as P,
  n as w,
  F as O
} from './aria-CnJd5Vss.js'
function x(n) {
  return n
}
function T(n, e, t) {
  switch (t.length) {
    case 0:
      return n.call(e)
    case 1:
      return n.call(e, t[0])
    case 2:
      return n.call(e, t[0], t[1])
    case 3:
      return n.call(e, t[0], t[1], t[2])
  }
  return n.apply(e, t)
}
var A = 800,
  I = 16,
  E = Date.now
function C(n) {
  var e = 0,
    t = 0
  return function () {
    var a = E(),
      r = I - (a - t)
    if (((t = a), r > 0)) {
      if (++e >= A) return arguments[0]
    } else e = 0
    return n.apply(void 0, arguments)
  }
}
function F(n) {
  return function () {
    return n
  }
}
var N = s
    ? function (n, e) {
        return s(n, 'toString', {
          configurable: !0,
          enumerable: !1,
          value: F(e),
          writable: !0
        })
      }
    : x,
  _ = C(N),
  f = Math.max
function k(n, e, t) {
  return (
    (e = f(e === void 0 ? n.length - 1 : e, 0)),
    function () {
      for (
        var a = arguments, r = -1, i = f(a.length - e, 0), u = Array(i);
        ++r < i;

      )
        u[r] = a[e + r]
      r = -1
      for (var l = Array(e + 1); ++r < e; ) l[r] = a[r]
      return (l[e] = t(u)), T(n, this, l)
    }
  )
}
var G = 9007199254740991
function H(n) {
  return typeof n == 'number' && n > -1 && n % 1 == 0 && n <= G
}
var L = '[object Arguments]'
function c(n) {
  return g(n) && S(n) == L
}
var m = Object.prototype,
  M = m.hasOwnProperty,
  R = m.propertyIsEnumerable,
  v = c(
    (function () {
      return arguments
    })()
  )
    ? c
    : function (n) {
        return g(n) && M.call(n, 'callee') && !R.call(n, 'callee')
      }
function K(n, e) {
  for (var t = -1, a = e.length, r = n.length; ++t < a; ) n[r + t] = e[t]
  return n
}
var h = o ? o.isConcatSpreadable : void 0
function z(n) {
  return d(n) || v(n) || !!(h && n && n[h])
}
function B(n, e, t, a, r) {
  var i = -1,
    u = n.length
  for (t || (t = z), r || (r = []); ++i < u; ) {
    var l = n[i]
    t(l) ? K(r, l) : (r[r.length] = l)
  }
  return r
}
function D(n) {
  var e = n == null ? 0 : n.length
  return e ? B(n) : []
}
function U(n) {
  return _(k(n, void 0, D), n + '')
}
function X(n, e) {
  return n != null && e in Object(n)
}
function $(n, e, t) {
  e = p(e, n)
  for (var a = -1, r = e.length, i = !1; ++a < r; ) {
    var u = y(e[a])
    if (!(i = n != null && t(n, u))) break
    n = n[u]
  }
  return i || ++a != r
    ? i
    : ((r = n == null ? 0 : n.length), !!r && H(r) && P(u, r) && (d(n) || v(n)))
}
function q(n, e) {
  return n != null && $(n, e, X)
}
function J(n, e, t) {
  for (var a = -1, r = e.length, i = {}; ++a < r; ) {
    var u = e[a],
      l = w(n, u)
    t(l, u) && O(i, p(u, n), l)
  }
  return i
}
function Q(n, e) {
  return J(n, e, function (t, a) {
    return q(n, a)
  })
}
var V = U(function (n, e) {
  return n == null ? {} : Q(n, e)
})
const W = b({
    ariaLabel: String,
    ariaOrientation: {
      type: String,
      values: ['horizontal', 'vertical', 'undefined']
    },
    ariaControls: String
  }),
  j = (n) => V(W, n)
export {
  v as a,
  B as b,
  K as c,
  H as d,
  U as f,
  q as h,
  x as i,
  k as o,
  V as p,
  _ as s,
  j as u
}
