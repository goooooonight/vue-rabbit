import {
  f as Y,
  x as q,
  _ as ce,
  h as Q,
  k as te,
  E as H,
  j as Ee,
  a as Te,
  c as we,
  g as Se,
  H as Re,
  $ as re,
  w as $e,
  l as Oe
} from './base-BSl8DOKd.js'
import {
  n as xe,
  o as ue,
  t as Be,
  j as ke,
  m as ae,
  u as se,
  p as Ae,
  q as Le,
  E as L
} from './aria-DW8X8pJS.js'
import { c as F } from './strings-B4ayariU.js'
import { t as le } from './error-Cq9Fpw4b.js'
import {
  L as D,
  O as oe,
  r as _,
  i as V,
  G as de,
  c as fe,
  o as be,
  N as Fe,
  p as ve,
  g as x,
  Q as W,
  E as ze,
  q as K,
  A as Me,
  a2 as Ie,
  aj as Ve,
  d as f,
  K as De,
  y as ne,
  I as me,
  H as Ke,
  D as Ue,
  P as Ge,
  ak as He,
  k as qe,
  x as We,
  v as Ye
} from './index-62YaKhWX.js'
import { U as pe } from './event-BB_Ol6Sd.js'
import { u as Qe } from './index-DaO4KZCs.js'
import { g as Xe, b as je } from './_baseClone-C1WxYl8n.js'
import { c as Je } from './_initCloneObject-CxZz_v-E.js'
import { i as Ze } from './isPlainObject-CkbmvWQx.js'
import { f as et } from './index-n_Z_joOJ.js'
function tt(e, t, n) {
  var u = -1,
    a = e.length
  t < 0 && (t = -t > a ? 0 : a + t),
    (n = n > a ? a : n),
    n < 0 && (n += a),
    (a = t > n ? 0 : (n - t) >>> 0),
    (t >>>= 0)
  for (var i = Array(a); ++u < a; ) i[u] = e[u + t]
  return i
}
function at(e) {
  var t = e == null ? 0 : e.length
  return t ? e[t - 1] : void 0
}
function st(e, t) {
  return t.length < 2 ? e : xe(e, tt(t, 0, -1))
}
function nt(e, t) {
  return (t = ue(t, e)), (e = st(e, t)), e == null || delete e[Be(at(t))]
}
function lt(e) {
  return Ze(e) ? void 0 : e
}
var ot = 1,
  rt = 2,
  it = 4,
  ct = et(function (e, t) {
    var n = {}
    if (e == null) return n
    var u = !1
    ;(t = ke(t, function (i) {
      return (i = ue(i, e)), u || (u = i.length > 1), i
    })),
      Je(e, Xe(e), n),
      u && (n = je(n, ot | rt | it, lt))
    for (var a = t.length; a--; ) nt(n, t[a])
    return n
  })
const X = Symbol('tabsRootContextKey'),
  ut = Y({
    tabs: { type: q(Array), default: () => ae([]) },
    tabRefs: { type: q(Object), default: () => ae({}) }
  }),
  he = 'ElTabBar',
  dt = D({ name: he }),
  ft = D({
    ...dt,
    props: ut,
    setup(e, { expose: t }) {
      const n = e,
        u = oe(X)
      u || le(he, '<el-tabs><el-tab-bar /></el-tabs>')
      const a = Q('tabs'),
        i = _(),
        S = _(),
        v = () => {
          let l = 0,
            b = 0
          const N = ['top', 'bottom'].includes(u.props.tabPosition)
              ? 'width'
              : 'height',
            c = N === 'width' ? 'x' : 'y',
            B = c === 'x' ? 'left' : 'top'
          return (
            n.tabs.every((C) => {
              if (te(C.paneName)) return !1
              const o = n.tabRefs[C.paneName]
              if (!o) return !1
              if (!C.active) return !0
              ;(l = o[`offset${F(B)}`]), (b = o[`client${F(N)}`])
              const y = window.getComputedStyle(o)
              return (
                N === 'width' &&
                  ((b -=
                    Number.parseFloat(y.paddingLeft) +
                    Number.parseFloat(y.paddingRight)),
                  (l += Number.parseFloat(y.paddingLeft))),
                !1
              )
            }),
            { [N]: `${b}px`, transform: `translate${F(c)}(${l}px)` }
          )
        },
        h = () => (S.value = v()),
        m = [],
        T = () => {
          m.forEach((l) => l.stop()),
            (m.length = 0),
            Object.values(n.tabRefs).forEach((l) => {
              m.push(se(l, h))
            })
        }
      V(
        () => n.tabs,
        async () => {
          await W(), h(), T()
        },
        { immediate: !0 }
      )
      const g = se(i, () => h())
      return (
        de(() => {
          m.forEach((l) => l.stop()), (m.length = 0), g.stop()
        }),
        t({ ref: i, update: h }),
        (l, b) => (
          be(),
          fe(
            'div',
            {
              ref_key: 'barRef',
              ref: i,
              class: ve([
                x(a).e('active-bar'),
                x(a).is(x(u).props.tabPosition)
              ]),
              style: Fe(S.value)
            },
            null,
            6
          )
        )
      )
    }
  })
var bt = ce(ft, [['__file', 'tab-bar.vue']])
const vt = Y({
    panes: { type: q(Array), default: () => ae([]) },
    currentName: { type: [String, Number], default: '' },
    editable: Boolean,
    type: { type: String, values: ['card', 'border-card', ''], default: '' },
    stretch: Boolean
  }),
  mt = {
    tabClick: (e, t, n) => n instanceof Event,
    tabRemove: (e, t) => t instanceof Event
  },
  ie = 'ElTabNav',
  pt = D({
    name: ie,
    props: vt,
    emits: mt,
    setup(e, { expose: t, emit: n }) {
      const u = oe(X)
      u || le(ie, '<el-tabs><tab-nav /></el-tabs>')
      const a = Q('tabs'),
        i = Ae(),
        S = Le(),
        v = _(),
        h = _(),
        m = _(),
        T = _({}),
        g = _(),
        l = _(!1),
        b = _(0),
        N = _(!1),
        c = _(!0),
        B = ze(),
        C = K(() =>
          ['top', 'bottom'].includes(u.props.tabPosition) ? 'width' : 'height'
        ),
        o = K(() => ({
          transform: `translate${C.value === 'width' ? 'X' : 'Y'}(-${b.value}px)`
        })),
        y = () => {
          if (!v.value) return
          const r = v.value[`offset${F(C.value)}`],
            d = b.value
          if (!d) return
          const s = d > r ? d - r : 0
          b.value = s
        },
        w = () => {
          if (!v.value || !h.value) return
          const r = h.value[`offset${F(C.value)}`],
            d = v.value[`offset${F(C.value)}`],
            s = b.value
          if (r - s <= d) return
          const P = r - s > d * 2 ? s + d : r - d
          b.value = P
        },
        k = async () => {
          const r = h.value
          if (!l.value || !m.value || !v.value || !r) return
          await W()
          const d = T.value[e.currentName]
          if (!d) return
          const s = v.value,
            P = ['top', 'bottom'].includes(u.props.tabPosition),
            p = d.getBoundingClientRect(),
            E = s.getBoundingClientRect(),
            U = P ? r.offsetWidth - E.width : r.offsetHeight - E.height,
            A = b.value
          let $ = A
          P
            ? (p.left < E.left && ($ = A - (E.left - p.left)),
              p.right > E.right && ($ = A + p.right - E.right))
            : (p.top < E.top && ($ = A - (E.top - p.top)),
              p.bottom > E.bottom && ($ = A + (p.bottom - E.bottom))),
            ($ = Math.max($, 0)),
            (b.value = Math.min($, U))
        },
        z = () => {
          var r
          if (!h.value || !v.value) return
          e.stretch && ((r = g.value) == null || r.update())
          const d = h.value[`offset${F(C.value)}`],
            s = v.value[`offset${F(C.value)}`],
            P = b.value
          s < d
            ? ((l.value = l.value || {}),
              (l.value.prev = P),
              (l.value.next = P + s < d),
              d - P < s && (b.value = d - s))
            : ((l.value = !1), P > 0 && (b.value = 0))
        },
        I = (r) => {
          let d = 0
          switch (r.code) {
            case L.left:
            case L.up:
              d = -1
              break
            case L.right:
            case L.down:
              d = 1
              break
            default:
              return
          }
          const s = Array.from(
            r.currentTarget.querySelectorAll('[role=tab]:not(.is-disabled)')
          )
          let p = s.indexOf(r.target) + d
          p < 0 ? (p = s.length - 1) : p >= s.length && (p = 0),
            s[p].focus({ preventScroll: !0 }),
            s[p].click(),
            M()
        },
        M = () => {
          c.value && (N.value = !0)
        },
        R = () => (N.value = !1),
        j = (r, d) => {
          T.value[d] = r
        },
        _e = async () => {
          await W()
          const r = T.value[e.currentName]
          r?.focus({ preventScroll: !0 })
        }
      return (
        V(i, (r) => {
          r === 'hidden'
            ? (c.value = !1)
            : r === 'visible' && setTimeout(() => (c.value = !0), 50)
        }),
        V(S, (r) => {
          r ? setTimeout(() => (c.value = !0), 50) : (c.value = !1)
        }),
        se(m, z),
        Me(() => setTimeout(() => k(), 0)),
        Ie(() => z()),
        t({
          scrollToActiveTab: k,
          removeFocus: R,
          focusActiveTab: _e,
          tabListRef: h,
          tabBarRef: g,
          scheduleRender: () => Ve(B)
        }),
        () => {
          const r = l.value
              ? [
                  f(
                    'span',
                    {
                      class: [a.e('nav-prev'), a.is('disabled', !l.value.prev)],
                      onClick: y
                    },
                    [f(H, null, { default: () => [f(Ee, null, null)] })]
                  ),
                  f(
                    'span',
                    {
                      class: [a.e('nav-next'), a.is('disabled', !l.value.next)],
                      onClick: w
                    },
                    [f(H, null, { default: () => [f(Te, null, null)] })]
                  )
                ]
              : null,
            d = e.panes.map((s, P) => {
              var p, E, U, A
              const $ = s.uid,
                J = s.props.disabled,
                G =
                  (E = (p = s.props.name) != null ? p : s.index) != null
                    ? E
                    : `${P}`,
                Z = !J && (s.isClosable || e.editable)
              s.index = `${P}`
              const Ne = Z
                  ? f(
                      H,
                      {
                        class: 'is-icon-close',
                        onClick: (O) => n('tabRemove', s, O)
                      },
                      { default: () => [f(we, null, null)] }
                    )
                  : null,
                Ce =
                  ((A = (U = s.slots).label) == null ? void 0 : A.call(U)) ||
                  s.props.label,
                Pe = !J && s.active ? 0 : -1
              return f(
                'div',
                {
                  ref: (O) => j(O, G),
                  class: [
                    a.e('item'),
                    a.is(u.props.tabPosition),
                    a.is('active', s.active),
                    a.is('disabled', J),
                    a.is('closable', Z),
                    a.is('focus', N.value)
                  ],
                  id: `tab-${G}`,
                  key: `tab-${$}`,
                  'aria-controls': `pane-${G}`,
                  role: 'tab',
                  'aria-selected': s.active,
                  tabindex: Pe,
                  onFocus: () => M(),
                  onBlur: () => R(),
                  onClick: (O) => {
                    R(), n('tabClick', s, G, O)
                  },
                  onKeydown: (O) => {
                    Z &&
                      (O.code === L.delete || O.code === L.backspace) &&
                      n('tabRemove', s, O)
                  }
                },
                [Ce, Ne]
              )
            })
          return (
            B.value,
            f(
              'div',
              {
                ref: m,
                class: [
                  a.e('nav-wrap'),
                  a.is('scrollable', !!l.value),
                  a.is(u.props.tabPosition)
                ]
              },
              [
                r,
                f('div', { class: a.e('nav-scroll'), ref: v }, [
                  e.panes.length > 0
                    ? f(
                        'div',
                        {
                          class: [
                            a.e('nav'),
                            a.is(u.props.tabPosition),
                            a.is(
                              'stretch',
                              e.stretch &&
                                ['top', 'bottom'].includes(u.props.tabPosition)
                            )
                          ],
                          ref: h,
                          style: o.value,
                          role: 'tablist',
                          onKeydown: I
                        },
                        [
                          e.type
                            ? null
                            : f(
                                bt,
                                {
                                  ref: g,
                                  tabs: [...e.panes],
                                  tabRefs: T.value
                                },
                                null
                              ),
                          d
                        ]
                      )
                    : null
                ])
              ]
            )
          )
        }
      )
    }
  }),
  ht = Y({
    type: { type: String, values: ['card', 'border-card', ''], default: '' },
    closable: Boolean,
    addable: Boolean,
    modelValue: { type: [String, Number] },
    editable: Boolean,
    tabPosition: {
      type: String,
      values: ['top', 'right', 'bottom', 'left'],
      default: 'top'
    },
    beforeLeave: { type: q(Function), default: () => !0 },
    stretch: Boolean
  }),
  ee = (e) => De(e) || Se(e),
  gt = {
    [pe]: (e) => ee(e),
    tabClick: (e, t) => t instanceof Event,
    tabChange: (e) => ee(e),
    edit: (e, t) => ['remove', 'add'].includes(t),
    tabRemove: (e) => ee(e),
    tabAdd: () => !0
  },
  yt = D({
    name: 'ElTabs',
    props: ht,
    emits: gt,
    setup(e, { emit: t, slots: n, expose: u }) {
      var a
      const i = Q('tabs'),
        S = K(() => ['left', 'right'].includes(e.tabPosition)),
        {
          children: v,
          addChild: h,
          removeChild: m,
          ChildrenSorter: T
        } = Qe(me(), 'ElTabPane'),
        g = _(),
        l = _((a = e.modelValue) != null ? a : '0'),
        b = async (o, y = !1) => {
          var w, k, z, I
          if (!(l.value === o || te(o)))
            try {
              let M
              if (e.beforeLeave) {
                const R = e.beforeLeave(o, l.value)
                M = R instanceof Promise ? await R : R
              } else M = !0
              if (M !== !1) {
                const R =
                  (w = v.value.find((j) => j.paneName === l.value)) == null
                    ? void 0
                    : w.isFocusInsidePane()
                ;(l.value = o),
                  y && (t(pe, o), t('tabChange', o)),
                  (z = (k = g.value) == null ? void 0 : k.removeFocus) ==
                    null || z.call(k),
                  R && ((I = g.value) == null || I.focusActiveTab())
              }
            } catch {}
        },
        N = (o, y, w) => {
          o.props.disabled || (t('tabClick', o, w), b(y, !0))
        },
        c = (o, y) => {
          o.props.disabled ||
            te(o.props.name) ||
            (y.stopPropagation(),
            t('edit', o.props.name, 'remove'),
            t('tabRemove', o.props.name))
        },
        B = () => {
          t('edit', void 0, 'add'), t('tabAdd')
        },
        C = (o) => {
          const y = o.el.firstChild,
            w = ['bottom', 'right'].includes(e.tabPosition)
              ? o.children[0].el
              : o.children[1].el
          y !== w && y.before(w)
        }
      return (
        V(
          () => e.modelValue,
          (o) => b(o)
        ),
        V(l, async () => {
          var o
          await W(), (o = g.value) == null || o.scrollToActiveTab()
        }),
        Ke(X, {
          props: e,
          currentName: l,
          registerPane: h,
          unregisterPane: m,
          nav$: g
        }),
        u({
          currentName: l,
          get tabNavRef() {
            return ct(g.value, ['scheduleRender'])
          }
        }),
        () => {
          const o = n['add-icon'],
            y =
              e.editable || e.addable
                ? f(
                    'div',
                    {
                      class: [
                        i.e('new-tab'),
                        S.value && i.e('new-tab-vertical')
                      ],
                      tabindex: '0',
                      onClick: B,
                      onKeydown: (I) => {
                        ;[L.enter, L.numpadEnter].includes(I.code) && B()
                      }
                    },
                    [
                      o
                        ? ne(n, 'add-icon')
                        : f(
                            H,
                            { class: i.is('icon-plus') },
                            { default: () => [f(Re, null, null)] }
                          )
                    ]
                  )
                : null,
            w = () =>
              f(
                pt,
                {
                  ref: g,
                  currentName: l.value,
                  editable: e.editable,
                  type: e.type,
                  panes: v.value,
                  stretch: e.stretch,
                  onTabClick: N,
                  onTabRemove: c
                },
                null
              ),
            k = f(
              'div',
              {
                class: [
                  i.e('header'),
                  S.value && i.e('header-vertical'),
                  i.is(e.tabPosition)
                ]
              },
              [f(T, null, { default: w, $stable: !0 }), y]
            ),
            z = f('div', { class: i.e('content') }, [ne(n, 'default')])
          return f(
            'div',
            {
              class: [
                i.b(),
                i.m(e.tabPosition),
                {
                  [i.m('card')]: e.type === 'card',
                  [i.m('border-card')]: e.type === 'border-card'
                }
              ],
              onVnodeMounted: C,
              onVnodeUpdated: C
            },
            [z, k]
          )
        }
      )
    }
  })
var _t = yt
const Nt = Y({
    label: { type: String, default: '' },
    name: { type: [String, Number] },
    closable: Boolean,
    disabled: Boolean,
    lazy: Boolean
  }),
  ge = 'ElTabPane',
  Ct = D({ name: ge }),
  Pt = D({
    ...Ct,
    props: Nt,
    setup(e) {
      const t = e,
        n = me(),
        u = Ue(),
        a = oe(X)
      a || le(ge, 'usage: <el-tabs><el-tab-pane /></el-tabs/>')
      const i = Q('tab-pane'),
        S = _(),
        v = _(),
        h = K(() => t.closable || a.props.closable),
        m = re(() => {
          var c
          return a.currentName.value === ((c = t.name) != null ? c : v.value)
        }),
        T = _(m.value),
        g = K(() => {
          var c
          return (c = t.name) != null ? c : v.value
        }),
        l = re(() => !t.lazy || T.value || m.value),
        b = () => {
          var c
          return (c = S.value) == null
            ? void 0
            : c.contains(document.activeElement)
        }
      V(m, (c) => {
        c && (T.value = !0)
      })
      const N = Ge({
        uid: n.uid,
        getVnode: () => n.vnode,
        slots: u,
        props: t,
        paneName: g,
        active: m,
        index: v,
        isClosable: h,
        isFocusInsidePane: b
      })
      return (
        a.registerPane(N),
        de(() => {
          a.unregisterPane(N)
        }),
        He(() => {
          var c
          u.label && ((c = a.nav$.value) == null || c.scheduleRender())
        }),
        (c, B) =>
          x(l)
            ? qe(
                (be(),
                fe(
                  'div',
                  {
                    key: 0,
                    id: `pane-${x(g)}`,
                    ref_key: 'paneRef',
                    ref: S,
                    class: ve(x(i).b()),
                    role: 'tabpanel',
                    'aria-hidden': !x(m),
                    'aria-labelledby': `tab-${x(g)}`
                  },
                  [ne(c.$slots, 'default')],
                  10,
                  ['id', 'aria-hidden', 'aria-labelledby']
                )),
                [[Ye, x(m)]]
              )
            : We('v-if', !0)
      )
    }
  })
var ye = ce(Pt, [['__file', 'tab-pane.vue']])
const Lt = $e(_t, { TabPane: ye }),
  Ft = Oe(ye)
export { Ft as E, Lt as a }
