import {
  a8 as mo,
  f as te,
  g as Ze,
  _ as le,
  h as ye,
  x as S,
  C as Ce,
  D as _t,
  B as Re,
  a2 as bt,
  w as kt,
  a5 as Ft,
  y as jt,
  a9 as ho,
  $ as yo
} from './base-BSl8DOKd.js'
import {
  g as f,
  L as $,
  r as L,
  q as A,
  y as se,
  H as Pe,
  O as ue,
  G as Be,
  c as He,
  o as G,
  N as bo,
  p as Dt,
  ae as Je,
  k as Lt,
  at as wo,
  a1 as Oo,
  F as Eo,
  ag as To,
  ab as Co,
  d as Se,
  A as Ke,
  i as N,
  m as ce,
  x as We,
  w as Q,
  V as Ye,
  E as Ro,
  I as Ao,
  S as Le,
  a6 as xo,
  ah as Te,
  a8 as Po,
  T as So,
  v as Mo,
  au as Io,
  av as Bo,
  t as _o
} from './index-62YaKhWX.js'
import { u as Nt } from './index-n_Z_joOJ.js'
import { E as ko, t as Fo, a as jo, b as Do } from './index-Dog6wp49.js'
import { I as $t, l as Lo, E as Ge, J as No } from './aria-DW8X8pJS.js'
import { i as wt } from './aria-BmU_cfaq.js'
import { a as $o, u as Ho } from './index-Cq-mCDaI.js'
import { a as Ot } from './constants-Dnj8X3EN.js'
function Wo(e) {
  return e === void 0
}
function Et() {
  let e
  const t = (n, r) => {
      o(), (e = window.setTimeout(n, r))
    },
    o = () => window.clearTimeout(e)
  return mo(() => o()), { registerTimeout: t, cancelTimeout: o }
}
const qo = te({
    showAfter: { type: Number, default: 0 },
    hideAfter: { type: Number, default: 200 },
    autoClose: { type: Number, default: 0 }
  }),
  Ko = ({ showAfter: e, hideAfter: t, autoClose: o, open: n, close: r }) => {
    const { registerTimeout: a } = Et(),
      { registerTimeout: i, cancelTimeout: u } = Et()
    return {
      onOpen: (c) => {
        a(() => {
          n(c)
          const v = f(o)
          Ze(v) &&
            v > 0 &&
            i(() => {
              r(c)
            }, v)
        }, f(e))
      },
      onClose: (c) => {
        u(),
          a(() => {
            r(c)
          }, f(t))
      }
    }
  },
  Qe = Symbol('popper'),
  Ht = Symbol('popperContent'),
  zo = [
    'dialog',
    'grid',
    'group',
    'listbox',
    'menu',
    'navigation',
    'tooltip',
    'tree'
  ],
  Wt = te({ role: { type: String, values: zo, default: 'tooltip' } }),
  Uo = $({ name: 'ElPopper', inheritAttrs: !1 }),
  Vo = $({
    ...Uo,
    props: Wt,
    setup(e, { expose: t }) {
      const o = e,
        n = L(),
        r = L(),
        a = L(),
        i = L(),
        u = A(() => o.role),
        l = {
          triggerRef: n,
          popperInstanceRef: r,
          contentRef: a,
          referenceRef: i,
          role: u
        }
      return t(l), Pe(Qe, l), (s, c) => se(s.$slots, 'default')
    }
  })
var Go = le(Vo, [['__file', 'popper.vue']])
const Zo = $({ name: 'ElPopperArrow', inheritAttrs: !1 }),
  Jo = $({
    ...Zo,
    setup(e, { expose: t }) {
      const o = ye('popper'),
        { arrowRef: n, arrowStyle: r } = ue(Ht, void 0)
      return (
        Be(() => {
          n.value = void 0
        }),
        t({ arrowRef: n }),
        (a, i) => (
          G(),
          He(
            'span',
            {
              ref_key: 'arrowRef',
              ref: n,
              class: Dt(f(o).e('arrow')),
              style: bo(f(r)),
              'data-popper-arrow': ''
            },
            null,
            6
          )
        )
      )
    }
  })
var Xo = le(Jo, [['__file', 'arrow.vue']])
const qt = te({
    virtualRef: { type: S(Object) },
    virtualTriggering: Boolean,
    onMouseenter: { type: S(Function) },
    onMouseleave: { type: S(Function) },
    onClick: { type: S(Function) },
    onKeydown: { type: S(Function) },
    onFocus: { type: S(Function) },
    onBlur: { type: S(Function) },
    onContextmenu: { type: S(Function) },
    id: String,
    open: Boolean
  }),
  Kt = Symbol('elForwardRef'),
  Yo = (e) => {
    Pe(Kt, {
      setForwardRef: (o) => {
        e.value = o
      }
    })
  },
  Qo = (e) => ({
    mounted(t) {
      e(t)
    },
    updated(t) {
      e(t)
    },
    unmounted() {
      e(null)
    }
  }),
  en = 'ElOnlyChild',
  tn = $({
    name: en,
    setup(e, { slots: t, attrs: o }) {
      var n
      const r = ue(Kt),
        a = Qo((n = r?.setForwardRef) != null ? n : Je)
      return () => {
        var i
        const u = (i = t.default) == null ? void 0 : i.call(t, o)
        if (!u || u.length > 1) return null
        const l = zt(u)
        return l ? Lt(wo(l, o), [[a]]) : null
      }
    }
  })
function zt(e) {
  if (!e) return null
  const t = e
  for (const o of t) {
    if (Oo(o))
      switch (o.type) {
        case Co:
          continue
        case To:
        case 'svg':
          return Tt(o)
        case Eo:
          return zt(o.children)
        default:
          return o
      }
    return Tt(o)
  }
  return null
}
function Tt(e) {
  const t = ye('only-child')
  return Se('span', { class: t.e('content') }, [e])
}
const on = $({ name: 'ElPopperTrigger', inheritAttrs: !1 }),
  nn = $({
    ...on,
    props: qt,
    setup(e, { expose: t }) {
      const o = e,
        { role: n, triggerRef: r } = ue(Qe, void 0)
      Yo(r)
      const a = A(() => (u.value ? o.id : void 0)),
        i = A(() => {
          if (n && n.value === 'tooltip') return o.open && o.id ? o.id : void 0
        }),
        u = A(() => {
          if (n && n.value !== 'tooltip') return n.value
        }),
        l = A(() => (u.value ? `${o.open}` : void 0))
      let s
      const c = [
        'onMouseenter',
        'onMouseleave',
        'onClick',
        'onKeydown',
        'onFocus',
        'onBlur',
        'onContextmenu'
      ]
      return (
        Ke(() => {
          N(
            () => o.virtualRef,
            (v) => {
              v && (r.value = $t(v))
            },
            { immediate: !0 }
          ),
            N(
              r,
              (v, m) => {
                s?.(),
                  (s = void 0),
                  Ce(v) &&
                    (c.forEach((g) => {
                      var y
                      const d = o[g]
                      d &&
                        (v.addEventListener(g.slice(2).toLowerCase(), d),
                        (y = m?.removeEventListener) == null ||
                          y.call(m, g.slice(2).toLowerCase(), d))
                    }),
                    wt(v) &&
                      (s = N(
                        [a, i, u, l],
                        (g) => {
                          ;[
                            'aria-controls',
                            'aria-describedby',
                            'aria-haspopup',
                            'aria-expanded'
                          ].forEach((y, d) => {
                            _t(g[d])
                              ? v.removeAttribute(y)
                              : v.setAttribute(y, g[d])
                          })
                        },
                        { immediate: !0 }
                      ))),
                  Ce(m) &&
                    wt(m) &&
                    [
                      'aria-controls',
                      'aria-describedby',
                      'aria-haspopup',
                      'aria-expanded'
                    ].forEach((g) => m.removeAttribute(g))
              },
              { immediate: !0 }
            )
        }),
        Be(() => {
          if ((s?.(), (s = void 0), r.value && Ce(r.value))) {
            const v = r.value
            c.forEach((m) => {
              const g = o[m]
              g && v.removeEventListener(m.slice(2).toLowerCase(), g)
            }),
              (r.value = void 0)
          }
        }),
        t({ triggerRef: r }),
        (v, m) =>
          v.virtualTriggering
            ? We('v-if', !0)
            : (G(),
              ce(
                f(tn),
                Ye({ key: 0 }, v.$attrs, {
                  'aria-controls': f(a),
                  'aria-describedby': f(i),
                  'aria-expanded': f(l),
                  'aria-haspopup': f(u)
                }),
                { default: Q(() => [se(v.$slots, 'default')]), _: 3 },
                16,
                [
                  'aria-controls',
                  'aria-describedby',
                  'aria-expanded',
                  'aria-haspopup'
                ]
              ))
      )
    }
  })
var rn = le(nn, [['__file', 'trigger.vue']]),
  H = 'top',
  K = 'bottom',
  z = 'right',
  W = 'left',
  et = 'auto',
  _e = [H, K, z, W],
  de = 'start',
  Me = 'end',
  an = 'clippingParents',
  Ut = 'viewport',
  Ee = 'popper',
  sn = 'reference',
  Ct = _e.reduce(function (e, t) {
    return e.concat([t + '-' + de, t + '-' + Me])
  }, []),
  tt = [].concat(_e, [et]).reduce(function (e, t) {
    return e.concat([t, t + '-' + de, t + '-' + Me])
  }, []),
  ln = 'beforeRead',
  un = 'read',
  pn = 'afterRead',
  fn = 'beforeMain',
  cn = 'main',
  dn = 'afterMain',
  vn = 'beforeWrite',
  gn = 'write',
  mn = 'afterWrite',
  hn = [ln, un, pn, fn, cn, dn, vn, gn, mn]
function J(e) {
  return e ? (e.nodeName || '').toLowerCase() : null
}
function V(e) {
  if (e == null) return window
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument
    return (t && t.defaultView) || window
  }
  return e
}
function ve(e) {
  var t = V(e).Element
  return e instanceof t || e instanceof Element
}
function q(e) {
  var t = V(e).HTMLElement
  return e instanceof t || e instanceof HTMLElement
}
function ot(e) {
  if (typeof ShadowRoot > 'u') return !1
  var t = V(e).ShadowRoot
  return e instanceof t || e instanceof ShadowRoot
}
function yn(e) {
  var t = e.state
  Object.keys(t.elements).forEach(function (o) {
    var n = t.styles[o] || {},
      r = t.attributes[o] || {},
      a = t.elements[o]
    !q(a) ||
      !J(a) ||
      (Object.assign(a.style, n),
      Object.keys(r).forEach(function (i) {
        var u = r[i]
        u === !1 ? a.removeAttribute(i) : a.setAttribute(i, u === !0 ? '' : u)
      }))
  })
}
function bn(e) {
  var t = e.state,
    o = {
      popper: {
        position: t.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: { position: 'absolute' },
      reference: {}
    }
  return (
    Object.assign(t.elements.popper.style, o.popper),
    (t.styles = o),
    t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var r = t.elements[n],
          a = t.attributes[n] || {},
          i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : o[n]),
          u = i.reduce(function (l, s) {
            return (l[s] = ''), l
          }, {})
        !q(r) ||
          !J(r) ||
          (Object.assign(r.style, u),
          Object.keys(a).forEach(function (l) {
            r.removeAttribute(l)
          }))
      })
    }
  )
}
var Vt = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: yn,
  effect: bn,
  requires: ['computeStyles']
}
function Z(e) {
  return e.split('-')[0]
}
var ie = Math.max,
  qe = Math.min,
  ge = Math.round
function me(e, t) {
  t === void 0 && (t = !1)
  var o = e.getBoundingClientRect(),
    n = 1,
    r = 1
  if (q(e) && t) {
    var a = e.offsetHeight,
      i = e.offsetWidth
    i > 0 && (n = ge(o.width) / i || 1), a > 0 && (r = ge(o.height) / a || 1)
  }
  return {
    width: o.width / n,
    height: o.height / r,
    top: o.top / r,
    right: o.right / n,
    bottom: o.bottom / r,
    left: o.left / n,
    x: o.left / n,
    y: o.top / r
  }
}
function nt(e) {
  var t = me(e),
    o = e.offsetWidth,
    n = e.offsetHeight
  return (
    Math.abs(t.width - o) <= 1 && (o = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: o, height: n }
  )
}
function Gt(e, t) {
  var o = t.getRootNode && t.getRootNode()
  if (e.contains(t)) return !0
  if (o && ot(o)) {
    var n = t
    do {
      if (n && e.isSameNode(n)) return !0
      n = n.parentNode || n.host
    } while (n)
  }
  return !1
}
function ee(e) {
  return V(e).getComputedStyle(e)
}
function wn(e) {
  return ['table', 'td', 'th'].indexOf(J(e)) >= 0
}
function oe(e) {
  return ((ve(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement
}
function ze(e) {
  return J(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (ot(e) ? e.host : null) || oe(e)
}
function Rt(e) {
  return !q(e) || ee(e).position === 'fixed' ? null : e.offsetParent
}
function On(e) {
  var t = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1,
    o = navigator.userAgent.indexOf('Trident') !== -1
  if (o && q(e)) {
    var n = ee(e)
    if (n.position === 'fixed') return null
  }
  var r = ze(e)
  for (ot(r) && (r = r.host); q(r) && ['html', 'body'].indexOf(J(r)) < 0; ) {
    var a = ee(r)
    if (
      a.transform !== 'none' ||
      a.perspective !== 'none' ||
      a.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(a.willChange) !== -1 ||
      (t && a.willChange === 'filter') ||
      (t && a.filter && a.filter !== 'none')
    )
      return r
    r = r.parentNode
  }
  return null
}
function ke(e) {
  for (var t = V(e), o = Rt(e); o && wn(o) && ee(o).position === 'static'; )
    o = Rt(o)
  return o &&
    (J(o) === 'html' || (J(o) === 'body' && ee(o).position === 'static'))
    ? t
    : o || On(e) || t
}
function rt(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function Ae(e, t, o) {
  return ie(e, qe(t, o))
}
function En(e, t, o) {
  var n = Ae(e, t, o)
  return n > o ? o : n
}
function Zt() {
  return { top: 0, right: 0, bottom: 0, left: 0 }
}
function Jt(e) {
  return Object.assign({}, Zt(), e)
}
function Xt(e, t) {
  return t.reduce(function (o, n) {
    return (o[n] = e), o
  }, {})
}
var Tn = function (e, t) {
  return (
    (e =
      typeof e == 'function'
        ? e(Object.assign({}, t.rects, { placement: t.placement }))
        : e),
    Jt(typeof e != 'number' ? e : Xt(e, _e))
  )
}
function Cn(e) {
  var t,
    o = e.state,
    n = e.name,
    r = e.options,
    a = o.elements.arrow,
    i = o.modifiersData.popperOffsets,
    u = Z(o.placement),
    l = rt(u),
    s = [W, z].indexOf(u) >= 0,
    c = s ? 'height' : 'width'
  if (!(!a || !i)) {
    var v = Tn(r.padding, o),
      m = nt(a),
      g = l === 'y' ? H : W,
      y = l === 'y' ? K : z,
      d =
        o.rects.reference[c] + o.rects.reference[l] - i[l] - o.rects.popper[c],
      E = i[l] - o.rects.reference[l],
      w = ke(a),
      T = w ? (l === 'y' ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
      p = d / 2 - E / 2,
      h = v[g],
      C = T - m[c] - v[y],
      x = T / 2 - m[c] / 2 + p,
      O = Ae(h, x, C),
      R = l
    o.modifiersData[n] = ((t = {}), (t[R] = O), (t.centerOffset = O - x), t)
  }
}
function Rn(e) {
  var t = e.state,
    o = e.options,
    n = o.element,
    r = n === void 0 ? '[data-popper-arrow]' : n
  r != null &&
    ((typeof r == 'string' && ((r = t.elements.popper.querySelector(r)), !r)) ||
      !Gt(t.elements.popper, r) ||
      (t.elements.arrow = r))
}
var An = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: Cn,
  effect: Rn,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
}
function he(e) {
  return e.split('-')[1]
}
var xn = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function Pn(e) {
  var t = e.x,
    o = e.y,
    n = window,
    r = n.devicePixelRatio || 1
  return { x: ge(t * r) / r || 0, y: ge(o * r) / r || 0 }
}
function At(e) {
  var t,
    o = e.popper,
    n = e.popperRect,
    r = e.placement,
    a = e.variation,
    i = e.offsets,
    u = e.position,
    l = e.gpuAcceleration,
    s = e.adaptive,
    c = e.roundOffsets,
    v = e.isFixed,
    m = i.x,
    g = m === void 0 ? 0 : m,
    y = i.y,
    d = y === void 0 ? 0 : y,
    E = typeof c == 'function' ? c({ x: g, y: d }) : { x: g, y: d }
  ;(g = E.x), (d = E.y)
  var w = i.hasOwnProperty('x'),
    T = i.hasOwnProperty('y'),
    p = W,
    h = H,
    C = window
  if (s) {
    var x = ke(o),
      O = 'clientHeight',
      R = 'clientWidth'
    if (
      (x === V(o) &&
        ((x = oe(o)),
        ee(x).position !== 'static' &&
          u === 'absolute' &&
          ((O = 'scrollHeight'), (R = 'scrollWidth'))),
      (x = x),
      r === H || ((r === W || r === z) && a === Me))
    ) {
      h = K
      var P = v && x === C && C.visualViewport ? C.visualViewport.height : x[O]
      ;(d -= P - n.height), (d *= l ? 1 : -1)
    }
    if (r === W || ((r === H || r === K) && a === Me)) {
      p = z
      var B = v && x === C && C.visualViewport ? C.visualViewport.width : x[R]
      ;(g -= B - n.width), (g *= l ? 1 : -1)
    }
  }
  var M = Object.assign({ position: u }, s && xn),
    I = c === !0 ? Pn({ x: g, y: d }) : { x: g, y: d }
  if (((g = I.x), (d = I.y), l)) {
    var k
    return Object.assign(
      {},
      M,
      ((k = {}),
      (k[h] = T ? '0' : ''),
      (k[p] = w ? '0' : ''),
      (k.transform =
        (C.devicePixelRatio || 1) <= 1
          ? 'translate(' + g + 'px, ' + d + 'px)'
          : 'translate3d(' + g + 'px, ' + d + 'px, 0)'),
      k)
    )
  }
  return Object.assign(
    {},
    M,
    ((t = {}),
    (t[h] = T ? d + 'px' : ''),
    (t[p] = w ? g + 'px' : ''),
    (t.transform = ''),
    t)
  )
}
function Sn(e) {
  var t = e.state,
    o = e.options,
    n = o.gpuAcceleration,
    r = n === void 0 ? !0 : n,
    a = o.adaptive,
    i = a === void 0 ? !0 : a,
    u = o.roundOffsets,
    l = u === void 0 ? !0 : u,
    s = {
      placement: Z(t.placement),
      variation: he(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === 'fixed'
    }
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      At(
        Object.assign({}, s, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: l
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        At(
          Object.assign({}, s, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: l
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement
    }))
}
var Yt = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: Sn,
    data: {}
  },
  Ne = { passive: !0 }
function Mn(e) {
  var t = e.state,
    o = e.instance,
    n = e.options,
    r = n.scroll,
    a = r === void 0 ? !0 : r,
    i = n.resize,
    u = i === void 0 ? !0 : i,
    l = V(t.elements.popper),
    s = [].concat(t.scrollParents.reference, t.scrollParents.popper)
  return (
    a &&
      s.forEach(function (c) {
        c.addEventListener('scroll', o.update, Ne)
      }),
    u && l.addEventListener('resize', o.update, Ne),
    function () {
      a &&
        s.forEach(function (c) {
          c.removeEventListener('scroll', o.update, Ne)
        }),
        u && l.removeEventListener('resize', o.update, Ne)
    }
  )
}
var Qt = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: Mn,
    data: {}
  },
  In = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function $e(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return In[t]
  })
}
var Bn = { start: 'end', end: 'start' }
function xt(e) {
  return e.replace(/start|end/g, function (t) {
    return Bn[t]
  })
}
function at(e) {
  var t = V(e),
    o = t.pageXOffset,
    n = t.pageYOffset
  return { scrollLeft: o, scrollTop: n }
}
function it(e) {
  return me(oe(e)).left + at(e).scrollLeft
}
function _n(e) {
  var t = V(e),
    o = oe(e),
    n = t.visualViewport,
    r = o.clientWidth,
    a = o.clientHeight,
    i = 0,
    u = 0
  return (
    n &&
      ((r = n.width),
      (a = n.height),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        ((i = n.offsetLeft), (u = n.offsetTop))),
    { width: r, height: a, x: i + it(e), y: u }
  )
}
function kn(e) {
  var t,
    o = oe(e),
    n = at(e),
    r = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = ie(
      o.scrollWidth,
      o.clientWidth,
      r ? r.scrollWidth : 0,
      r ? r.clientWidth : 0
    ),
    i = ie(
      o.scrollHeight,
      o.clientHeight,
      r ? r.scrollHeight : 0,
      r ? r.clientHeight : 0
    ),
    u = -n.scrollLeft + it(e),
    l = -n.scrollTop
  return (
    ee(r || o).direction === 'rtl' &&
      (u += ie(o.clientWidth, r ? r.clientWidth : 0) - a),
    { width: a, height: i, x: u, y: l }
  )
}
function st(e) {
  var t = ee(e),
    o = t.overflow,
    n = t.overflowX,
    r = t.overflowY
  return /auto|scroll|overlay|hidden/.test(o + r + n)
}
function eo(e) {
  return ['html', 'body', '#document'].indexOf(J(e)) >= 0
    ? e.ownerDocument.body
    : q(e) && st(e)
      ? e
      : eo(ze(e))
}
function xe(e, t) {
  var o
  t === void 0 && (t = [])
  var n = eo(e),
    r = n === ((o = e.ownerDocument) == null ? void 0 : o.body),
    a = V(n),
    i = r ? [a].concat(a.visualViewport || [], st(n) ? n : []) : n,
    u = t.concat(i)
  return r ? u : u.concat(xe(ze(i)))
}
function Xe(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  })
}
function Fn(e) {
  var t = me(e)
  return (
    (t.top = t.top + e.clientTop),
    (t.left = t.left + e.clientLeft),
    (t.bottom = t.top + e.clientHeight),
    (t.right = t.left + e.clientWidth),
    (t.width = e.clientWidth),
    (t.height = e.clientHeight),
    (t.x = t.left),
    (t.y = t.top),
    t
  )
}
function Pt(e, t) {
  return t === Ut ? Xe(_n(e)) : ve(t) ? Fn(t) : Xe(kn(oe(e)))
}
function jn(e) {
  var t = xe(ze(e)),
    o = ['absolute', 'fixed'].indexOf(ee(e).position) >= 0,
    n = o && q(e) ? ke(e) : e
  return ve(n)
    ? t.filter(function (r) {
        return ve(r) && Gt(r, n) && J(r) !== 'body'
      })
    : []
}
function Dn(e, t, o) {
  var n = t === 'clippingParents' ? jn(e) : [].concat(t),
    r = [].concat(n, [o]),
    a = r[0],
    i = r.reduce(
      function (u, l) {
        var s = Pt(e, l)
        return (
          (u.top = ie(s.top, u.top)),
          (u.right = qe(s.right, u.right)),
          (u.bottom = qe(s.bottom, u.bottom)),
          (u.left = ie(s.left, u.left)),
          u
        )
      },
      Pt(e, a)
    )
  return (
    (i.width = i.right - i.left),
    (i.height = i.bottom - i.top),
    (i.x = i.left),
    (i.y = i.top),
    i
  )
}
function to(e) {
  var t = e.reference,
    o = e.element,
    n = e.placement,
    r = n ? Z(n) : null,
    a = n ? he(n) : null,
    i = t.x + t.width / 2 - o.width / 2,
    u = t.y + t.height / 2 - o.height / 2,
    l
  switch (r) {
    case H:
      l = { x: i, y: t.y - o.height }
      break
    case K:
      l = { x: i, y: t.y + t.height }
      break
    case z:
      l = { x: t.x + t.width, y: u }
      break
    case W:
      l = { x: t.x - o.width, y: u }
      break
    default:
      l = { x: t.x, y: t.y }
  }
  var s = r ? rt(r) : null
  if (s != null) {
    var c = s === 'y' ? 'height' : 'width'
    switch (a) {
      case de:
        l[s] = l[s] - (t[c] / 2 - o[c] / 2)
        break
      case Me:
        l[s] = l[s] + (t[c] / 2 - o[c] / 2)
        break
    }
  }
  return l
}
function Ie(e, t) {
  t === void 0 && (t = {})
  var o = t,
    n = o.placement,
    r = n === void 0 ? e.placement : n,
    a = o.boundary,
    i = a === void 0 ? an : a,
    u = o.rootBoundary,
    l = u === void 0 ? Ut : u,
    s = o.elementContext,
    c = s === void 0 ? Ee : s,
    v = o.altBoundary,
    m = v === void 0 ? !1 : v,
    g = o.padding,
    y = g === void 0 ? 0 : g,
    d = Jt(typeof y != 'number' ? y : Xt(y, _e)),
    E = c === Ee ? sn : Ee,
    w = e.rects.popper,
    T = e.elements[m ? E : c],
    p = Dn(ve(T) ? T : T.contextElement || oe(e.elements.popper), i, l),
    h = me(e.elements.reference),
    C = to({ reference: h, element: w, placement: r }),
    x = Xe(Object.assign({}, w, C)),
    O = c === Ee ? x : h,
    R = {
      top: p.top - O.top + d.top,
      bottom: O.bottom - p.bottom + d.bottom,
      left: p.left - O.left + d.left,
      right: O.right - p.right + d.right
    },
    P = e.modifiersData.offset
  if (c === Ee && P) {
    var B = P[r]
    Object.keys(R).forEach(function (M) {
      var I = [z, K].indexOf(M) >= 0 ? 1 : -1,
        k = [H, K].indexOf(M) >= 0 ? 'y' : 'x'
      R[M] += B[k] * I
    })
  }
  return R
}
function Ln(e, t) {
  t === void 0 && (t = {})
  var o = t,
    n = o.placement,
    r = o.boundary,
    a = o.rootBoundary,
    i = o.padding,
    u = o.flipVariations,
    l = o.allowedAutoPlacements,
    s = l === void 0 ? tt : l,
    c = he(n),
    v = c
      ? u
        ? Ct
        : Ct.filter(function (y) {
            return he(y) === c
          })
      : _e,
    m = v.filter(function (y) {
      return s.indexOf(y) >= 0
    })
  m.length === 0 && (m = v)
  var g = m.reduce(function (y, d) {
    return (
      (y[d] = Ie(e, { placement: d, boundary: r, rootBoundary: a, padding: i })[
        Z(d)
      ]),
      y
    )
  }, {})
  return Object.keys(g).sort(function (y, d) {
    return g[y] - g[d]
  })
}
function Nn(e) {
  if (Z(e) === et) return []
  var t = $e(e)
  return [xt(e), t, xt(t)]
}
function $n(e) {
  var t = e.state,
    o = e.options,
    n = e.name
  if (!t.modifiersData[n]._skip) {
    for (
      var r = o.mainAxis,
        a = r === void 0 ? !0 : r,
        i = o.altAxis,
        u = i === void 0 ? !0 : i,
        l = o.fallbackPlacements,
        s = o.padding,
        c = o.boundary,
        v = o.rootBoundary,
        m = o.altBoundary,
        g = o.flipVariations,
        y = g === void 0 ? !0 : g,
        d = o.allowedAutoPlacements,
        E = t.options.placement,
        w = Z(E),
        T = w === E,
        p = l || (T || !y ? [$e(E)] : Nn(E)),
        h = [E].concat(p).reduce(function (re, X) {
          return re.concat(
            Z(X) === et
              ? Ln(t, {
                  placement: X,
                  boundary: c,
                  rootBoundary: v,
                  padding: s,
                  flipVariations: y,
                  allowedAutoPlacements: d
                })
              : X
          )
        }, []),
        C = t.rects.reference,
        x = t.rects.popper,
        O = new Map(),
        R = !0,
        P = h[0],
        B = 0;
      B < h.length;
      B++
    ) {
      var M = h[B],
        I = Z(M),
        k = he(M) === de,
        D = [H, K].indexOf(I) >= 0,
        U = D ? 'width' : 'height',
        _ = Ie(t, {
          placement: M,
          boundary: c,
          rootBoundary: v,
          altBoundary: m,
          padding: s
        }),
        j = D ? (k ? z : W) : k ? K : H
      C[U] > x[U] && (j = $e(j))
      var b = $e(j),
        F = []
      if (
        (a && F.push(_[I] <= 0),
        u && F.push(_[j] <= 0, _[b] <= 0),
        F.every(function (re) {
          return re
        }))
      ) {
        ;(P = M), (R = !1)
        break
      }
      O.set(M, F)
    }
    if (R)
      for (
        var ne = y ? 3 : 1,
          be = function (re) {
            var X = h.find(function (je) {
              var Oe = O.get(je)
              if (Oe)
                return Oe.slice(0, re).every(function (pe) {
                  return pe
                })
            })
            if (X) return (P = X), 'break'
          },
          we = ne;
        we > 0;
        we--
      ) {
        var Fe = be(we)
        if (Fe === 'break') break
      }
    t.placement !== P &&
      ((t.modifiersData[n]._skip = !0), (t.placement = P), (t.reset = !0))
  }
}
var Hn = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: $n,
  requiresIfExists: ['offset'],
  data: { _skip: !1 }
}
function St(e, t, o) {
  return (
    o === void 0 && (o = { x: 0, y: 0 }),
    {
      top: e.top - t.height - o.y,
      right: e.right - t.width + o.x,
      bottom: e.bottom - t.height + o.y,
      left: e.left - t.width - o.x
    }
  )
}
function Mt(e) {
  return [H, z, K, W].some(function (t) {
    return e[t] >= 0
  })
}
function Wn(e) {
  var t = e.state,
    o = e.name,
    n = t.rects.reference,
    r = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    i = Ie(t, { elementContext: 'reference' }),
    u = Ie(t, { altBoundary: !0 }),
    l = St(i, n),
    s = St(u, r, a),
    c = Mt(l),
    v = Mt(s)
  ;(t.modifiersData[o] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: s,
    isReferenceHidden: c,
    hasPopperEscaped: v
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': c,
      'data-popper-escaped': v
    }))
}
var qn = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: Wn
}
function Kn(e, t, o) {
  var n = Z(e),
    r = [W, H].indexOf(n) >= 0 ? -1 : 1,
    a = typeof o == 'function' ? o(Object.assign({}, t, { placement: e })) : o,
    i = a[0],
    u = a[1]
  return (
    (i = i || 0),
    (u = (u || 0) * r),
    [W, z].indexOf(n) >= 0 ? { x: u, y: i } : { x: i, y: u }
  )
}
function zn(e) {
  var t = e.state,
    o = e.options,
    n = e.name,
    r = o.offset,
    a = r === void 0 ? [0, 0] : r,
    i = tt.reduce(function (c, v) {
      return (c[v] = Kn(v, t.rects, a)), c
    }, {}),
    u = i[t.placement],
    l = u.x,
    s = u.y
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += s)),
    (t.modifiersData[n] = i)
}
var Un = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: zn
}
function Vn(e) {
  var t = e.state,
    o = e.name
  t.modifiersData[o] = to({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  })
}
var oo = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: Vn, data: {} }
function Gn(e) {
  return e === 'x' ? 'y' : 'x'
}
function Zn(e) {
  var t = e.state,
    o = e.options,
    n = e.name,
    r = o.mainAxis,
    a = r === void 0 ? !0 : r,
    i = o.altAxis,
    u = i === void 0 ? !1 : i,
    l = o.boundary,
    s = o.rootBoundary,
    c = o.altBoundary,
    v = o.padding,
    m = o.tether,
    g = m === void 0 ? !0 : m,
    y = o.tetherOffset,
    d = y === void 0 ? 0 : y,
    E = Ie(t, { boundary: l, rootBoundary: s, padding: v, altBoundary: c }),
    w = Z(t.placement),
    T = he(t.placement),
    p = !T,
    h = rt(w),
    C = Gn(h),
    x = t.modifiersData.popperOffsets,
    O = t.rects.reference,
    R = t.rects.popper,
    P =
      typeof d == 'function'
        ? d(Object.assign({}, t.rects, { placement: t.placement }))
        : d,
    B =
      typeof P == 'number'
        ? { mainAxis: P, altAxis: P }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, P),
    M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    I = { x: 0, y: 0 }
  if (x) {
    if (a) {
      var k,
        D = h === 'y' ? H : W,
        U = h === 'y' ? K : z,
        _ = h === 'y' ? 'height' : 'width',
        j = x[h],
        b = j + E[D],
        F = j - E[U],
        ne = g ? -R[_] / 2 : 0,
        be = T === de ? O[_] : R[_],
        we = T === de ? -R[_] : -O[_],
        Fe = t.elements.arrow,
        re = g && Fe ? nt(Fe) : { width: 0, height: 0 },
        X = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Zt(),
        je = X[D],
        Oe = X[U],
        pe = Ae(0, O[_], re[_]),
        lo = p
          ? O[_] / 2 - ne - pe - je - B.mainAxis
          : be - pe - je - B.mainAxis,
        uo = p
          ? -O[_] / 2 + ne + pe + Oe + B.mainAxis
          : we + pe + Oe + B.mainAxis,
        Ue = t.elements.arrow && ke(t.elements.arrow),
        po = Ue ? (h === 'y' ? Ue.clientTop || 0 : Ue.clientLeft || 0) : 0,
        pt = (k = M?.[h]) != null ? k : 0,
        fo = j + lo - pt - po,
        co = j + uo - pt,
        ft = Ae(g ? qe(b, fo) : b, j, g ? ie(F, co) : F)
      ;(x[h] = ft), (I[h] = ft - j)
    }
    if (u) {
      var ct,
        vo = h === 'x' ? H : W,
        go = h === 'x' ? K : z,
        ae = x[C],
        De = C === 'y' ? 'height' : 'width',
        dt = ae + E[vo],
        vt = ae - E[go],
        Ve = [H, W].indexOf(w) !== -1,
        gt = (ct = M?.[C]) != null ? ct : 0,
        mt = Ve ? dt : ae - O[De] - R[De] - gt + B.altAxis,
        ht = Ve ? ae + O[De] + R[De] - gt - B.altAxis : vt,
        yt = g && Ve ? En(mt, ae, ht) : Ae(g ? mt : dt, ae, g ? ht : vt)
      ;(x[C] = yt), (I[C] = yt - ae)
    }
    t.modifiersData[n] = I
  }
}
var Jn = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: Zn,
  requiresIfExists: ['offset']
}
function Xn(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
}
function Yn(e) {
  return e === V(e) || !q(e) ? at(e) : Xn(e)
}
function Qn(e) {
  var t = e.getBoundingClientRect(),
    o = ge(t.width) / e.offsetWidth || 1,
    n = ge(t.height) / e.offsetHeight || 1
  return o !== 1 || n !== 1
}
function er(e, t, o) {
  o === void 0 && (o = !1)
  var n = q(t),
    r = q(t) && Qn(t),
    a = oe(t),
    i = me(e, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 }
  return (
    (n || (!n && !o)) &&
      ((J(t) !== 'body' || st(a)) && (u = Yn(t)),
      q(t)
        ? ((l = me(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : a && (l.x = it(a))),
    {
      x: i.left + u.scrollLeft - l.x,
      y: i.top + u.scrollTop - l.y,
      width: i.width,
      height: i.height
    }
  )
}
function tr(e) {
  var t = new Map(),
    o = new Set(),
    n = []
  e.forEach(function (a) {
    t.set(a.name, a)
  })
  function r(a) {
    o.add(a.name)
    var i = [].concat(a.requires || [], a.requiresIfExists || [])
    i.forEach(function (u) {
      if (!o.has(u)) {
        var l = t.get(u)
        l && r(l)
      }
    }),
      n.push(a)
  }
  return (
    e.forEach(function (a) {
      o.has(a.name) || r(a)
    }),
    n
  )
}
function or(e) {
  var t = tr(e)
  return hn.reduce(function (o, n) {
    return o.concat(
      t.filter(function (r) {
        return r.phase === n
      })
    )
  }, [])
}
function nr(e) {
  var t
  return function () {
    return (
      t ||
        (t = new Promise(function (o) {
          Promise.resolve().then(function () {
            ;(t = void 0), o(e())
          })
        })),
      t
    )
  }
}
function rr(e) {
  var t = e.reduce(function (o, n) {
    var r = o[n.name]
    return (
      (o[n.name] = r
        ? Object.assign({}, r, n, {
            options: Object.assign({}, r.options, n.options),
            data: Object.assign({}, r.data, n.data)
          })
        : n),
      o
    )
  }, {})
  return Object.keys(t).map(function (o) {
    return t[o]
  })
}
var It = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function Bt() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o]
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function')
  })
}
function lt(e) {
  e === void 0 && (e = {})
  var t = e,
    o = t.defaultModifiers,
    n = o === void 0 ? [] : o,
    r = t.defaultOptions,
    a = r === void 0 ? It : r
  return function (i, u, l) {
    l === void 0 && (l = a)
    var s = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, It, a),
        modifiersData: {},
        elements: { reference: i, popper: u },
        attributes: {},
        styles: {}
      },
      c = [],
      v = !1,
      m = {
        state: s,
        setOptions: function (d) {
          var E = typeof d == 'function' ? d(s.options) : d
          y(),
            (s.options = Object.assign({}, a, s.options, E)),
            (s.scrollParents = {
              reference: ve(i)
                ? xe(i)
                : i.contextElement
                  ? xe(i.contextElement)
                  : [],
              popper: xe(u)
            })
          var w = or(rr([].concat(n, s.options.modifiers)))
          return (
            (s.orderedModifiers = w.filter(function (T) {
              return T.enabled
            })),
            g(),
            m.update()
          )
        },
        forceUpdate: function () {
          if (!v) {
            var d = s.elements,
              E = d.reference,
              w = d.popper
            if (Bt(E, w)) {
              ;(s.rects = {
                reference: er(E, ke(w), s.options.strategy === 'fixed'),
                popper: nt(w)
              }),
                (s.reset = !1),
                (s.placement = s.options.placement),
                s.orderedModifiers.forEach(function (R) {
                  return (s.modifiersData[R.name] = Object.assign({}, R.data))
                })
              for (var T = 0; T < s.orderedModifiers.length; T++) {
                if (s.reset === !0) {
                  ;(s.reset = !1), (T = -1)
                  continue
                }
                var p = s.orderedModifiers[T],
                  h = p.fn,
                  C = p.options,
                  x = C === void 0 ? {} : C,
                  O = p.name
                typeof h == 'function' &&
                  (s = h({ state: s, options: x, name: O, instance: m }) || s)
              }
            }
          }
        },
        update: nr(function () {
          return new Promise(function (d) {
            m.forceUpdate(), d(s)
          })
        }),
        destroy: function () {
          y(), (v = !0)
        }
      }
    if (!Bt(i, u)) return m
    m.setOptions(l).then(function (d) {
      !v && l.onFirstUpdate && l.onFirstUpdate(d)
    })
    function g() {
      s.orderedModifiers.forEach(function (d) {
        var E = d.name,
          w = d.options,
          T = w === void 0 ? {} : w,
          p = d.effect
        if (typeof p == 'function') {
          var h = p({ state: s, name: E, instance: m, options: T }),
            C = function () {}
          c.push(h || C)
        }
      })
    }
    function y() {
      c.forEach(function (d) {
        return d()
      }),
        (c = [])
    }
    return m
  }
}
lt()
var ar = [Qt, oo, Yt, Vt]
lt({ defaultModifiers: ar })
var ir = [Qt, oo, Yt, Vt, Un, Hn, Jn, An, qn],
  sr = lt({ defaultModifiers: ir })
const no = te({ arrowOffset: { type: Number, default: 5 } }),
  lr = ['fixed', 'absolute'],
  ur = te({
    boundariesPadding: { type: Number, default: 0 },
    fallbackPlacements: { type: S(Array), default: void 0 },
    gpuAcceleration: { type: Boolean, default: !0 },
    offset: { type: Number, default: 12 },
    placement: { type: String, values: tt, default: 'bottom' },
    popperOptions: { type: S(Object), default: () => ({}) },
    strategy: { type: String, values: lr, default: 'absolute' }
  }),
  ro = te({
    ...ur,
    ...no,
    id: String,
    style: { type: S([String, Array, Object]) },
    className: { type: S([String, Array, Object]) },
    effect: { type: S(String), default: 'dark' },
    visible: Boolean,
    enterable: { type: Boolean, default: !0 },
    pure: Boolean,
    focusOnShow: Boolean,
    trapping: Boolean,
    popperClass: { type: S([String, Array, Object]) },
    popperStyle: { type: S([String, Array, Object]) },
    referenceEl: { type: S(Object) },
    triggerTargetEl: { type: S(Object) },
    stopPopperMouseEvent: { type: Boolean, default: !0 },
    virtualTriggering: Boolean,
    zIndex: Number,
    ...Nt(['ariaLabel'])
  }),
  pr = {
    mouseenter: (e) => e instanceof MouseEvent,
    mouseleave: (e) => e instanceof MouseEvent,
    focus: () => !0,
    blur: () => !0,
    close: () => !0
  },
  fr = (e, t) => {
    const o = L(!1),
      n = L()
    return {
      focusStartRef: n,
      trapped: o,
      onFocusAfterReleased: (s) => {
        var c
        ;((c = s.detail) == null ? void 0 : c.focusReason) !== 'pointer' &&
          ((n.value = 'first'), t('blur'))
      },
      onFocusAfterTrapped: () => {
        t('focus')
      },
      onFocusInTrap: (s) => {
        e.visible &&
          !o.value &&
          (s.target && (n.value = s.target), (o.value = !0))
      },
      onFocusoutPrevented: (s) => {
        e.trapping ||
          (s.detail.focusReason === 'pointer' && s.preventDefault(),
          (o.value = !1))
      },
      onReleaseRequested: () => {
        ;(o.value = !1), t('close')
      }
    }
  },
  cr = (e, t = []) => {
    const { placement: o, strategy: n, popperOptions: r } = e,
      a = { placement: o, strategy: n, ...r, modifiers: [...vr(e), ...t] }
    return gr(a, r?.modifiers), a
  },
  dr = (e) => {
    if (Re) return $t(e)
  }
function vr(e) {
  const { offset: t, gpuAcceleration: o, fallbackPlacements: n } = e
  return [
    { name: 'offset', options: { offset: [0, t ?? 12] } },
    {
      name: 'preventOverflow',
      options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } }
    },
    { name: 'flip', options: { padding: 5, fallbackPlacements: n } },
    { name: 'computeStyles', options: { gpuAcceleration: o } }
  ]
}
function gr(e, t) {
  t && (e.modifiers = [...e.modifiers, ...(t ?? [])])
}
const mr = (e, t, o = {}) => {
  const n = {
      name: 'updateState',
      enabled: !0,
      phase: 'write',
      fn: ({ state: l }) => {
        const s = hr(l)
        Object.assign(i.value, s)
      },
      requires: ['computeStyles']
    },
    r = A(() => {
      const { onFirstUpdate: l, placement: s, strategy: c, modifiers: v } = f(o)
      return {
        onFirstUpdate: l,
        placement: s || 'bottom',
        strategy: c || 'absolute',
        modifiers: [...(v || []), n, { name: 'applyStyles', enabled: !1 }]
      }
    }),
    a = Ro(),
    i = L({
      styles: {
        popper: { position: f(r).strategy, left: '0', top: '0' },
        arrow: { position: 'absolute' }
      },
      attributes: {}
    }),
    u = () => {
      a.value && (a.value.destroy(), (a.value = void 0))
    }
  return (
    N(
      r,
      (l) => {
        const s = f(a)
        s && s.setOptions(l)
      },
      { deep: !0 }
    ),
    N([e, t], ([l, s]) => {
      u(), !(!l || !s) && (a.value = sr(l, s, f(r)))
    }),
    Be(() => {
      u()
    }),
    {
      state: A(() => {
        var l
        return { ...(((l = f(a)) == null ? void 0 : l.state) || {}) }
      }),
      styles: A(() => f(i).styles),
      attributes: A(() => f(i).attributes),
      update: () => {
        var l
        return (l = f(a)) == null ? void 0 : l.update()
      },
      forceUpdate: () => {
        var l
        return (l = f(a)) == null ? void 0 : l.forceUpdate()
      },
      instanceRef: A(() => f(a))
    }
  )
}
function hr(e) {
  const t = Object.keys(e.elements),
    o = bt(t.map((r) => [r, e.styles[r] || {}])),
    n = bt(t.map((r) => [r, e.attributes[r]]))
  return { styles: o, attributes: n }
}
const yr = 0,
  br = (e) => {
    const {
        popperInstanceRef: t,
        contentRef: o,
        triggerRef: n,
        role: r
      } = ue(Qe, void 0),
      a = L(),
      i = A(() => e.arrowOffset),
      u = A(() => ({ name: 'eventListeners', enabled: !!e.visible })),
      l = A(() => {
        var w
        const T = f(a),
          p = (w = f(i)) != null ? w : yr
        return {
          name: 'arrow',
          enabled: !Wo(T),
          options: { element: T, padding: p }
        }
      }),
      s = A(() => ({
        onFirstUpdate: () => {
          y()
        },
        ...cr(e, [f(l), f(u)])
      })),
      c = A(() => dr(e.referenceEl) || f(n)),
      {
        attributes: v,
        state: m,
        styles: g,
        update: y,
        forceUpdate: d,
        instanceRef: E
      } = mr(c, o, s)
    return (
      N(E, (w) => (t.value = w), { flush: 'sync' }),
      Ke(() => {
        N(
          () => {
            var w
            return (w = f(c)) == null ? void 0 : w.getBoundingClientRect()
          },
          () => {
            y()
          }
        )
      }),
      {
        attributes: v,
        arrowRef: a,
        contentRef: o,
        instanceRef: E,
        state: m,
        styles: g,
        role: r,
        forceUpdate: d,
        update: y
      }
    )
  },
  wr = (e, { attributes: t, styles: o, role: n }) => {
    const { nextZIndex: r } = Lo(),
      a = ye('popper'),
      i = A(() => f(t).popper),
      u = L(Ze(e.zIndex) ? e.zIndex : r()),
      l = A(() => [a.b(), a.is('pure', e.pure), a.is(e.effect), e.popperClass]),
      s = A(() => [{ zIndex: f(u) }, f(o).popper, e.popperStyle || {}]),
      c = A(() => (n.value === 'dialog' ? 'false' : void 0)),
      v = A(() => f(o).arrow || {})
    return {
      ariaModal: c,
      arrowStyle: v,
      contentAttrs: i,
      contentClass: l,
      contentStyle: s,
      contentZIndex: u,
      updateZIndex: () => {
        u.value = Ze(e.zIndex) ? e.zIndex : r()
      }
    }
  },
  Or = $({ name: 'ElPopperContent' }),
  Er = $({
    ...Or,
    props: ro,
    emits: pr,
    setup(e, { expose: t, emit: o }) {
      const n = e,
        {
          focusStartRef: r,
          trapped: a,
          onFocusAfterReleased: i,
          onFocusAfterTrapped: u,
          onFocusInTrap: l,
          onFocusoutPrevented: s,
          onReleaseRequested: c
        } = fr(n, o),
        {
          attributes: v,
          arrowRef: m,
          contentRef: g,
          styles: y,
          instanceRef: d,
          role: E,
          update: w
        } = br(n),
        {
          ariaModal: T,
          arrowStyle: p,
          contentAttrs: h,
          contentClass: C,
          contentStyle: x,
          updateZIndex: O
        } = wr(n, { styles: y, attributes: v, role: E }),
        R = ue(Ot, void 0)
      Pe(Ht, { arrowStyle: p, arrowRef: m }),
        R && Pe(Ot, { ...R, addInputId: Je, removeInputId: Je })
      let P
      const B = (I = !0) => {
          w(), I && O()
        },
        M = () => {
          B(!1),
            n.visible && n.focusOnShow
              ? (a.value = !0)
              : n.visible === !1 && (a.value = !1)
        }
      return (
        Ke(() => {
          N(
            () => n.triggerTargetEl,
            (I, k) => {
              P?.(), (P = void 0)
              const D = f(I || g.value),
                U = f(k || g.value)
              Ce(D) &&
                (P = N(
                  [E, () => n.ariaLabel, T, () => n.id],
                  (_) => {
                    ;['role', 'aria-label', 'aria-modal', 'id'].forEach(
                      (j, b) => {
                        _t(_[b])
                          ? D.removeAttribute(j)
                          : D.setAttribute(j, _[b])
                      }
                    )
                  },
                  { immediate: !0 }
                )),
                U !== D &&
                  Ce(U) &&
                  ['role', 'aria-label', 'aria-modal', 'id'].forEach((_) => {
                    U.removeAttribute(_)
                  })
            },
            { immediate: !0 }
          ),
            N(() => n.visible, M, { immediate: !0 })
        }),
        Be(() => {
          P?.(), (P = void 0)
        }),
        t({
          popperContentRef: g,
          popperInstanceRef: d,
          updatePopper: B,
          contentStyle: x
        }),
        (I, k) => (
          G(),
          He(
            'div',
            Ye({ ref_key: 'contentRef', ref: g }, f(h), {
              style: f(x),
              class: f(C),
              tabindex: '-1',
              onMouseenter: (D) => I.$emit('mouseenter', D),
              onMouseleave: (D) => I.$emit('mouseleave', D)
            }),
            [
              Se(
                f(ko),
                {
                  trapped: f(a),
                  'trap-on-focus-in': !0,
                  'focus-trap-el': f(g),
                  'focus-start-el': f(r),
                  onFocusAfterTrapped: f(u),
                  onFocusAfterReleased: f(i),
                  onFocusin: f(l),
                  onFocusoutPrevented: f(s),
                  onReleaseRequested: f(c)
                },
                { default: Q(() => [se(I.$slots, 'default')]), _: 3 },
                8,
                [
                  'trapped',
                  'focus-trap-el',
                  'focus-start-el',
                  'onFocusAfterTrapped',
                  'onFocusAfterReleased',
                  'onFocusin',
                  'onFocusoutPrevented',
                  'onReleaseRequested'
                ]
              )
            ],
            16,
            ['onMouseenter', 'onMouseleave']
          )
        )
      )
    }
  })
var Tr = le(Er, [['__file', 'content.vue']])
const Cr = kt(Go),
  ut = Symbol('elTooltip'),
  ao = te({
    ...qo,
    ...ro,
    appendTo: { type: Fo.to.type },
    content: { type: String, default: '' },
    rawContent: Boolean,
    persistent: Boolean,
    visible: { type: S(Boolean), default: null },
    transition: String,
    teleported: { type: Boolean, default: !0 },
    disabled: Boolean,
    ...Nt(['ariaLabel'])
  }),
  io = te({
    ...qt,
    disabled: Boolean,
    trigger: { type: S([String, Array]), default: 'hover' },
    triggerKeys: {
      type: S(Array),
      default: () => [Ge.enter, Ge.numpadEnter, Ge.space]
    }
  }),
  Rr = Ft({ type: S(Boolean), default: null }),
  Ar = Ft({ type: S(Function) }),
  xr = (e) => {
    const t = `update:${e}`,
      o = `onUpdate:${e}`,
      n = [t],
      r = { [e]: Rr, [o]: Ar }
    return {
      useModelToggle: ({
        indicator: i,
        toggleReason: u,
        shouldHideWhenRouteChanges: l,
        shouldProceed: s,
        onShow: c,
        onHide: v
      }) => {
        const m = Ao(),
          { emit: g } = m,
          y = m.props,
          d = A(() => Le(y[o])),
          E = A(() => y[e] === null),
          w = (O) => {
            i.value !== !0 &&
              ((i.value = !0), u && (u.value = O), Le(c) && c(O))
          },
          T = (O) => {
            i.value !== !1 &&
              ((i.value = !1), u && (u.value = O), Le(v) && v(O))
          },
          p = (O) => {
            if (y.disabled === !0 || (Le(s) && !s())) return
            const R = d.value && Re
            R && g(t, !0), (E.value || !R) && w(O)
          },
          h = (O) => {
            if (y.disabled === !0 || !Re) return
            const R = d.value && Re
            R && g(t, !1), (E.value || !R) && T(O)
          },
          C = (O) => {
            jt(O) &&
              (y.disabled && O
                ? d.value && g(t, !1)
                : i.value !== O && (O ? w() : T()))
          },
          x = () => {
            i.value ? h() : p()
          }
        return (
          N(() => y[e], C),
          l &&
            m.appContext.config.globalProperties.$route !== void 0 &&
            N(
              () => ({ ...m.proxy.$route }),
              () => {
                l.value && i.value && h()
              }
            ),
          Ke(() => {
            C(y[e])
          }),
          { hide: h, show: p, toggle: x, hasUpdateHandler: d }
        )
      },
      useModelToggleProps: r,
      useModelToggleEmits: n
    }
  },
  {
    useModelToggleProps: Pr,
    useModelToggleEmits: Sr,
    useModelToggle: Mr
  } = xr('visible'),
  Ir = te({
    ...Wt,
    ...Pr,
    ...ao,
    ...io,
    ...no,
    showArrow: { type: Boolean, default: !0 }
  }),
  Br = [...Sr, 'before-show', 'before-hide', 'show', 'hide', 'open', 'close'],
  _r = (e, t) => (xo(e) ? e.includes(t) : e === t),
  fe = (e, t, o) => (n) => {
    _r(f(e), t) && o(n)
  },
  Y =
    (e, t, { checkForDefaultPrevented: o = !0 } = {}) =>
    (r) => {
      const a = e?.(r)
      if (o === !1 || !a) return t?.(r)
    },
  kr = $({ name: 'ElTooltipTrigger' }),
  Fr = $({
    ...kr,
    props: io,
    setup(e, { expose: t }) {
      const o = e,
        n = ye('tooltip'),
        {
          controlled: r,
          id: a,
          open: i,
          onOpen: u,
          onClose: l,
          onToggle: s
        } = ue(ut, void 0),
        c = L(null),
        v = () => {
          if (f(r) || o.disabled) return !0
        },
        m = Te(o, 'trigger'),
        g = Y(v, fe(m, 'hover', u)),
        y = Y(v, fe(m, 'hover', l)),
        d = Y(
          v,
          fe(m, 'click', (h) => {
            h.button === 0 && s(h)
          })
        ),
        E = Y(v, fe(m, 'focus', u)),
        w = Y(v, fe(m, 'focus', l)),
        T = Y(
          v,
          fe(m, 'contextmenu', (h) => {
            h.preventDefault(), s(h)
          })
        ),
        p = Y(v, (h) => {
          const { code: C } = h
          o.triggerKeys.includes(C) && (h.preventDefault(), s(h))
        })
      return (
        t({ triggerRef: c }),
        (h, C) => (
          G(),
          ce(
            f(rn),
            {
              id: f(a),
              'virtual-ref': h.virtualRef,
              open: f(i),
              'virtual-triggering': h.virtualTriggering,
              class: Dt(f(n).e('trigger')),
              onBlur: f(w),
              onClick: f(d),
              onContextmenu: f(T),
              onFocus: f(E),
              onMouseenter: f(g),
              onMouseleave: f(y),
              onKeydown: f(p)
            },
            { default: Q(() => [se(h.$slots, 'default')]), _: 3 },
            8,
            [
              'id',
              'virtual-ref',
              'open',
              'virtual-triggering',
              'class',
              'onBlur',
              'onClick',
              'onContextmenu',
              'onFocus',
              'onMouseenter',
              'onMouseleave',
              'onKeydown'
            ]
          )
        )
      )
    }
  })
var jr = le(Fr, [['__file', 'trigger.vue']])
const so = () => {
    const e = ho(),
      t = $o(),
      o = A(() => `${e.value}-popper-container-${t.prefix}`),
      n = A(() => `#${o.value}`)
    return { id: o, selector: n }
  },
  Dr = (e) => {
    const t = document.createElement('div')
    return (t.id = e), document.body.appendChild(t), t
  },
  Lr = () => {
    const { id: e, selector: t } = so()
    return (
      Po(() => {
        Re && (document.body.querySelector(t.value) || Dr(e.value))
      }),
      { id: e, selector: t }
    )
  },
  Nr = $({ name: 'ElTooltipContent', inheritAttrs: !1 }),
  $r = $({
    ...Nr,
    props: ao,
    setup(e, { expose: t }) {
      const o = e,
        { selector: n } = so(),
        r = ye('tooltip'),
        a = L(),
        i = yo(() => {
          var b
          return (b = a.value) == null ? void 0 : b.popperContentRef
        })
      let u
      const {
          controlled: l,
          id: s,
          open: c,
          trigger: v,
          onClose: m,
          onOpen: g,
          onShow: y,
          onHide: d,
          onBeforeShow: E,
          onBeforeHide: w
        } = ue(ut, void 0),
        T = A(() => o.transition || `${r.namespace.value}-fade-in-linear`),
        p = A(() => o.persistent)
      Be(() => {
        u?.()
      })
      const h = A(() => (f(p) ? !0 : f(c))),
        C = A(() => (o.disabled ? !1 : f(c))),
        x = A(() => o.appendTo || n.value),
        O = A(() => {
          var b
          return (b = o.style) != null ? b : {}
        }),
        R = L(!0),
        P = () => {
          d(), j() && Do(document.body), (R.value = !0)
        },
        B = () => {
          if (f(l)) return !0
        },
        M = Y(B, () => {
          o.enterable && f(v) === 'hover' && g()
        }),
        I = Y(B, () => {
          f(v) === 'hover' && m()
        }),
        k = () => {
          var b, F
          ;(F = (b = a.value) == null ? void 0 : b.updatePopper) == null ||
            F.call(b),
            E?.()
        },
        D = () => {
          w?.()
        },
        U = () => {
          y()
        },
        _ = () => {
          o.virtualTriggering || m()
        },
        j = (b) => {
          var F
          const ne = (F = a.value) == null ? void 0 : F.popperContentRef,
            be = b?.relatedTarget || document.activeElement
          return ne?.contains(be)
        }
      return (
        N(
          () => f(c),
          (b) => {
            b
              ? ((R.value = !1),
                (u = No(i, () => {
                  if (f(l)) return
                  f(v) !== 'hover' && m()
                })))
              : u?.()
          },
          { flush: 'post' }
        ),
        N(
          () => o.content,
          () => {
            var b, F
            ;(F = (b = a.value) == null ? void 0 : b.updatePopper) == null ||
              F.call(b)
          }
        ),
        t({ contentRef: a, isFocusInsideContent: j }),
        (b, F) => (
          G(),
          ce(
            f(jo),
            { disabled: !b.teleported, to: f(x) },
            {
              default: Q(() => [
                Se(
                  So,
                  {
                    name: f(T),
                    onAfterLeave: P,
                    onBeforeEnter: k,
                    onAfterEnter: U,
                    onBeforeLeave: D
                  },
                  {
                    default: Q(() => [
                      f(h)
                        ? Lt(
                            (G(),
                            ce(
                              f(Tr),
                              Ye(
                                {
                                  key: 0,
                                  id: f(s),
                                  ref_key: 'contentRef',
                                  ref: a
                                },
                                b.$attrs,
                                {
                                  'aria-label': b.ariaLabel,
                                  'aria-hidden': R.value,
                                  'boundaries-padding': b.boundariesPadding,
                                  'fallback-placements': b.fallbackPlacements,
                                  'gpu-acceleration': b.gpuAcceleration,
                                  offset: b.offset,
                                  placement: b.placement,
                                  'popper-options': b.popperOptions,
                                  'arrow-offset': b.arrowOffset,
                                  strategy: b.strategy,
                                  effect: b.effect,
                                  enterable: b.enterable,
                                  pure: b.pure,
                                  'popper-class': b.popperClass,
                                  'popper-style': [b.popperStyle, f(O)],
                                  'reference-el': b.referenceEl,
                                  'trigger-target-el': b.triggerTargetEl,
                                  visible: f(C),
                                  'z-index': b.zIndex,
                                  onMouseenter: f(M),
                                  onMouseleave: f(I),
                                  onBlur: _,
                                  onClose: f(m)
                                }
                              ),
                              {
                                default: Q(() => [se(b.$slots, 'default')]),
                                _: 3
                              },
                              16,
                              [
                                'id',
                                'aria-label',
                                'aria-hidden',
                                'boundaries-padding',
                                'fallback-placements',
                                'gpu-acceleration',
                                'offset',
                                'placement',
                                'popper-options',
                                'arrow-offset',
                                'strategy',
                                'effect',
                                'enterable',
                                'pure',
                                'popper-class',
                                'popper-style',
                                'reference-el',
                                'trigger-target-el',
                                'visible',
                                'z-index',
                                'onMouseenter',
                                'onMouseleave',
                                'onClose'
                              ]
                            )),
                            [[Mo, f(C)]]
                          )
                        : We('v-if', !0)
                    ]),
                    _: 3
                  },
                  8,
                  ['name']
                )
              ]),
              _: 3
            },
            8,
            ['disabled', 'to']
          )
        )
      )
    }
  })
var Hr = le($r, [['__file', 'content.vue']])
const Wr = $({ name: 'ElTooltip' }),
  qr = $({
    ...Wr,
    props: Ir,
    emits: Br,
    setup(e, { expose: t, emit: o }) {
      const n = e
      Lr()
      const r = ye('tooltip'),
        a = Ho(),
        i = L(),
        u = L(),
        l = () => {
          var p
          const h = f(i)
          h && ((p = h.popperInstanceRef) == null || p.update())
        },
        s = L(!1),
        c = L(),
        {
          show: v,
          hide: m,
          hasUpdateHandler: g
        } = Mr({ indicator: s, toggleReason: c }),
        { onOpen: y, onClose: d } = Ko({
          showAfter: Te(n, 'showAfter'),
          hideAfter: Te(n, 'hideAfter'),
          autoClose: Te(n, 'autoClose'),
          open: v,
          close: m
        }),
        E = A(() => jt(n.visible) && !g.value),
        w = A(() => [r.b(), n.popperClass])
      Pe(ut, {
        controlled: E,
        id: a,
        open: Io(s),
        trigger: Te(n, 'trigger'),
        onOpen: (p) => {
          y(p)
        },
        onClose: (p) => {
          d(p)
        },
        onToggle: (p) => {
          f(s) ? d(p) : y(p)
        },
        onShow: () => {
          o('show', c.value)
        },
        onHide: () => {
          o('hide', c.value)
        },
        onBeforeShow: () => {
          o('before-show', c.value)
        },
        onBeforeHide: () => {
          o('before-hide', c.value)
        },
        updatePopper: l
      }),
        N(
          () => n.disabled,
          (p) => {
            p && s.value && (s.value = !1)
          }
        )
      const T = (p) => {
        var h
        return (h = u.value) == null ? void 0 : h.isFocusInsideContent(p)
      }
      return (
        Bo(() => s.value && m()),
        t({
          popperRef: i,
          contentRef: u,
          isFocusInsideContent: T,
          updatePopper: l,
          onOpen: y,
          onClose: d,
          hide: m
        }),
        (p, h) => (
          G(),
          ce(
            f(Cr),
            { ref_key: 'popperRef', ref: i, role: p.role },
            {
              default: Q(() => [
                Se(
                  jr,
                  {
                    disabled: p.disabled,
                    trigger: p.trigger,
                    'trigger-keys': p.triggerKeys,
                    'virtual-ref': p.virtualRef,
                    'virtual-triggering': p.virtualTriggering
                  },
                  {
                    default: Q(() => [
                      p.$slots.default
                        ? se(p.$slots, 'default', { key: 0 })
                        : We('v-if', !0)
                    ]),
                    _: 3
                  },
                  8,
                  [
                    'disabled',
                    'trigger',
                    'trigger-keys',
                    'virtual-ref',
                    'virtual-triggering'
                  ]
                ),
                Se(
                  Hr,
                  {
                    ref_key: 'contentRef',
                    ref: u,
                    'aria-label': p.ariaLabel,
                    'boundaries-padding': p.boundariesPadding,
                    content: p.content,
                    disabled: p.disabled,
                    effect: p.effect,
                    enterable: p.enterable,
                    'fallback-placements': p.fallbackPlacements,
                    'hide-after': p.hideAfter,
                    'gpu-acceleration': p.gpuAcceleration,
                    offset: p.offset,
                    persistent: p.persistent,
                    'popper-class': f(w),
                    'popper-style': p.popperStyle,
                    placement: p.placement,
                    'popper-options': p.popperOptions,
                    'arrow-offset': p.arrowOffset,
                    pure: p.pure,
                    'raw-content': p.rawContent,
                    'reference-el': p.referenceEl,
                    'trigger-target-el': p.triggerTargetEl,
                    'show-after': p.showAfter,
                    strategy: p.strategy,
                    teleported: p.teleported,
                    transition: p.transition,
                    'virtual-triggering': p.virtualTriggering,
                    'z-index': p.zIndex,
                    'append-to': p.appendTo
                  },
                  {
                    default: Q(() => [
                      se(p.$slots, 'content', {}, () => [
                        p.rawContent
                          ? (G(),
                            He(
                              'span',
                              { key: 0, innerHTML: p.content },
                              null,
                              8,
                              ['innerHTML']
                            ))
                          : (G(), He('span', { key: 1 }, _o(p.content), 1))
                      ]),
                      p.showArrow
                        ? (G(), ce(f(Xo), { key: 0 }))
                        : We('v-if', !0)
                    ]),
                    _: 3
                  },
                  8,
                  [
                    'aria-label',
                    'boundaries-padding',
                    'content',
                    'disabled',
                    'effect',
                    'enterable',
                    'fallback-placements',
                    'hide-after',
                    'gpu-acceleration',
                    'offset',
                    'persistent',
                    'popper-class',
                    'popper-style',
                    'placement',
                    'popper-options',
                    'arrow-offset',
                    'pure',
                    'raw-content',
                    'reference-el',
                    'trigger-target-el',
                    'show-after',
                    'strategy',
                    'teleported',
                    'transition',
                    'virtual-triggering',
                    'z-index',
                    'append-to'
                  ]
                )
              ]),
              _: 3
            },
            8,
            ['role']
          )
        )
      )
    }
  })
var Kr = le(qr, [['__file', 'tooltip.vue']])
const Qr = kt(Kr)
export { Qr as E, io as a, tt as b, zo as r, ao as u }
