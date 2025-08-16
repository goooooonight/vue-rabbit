import {
  K as ee,
  q as h,
  I as ke,
  E as Y,
  r as O,
  i as X,
  S as be,
  g as t,
  Q as V,
  L as Te,
  aq as Ye,
  D as Xe,
  A as qe,
  ah as Ge,
  c as C,
  o as m,
  x as y,
  F as te,
  a as T,
  p as x,
  y as U,
  m as E,
  w as A,
  W,
  V as xe,
  d as Qe,
  M as Ze,
  ae as Je,
  t as j,
  N as we,
  a1 as Ce
} from './index-62YaKhWX.js'
import { m as et, a as Se, k as oe, V as tt, u as ot } from './aria-DW8X8pJS.js'
import {
  B as Ve,
  g as Ee,
  f as at,
  x as _,
  a2 as nt,
  _ as st,
  h as Ie,
  a3 as lt,
  a4 as it,
  D as rt,
  E as B,
  a1 as ut,
  w as ct
} from './base-BSl8DOKd.js'
import { d as dt } from './request-B0GuyAcH.js'
import { u as pt } from './index-n_Z_joOJ.js'
import { U as ae, I as Ne, C as ze } from './event-BB_Ol6Sd.js'
import {
  a as ft,
  b as vt,
  u as mt,
  c as ht
} from './use-form-common-props-9xqr1Sov.js'
import { i as gt } from './aria-BmU_cfaq.js'
import { d as Pe } from './error-Cq9Fpw4b.js'
const yt = () => Ve && /firefox/i.test(window.navigator.userAgent)
let w
const bt = {
    height: '0',
    visibility: 'hidden',
    overflow: yt() ? '' : 'hidden',
    position: 'absolute',
    'z-index': '-1000',
    top: '0',
    right: '0'
  },
  xt = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing'
  ]
function wt(a) {
  const i = window.getComputedStyle(a),
    l = i.getPropertyValue('box-sizing'),
    o =
      Number.parseFloat(i.getPropertyValue('padding-bottom')) +
      Number.parseFloat(i.getPropertyValue('padding-top')),
    r =
      Number.parseFloat(i.getPropertyValue('border-bottom-width')) +
      Number.parseFloat(i.getPropertyValue('border-top-width'))
  return {
    contextStyle: xt.map((u) => [u, i.getPropertyValue(u)]),
    paddingSize: o,
    borderSize: r,
    boxSizing: l
  }
}
function Fe(a, i = 1, l) {
  var o
  w || ((w = document.createElement('textarea')), document.body.appendChild(w))
  const { paddingSize: r, borderSize: d, boxSizing: u, contextStyle: p } = wt(a)
  p.forEach(([g, I]) => w?.style.setProperty(g, I)),
    Object.entries(bt).forEach(([g, I]) =>
      w?.style.setProperty(g, I, 'important')
    ),
    (w.value = a.value || a.placeholder || '')
  let s = w.scrollHeight
  const b = {}
  u === 'border-box' ? (s = s + d) : u === 'content-box' && (s = s - r),
    (w.value = '')
  const v = w.scrollHeight - r
  if (Ee(i)) {
    let g = v * i
    u === 'border-box' && (g = g + r + d),
      (s = Math.max(g, s)),
      (b.minHeight = `${g}px`)
  }
  if (Ee(l)) {
    let g = v * l
    u === 'border-box' && (g = g + r + d), (s = Math.min(g, s))
  }
  return (
    (b.height = `${s}px`),
    (o = w.parentNode) == null || o.removeChild(w),
    (w = void 0),
    b
  )
}
const Ct = at({
    id: { type: String, default: void 0 },
    size: dt,
    disabled: Boolean,
    modelValue: { type: _([String, Number, Object]), default: '' },
    maxlength: { type: [String, Number] },
    minlength: { type: [String, Number] },
    type: { type: String, default: 'text' },
    resize: {
      type: String,
      values: ['none', 'both', 'horizontal', 'vertical']
    },
    autosize: { type: _([Boolean, Object]), default: !1 },
    autocomplete: { type: String, default: 'off' },
    formatter: { type: Function },
    parser: { type: Function },
    placeholder: { type: String },
    form: { type: String },
    readonly: Boolean,
    clearable: Boolean,
    showPassword: Boolean,
    showWordLimit: Boolean,
    suffixIcon: { type: Se },
    prefixIcon: { type: Se },
    containerRole: { type: String, default: void 0 },
    tabindex: { type: [String, Number], default: 0 },
    validateEvent: { type: Boolean, default: !0 },
    inputStyle: { type: _([Object, Array, String]), default: () => et({}) },
    autofocus: Boolean,
    rows: { type: Number, default: 2 },
    ...pt(['ariaLabel']),
    inputmode: { type: _(String), default: void 0 },
    name: String
  }),
  St = {
    [ae]: (a) => ee(a),
    input: (a) => ee(a),
    change: (a) => ee(a),
    focus: (a) => a instanceof FocusEvent,
    blur: (a) => a instanceof FocusEvent,
    clear: () => !0,
    mouseleave: (a) => a instanceof MouseEvent,
    mouseenter: (a) => a instanceof MouseEvent,
    keydown: (a) => a instanceof Event,
    compositionstart: (a) => a instanceof CompositionEvent,
    compositionupdate: (a) => a instanceof CompositionEvent,
    compositionend: (a) => a instanceof CompositionEvent
  },
  Et = ['class', 'style'],
  It = /^on[A-Z]/,
  Nt = (a = {}) => {
    const { excludeListeners: i = !1, excludeKeys: l } = a,
      o = h(() => (l?.value || []).concat(Et)),
      r = ke()
    return r
      ? h(() => {
          var d
          return nt(
            Object.entries((d = r.proxy) == null ? void 0 : d.$attrs).filter(
              ([u]) => !o.value.includes(u) && !(i && It.test(u))
            )
          )
        })
      : h(() => ({}))
  }
function zt(
  a,
  {
    disabled: i,
    beforeFocus: l,
    afterFocus: o,
    beforeBlur: r,
    afterBlur: d
  } = {}
) {
  const u = ke(),
    { emit: p } = u,
    s = Y(),
    b = O(!1),
    v = (f) => {
      const n = be(l) ? l(f) : !1
      t(i) || b.value || n || ((b.value = !0), p('focus', f), o?.())
    },
    g = (f) => {
      var n
      const N = be(r) ? r(f) : !1
      t(i) ||
        (f.relatedTarget &&
          (n = s.value) != null &&
          n.contains(f.relatedTarget)) ||
        N ||
        ((b.value = !1), p('blur', f), d?.())
    },
    I = (f) => {
      var n, N
      t(i) ||
        gt(f.target) ||
        ((n = s.value) != null &&
          n.contains(document.activeElement) &&
          s.value !== document.activeElement) ||
        (N = a.value) == null ||
        N.focus()
    }
  return (
    X([s, () => t(i)], ([f, n]) => {
      f &&
        (n ? f.removeAttribute('tabindex') : f.setAttribute('tabindex', '-1'))
    }),
    oe(s, 'focus', v, !0),
    oe(s, 'blur', g, !0),
    oe(s, 'click', I, !0),
    { isFocused: b, wrapperRef: s, handleFocus: v, handleBlur: g }
  )
}
const Pt = (a) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(a)
function Ft({ afterComposition: a, emit: i }) {
  const l = O(!1),
    o = (p) => {
      i?.('compositionstart', p), (l.value = !0)
    },
    r = (p) => {
      var s
      i?.('compositionupdate', p)
      const b = (s = p.target) == null ? void 0 : s.value,
        v = b[b.length - 1] || ''
      l.value = !Pt(v)
    },
    d = (p) => {
      i?.('compositionend', p), l.value && ((l.value = !1), V(() => a(p)))
    }
  return {
    isComposing: l,
    handleComposition: (p) => {
      p.type === 'compositionend' ? d(p) : r(p)
    },
    handleCompositionStart: o,
    handleCompositionUpdate: r,
    handleCompositionEnd: d
  }
}
function kt(a) {
  let i
  function l() {
    if (a.value == null) return
    const { selectionStart: r, selectionEnd: d, value: u } = a.value
    if (r == null || d == null) return
    const p = u.slice(0, Math.max(0, r)),
      s = u.slice(Math.max(0, d))
    i = {
      selectionStart: r,
      selectionEnd: d,
      value: u,
      beforeTxt: p,
      afterTxt: s
    }
  }
  function o() {
    if (a.value == null || i == null) return
    const { value: r } = a.value,
      { beforeTxt: d, afterTxt: u, selectionStart: p } = i
    if (d == null || u == null || p == null) return
    let s = r.length
    if (r.endsWith(u)) s = r.length - u.length
    else if (r.startsWith(d)) s = d.length
    else {
      const b = d[p - 1],
        v = r.indexOf(b, p - 1)
      v !== -1 && (s = v + 1)
    }
    a.value.setSelectionRange(s, s)
  }
  return [l, o]
}
const Tt = 'ElInput',
  Vt = Te({ name: Tt, inheritAttrs: !1 }),
  Mt = Te({
    ...Vt,
    props: Ct,
    emits: St,
    setup(a, { expose: i, emit: l }) {
      const o = a,
        r = Ye(),
        d = Nt(),
        u = Xe(),
        p = h(() => [
          o.type === 'textarea' ? N.b() : n.b(),
          n.m(I.value),
          n.is('disabled', f.value),
          n.is('exceed', Oe.value),
          {
            [n.b('group')]: u.prepend || u.append,
            [n.m('prefix')]: u.prefix || o.prefixIcon,
            [n.m('suffix')]:
              u.suffix || o.suffixIcon || o.clearable || o.showPassword,
            [n.bm('suffix', 'password-clear')]: K.value && Q.value,
            [n.b('hidden')]: o.type === 'hidden'
          },
          r.class
        ]),
        s = h(() => [n.e('wrapper'), n.is('focus', G.value)]),
        { form: b, formItem: v } = mt(),
        { inputId: g } = ht(o, { formItemContext: v }),
        I = ft(),
        f = vt(),
        n = Ie('input'),
        N = Ie('textarea'),
        H = Y(),
        S = Y(),
        q = O(!1),
        $ = O(!1),
        ne = O(),
        D = Y(o.inputStyle),
        P = h(() => H.value || S.value),
        {
          wrapperRef: Me,
          isFocused: G,
          handleFocus: Le,
          handleBlur: Re
        } = zt(P, {
          disabled: f,
          afterBlur() {
            var e
            o.validateEvent &&
              ((e = v?.validate) == null ||
                e.call(v, 'blur').catch((c) => Pe()))
          }
        }),
        se = h(() => {
          var e
          return (e = b?.statusIcon) != null ? e : !1
        }),
        M = h(() => v?.validateState || ''),
        le = h(() => M.value && tt[M.value]),
        Ae = h(() => ($.value ? lt : it)),
        Be = h(() => [r.style]),
        ie = h(() => [o.inputStyle, D.value, { resize: o.resize }]),
        z = h(() => (rt(o.modelValue) ? '' : String(o.modelValue))),
        K = h(
          () =>
            o.clearable &&
            !f.value &&
            !o.readonly &&
            !!z.value &&
            (G.value || q.value)
        ),
        Q = h(() => o.showPassword && !f.value && !!z.value),
        F = h(
          () =>
            o.showWordLimit &&
            !!o.maxlength &&
            (o.type === 'text' || o.type === 'textarea') &&
            !f.value &&
            !o.readonly &&
            !o.showPassword
        ),
        Z = h(() => z.value.length),
        Oe = h(() => !!F.value && Z.value > Number(o.maxlength)),
        He = h(
          () =>
            !!u.suffix ||
            !!o.suffixIcon ||
            K.value ||
            o.showPassword ||
            F.value ||
            (!!M.value && se.value)
        ),
        [re, ue] = kt(H)
      ot(S, (e) => {
        if (($e(), !F.value || o.resize !== 'both')) return
        const c = e[0],
          { width: k } = c.contentRect
        ne.value = { right: `calc(100% - ${k + 15 + 6}px)` }
      })
      const L = () => {
          const { type: e, autosize: c } = o
          if (!(!Ve || e !== 'textarea' || !S.value))
            if (c) {
              const k = Ce(c) ? c.minRows : void 0,
                ge = Ce(c) ? c.maxRows : void 0,
                ye = Fe(S.value, k, ge)
              ;(D.value = { overflowY: 'hidden', ...ye }),
                V(() => {
                  S.value.offsetHeight, (D.value = ye)
                })
            } else D.value = { minHeight: Fe(S.value).minHeight }
        },
        $e = ((e) => {
          let c = !1
          return () => {
            var k
            if (c || !o.autosize) return
            ;((k = S.value) == null ? void 0 : k.offsetParent) === null ||
              (e(), (c = !0))
          }
        })(L),
        R = () => {
          const e = P.value,
            c = o.formatter ? o.formatter(z.value) : z.value
          !e || e.value === c || (e.value = c)
        },
        J = async (e) => {
          re()
          let { value: c } = e.target
          if ((o.formatter && o.parser && (c = o.parser(c)), !de.value)) {
            if (c === z.value) {
              R()
              return
            }
            l(ae, c), l(Ne, c), await V(), R(), ue()
          }
        },
        ce = (e) => {
          let { value: c } = e.target
          o.formatter && o.parser && (c = o.parser(c)), l(ze, c)
        },
        {
          isComposing: de,
          handleCompositionStart: pe,
          handleCompositionUpdate: fe,
          handleCompositionEnd: ve
        } = Ft({ emit: l, afterComposition: J }),
        De = () => {
          re(), ($.value = !$.value), setTimeout(ue)
        },
        Ke = () => {
          var e
          return (e = P.value) == null ? void 0 : e.focus()
        },
        Ue = () => {
          var e
          return (e = P.value) == null ? void 0 : e.blur()
        },
        We = (e) => {
          ;(q.value = !1), l('mouseleave', e)
        },
        je = (e) => {
          ;(q.value = !0), l('mouseenter', e)
        },
        me = (e) => {
          l('keydown', e)
        },
        _e = () => {
          var e
          ;(e = P.value) == null || e.select()
        },
        he = () => {
          l(ae, ''), l(ze, ''), l('clear'), l(Ne, '')
        }
      return (
        X(
          () => o.modelValue,
          () => {
            var e
            V(() => L()),
              o.validateEvent &&
                ((e = v?.validate) == null ||
                  e.call(v, 'change').catch((c) => Pe()))
          }
        ),
        X(z, () => R()),
        X(
          () => o.type,
          async () => {
            await V(), R(), L()
          }
        ),
        qe(() => {
          !o.formatter && o.parser, R(), V(L)
        }),
        i({
          input: H,
          textarea: S,
          ref: P,
          textareaStyle: ie,
          autosize: Ge(o, 'autosize'),
          isComposing: de,
          focus: Ke,
          blur: Ue,
          select: _e,
          clear: he,
          resizeTextarea: L
        }),
        (e, c) => (
          m(),
          C(
            'div',
            {
              class: x([
                t(p),
                {
                  [t(n).bm('group', 'append')]: e.$slots.append,
                  [t(n).bm('group', 'prepend')]: e.$slots.prepend
                }
              ]),
              style: we(t(Be)),
              onMouseenter: je,
              onMouseleave: We
            },
            [
              y(' input '),
              e.type !== 'textarea'
                ? (m(),
                  C(
                    te,
                    { key: 0 },
                    [
                      y(' prepend slot '),
                      e.$slots.prepend
                        ? (m(),
                          C(
                            'div',
                            { key: 0, class: x(t(n).be('group', 'prepend')) },
                            [U(e.$slots, 'prepend')],
                            2
                          ))
                        : y('v-if', !0),
                      T(
                        'div',
                        { ref_key: 'wrapperRef', ref: Me, class: x(t(s)) },
                        [
                          y(' prefix slot '),
                          e.$slots.prefix || e.prefixIcon
                            ? (m(),
                              C(
                                'span',
                                { key: 0, class: x(t(n).e('prefix')) },
                                [
                                  T(
                                    'span',
                                    { class: x(t(n).e('prefix-inner')) },
                                    [
                                      U(e.$slots, 'prefix'),
                                      e.prefixIcon
                                        ? (m(),
                                          E(
                                            t(B),
                                            {
                                              key: 0,
                                              class: x(t(n).e('icon'))
                                            },
                                            {
                                              default: A(() => [
                                                (m(), E(W(e.prefixIcon)))
                                              ]),
                                              _: 1
                                            },
                                            8,
                                            ['class']
                                          ))
                                        : y('v-if', !0)
                                    ],
                                    2
                                  )
                                ],
                                2
                              ))
                            : y('v-if', !0),
                          T(
                            'input',
                            xe(
                              {
                                id: t(g),
                                ref_key: 'input',
                                ref: H,
                                class: t(n).e('inner')
                              },
                              t(d),
                              {
                                name: e.name,
                                minlength: e.minlength,
                                maxlength: e.maxlength,
                                type: e.showPassword
                                  ? $.value
                                    ? 'text'
                                    : 'password'
                                  : e.type,
                                disabled: t(f),
                                readonly: e.readonly,
                                autocomplete: e.autocomplete,
                                tabindex: e.tabindex,
                                'aria-label': e.ariaLabel,
                                placeholder: e.placeholder,
                                style: e.inputStyle,
                                form: e.form,
                                autofocus: e.autofocus,
                                role: e.containerRole,
                                inputmode: e.inputmode,
                                onCompositionstart: t(pe),
                                onCompositionupdate: t(fe),
                                onCompositionend: t(ve),
                                onInput: J,
                                onChange: ce,
                                onKeydown: me
                              }
                            ),
                            null,
                            16,
                            [
                              'id',
                              'name',
                              'minlength',
                              'maxlength',
                              'type',
                              'disabled',
                              'readonly',
                              'autocomplete',
                              'tabindex',
                              'aria-label',
                              'placeholder',
                              'form',
                              'autofocus',
                              'role',
                              'inputmode',
                              'onCompositionstart',
                              'onCompositionupdate',
                              'onCompositionend'
                            ]
                          ),
                          y(' suffix slot '),
                          t(He)
                            ? (m(),
                              C(
                                'span',
                                { key: 1, class: x(t(n).e('suffix')) },
                                [
                                  T(
                                    'span',
                                    { class: x(t(n).e('suffix-inner')) },
                                    [
                                      !t(K) || !t(Q) || !t(F)
                                        ? (m(),
                                          C(
                                            te,
                                            { key: 0 },
                                            [
                                              U(e.$slots, 'suffix'),
                                              e.suffixIcon
                                                ? (m(),
                                                  E(
                                                    t(B),
                                                    {
                                                      key: 0,
                                                      class: x(t(n).e('icon'))
                                                    },
                                                    {
                                                      default: A(() => [
                                                        (m(),
                                                        E(W(e.suffixIcon)))
                                                      ]),
                                                      _: 1
                                                    },
                                                    8,
                                                    ['class']
                                                  ))
                                                : y('v-if', !0)
                                            ],
                                            64
                                          ))
                                        : y('v-if', !0),
                                      t(K)
                                        ? (m(),
                                          E(
                                            t(B),
                                            {
                                              key: 1,
                                              class: x([
                                                t(n).e('icon'),
                                                t(n).e('clear')
                                              ]),
                                              onMousedown: Ze(t(Je), [
                                                'prevent'
                                              ]),
                                              onClick: he
                                            },
                                            {
                                              default: A(() => [Qe(t(ut))]),
                                              _: 1
                                            },
                                            8,
                                            ['class', 'onMousedown']
                                          ))
                                        : y('v-if', !0),
                                      t(Q)
                                        ? (m(),
                                          E(
                                            t(B),
                                            {
                                              key: 2,
                                              class: x([
                                                t(n).e('icon'),
                                                t(n).e('password')
                                              ]),
                                              onClick: De
                                            },
                                            {
                                              default: A(() => [
                                                (m(), E(W(t(Ae))))
                                              ]),
                                              _: 1
                                            },
                                            8,
                                            ['class']
                                          ))
                                        : y('v-if', !0),
                                      t(F)
                                        ? (m(),
                                          C(
                                            'span',
                                            {
                                              key: 3,
                                              class: x(t(n).e('count'))
                                            },
                                            [
                                              T(
                                                'span',
                                                {
                                                  class: x(
                                                    t(n).e('count-inner')
                                                  )
                                                },
                                                j(t(Z)) +
                                                  ' / ' +
                                                  j(e.maxlength),
                                                3
                                              )
                                            ],
                                            2
                                          ))
                                        : y('v-if', !0),
                                      t(M) && t(le) && t(se)
                                        ? (m(),
                                          E(
                                            t(B),
                                            {
                                              key: 4,
                                              class: x([
                                                t(n).e('icon'),
                                                t(n).e('validateIcon'),
                                                t(n).is(
                                                  'loading',
                                                  t(M) === 'validating'
                                                )
                                              ])
                                            },
                                            {
                                              default: A(() => [
                                                (m(), E(W(t(le))))
                                              ]),
                                              _: 1
                                            },
                                            8,
                                            ['class']
                                          ))
                                        : y('v-if', !0)
                                    ],
                                    2
                                  )
                                ],
                                2
                              ))
                            : y('v-if', !0)
                        ],
                        2
                      ),
                      y(' append slot '),
                      e.$slots.append
                        ? (m(),
                          C(
                            'div',
                            { key: 1, class: x(t(n).be('group', 'append')) },
                            [U(e.$slots, 'append')],
                            2
                          ))
                        : y('v-if', !0)
                    ],
                    64
                  ))
                : (m(),
                  C(
                    te,
                    { key: 1 },
                    [
                      y(' textarea '),
                      T(
                        'textarea',
                        xe(
                          {
                            id: t(g),
                            ref_key: 'textarea',
                            ref: S,
                            class: [t(N).e('inner'), t(n).is('focus', t(G))]
                          },
                          t(d),
                          {
                            minlength: e.minlength,
                            maxlength: e.maxlength,
                            tabindex: e.tabindex,
                            disabled: t(f),
                            readonly: e.readonly,
                            autocomplete: e.autocomplete,
                            style: t(ie),
                            'aria-label': e.ariaLabel,
                            placeholder: e.placeholder,
                            form: e.form,
                            autofocus: e.autofocus,
                            rows: e.rows,
                            role: e.containerRole,
                            onCompositionstart: t(pe),
                            onCompositionupdate: t(fe),
                            onCompositionend: t(ve),
                            onInput: J,
                            onFocus: t(Le),
                            onBlur: t(Re),
                            onChange: ce,
                            onKeydown: me
                          }
                        ),
                        null,
                        16,
                        [
                          'id',
                          'minlength',
                          'maxlength',
                          'tabindex',
                          'disabled',
                          'readonly',
                          'autocomplete',
                          'aria-label',
                          'placeholder',
                          'form',
                          'autofocus',
                          'rows',
                          'role',
                          'onCompositionstart',
                          'onCompositionupdate',
                          'onCompositionend',
                          'onFocus',
                          'onBlur'
                        ]
                      ),
                      t(F)
                        ? (m(),
                          C(
                            'span',
                            {
                              key: 0,
                              style: we(ne.value),
                              class: x(t(n).e('count'))
                            },
                            j(t(Z)) + ' / ' + j(e.maxlength),
                            7
                          ))
                        : y('v-if', !0)
                    ],
                    64
                  ))
            ],
            38
          )
        )
      )
    }
  })
var Lt = st(Mt, [['__file', 'input.vue']])
const jt = ct(Lt)
export { jt as E, zt as a, Ft as u }
