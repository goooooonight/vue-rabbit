import { k as O, u as ee } from './aria-CnJd5Vss.js'
import {
  L as B,
  O as I,
  r as u,
  q as L,
  G as te,
  ah as X,
  m as W,
  o as P,
  w as Q,
  k as le,
  a as A,
  M as ae,
  p as R,
  g,
  N as $,
  v as oe,
  T as se,
  c as J,
  d as Y,
  F as re,
  i as q,
  H as ne,
  P as ie,
  ap as ce,
  A as ue,
  Q as V,
  a2 as ve,
  x as fe,
  y as me,
  W as de,
  a1 as pe
} from './index-DU_P6jZu.js'
import {
  f as D,
  _ as j,
  h as Z,
  B as he,
  g as N,
  x as be,
  r as F,
  w as ye
} from './base-Bes0XUun.js'
import { t as ge } from './error-Cq9Fpw4b.js'
import { u as we } from './index-fOI-oh1j.js'
const k = 4,
  Se = {
    vertical: {
      offset: 'offsetHeight',
      scroll: 'scrollTop',
      scrollSize: 'scrollHeight',
      size: 'height',
      key: 'vertical',
      axis: 'Y',
      client: 'clientY',
      direction: 'top'
    },
    horizontal: {
      offset: 'offsetWidth',
      scroll: 'scrollLeft',
      scrollSize: 'scrollWidth',
      size: 'width',
      key: 'horizontal',
      axis: 'X',
      client: 'clientX',
      direction: 'left'
    }
  },
  ze = ({ move: d, size: v, bar: s }) => ({
    [s.size]: v,
    transform: `translate${s.axis}(${d}%)`
  }),
  K = Symbol('scrollbarContextKey'),
  _e = D({
    vertical: Boolean,
    size: String,
    move: Number,
    ratio: { type: Number, required: !0 },
    always: Boolean
  }),
  Ee = 'Thumb',
  He = B({
    __name: 'thumb',
    props: _e,
    setup(d) {
      const v = d,
        s = I(K),
        a = Z('scrollbar')
      s || ge(Ee, 'can not inject scrollbar context')
      const c = u(),
        f = u(),
        p = u({}),
        i = u(!1)
      let n = !1,
        m = !1,
        T = 0,
        l = 0,
        o = he ? document.onselectstart : null
      const t = L(() => Se[v.vertical ? 'vertical' : 'horizontal']),
        h = L(() => ze({ size: v.size, move: v.move, bar: t.value })),
        S = L(
          () =>
            c.value[t.value.offset] ** 2 /
            s.wrapElement[t.value.scrollSize] /
            v.ratio /
            f.value[t.value.offset]
        ),
        E = (r) => {
          var y
          if ((r.stopPropagation(), r.ctrlKey || [1, 2].includes(r.button)))
            return
          ;(y = window.getSelection()) == null || y.removeAllRanges(), z(r)
          const H = r.currentTarget
          H &&
            (p.value[t.value.axis] =
              H[t.value.offset] -
              (r[t.value.client] -
                H.getBoundingClientRect()[t.value.direction]))
        },
        w = (r) => {
          if (!f.value || !c.value || !s.wrapElement) return
          const y = Math.abs(
              r.target.getBoundingClientRect()[t.value.direction] -
                r[t.value.client]
            ),
            H = f.value[t.value.offset] / 2,
            M = ((y - H) * 100 * S.value) / c.value[t.value.offset]
          s.wrapElement[t.value.scroll] =
            (M * s.wrapElement[t.value.scrollSize]) / 100
        },
        z = (r) => {
          r.stopImmediatePropagation(),
            (n = !0),
            (T = s.wrapElement.scrollHeight),
            (l = s.wrapElement.scrollWidth),
            document.addEventListener('mousemove', x),
            document.addEventListener('mouseup', C),
            (o = document.onselectstart),
            (document.onselectstart = () => !1)
        },
        x = (r) => {
          if (!c.value || !f.value || n === !1) return
          const y = p.value[t.value.axis]
          if (!y) return
          const H =
              (c.value.getBoundingClientRect()[t.value.direction] -
                r[t.value.client]) *
              -1,
            M = f.value[t.value.offset] - y,
            U = ((H - M) * 100 * S.value) / c.value[t.value.offset]
          t.value.scroll === 'scrollLeft'
            ? (s.wrapElement[t.value.scroll] = (U * l) / 100)
            : (s.wrapElement[t.value.scroll] = (U * T) / 100)
        },
        C = () => {
          ;(n = !1),
            (p.value[t.value.axis] = 0),
            document.removeEventListener('mousemove', x),
            document.removeEventListener('mouseup', C),
            b(),
            m && (i.value = !1)
        },
        _ = () => {
          ;(m = !1), (i.value = !!v.size)
        },
        e = () => {
          ;(m = !0), (i.value = n)
        }
      te(() => {
        b(), document.removeEventListener('mouseup', C)
      })
      const b = () => {
        document.onselectstart !== o && (document.onselectstart = o)
      }
      return (
        O(X(s, 'scrollbarElement'), 'mousemove', _),
        O(X(s, 'scrollbarElement'), 'mouseleave', e),
        (r, y) => (
          P(),
          W(
            se,
            { name: g(a).b('fade'), persisted: '' },
            {
              default: Q(() => [
                le(
                  A(
                    'div',
                    {
                      ref_key: 'instance',
                      ref: c,
                      class: R([g(a).e('bar'), g(a).is(g(t).key)]),
                      onMousedown: w,
                      onClick: ae(() => {}, ['stop'])
                    },
                    [
                      A(
                        'div',
                        {
                          ref_key: 'thumb',
                          ref: f,
                          class: R(g(a).e('thumb')),
                          style: $(g(h)),
                          onMousedown: E
                        },
                        null,
                        38
                      )
                    ],
                    42,
                    ['onClick']
                  ),
                  [[oe, r.always || i.value]]
                )
              ]),
              _: 1
            },
            8,
            ['name']
          )
        )
      )
    }
  })
var G = j(He, [['__file', 'thumb.vue']])
const Te = D({
    always: { type: Boolean, default: !0 },
    minSize: { type: Number, required: !0 }
  }),
  ke = B({
    __name: 'bar',
    props: Te,
    setup(d, { expose: v }) {
      const s = d,
        a = I(K),
        c = u(0),
        f = u(0),
        p = u(''),
        i = u(''),
        n = u(1),
        m = u(1)
      return (
        v({
          handleScroll: (o) => {
            if (o) {
              const t = o.offsetHeight - k,
                h = o.offsetWidth - k
              ;(f.value = ((o.scrollTop * 100) / t) * n.value),
                (c.value = ((o.scrollLeft * 100) / h) * m.value)
            }
          },
          update: () => {
            const o = a?.wrapElement
            if (!o) return
            const t = o.offsetHeight - k,
              h = o.offsetWidth - k,
              S = t ** 2 / o.scrollHeight,
              E = h ** 2 / o.scrollWidth,
              w = Math.max(S, s.minSize),
              z = Math.max(E, s.minSize)
            ;(n.value = S / (t - S) / (w / (t - w))),
              (m.value = E / (h - E) / (z / (h - z))),
              (i.value = w + k < t ? `${w}px` : ''),
              (p.value = z + k < h ? `${z}px` : '')
          }
        }),
        (o, t) => (
          P(),
          J(
            re,
            null,
            [
              Y(
                G,
                {
                  move: c.value,
                  ratio: m.value,
                  size: p.value,
                  always: o.always
                },
                null,
                8,
                ['move', 'ratio', 'size', 'always']
              ),
              Y(
                G,
                {
                  move: f.value,
                  ratio: n.value,
                  size: i.value,
                  vertical: '',
                  always: o.always
                },
                null,
                8,
                ['move', 'ratio', 'size', 'always']
              )
            ],
            64
          )
        )
      )
    }
  })
var Le = j(ke, [['__file', 'bar.vue']])
const Ce = D({
    height: { type: [String, Number], default: '' },
    maxHeight: { type: [String, Number], default: '' },
    native: Boolean,
    wrapStyle: { type: be([String, Object, Array]), default: '' },
    wrapClass: { type: [String, Array], default: '' },
    viewClass: { type: [String, Array], default: '' },
    viewStyle: { type: [String, Array, Object], default: '' },
    noresize: Boolean,
    tag: { type: String, default: 'div' },
    always: Boolean,
    minSize: { type: Number, default: 20 },
    tabindex: { type: [String, Number], default: void 0 },
    id: String,
    role: String,
    ...we(['ariaLabel', 'ariaOrientation'])
  }),
  Ne = {
    'end-reached': (d) => ['left', 'right', 'top', 'bottom'].includes(d),
    scroll: ({ scrollTop: d, scrollLeft: v }) => [d, v].every(N)
  },
  Pe = 'ElScrollbar',
  Re = B({ name: Pe }),
  xe = B({
    ...Re,
    props: Ce,
    emits: Ne,
    setup(d, { expose: v, emit: s }) {
      const a = d,
        c = Z('scrollbar')
      let f,
        p,
        i = 0,
        n = 0,
        m = ''
      const T = u(),
        l = u(),
        o = u(),
        t = u(),
        h = L(() => {
          const e = {}
          return (
            a.height && (e.height = F(a.height)),
            a.maxHeight && (e.maxHeight = F(a.maxHeight)),
            [a.wrapStyle, e]
          )
        }),
        S = L(() => [
          a.wrapClass,
          c.e('wrap'),
          { [c.em('wrap', 'hidden-default')]: !a.native }
        ]),
        E = L(() => [c.e('view'), a.viewClass]),
        w = () => {
          var e
          if (l.value) {
            ;(e = t.value) == null || e.handleScroll(l.value)
            const b = i,
              r = n
            ;(i = l.value.scrollTop), (n = l.value.scrollLeft)
            const y = {
              bottom: i + l.value.clientHeight >= l.value.scrollHeight,
              top: i <= 0 && b !== 0,
              right: n + l.value.clientWidth >= l.value.scrollWidth && r !== n,
              left: n <= 0 && r !== 0
            }
            b !== i && (m = i > b ? 'bottom' : 'top'),
              r !== n && (m = n > r ? 'right' : 'left'),
              s('scroll', { scrollTop: i, scrollLeft: n }),
              y[m] && s('end-reached', m)
          }
        }
      function z(e, b) {
        pe(e) ? l.value.scrollTo(e) : N(e) && N(b) && l.value.scrollTo(e, b)
      }
      const x = (e) => {
          N(e) && (l.value.scrollTop = e)
        },
        C = (e) => {
          N(e) && (l.value.scrollLeft = e)
        },
        _ = () => {
          var e
          ;(e = t.value) == null || e.update()
        }
      return (
        q(
          () => a.noresize,
          (e) => {
            e
              ? (f?.(), p?.())
              : (({ stop: f } = ee(o, _)), (p = O('resize', _)))
          },
          { immediate: !0 }
        ),
        q(
          () => [a.maxHeight, a.height],
          () => {
            a.native ||
              V(() => {
                var e
                _(),
                  l.value && ((e = t.value) == null || e.handleScroll(l.value))
              })
          }
        ),
        ne(K, ie({ scrollbarElement: T, wrapElement: l })),
        ce(() => {
          l.value && ((l.value.scrollTop = i), (l.value.scrollLeft = n))
        }),
        ue(() => {
          a.native ||
            V(() => {
              _()
            })
        }),
        ve(() => _()),
        v({
          wrapRef: l,
          update: _,
          scrollTo: z,
          setScrollTop: x,
          setScrollLeft: C,
          handleScroll: w
        }),
        (e, b) => (
          P(),
          J(
            'div',
            { ref_key: 'scrollbarRef', ref: T, class: R(g(c).b()) },
            [
              A(
                'div',
                {
                  ref_key: 'wrapRef',
                  ref: l,
                  class: R(g(S)),
                  style: $(g(h)),
                  tabindex: e.tabindex,
                  onScroll: w
                },
                [
                  (P(),
                  W(
                    de(e.tag),
                    {
                      id: e.id,
                      ref_key: 'resizeRef',
                      ref: o,
                      class: R(g(E)),
                      style: $(e.viewStyle),
                      role: e.role,
                      'aria-label': e.ariaLabel,
                      'aria-orientation': e.ariaOrientation
                    },
                    { default: Q(() => [me(e.$slots, 'default')]), _: 3 },
                    8,
                    [
                      'id',
                      'class',
                      'style',
                      'role',
                      'aria-label',
                      'aria-orientation'
                    ]
                  ))
                ],
                46,
                ['tabindex']
              ),
              e.native
                ? fe('v-if', !0)
                : (P(),
                  W(
                    Le,
                    {
                      key: 0,
                      ref_key: 'barRef',
                      ref: t,
                      always: e.always,
                      'min-size': e.minSize
                    },
                    null,
                    8,
                    ['always', 'min-size']
                  ))
            ],
            2
          )
        )
      )
    }
  })
var Be = j(xe, [['__file', 'scrollbar.vue']])
const De = ye(Be)
export { De as E, Ne as s }
