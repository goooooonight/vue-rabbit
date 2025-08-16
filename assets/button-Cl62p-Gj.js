import {
  f as O,
  x as U,
  A as q,
  h as z,
  _ as D,
  E as I,
  w as H,
  l as L
} from './base-BSl8DOKd.js'
import { u as M } from './index-CdlSpGPi.js'
import { f as R, d as W } from './request-B0GuyAcH.js'
import { u as J, a as Q, b as F } from './use-form-common-props-9xqr1Sov.js'
import {
  q as d,
  O as X,
  r as Y,
  D as Z,
  ag as tt,
  L as B,
  m as y,
  o as m,
  w as x,
  c as w,
  x as P,
  F as ot,
  y as _,
  g as u,
  p as N,
  W as V,
  V as et,
  H as at,
  P as nt,
  ah as T
} from './index-62YaKhWX.js'
import { a as G } from './aria-DW8X8pJS.js'
import { T as lt } from './index-r5W6hzzQ.js'
const A = Symbol('buttonGroupContextKey'),
  st = (t, c) => {
    M(
      {
        from: 'type.text',
        replacement: 'link',
        version: '3.0.0',
        scope: 'props',
        ref: 'https://element-plus.org/en-US/component/button.html#button-attributes'
      },
      d(() => t.type === 'text')
    )
    const n = X(A, void 0),
      a = R('button'),
      { form: s } = J(),
      l = Q(d(() => n?.size)),
      e = F(),
      b = Y(),
      f = Z(),
      p = d(() => {
        var o
        return (
          t.type || n?.type || ((o = a.value) == null ? void 0 : o.type) || ''
        )
      }),
      g = d(() => {
        var o, r, i
        return (i =
          (r = t.autoInsertSpace) != null
            ? r
            : (o = a.value) == null
              ? void 0
              : o.autoInsertSpace) != null
          ? i
          : !1
      }),
      h = d(() => {
        var o, r, i
        return (i =
          (r = t.plain) != null
            ? r
            : (o = a.value) == null
              ? void 0
              : o.plain) != null
          ? i
          : !1
      }),
      S = d(() => {
        var o, r, i
        return (i =
          (r = t.round) != null
            ? r
            : (o = a.value) == null
              ? void 0
              : o.round) != null
          ? i
          : !1
      }),
      k = d(() =>
        t.tag === 'button'
          ? {
              ariaDisabled: e.value || t.loading,
              disabled: e.value || t.loading,
              autofocus: t.autofocus,
              type: t.nativeType
            }
          : {}
      ),
      C = d(() => {
        var o
        const r = (o = f.default) == null ? void 0 : o.call(f)
        if (g.value && r?.length === 1) {
          const i = r[0]
          if (i?.type === tt) {
            const j = i.children
            return new RegExp('^\\p{Unified_Ideograph}{2}$', 'u').test(j.trim())
          }
        }
        return !1
      })
    return {
      _disabled: e,
      _size: l,
      _type: p,
      _ref: b,
      _props: k,
      _plain: h,
      _round: S,
      shouldAddSpace: C,
      handleClick: (o) => {
        if (e.value || t.loading) {
          o.stopPropagation()
          return
        }
        t.nativeType === 'reset' && s?.resetFields(), c('click', o)
      }
    }
  },
  rt = [
    'default',
    'primary',
    'success',
    'warning',
    'info',
    'danger',
    'text',
    ''
  ],
  it = ['button', 'submit', 'reset'],
  $ = O({
    size: W,
    disabled: Boolean,
    type: { type: String, values: rt, default: '' },
    icon: { type: G },
    nativeType: { type: String, values: it, default: 'button' },
    loading: Boolean,
    loadingIcon: { type: G, default: () => q },
    plain: { type: Boolean, default: void 0 },
    text: Boolean,
    link: Boolean,
    bg: Boolean,
    autofocus: Boolean,
    round: { type: Boolean, default: void 0 },
    circle: Boolean,
    color: String,
    dark: Boolean,
    autoInsertSpace: { type: Boolean, default: void 0 },
    tag: { type: U([String, Object]), default: 'button' }
  }),
  ct = { click: (t) => t instanceof MouseEvent }
function v(t, c = 20) {
  return t.mix('#141414', c).toString()
}
function ut(t) {
  const c = F(),
    n = z('button')
  return d(() => {
    let a = {},
      s = t.color
    if (s) {
      const l = s.match(/var\((.*?)\)/)
      l &&
        (s = window
          .getComputedStyle(window.document.documentElement)
          .getPropertyValue(l[1]))
      const e = new lt(s),
        b = t.dark ? e.tint(20).toString() : v(e, 20)
      if (t.plain)
        (a = n.cssVarBlock({
          'bg-color': t.dark ? v(e, 90) : e.tint(90).toString(),
          'text-color': s,
          'border-color': t.dark ? v(e, 50) : e.tint(50).toString(),
          'hover-text-color': `var(${n.cssVarName('color-white')})`,
          'hover-bg-color': s,
          'hover-border-color': s,
          'active-bg-color': b,
          'active-text-color': `var(${n.cssVarName('color-white')})`,
          'active-border-color': b
        })),
          c.value &&
            ((a[n.cssVarBlockName('disabled-bg-color')] = t.dark
              ? v(e, 90)
              : e.tint(90).toString()),
            (a[n.cssVarBlockName('disabled-text-color')] = t.dark
              ? v(e, 50)
              : e.tint(50).toString()),
            (a[n.cssVarBlockName('disabled-border-color')] = t.dark
              ? v(e, 80)
              : e.tint(80).toString()))
      else {
        const f = t.dark ? v(e, 30) : e.tint(30).toString(),
          p = e.isDark()
            ? `var(${n.cssVarName('color-white')})`
            : `var(${n.cssVarName('color-black')})`
        if (
          ((a = n.cssVarBlock({
            'bg-color': s,
            'text-color': p,
            'border-color': s,
            'hover-bg-color': f,
            'hover-text-color': p,
            'hover-border-color': f,
            'active-bg-color': b,
            'active-border-color': b
          })),
          c.value)
        ) {
          const g = t.dark ? v(e, 50) : e.tint(50).toString()
          ;(a[n.cssVarBlockName('disabled-bg-color')] = g),
            (a[n.cssVarBlockName('disabled-text-color')] = t.dark
              ? 'rgba(255, 255, 255, 0.5)'
              : `var(${n.cssVarName('color-white')})`),
            (a[n.cssVarBlockName('disabled-border-color')] = g)
        }
      }
    }
    return a
  })
}
const dt = B({ name: 'ElButton' }),
  bt = B({
    ...dt,
    props: $,
    emits: ct,
    setup(t, { expose: c, emit: n }) {
      const a = t,
        s = ut(a),
        l = z('button'),
        {
          _ref: e,
          _size: b,
          _type: f,
          _disabled: p,
          _props: g,
          _plain: h,
          _round: S,
          shouldAddSpace: k,
          handleClick: C
        } = st(a, n),
        E = d(() => [
          l.b(),
          l.m(f.value),
          l.m(b.value),
          l.is('disabled', p.value),
          l.is('loading', a.loading),
          l.is('plain', h.value),
          l.is('round', S.value),
          l.is('circle', a.circle),
          l.is('text', a.text),
          l.is('link', a.link),
          l.is('has-bg', a.bg)
        ])
      return (
        c({ ref: e, size: b, type: f, disabled: p, shouldAddSpace: k }),
        (o, r) => (
          m(),
          y(
            V(o.tag),
            et({ ref_key: '_ref', ref: e }, u(g), {
              class: u(E),
              style: u(s),
              onClick: u(C)
            }),
            {
              default: x(() => [
                o.loading
                  ? (m(),
                    w(
                      ot,
                      { key: 0 },
                      [
                        o.$slots.loading
                          ? _(o.$slots, 'loading', { key: 0 })
                          : (m(),
                            y(
                              u(I),
                              { key: 1, class: N(u(l).is('loading')) },
                              {
                                default: x(() => [(m(), y(V(o.loadingIcon)))]),
                                _: 1
                              },
                              8,
                              ['class']
                            ))
                      ],
                      64
                    ))
                  : o.icon || o.$slots.icon
                    ? (m(),
                      y(
                        u(I),
                        { key: 1 },
                        {
                          default: x(() => [
                            o.icon
                              ? (m(), y(V(o.icon), { key: 0 }))
                              : _(o.$slots, 'icon', { key: 1 })
                          ]),
                          _: 3
                        }
                      ))
                    : P('v-if', !0),
                o.$slots.default
                  ? (m(),
                    w(
                      'span',
                      {
                        key: 2,
                        class: N({ [u(l).em('text', 'expand')]: u(k) })
                      },
                      [_(o.$slots, 'default')],
                      2
                    ))
                  : P('v-if', !0)
              ]),
              _: 3
            },
            16,
            ['class', 'style', 'onClick']
          )
        )
      )
    }
  })
var ft = D(bt, [['__file', 'button.vue']])
const vt = { size: $.size, type: $.type },
  mt = B({ name: 'ElButtonGroup' }),
  pt = B({
    ...mt,
    props: vt,
    setup(t) {
      const c = t
      at(A, nt({ size: T(c, 'size'), type: T(c, 'type') }))
      const n = z('button')
      return (a, s) => (
        m(),
        w('div', { class: N(u(n).b('group')) }, [_(a.$slots, 'default')], 2)
      )
    }
  })
var K = D(pt, [['__file', 'button-group.vue']])
const Ct = H(ft, { ButtonGroup: K }),
  xt = L(K)
export { Ct as E, xt as a }
