import {
  D as Le,
  r as _,
  q as A,
  g as e,
  i as q,
  E as Ae,
  A as He,
  G as he,
  H as Oe,
  I as ge,
  J as Pe,
  K as Ve,
  L as x,
  c as P,
  o as M,
  m as ce,
  x as U,
  a as $,
  d as F,
  w as J,
  k as Y,
  M as X,
  p as L,
  v as Q,
  T as ve,
  y as pe,
  N as ye,
  F as ze,
  j as De,
  t as Re,
  O as Ge,
  P as je
} from './index-DU_P6jZu.js'
import {
  f as Ie,
  g as Ke,
  _ as Ce,
  h as _e,
  E as fe,
  j as Fe,
  a as Ue,
  k as We,
  w as qe,
  l as Je
} from './base-Bes0XUun.js'
import { u as Xe } from './aria-CnJd5Vss.js'
import { u as Ye } from './index-Ckf-fyZT.js'
import { f as Qe } from './vnode-DLkXDgL1.js'
import { C as Ze } from './event-BB_Ol6Sd.js'
import { t as me } from './throttle-BSmyBOmV.js'
import { u as xe, i as ee } from './request-FXAcKJdj.js'
const et = Ie({
    initialIndex: { type: Number, default: 0 },
    height: { type: String, default: '' },
    trigger: { type: String, values: ['hover', 'click'], default: 'hover' },
    autoplay: { type: Boolean, default: !0 },
    interval: { type: Number, default: 3e3 },
    indicatorPosition: {
      type: String,
      values: ['', 'none', 'outside'],
      default: ''
    },
    arrow: {
      type: String,
      values: ['always', 'hover', 'never'],
      default: 'hover'
    },
    type: { type: String, values: ['', 'card'], default: '' },
    cardScale: { type: Number, default: 0.83 },
    loop: { type: Boolean, default: !0 },
    direction: {
      type: String,
      values: ['horizontal', 'vertical'],
      default: 'horizontal'
    },
    pauseOnHover: { type: Boolean, default: !0 },
    motionBlur: Boolean
  }),
  tt = { change: (a, u) => [a, u].every(Ke) },
  we = Symbol('carouselContextKey'),
  re = 'ElCarouselItem',
  de = 300,
  at = (a, u, m) => {
    const {
        children: n,
        addChild: N,
        removeChild: d,
        ChildrenSorter: b
      } = Ye(ge(), re),
      w = Le(),
      s = _(-1),
      g = _(null),
      p = _(!1),
      y = _(),
      k = _(0),
      h = _(!0),
      H = A(() => a.arrow !== 'never' && !e(S)),
      V = A(() => n.value.some((t) => t.props.label.toString().length > 0)),
      T = A(() => a.type === 'card'),
      S = A(() => a.direction === 'vertical'),
      z = A(() =>
        a.height !== 'auto'
          ? { height: a.height }
          : { height: `${k.value}px`, overflow: 'hidden' }
      ),
      D = me(
        (t) => {
          C(t)
        },
        de,
        { trailing: !0 }
      ),
      r = me((t) => {
        K(t)
      }, de),
      l = (t) => (h.value ? (s.value <= 1 ? t <= 1 : t > 1) : !0)
    function c() {
      g.value && (clearInterval(g.value), (g.value = null))
    }
    function v() {
      a.interval <= 0 ||
        !a.autoplay ||
        g.value ||
        (g.value = setInterval(() => I(), a.interval))
    }
    const I = () => {
      s.value < n.value.length - 1
        ? (s.value = s.value + 1)
        : a.loop && (s.value = 0)
    }
    function C(t) {
      if (Ve(t)) {
        const B = n.value.filter((j) => j.props.name === t)
        B.length > 0 && (t = n.value.indexOf(B[0]))
      }
      if (((t = Number(t)), Number.isNaN(t) || t !== Math.floor(t))) return
      const i = n.value.length,
        E = s.value
      t < 0
        ? (s.value = a.loop ? i - 1 : 0)
        : t >= i
          ? (s.value = a.loop ? 0 : i - 1)
          : (s.value = t),
        E === s.value && o(E),
        Z()
    }
    function o(t) {
      n.value.forEach((i, E) => {
        i.translateItem(E, s.value, t)
      })
    }
    function R(t, i) {
      var E, B, j, le
      const W = e(n),
        ie = W.length
      if (ie === 0 || !t.states.inStage) return !1
      const Te = i + 1,
        Ee = i - 1,
        ue = ie - 1,
        Me = W[ue].states.active,
        Ne = W[0].states.active,
        Be =
          (B = (E = W[Te]) == null ? void 0 : E.states) == null
            ? void 0
            : B.active,
        $e =
          (le = (j = W[Ee]) == null ? void 0 : j.states) == null
            ? void 0
            : le.active
      return (i === ue && Ne) || Be
        ? 'left'
        : (i === 0 && Me) || $e
          ? 'right'
          : !1
    }
    function te() {
      ;(p.value = !0), a.pauseOnHover && c()
    }
    function ae() {
      ;(p.value = !1), v()
    }
    function oe(t) {
      e(S) ||
        n.value.forEach((i, E) => {
          t === R(i, E) && (i.states.hover = !0)
        })
    }
    function ne() {
      e(S) ||
        n.value.forEach((t) => {
          t.states.hover = !1
        })
    }
    function f(t) {
      s.value = t
    }
    function K(t) {
      a.trigger === 'hover' && t !== s.value && (s.value = t)
    }
    function G() {
      C(s.value - 1)
    }
    function O() {
      C(s.value + 1)
    }
    function Z() {
      c(), a.pauseOnHover || v()
    }
    function be(t) {
      a.height === 'auto' && (k.value = t)
    }
    function ke() {
      var t
      const i = (t = w.default) == null ? void 0 : t.call(w)
      if (!i) return null
      const B = Qe(i).filter((j) => Pe(j) && j.type.name === re)
      return B?.length === 2 && a.loop && !T.value
        ? ((h.value = !0), B)
        : ((h.value = !1), null)
    }
    q(
      () => s.value,
      (t, i) => {
        o(i), h.value && ((t = t % 2), (i = i % 2)), i > -1 && u(Ze, t, i)
      }
    ),
      q(
        () => a.autoplay,
        (t) => {
          t ? v() : c()
        }
      ),
      q(
        () => a.loop,
        () => {
          C(s.value)
        }
      ),
      q(
        () => a.interval,
        () => {
          Z()
        }
      )
    const se = Ae()
    return (
      He(() => {
        q(
          () => n.value,
          () => {
            n.value.length > 0 && C(a.initialIndex)
          },
          { immediate: !0 }
        ),
          (se.value = Xe(y.value, () => {
            o()
          })),
          v()
      }),
      he(() => {
        c(), y.value && se.value && se.value.stop()
      }),
      Oe(we, {
        root: y,
        isCardType: T,
        isVertical: S,
        items: n,
        loop: a.loop,
        cardScale: a.cardScale,
        addItem: N,
        removeItem: d,
        setActiveItem: C,
        setContainerHeight: be
      }),
      {
        root: y,
        activeIndex: s,
        arrowDisplay: H,
        hasLabel: V,
        hover: p,
        isCardType: T,
        items: n,
        isVertical: S,
        containerStyle: z,
        isItemsTwoLength: h,
        handleButtonEnter: oe,
        handleButtonLeave: ne,
        handleIndicatorClick: f,
        handleMouseEnter: te,
        handleMouseLeave: ae,
        setActiveItem: C,
        prev: G,
        next: O,
        PlaceholderItem: ke,
        isTwoLengthShow: l,
        ItemsSorter: b,
        throttledArrowClick: D,
        throttledIndicatorHover: r
      }
    )
  },
  ot = 'ElCarousel',
  nt = x({ name: ot }),
  st = x({
    ...nt,
    props: et,
    emits: tt,
    setup(a, { expose: u, emit: m }) {
      const n = a,
        {
          root: N,
          activeIndex: d,
          arrowDisplay: b,
          hasLabel: w,
          hover: s,
          isCardType: g,
          items: p,
          isVertical: y,
          containerStyle: k,
          handleButtonEnter: h,
          handleButtonLeave: H,
          handleIndicatorClick: V,
          handleMouseEnter: T,
          handleMouseLeave: S,
          setActiveItem: z,
          prev: D,
          next: r,
          PlaceholderItem: l,
          isTwoLengthShow: c,
          ItemsSorter: v,
          throttledArrowClick: I,
          throttledIndicatorHover: C
        } = at(n, m),
        o = _e('carousel'),
        { t: R } = xe(),
        te = A(() => {
          const f = [o.b(), o.m(n.direction)]
          return e(g) && f.push(o.m('card')), f
        }),
        ae = A(() => {
          const f = [o.e('indicators'), o.em('indicators', n.direction)]
          return (
            e(w) && f.push(o.em('indicators', 'labels')),
            n.indicatorPosition === 'outside' &&
              f.push(o.em('indicators', 'outside')),
            e(y) && f.push(o.em('indicators', 'right')),
            f
          )
        })
      function oe(f) {
        if (!n.motionBlur) return
        const K = e(y)
          ? `${o.namespace.value}-transitioning-vertical`
          : `${o.namespace.value}-transitioning`
        f.currentTarget.classList.add(K)
      }
      function ne(f) {
        if (!n.motionBlur) return
        const K = e(y)
          ? `${o.namespace.value}-transitioning-vertical`
          : `${o.namespace.value}-transitioning`
        f.currentTarget.classList.remove(K)
      }
      return (
        u({ activeIndex: d, setActiveItem: z, prev: D, next: r }),
        (f, K) => (
          M(),
          P(
            'div',
            {
              ref_key: 'root',
              ref: N,
              class: L(e(te)),
              onMouseenter: X(e(T), ['stop']),
              onMouseleave: X(e(S), ['stop'])
            },
            [
              e(b)
                ? (M(),
                  ce(
                    ve,
                    { key: 0, name: 'carousel-arrow-left', persisted: '' },
                    {
                      default: J(() => [
                        Y(
                          $(
                            'button',
                            {
                              type: 'button',
                              class: L([
                                e(o).e('arrow'),
                                e(o).em('arrow', 'left')
                              ]),
                              'aria-label': e(R)('el.carousel.leftArrow'),
                              onMouseenter: (G) => e(h)('left'),
                              onMouseleave: e(H),
                              onClick: X((G) => e(I)(e(d) - 1), ['stop'])
                            },
                            [
                              F(e(fe), null, {
                                default: J(() => [F(e(Fe))]),
                                _: 1
                              })
                            ],
                            42,
                            [
                              'aria-label',
                              'onMouseenter',
                              'onMouseleave',
                              'onClick'
                            ]
                          ),
                          [
                            [
                              Q,
                              (f.arrow === 'always' || e(s)) &&
                                (n.loop || e(d) > 0)
                            ]
                          ]
                        )
                      ]),
                      _: 1
                    }
                  ))
                : U('v-if', !0),
              e(b)
                ? (M(),
                  ce(
                    ve,
                    { key: 1, name: 'carousel-arrow-right', persisted: '' },
                    {
                      default: J(() => [
                        Y(
                          $(
                            'button',
                            {
                              type: 'button',
                              class: L([
                                e(o).e('arrow'),
                                e(o).em('arrow', 'right')
                              ]),
                              'aria-label': e(R)('el.carousel.rightArrow'),
                              onMouseenter: (G) => e(h)('right'),
                              onMouseleave: e(H),
                              onClick: X((G) => e(I)(e(d) + 1), ['stop'])
                            },
                            [
                              F(e(fe), null, {
                                default: J(() => [F(e(Ue))]),
                                _: 1
                              })
                            ],
                            42,
                            [
                              'aria-label',
                              'onMouseenter',
                              'onMouseleave',
                              'onClick'
                            ]
                          ),
                          [
                            [
                              Q,
                              (f.arrow === 'always' || e(s)) &&
                                (n.loop || e(d) < e(p).length - 1)
                            ]
                          ]
                        )
                      ]),
                      _: 1
                    }
                  ))
                : U('v-if', !0),
              $(
                'div',
                {
                  class: L(e(o).e('container')),
                  style: ye(e(k)),
                  onTransitionstart: oe,
                  onTransitionend: ne
                },
                [F(e(l)), pe(f.$slots, 'default')],
                38
              ),
              F(e(v), null, {
                default: J(() => [
                  f.indicatorPosition !== 'none'
                    ? (M(),
                      P(
                        'ul',
                        { key: 0, class: L(e(ae)) },
                        [
                          (M(!0),
                          P(
                            ze,
                            null,
                            De(e(p), (G, O) =>
                              Y(
                                (M(),
                                P(
                                  'li',
                                  {
                                    key: O,
                                    class: L([
                                      e(o).e('indicator'),
                                      e(o).em('indicator', f.direction),
                                      e(o).is('active', O === e(d))
                                    ]),
                                    onMouseenter: (Z) => e(C)(O),
                                    onClick: X((Z) => e(V)(O), ['stop'])
                                  },
                                  [
                                    $(
                                      'button',
                                      {
                                        class: L(e(o).e('button')),
                                        'aria-label': e(R)(
                                          'el.carousel.indicator',
                                          { index: O + 1 }
                                        )
                                      },
                                      [
                                        e(w)
                                          ? (M(),
                                            P(
                                              'span',
                                              { key: 0 },
                                              Re(G.props.label),
                                              1
                                            ))
                                          : U('v-if', !0)
                                      ],
                                      10,
                                      ['aria-label']
                                    )
                                  ],
                                  42,
                                  ['onMouseenter', 'onClick']
                                )),
                                [[Q, e(c)(O)]]
                              )
                            ),
                            128
                          ))
                        ],
                        2
                      ))
                    : U('v-if', !0)
                ]),
                _: 1
              }),
              n.motionBlur
                ? (M(),
                  P(
                    'svg',
                    {
                      key: 2,
                      xmlns: 'http://www.w3.org/2000/svg',
                      version: '1.1',
                      style: { display: 'none' }
                    },
                    [
                      $('defs', null, [
                        $('filter', { id: 'elCarouselHorizontal' }, [
                          $('feGaussianBlur', {
                            in: 'SourceGraphic',
                            stdDeviation: '12,0'
                          })
                        ]),
                        $('filter', { id: 'elCarouselVertical' }, [
                          $('feGaussianBlur', {
                            in: 'SourceGraphic',
                            stdDeviation: '0,10'
                          })
                        ])
                      ])
                    ]
                  ))
                : U('v-if', !0)
            ],
            42,
            ['onMouseenter', 'onMouseleave']
          )
        )
      )
    }
  })
var rt = Ce(st, [['__file', 'carousel.vue']])
const lt = Ie({
    name: { type: String, default: '' },
    label: { type: [String, Number], default: '' }
  }),
  it = (a) => {
    const u = Ge(we),
      m = ge(),
      n = _(),
      N = _(!1),
      d = _(0),
      b = _(1),
      w = _(!1),
      s = _(!1),
      g = _(!1),
      p = _(!1),
      { isCardType: y, isVertical: k, cardScale: h } = u
    function H(r, l, c) {
      const v = c - 1,
        I = l - 1,
        C = l + 1,
        o = c / 2
      return l === 0 && r === v
        ? -1
        : l === v && r === 0
          ? c
          : r < I && l - r >= o
            ? c + 1
            : r > C && r - l >= o
              ? -2
              : r
    }
    function V(r, l) {
      var c, v
      const I = e(k)
        ? ((c = u.root.value) == null ? void 0 : c.offsetHeight) || 0
        : ((v = u.root.value) == null ? void 0 : v.offsetWidth) || 0
      return g.value
        ? (I * ((2 - h) * (r - l) + 1)) / 4
        : r < l
          ? (-(1 + h) * I) / 4
          : ((3 + h) * I) / 4
    }
    function T(r, l, c) {
      const v = u.root.value
      return v ? ((c ? v.offsetHeight : v.offsetWidth) || 0) * (r - l) : 0
    }
    const S = (r, l, c) => {
      var v
      const I = e(y),
        C = (v = u.items.value.length) != null ? v : Number.NaN,
        o = r === l
      !I && !We(c) && (p.value = o || r === c),
        !o && C > 2 && u.loop && (r = H(r, l, C))
      const R = e(k)
      ;(w.value = o),
        I
          ? ((g.value = Math.round(Math.abs(r - l)) <= 1),
            (d.value = V(r, l)),
            (b.value = e(w) ? 1 : h))
          : (d.value = T(r, l, R)),
        (s.value = !0),
        o && n.value && u.setContainerHeight(n.value.offsetHeight)
    }
    function z() {
      if (u && e(y)) {
        const r = u.items.value.findIndex(({ uid: l }) => l === m.uid)
        u.setActiveItem(r)
      }
    }
    const D = {
      props: a,
      states: je({
        hover: N,
        translate: d,
        scale: b,
        active: w,
        ready: s,
        inStage: g,
        animating: p
      }),
      uid: m.uid,
      getVnode: () => m.vnode,
      translateItem: S
    }
    return (
      u.addItem(D),
      he(() => {
        u.removeItem(D)
      }),
      {
        carouselItemRef: n,
        active: w,
        animating: p,
        hover: N,
        inStage: g,
        isVertical: k,
        translate: d,
        isCardType: y,
        scale: b,
        ready: s,
        handleItemClick: z
      }
    )
  },
  ut = x({ name: re }),
  ct = x({
    ...ut,
    props: lt,
    setup(a) {
      const u = a,
        m = _e('carousel'),
        {
          carouselItemRef: n,
          active: N,
          animating: d,
          hover: b,
          inStage: w,
          isVertical: s,
          translate: g,
          isCardType: p,
          scale: y,
          ready: k,
          handleItemClick: h
        } = it(u),
        H = A(() => [
          m.e('item'),
          m.is('active', N.value),
          m.is('in-stage', w.value),
          m.is('hover', b.value),
          m.is('animating', d.value),
          {
            [m.em('item', 'card')]: p.value,
            [m.em('item', 'card-vertical')]: p.value && s.value
          }
        ]),
        V = A(() => {
          const S = `${`translate${e(s) ? 'Y' : 'X'}`}(${e(g)}px)`,
            z = `scale(${e(y)})`
          return { transform: [S, z].join(' ') }
        })
      return (T, S) =>
        Y(
          (M(),
          P(
            'div',
            {
              ref_key: 'carouselItemRef',
              ref: n,
              class: L(e(H)),
              style: ye(e(V)),
              onClick: e(h)
            },
            [
              e(p)
                ? Y(
                    (M(),
                    P('div', { key: 0, class: L(e(m).e('mask')) }, null, 2)),
                    [[Q, !e(N)]]
                  )
                : U('v-if', !0),
              pe(T.$slots, 'default')
            ],
            14,
            ['onClick']
          )),
          [[Q, e(k)]]
        )
    }
  })
var Se = Ce(ct, [['__file', 'carousel-item.vue']])
const It = qe(rt, { CarouselItem: Se }),
  Ct = Je(Se),
  _t = (a) => ee.get('/home/banner', { params: { distributionSite: a } }),
  wt = (a) => ee.get('/home/new', { params: { limit: a } }),
  St = () => ee.get('/home/hot'),
  bt = (a) => ee.get('/home/brand', { params: { limit: a } })
export { It as E, Ct as a, wt as b, St as c, bt as d, _t as g }
