import {
  L as X,
  q as c,
  c as w,
  m as z,
  o as h,
  a as E,
  x as M,
  y as T,
  p as v,
  g as B,
  w as k,
  d as P,
  M as N,
  N as x,
  T as st,
  E as it,
  r as I,
  O as Se,
  a1 as K,
  ac as rt,
  i as q,
  I as Ce,
  k as re,
  v as $e,
  t as F,
  Z as Re,
  P as de,
  G as il,
  Q as j,
  A as De,
  a6 as A,
  a4 as ut,
  S as ie,
  al as dt,
  K as ct,
  e as Q,
  l as pt,
  F as _e,
  j as xe,
  f as el,
  X as ae,
  am as ft,
  W as Ie,
  an as vt,
  H as rl,
  J as mt
} from './index-DU_P6jZu.js'
import { u as ll, b as bt, E as ht } from './popper-D0fPJ8qx.js'
import { s as gt, E as yt } from './scrollbar-Deottvjw.js'
import {
  f as Be,
  _ as ce,
  h as ee,
  c as tl,
  E as Te,
  w as ul,
  k as ye,
  a0 as nl,
  B as St,
  g as Ct,
  x as se,
  t as Ot,
  a1 as wt,
  l as dl
} from './base-Bes0XUun.js'
import {
  c as Et,
  e as _,
  u as Vt,
  j as It,
  k as Tt,
  d as kt
} from './request-FXAcKJdj.js'
import { a as cl, u as Mt, c as $t } from './use-form-common-props-BOay2t_u.js'
import { e as Rt } from './strings-CYJXMOCd.js'
import { t as Dt, d as ol } from './error-Cq9Fpw4b.js'
import { c as G } from './input-BHo3TFaK.js'
import { c as ue } from './isEqual-Bfv98oY_.js'
import { u as pl } from './index-D26JKrGB.js'
import { u as J, V as Bt, E as Lt, a as al, s as Nt } from './aria-CnJd5Vss.js'
import { u as Wt, a as zt } from './index-BbAllY5l.js'
import { U as Y, C as fl } from './event-BB_Ol6Sd.js'
import { s as Pt } from './scroll-aQCI3ZGR.js'
import { d as Ft } from './debounce-BUz-fiHp.js'
import { b as Kt } from './tag-BDl_GAG7.js'
import { u as At } from './index-fOI-oh1j.js'
import { C as Ht } from './index-Cy4a31WU.js'
import { f as Ut } from './vnode-DLkXDgL1.js'
function jt(e, i, a, b) {
  e.length
  for (var o = a + 1; o--; ) if (i(e[o], o, e)) return o
  return -1
}
function Gt(e, i, a) {
  var b = e == null ? 0 : e.length
  if (!b) return -1
  var o = b - 1
  return jt(e, Kt(i), o)
}
const ke = Be({
    type: {
      type: String,
      values: ['primary', 'success', 'info', 'warning', 'danger'],
      default: 'primary'
    },
    closable: Boolean,
    disableTransitions: Boolean,
    hit: Boolean,
    color: String,
    size: { type: String, values: Et },
    effect: {
      type: String,
      values: ['dark', 'light', 'plain'],
      default: 'light'
    },
    round: Boolean
  }),
  qt = {
    close: (e) => e instanceof MouseEvent,
    click: (e) => e instanceof MouseEvent
  },
  Qt = X({ name: 'ElTag' }),
  Jt = X({
    ...Qt,
    props: ke,
    emits: qt,
    setup(e, { emit: i }) {
      const a = e,
        b = cl(),
        o = ee('tag'),
        y = c(() => {
          const { type: r, hit: f, effect: d, closable: s, round: u } = a
          return [
            o.b(),
            o.is('closable', s),
            o.m(r || 'primary'),
            o.m(b.value),
            o.m(d),
            o.is('hit', f),
            o.is('round', u)
          ]
        }),
        t = (r) => {
          i('close', r)
        },
        S = (r) => {
          i('click', r)
        },
        g = (r) => {
          var f, d, s
          ;(s =
            (d = (f = r?.component) == null ? void 0 : f.subTree) == null
              ? void 0
              : d.component) != null &&
            s.bum &&
            (r.component.subTree.component.bum = null)
        }
      return (r, f) =>
        r.disableTransitions
          ? (h(),
            w(
              'span',
              {
                key: 0,
                class: v(B(y)),
                style: x({ backgroundColor: r.color }),
                onClick: S
              },
              [
                E(
                  'span',
                  { class: v(B(o).e('content')) },
                  [T(r.$slots, 'default')],
                  2
                ),
                r.closable
                  ? (h(),
                    z(
                      B(Te),
                      {
                        key: 0,
                        class: v(B(o).e('close')),
                        onClick: N(t, ['stop'])
                      },
                      { default: k(() => [P(B(tl))]), _: 1 },
                      8,
                      ['class', 'onClick']
                    ))
                  : M('v-if', !0)
              ],
              6
            ))
          : (h(),
            z(
              st,
              {
                key: 1,
                name: `${B(o).namespace.value}-zoom-in-center`,
                appear: '',
                onVnodeMounted: g
              },
              {
                default: k(() => [
                  E(
                    'span',
                    {
                      class: v(B(y)),
                      style: x({ backgroundColor: r.color }),
                      onClick: S
                    },
                    [
                      E(
                        'span',
                        { class: v(B(o).e('content')) },
                        [T(r.$slots, 'default')],
                        2
                      ),
                      r.closable
                        ? (h(),
                          z(
                            B(Te),
                            {
                              key: 0,
                              class: v(B(o).e('close')),
                              onClick: N(t, ['stop'])
                            },
                            { default: k(() => [P(B(tl))]), _: 1 },
                            8,
                            ['class', 'onClick']
                          ))
                        : M('v-if', !0)
                    ],
                    6
                  )
                ]),
                _: 3
              },
              8,
              ['name']
            ))
    }
  })
var Xt = ce(Jt, [['__file', 'tag.vue']])
const Zt = ul(Xt)
function Yt() {
  const e = it(),
    i = I(0),
    a = 11,
    b = c(() => ({ minWidth: `${Math.max(i.value, a)}px` }))
  return (
    J(e, () => {
      var y, t
      i.value =
        (t =
          (y = e.value) == null ? void 0 : y.getBoundingClientRect().width) !=
        null
          ? t
          : 0
    }),
    { calculatorRef: e, calculatorWidth: i, inputStyle: b }
  )
}
const vl = Symbol('ElSelectGroup'),
  Oe = Symbol('ElSelect'),
  Me = 'ElOption',
  _t = Be({
    value: { type: [String, Number, Boolean, Object], required: !0 },
    label: { type: [String, Number] },
    created: Boolean,
    disabled: Boolean
  })
function xt(e, i) {
  const a = Se(Oe)
  a || Dt(Me, 'usage: <el-select><el-option /></el-select/>')
  const b = Se(vl, { disabled: !1 }),
    o = c(() => f(G(a.props.modelValue), e.value)),
    y = c(() => {
      var u
      if (a.props.multiple) {
        const m = G((u = a.props.modelValue) != null ? u : [])
        return (
          !o.value &&
          m.length >= a.props.multipleLimit &&
          a.props.multipleLimit > 0
        )
      } else return !1
    }),
    t = c(() => {
      var u
      return (u = e.label) != null ? u : K(e.value) ? '' : e.value
    }),
    S = c(() => e.value || e.label || ''),
    g = c(() => e.disabled || i.groupDisabled || y.value),
    r = Ce(),
    f = (u = [], m) => {
      if (K(e.value)) {
        const V = a.props.valueKey
        return u && u.some(($) => rt(_($, V)) === _(m, V))
      } else return u && u.includes(m)
    },
    d = () => {
      !e.disabled &&
        !b.disabled &&
        (a.states.hoveringIndex = a.optionsArray.indexOf(r.proxy))
    },
    s = (u) => {
      const m = new RegExp(Rt(u), 'i')
      i.visible = m.test(String(t.value)) || e.created
    }
  return (
    q(
      () => t.value,
      () => {
        !e.created && !a.props.remote && a.setSelected()
      }
    ),
    q(
      () => e.value,
      (u, m) => {
        const { remote: V, valueKey: $ } = a.props
        if (
          ((V ? u !== m : !ue(u, m)) &&
            (a.onOptionDestroy(m, r.proxy), a.onOptionCreate(r.proxy)),
          !e.created && !V)
        ) {
          if ($ && K(u) && K(m) && u[$] === m[$]) return
          a.setSelected()
        }
      }
    ),
    q(
      () => b.disabled,
      () => {
        i.groupDisabled = b.disabled
      },
      { immediate: !0 }
    ),
    {
      select: a,
      currentLabel: t,
      currentValue: S,
      itemSelected: o,
      isDisabled: g,
      hoverItem: d,
      updateOption: s
    }
  )
}
const en = X({
  name: Me,
  componentName: Me,
  props: _t,
  setup(e) {
    const i = ee('select'),
      a = pl(),
      b = c(() => [
        i.be('dropdown', 'item'),
        i.is('disabled', B(S)),
        i.is('selected', B(t)),
        i.is('hovering', B(s))
      ]),
      o = de({ index: -1, groupDisabled: !1, visible: !0, hover: !1 }),
      {
        currentLabel: y,
        itemSelected: t,
        isDisabled: S,
        select: g,
        hoverItem: r,
        updateOption: f
      } = xt(e, o),
      { visible: d, hover: s } = Re(o),
      u = Ce().proxy
    g.onOptionCreate(u),
      il(() => {
        const V = u.value,
          { selected: $ } = g.states,
          R = $.some((C) => C.value === u.value)
        j(() => {
          g.states.cachedOptions.get(V) === u &&
            !R &&
            g.states.cachedOptions.delete(V)
        }),
          g.onOptionDestroy(V, u)
      })
    function m() {
      S.value || g.handleOptionSelect(u)
    }
    return {
      ns: i,
      id: a,
      containerKls: b,
      currentLabel: y,
      itemSelected: t,
      isDisabled: S,
      select: g,
      visible: d,
      hover: s,
      states: o,
      hoverItem: r,
      updateOption: f,
      selectOptionClick: m
    }
  }
})
function ln(e, i) {
  return re(
    (h(),
    w(
      'li',
      {
        id: e.id,
        class: v(e.containerKls),
        role: 'option',
        'aria-disabled': e.isDisabled || void 0,
        'aria-selected': e.itemSelected,
        onMousemove: e.hoverItem,
        onClick: N(e.selectOptionClick, ['stop'])
      },
      [
        T(e.$slots, 'default', {}, () => [
          E('span', null, F(e.currentLabel), 1)
        ])
      ],
      42,
      ['id', 'aria-disabled', 'aria-selected', 'onMousemove', 'onClick']
    )),
    [[$e, e.visible]]
  )
}
var Le = ce(en, [
  ['render', ln],
  ['__file', 'option.vue']
])
const tn = X({
  name: 'ElSelectDropdown',
  componentName: 'ElSelectDropdown',
  setup() {
    const e = Se(Oe),
      i = ee('select'),
      a = c(() => e.props.popperClass),
      b = c(() => e.props.multiple),
      o = c(() => e.props.fitInputWidth),
      y = I('')
    function t() {
      var S
      y.value = `${(S = e.selectRef) == null ? void 0 : S.offsetWidth}px`
    }
    return (
      De(() => {
        t(), J(e.selectRef, t)
      }),
      { ns: i, minWidth: y, popperClass: a, isMultiple: b, isFitInputWidth: o }
    )
  }
})
function nn(e, i, a, b, o, y) {
  return (
    h(),
    w(
      'div',
      {
        class: v([
          e.ns.b('dropdown'),
          e.ns.is('multiple', e.isMultiple),
          e.popperClass
        ]),
        style: x({ [e.isFitInputWidth ? 'width' : 'minWidth']: e.minWidth })
      },
      [
        e.$slots.header
          ? (h(),
            w(
              'div',
              { key: 0, class: v(e.ns.be('dropdown', 'header')) },
              [T(e.$slots, 'header')],
              2
            ))
          : M('v-if', !0),
        T(e.$slots, 'default'),
        e.$slots.footer
          ? (h(),
            w(
              'div',
              { key: 1, class: v(e.ns.be('dropdown', 'footer')) },
              [T(e.$slots, 'footer')],
              2
            ))
          : M('v-if', !0)
      ],
      6
    )
  )
}
var on = ce(tn, [
  ['render', nn],
  ['__file', 'select-dropdown.vue']
])
const an = (e, i) => {
  const { t: a } = Vt(),
    b = pl(),
    o = ee('select'),
    y = ee('input'),
    t = de({
      inputValue: '',
      options: new Map(),
      cachedOptions: new Map(),
      optionValues: [],
      selected: [],
      selectionWidth: 0,
      collapseItemWidth: 0,
      selectedLabel: '',
      hoveringIndex: -1,
      previousQuery: null,
      inputHovering: !1,
      menuVisibleOnFocus: !1,
      isBeforeHide: !1
    }),
    S = I(),
    g = I(),
    r = I(),
    f = I(),
    d = I(),
    s = I(),
    u = I(),
    m = I(),
    V = I(),
    $ = I(),
    R = I(),
    C = I(!1),
    W = I(),
    { form: pe, formItem: H } = Mt(),
    { inputId: bl } = $t(e, { formItemContext: H }),
    { valueOnClear: hl, isEmptyValue: gl } = It(e),
    {
      isComposing: Ne,
      handleCompositionStart: yl,
      handleCompositionUpdate: Sl,
      handleCompositionEnd: Cl
    } = Wt({ afterComposition: (l) => Ge(l) }),
    le = c(() => e.disabled || !!pe?.disabled),
    {
      wrapperRef: We,
      isFocused: ze,
      handleBlur: Ol
    } = zt(d, {
      disabled: le,
      afterFocus() {
        e.automaticDropdown &&
          !C.value &&
          ((C.value = !0), (t.menuVisibleOnFocus = !0))
      },
      beforeBlur(l) {
        var n, p
        return (
          ((n = r.value) == null ? void 0 : n.isFocusInsideContent(l)) ||
          ((p = f.value) == null ? void 0 : p.isFocusInsideContent(l))
        )
      },
      afterBlur() {
        var l
        ;(C.value = !1),
          (t.menuVisibleOnFocus = !1),
          e.validateEvent &&
            ((l = H?.validate) == null || l.call(H, 'blur').catch((n) => ol()))
      }
    }),
    we = c(() =>
      A(e.modelValue) ? e.modelValue.length > 0 : !gl(e.modelValue)
    ),
    wl = c(() => {
      var l
      return (l = pe?.statusIcon) != null ? l : !1
    }),
    El = c(() => e.clearable && !le.value && t.inputHovering && we.value),
    Pe = c(() =>
      e.remote && e.filterable && !e.remoteShowSuffix ? '' : e.suffixIcon
    ),
    Vl = c(() => o.is('reverse', !!(Pe.value && C.value))),
    Ee = c(() => H?.validateState || ''),
    Il = c(() => Ee.value && Bt[Ee.value]),
    Tl = c(() => (e.remote ? 300 : 0)),
    kl = c(() => e.remote && !t.inputValue && t.options.size === 0),
    Ml = c(() =>
      e.loading
        ? e.loadingText || a('el.select.loading')
        : e.filterable && t.inputValue && t.options.size > 0 && te.value === 0
          ? e.noMatchText || a('el.select.noMatch')
          : t.options.size === 0
            ? e.noDataText || a('el.select.noData')
            : null
    ),
    te = c(() => D.value.filter((l) => l.visible).length),
    D = c(() => {
      const l = Array.from(t.options.values()),
        n = []
      return (
        t.optionValues.forEach((p) => {
          const O = l.findIndex((L) => L.value === p)
          O > -1 && n.push(l[O])
        }),
        n.length >= l.length ? n : l
      )
    }),
    $l = c(() => Array.from(t.cachedOptions.values())),
    Rl = c(() => {
      const l = D.value
        .filter((n) => !n.created)
        .some((n) => n.currentLabel === t.inputValue)
      return e.filterable && e.allowCreate && t.inputValue !== '' && !l
    }),
    Fe = () => {
      ;(e.filterable && ie(e.filterMethod)) ||
        (e.filterable && e.remote && ie(e.remoteMethod)) ||
        D.value.forEach((l) => {
          var n
          ;(n = l.updateOption) == null || n.call(l, t.inputValue)
        })
    },
    Ke = cl(),
    Dl = c(() => (['small'].includes(Ke.value) ? 'small' : 'default')),
    Bl = c({
      get() {
        return C.value && !kl.value
      },
      set(l) {
        C.value = l
      }
    }),
    Ll = c(() => {
      if (e.multiple && !ye(e.modelValue))
        return G(e.modelValue).length === 0 && !t.inputValue
      const l = A(e.modelValue) ? e.modelValue[0] : e.modelValue
      return e.filterable || ye(l) ? !t.inputValue : !0
    }),
    Nl = c(() => {
      var l
      const n = (l = e.placeholder) != null ? l : a('el.select.placeholder')
      return e.multiple || !we.value ? n : t.selectedLabel
    }),
    Wl = c(() => (nl ? null : 'mouseenter'))
  q(
    () => e.modelValue,
    (l, n) => {
      e.multiple &&
        e.filterable &&
        !e.reserveKeyword &&
        ((t.inputValue = ''), fe('')),
        ve(),
        !ue(l, n) && e.validateEvent && H?.validate('change').catch((p) => ol())
    },
    { flush: 'post', deep: !0 }
  ),
    q(
      () => C.value,
      (l) => {
        l
          ? fe(t.inputValue)
          : ((t.inputValue = ''),
            (t.previousQuery = null),
            (t.isBeforeHide = !0)),
          i('visible-change', l)
      }
    ),
    q(
      () => t.options.entries(),
      () => {
        St &&
          (ve(),
          e.defaultFirstOption &&
            (e.filterable || e.remote) &&
            te.value &&
            Ae())
      },
      { flush: 'post' }
    ),
    q([() => t.hoveringIndex, D], ([l]) => {
      Ct(l) && l > -1 ? (W.value = D.value[l] || {}) : (W.value = {}),
        D.value.forEach((n) => {
          n.hover = W.value === n
        })
    }),
    ut(() => {
      t.isBeforeHide || Fe()
    })
  const fe = (l) => {
      t.previousQuery === l ||
        Ne.value ||
        ((t.previousQuery = l),
        e.filterable && ie(e.filterMethod)
          ? e.filterMethod(l)
          : e.filterable && e.remote && ie(e.remoteMethod) && e.remoteMethod(l),
        e.defaultFirstOption && (e.filterable || e.remote) && te.value
          ? j(Ae)
          : j(zl))
    },
    Ae = () => {
      const l = D.value.filter(
          (L) => L.visible && !L.disabled && !L.states.groupDisabled
        ),
        n = l.find((L) => L.created),
        p = l[0],
        O = D.value.map((L) => L.value)
      t.hoveringIndex = Xe(O, n || p)
    },
    ve = () => {
      if (e.multiple) t.selectedLabel = ''
      else {
        const n = A(e.modelValue) ? e.modelValue[0] : e.modelValue,
          p = He(n)
        ;(t.selectedLabel = p.currentLabel), (t.selected = [p])
        return
      }
      const l = []
      ye(e.modelValue) ||
        G(e.modelValue).forEach((n) => {
          l.push(He(n))
        }),
        (t.selected = l)
    },
    He = (l) => {
      let n
      const p = dt(l)
      for (let Z = t.cachedOptions.size - 1; Z >= 0; Z--) {
        const U = $l.value[Z]
        if (p ? _(U.value, e.valueKey) === _(l, e.valueKey) : U.value === l) {
          n = {
            value: l,
            currentLabel: U.currentLabel,
            get isDisabled() {
              return U.isDisabled
            }
          }
          break
        }
      }
      if (n) return n
      const O = p ? l.label : (l ?? '')
      return { value: l, currentLabel: O }
    },
    zl = () => {
      t.hoveringIndex = D.value.findIndex((l) =>
        t.selected.some((n) => he(n) === he(l))
      )
    },
    Pl = () => {
      t.selectionWidth = Number.parseFloat(
        window.getComputedStyle(g.value).width
      )
    },
    Fl = () => {
      t.collapseItemWidth = $.value.getBoundingClientRect().width
    },
    Ve = () => {
      var l, n
      ;(n = (l = r.value) == null ? void 0 : l.updatePopper) == null ||
        n.call(l)
    },
    Ue = () => {
      var l, n
      ;(n = (l = f.value) == null ? void 0 : l.updatePopper) == null ||
        n.call(l)
    },
    je = () => {
      t.inputValue.length > 0 && !C.value && (C.value = !0), fe(t.inputValue)
    },
    Ge = (l) => {
      if (((t.inputValue = l.target.value), e.remote)) qe()
      else return je()
    },
    qe = Ft(() => {
      je()
    }, Tl.value),
    ne = (l) => {
      ue(e.modelValue, l) || i(fl, l)
    },
    Kl = (l) =>
      Gt(l, (n) => {
        const p = t.cachedOptions.get(n)
        return p && !p.disabled && !p.states.groupDisabled
      }),
    Al = (l) => {
      if (e.multiple && l.code !== Lt.delete && l.target.value.length <= 0) {
        const n = G(e.modelValue).slice(),
          p = Kl(n)
        if (p < 0) return
        const O = n[p]
        n.splice(p, 1), i(Y, n), ne(n), i('remove-tag', O)
      }
    },
    Hl = (l, n) => {
      const p = t.selected.indexOf(n)
      if (p > -1 && !le.value) {
        const O = G(e.modelValue).slice()
        O.splice(p, 1), i(Y, O), ne(O), i('remove-tag', n.value)
      }
      l.stopPropagation(), be()
    },
    Qe = (l) => {
      l.stopPropagation()
      const n = e.multiple ? [] : hl.value
      if (e.multiple)
        for (const p of t.selected) p.isDisabled && n.push(p.value)
      i(Y, n), ne(n), (t.hoveringIndex = -1), (C.value = !1), i('clear'), be()
    },
    Je = (l) => {
      var n
      if (e.multiple) {
        const p = G((n = e.modelValue) != null ? n : []).slice(),
          O = Xe(p, l)
        O > -1
          ? p.splice(O, 1)
          : (e.multipleLimit <= 0 || p.length < e.multipleLimit) &&
            p.push(l.value),
          i(Y, p),
          ne(p),
          l.created && fe(''),
          e.filterable && !e.reserveKeyword && (t.inputValue = '')
      } else i(Y, l.value), ne(l.value), (C.value = !1)
      be(),
        !C.value &&
          j(() => {
            me(l)
          })
    },
    Xe = (l, n) =>
      ye(n)
        ? -1
        : K(n.value)
          ? l.findIndex((p) => ue(_(p, e.valueKey), he(n)))
          : l.indexOf(n.value),
    me = (l) => {
      var n, p, O, L, Z
      const U = A(l) ? l[0] : l
      let ge = null
      if (U?.value) {
        const oe = D.value.filter((at) => at.value === U.value)
        oe.length > 0 && (ge = oe[0].$el)
      }
      if (r.value && ge) {
        const oe =
          (L =
            (O =
              (p = (n = r.value) == null ? void 0 : n.popperRef) == null
                ? void 0
                : p.contentRef) == null
              ? void 0
              : O.querySelector) == null
            ? void 0
            : L.call(O, `.${o.be('dropdown', 'wrap')}`)
        oe && Pt(oe, ge)
      }
      ;(Z = R.value) == null || Z.handleScroll()
    },
    Ul = (l) => {
      t.options.set(l.value, l), t.cachedOptions.set(l.value, l)
    },
    jl = (l, n) => {
      t.options.get(l) === n && t.options.delete(l)
    },
    Gl = c(() => {
      var l, n
      return (n = (l = r.value) == null ? void 0 : l.popperRef) == null
        ? void 0
        : n.contentRef
    }),
    ql = () => {
      ;(t.isBeforeHide = !1),
        j(() => {
          var l
          ;(l = R.value) == null || l.update(), me(t.selected)
        })
    },
    be = () => {
      var l
      ;(l = d.value) == null || l.focus()
    },
    Ql = () => {
      var l
      if (C.value) {
        ;(C.value = !1),
          j(() => {
            var n
            return (n = d.value) == null ? void 0 : n.blur()
          })
        return
      }
      ;(l = d.value) == null || l.blur()
    },
    Jl = (l) => {
      Qe(l)
    },
    Xl = (l) => {
      if (((C.value = !1), ze.value)) {
        const n = new FocusEvent('focus', l)
        j(() => Ol(n))
      }
    },
    Zl = () => {
      t.inputValue.length > 0 ? (t.inputValue = '') : (C.value = !1)
    },
    Ze = () => {
      le.value ||
        (nl && (t.inputHovering = !0),
        t.menuVisibleOnFocus
          ? (t.menuVisibleOnFocus = !1)
          : (C.value = !C.value))
    },
    Yl = () => {
      if (!C.value) Ze()
      else {
        const l = D.value[t.hoveringIndex]
        l && !l.isDisabled && Je(l)
      }
    },
    he = (l) => (K(l.value) ? _(l.value, e.valueKey) : l.value),
    _l = c(() => D.value.filter((l) => l.visible).every((l) => l.isDisabled)),
    xl = c(() =>
      e.multiple
        ? e.collapseTags
          ? t.selected.slice(0, e.maxCollapseTags)
          : t.selected
        : []
    ),
    et = c(() =>
      e.multiple
        ? e.collapseTags
          ? t.selected.slice(e.maxCollapseTags)
          : []
        : []
    ),
    Ye = (l) => {
      if (!C.value) {
        C.value = !0
        return
      }
      if (!(t.options.size === 0 || te.value === 0 || Ne.value) && !_l.value) {
        l === 'next'
          ? (t.hoveringIndex++,
            t.hoveringIndex === t.options.size && (t.hoveringIndex = 0))
          : l === 'prev' &&
            (t.hoveringIndex--,
            t.hoveringIndex < 0 && (t.hoveringIndex = t.options.size - 1))
        const n = D.value[t.hoveringIndex]
        ;(n.isDisabled || !n.visible) && Ye(l), j(() => me(W.value))
      }
    },
    lt = () => {
      if (!g.value) return 0
      const l = window.getComputedStyle(g.value)
      return Number.parseFloat(l.gap || '6px')
    },
    tt = c(() => {
      const l = lt()
      return {
        maxWidth: `${$.value && e.maxCollapseTags === 1 ? t.selectionWidth - t.collapseItemWidth - l : t.selectionWidth}px`
      }
    }),
    nt = c(() => ({ maxWidth: `${t.selectionWidth}px` })),
    ot = (l) => {
      i('popup-scroll', l)
    }
  return (
    J(g, Pl),
    J(m, Ve),
    J(We, Ve),
    J(V, Ue),
    J($, Fl),
    De(() => {
      ve()
    }),
    {
      inputId: bl,
      contentId: b,
      nsSelect: o,
      nsInput: y,
      states: t,
      isFocused: ze,
      expanded: C,
      optionsArray: D,
      hoverOption: W,
      selectSize: Ke,
      filteredOptionsCount: te,
      updateTooltip: Ve,
      updateTagTooltip: Ue,
      debouncedOnInputChange: qe,
      onInput: Ge,
      deletePrevTag: Al,
      deleteTag: Hl,
      deleteSelected: Qe,
      handleOptionSelect: Je,
      scrollToOption: me,
      hasModelValue: we,
      shouldShowPlaceholder: Ll,
      currentPlaceholder: Nl,
      mouseEnterEventName: Wl,
      needStatusIcon: wl,
      showClose: El,
      iconComponent: Pe,
      iconReverse: Vl,
      validateState: Ee,
      validateIcon: Il,
      showNewOption: Rl,
      updateOptions: Fe,
      collapseTagSize: Dl,
      setSelected: ve,
      selectDisabled: le,
      emptyText: Ml,
      handleCompositionStart: yl,
      handleCompositionUpdate: Sl,
      handleCompositionEnd: Cl,
      onOptionCreate: Ul,
      onOptionDestroy: jl,
      handleMenuEnter: ql,
      focus: be,
      blur: Ql,
      handleClearClick: Jl,
      handleClickOutside: Xl,
      handleEsc: Zl,
      toggleMenu: Ze,
      selectOption: Yl,
      getValueKey: he,
      navigateOptions: Ye,
      dropdownMenuVisible: Bl,
      showTagList: xl,
      collapseTagList: et,
      popupScroll: ot,
      tagStyle: tt,
      collapseTagStyle: nt,
      popperRef: Gl,
      inputRef: d,
      tooltipRef: r,
      tagTooltipRef: f,
      prefixRef: s,
      suffixRef: u,
      selectRef: S,
      wrapperRef: We,
      selectionRef: g,
      scrollbarRef: R,
      menuRef: m,
      tagMenuRef: V,
      collapseItemRef: $
    }
  )
}
var sn = X({
  name: 'ElOptions',
  setup(e, { slots: i }) {
    const a = Se(Oe)
    let b = []
    return () => {
      var o, y
      const t = (o = i.default) == null ? void 0 : o.call(i),
        S = []
      function g(r) {
        A(r) &&
          r.forEach((f) => {
            var d, s, u, m
            const V = (d = f?.type || {}) == null ? void 0 : d.name
            V === 'ElOptionGroup'
              ? g(
                  !ct(f.children) &&
                    !A(f.children) &&
                    ie((s = f.children) == null ? void 0 : s.default)
                    ? (u = f.children) == null
                      ? void 0
                      : u.default()
                    : f.children
                )
              : V === 'ElOption'
                ? S.push((m = f.props) == null ? void 0 : m.value)
                : A(f.children) && g(f.children)
          })
      }
      return (
        t.length && g((y = t[0]) == null ? void 0 : y.children),
        ue(S, b) || ((b = S), a && (a.states.optionValues = S)),
        t
      )
    }
  }
})
const rn = Be({
  name: String,
  id: String,
  modelValue: {
    type: se([Array, String, Number, Boolean, Object]),
    default: void 0
  },
  autocomplete: { type: String, default: 'off' },
  automaticDropdown: Boolean,
  size: kt,
  effect: { type: se(String), default: 'light' },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: { type: String, default: '' },
  popperOptions: { type: se(Object), default: () => ({}) },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: { type: Number, default: 0 },
  placeholder: { type: String },
  defaultFirstOption: Boolean,
  reserveKeyword: { type: Boolean, default: !0 },
  valueKey: { type: String, default: 'value' },
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  maxCollapseTags: { type: Number, default: 1 },
  teleported: ll.teleported,
  persistent: { type: Boolean, default: !0 },
  clearIcon: { type: al, default: wt },
  fitInputWidth: Boolean,
  suffixIcon: { type: al, default: Ot },
  tagType: { ...ke.type, default: 'info' },
  tagEffect: { ...ke.effect, default: 'light' },
  validateEvent: { type: Boolean, default: !0 },
  remoteShowSuffix: Boolean,
  showArrow: { type: Boolean, default: !0 },
  offset: { type: Number, default: 12 },
  placement: { type: se(String), values: bt, default: 'bottom-start' },
  fallbackPlacements: {
    type: se(Array),
    default: ['bottom-start', 'top-start', 'right', 'left']
  },
  tabindex: { type: [String, Number], default: 0 },
  appendTo: ll.appendTo,
  ...Tt,
  ...At(['ariaLabel'])
})
gt.scroll
const sl = 'ElSelect',
  un = X({
    name: sl,
    componentName: sl,
    components: {
      ElSelectMenu: on,
      ElOption: Le,
      ElOptions: sn,
      ElTag: Zt,
      ElScrollbar: yt,
      ElTooltip: ht,
      ElIcon: Te
    },
    directives: { ClickOutside: Ht },
    props: rn,
    emits: [
      Y,
      fl,
      'remove-tag',
      'clear',
      'visible-change',
      'focus',
      'blur',
      'popup-scroll'
    ],
    setup(e, { emit: i, slots: a }) {
      const b = Ce()
      b.appContext.config.warnHandler = (...s) => {
        !s[0] ||
          s[0].includes(
            'Slot "default" invoked outside of the render function'
          ) ||
          console.warn(...s)
      }
      const o = c(() => {
          const { modelValue: s, multiple: u } = e,
            m = u ? [] : void 0
          return A(s) ? (u ? s : m) : u ? m : s
        }),
        y = de({ ...Re(e), modelValue: o }),
        t = an(y, i),
        { calculatorRef: S, inputStyle: g } = Yt(),
        r = (s) =>
          s.reduce(
            (u, m) => (
              u.push(m),
              m.children && m.children.length > 0 && u.push(...r(m.children)),
              u
            ),
            []
          ),
        f = (s) => {
          Ut(s || []).forEach((m) => {
            var V
            if (
              K(m) &&
              (m.type.name === 'ElOption' || m.type.name === 'ElTree')
            ) {
              const $ = m.type.name
              if ($ === 'ElTree') {
                const R = ((V = m.props) == null ? void 0 : V.data) || []
                r(R).forEach((W) => {
                  ;(W.currentLabel = W.label || (K(W.value) ? '' : W.value)),
                    t.onOptionCreate(W)
                })
              } else if ($ === 'ElOption') {
                const R = { ...m.props }
                ;(R.currentLabel = R.label || (K(R.value) ? '' : R.value)),
                  t.onOptionCreate(R)
              }
            }
          })
        }
      q(
        () => {
          var s
          return (s = a.default) == null ? void 0 : s.call(a)
        },
        (s) => {
          e.persistent || f(s)
        },
        { immediate: !0 }
      ),
        rl(
          Oe,
          de({
            props: y,
            states: t.states,
            selectRef: t.selectRef,
            optionsArray: t.optionsArray,
            setSelected: t.setSelected,
            handleOptionSelect: t.handleOptionSelect,
            onOptionCreate: t.onOptionCreate,
            onOptionDestroy: t.onOptionDestroy
          })
        )
      const d = c(() =>
        e.multiple
          ? t.states.selected.map((s) => s.currentLabel)
          : t.states.selectedLabel
      )
      return (
        il(() => {
          b.appContext.config.warnHandler = void 0
        }),
        {
          ...t,
          modelValue: o,
          selectedLabel: d,
          calculatorRef: S,
          inputStyle: g
        }
      )
    }
  })
function dn(e, i) {
  const a = Q('el-tag'),
    b = Q('el-tooltip'),
    o = Q('el-icon'),
    y = Q('el-option'),
    t = Q('el-options'),
    S = Q('el-scrollbar'),
    g = Q('el-select-menu'),
    r = pt('click-outside')
  return re(
    (h(),
    w(
      'div',
      {
        ref: 'selectRef',
        class: v([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
        [vt(e.mouseEnterEventName)]: (f) => (e.states.inputHovering = !0),
        onMouseleave: (f) => (e.states.inputHovering = !1)
      },
      [
        P(
          b,
          {
            ref: 'tooltipRef',
            visible: e.dropdownMenuVisible,
            placement: e.placement,
            teleported: e.teleported,
            'popper-class': [e.nsSelect.e('popper'), e.popperClass],
            'popper-options': e.popperOptions,
            'fallback-placements': e.fallbackPlacements,
            effect: e.effect,
            pure: '',
            trigger: 'click',
            transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
            'stop-popper-mouse-event': !1,
            'gpu-acceleration': !1,
            persistent: e.persistent,
            'append-to': e.appendTo,
            'show-arrow': e.showArrow,
            offset: e.offset,
            onBeforeShow: e.handleMenuEnter,
            onHide: (f) => (e.states.isBeforeHide = !1)
          },
          {
            default: k(() => {
              var f
              return [
                E(
                  'div',
                  {
                    ref: 'wrapperRef',
                    class: v([
                      e.nsSelect.e('wrapper'),
                      e.nsSelect.is('focused', e.isFocused),
                      e.nsSelect.is('hovering', e.states.inputHovering),
                      e.nsSelect.is('filterable', e.filterable),
                      e.nsSelect.is('disabled', e.selectDisabled)
                    ]),
                    onClick: N(e.toggleMenu, ['prevent'])
                  },
                  [
                    e.$slots.prefix
                      ? (h(),
                        w(
                          'div',
                          {
                            key: 0,
                            ref: 'prefixRef',
                            class: v(e.nsSelect.e('prefix'))
                          },
                          [T(e.$slots, 'prefix')],
                          2
                        ))
                      : M('v-if', !0),
                    E(
                      'div',
                      {
                        ref: 'selectionRef',
                        class: v([
                          e.nsSelect.e('selection'),
                          e.nsSelect.is(
                            'near',
                            e.multiple &&
                              !e.$slots.prefix &&
                              !!e.states.selected.length
                          )
                        ])
                      },
                      [
                        e.multiple
                          ? T(
                              e.$slots,
                              'tag',
                              {
                                key: 0,
                                data: e.states.selected,
                                deleteTag: e.deleteTag,
                                selectDisabled: e.selectDisabled
                              },
                              () => [
                                (h(!0),
                                w(
                                  _e,
                                  null,
                                  xe(
                                    e.showTagList,
                                    (d) => (
                                      h(),
                                      w(
                                        'div',
                                        {
                                          key: e.getValueKey(d),
                                          class: v(
                                            e.nsSelect.e('selected-item')
                                          )
                                        },
                                        [
                                          P(
                                            a,
                                            {
                                              closable:
                                                !e.selectDisabled &&
                                                !d.isDisabled,
                                              size: e.collapseTagSize,
                                              type: e.tagType,
                                              effect: e.tagEffect,
                                              'disable-transitions': '',
                                              style: x(e.tagStyle),
                                              onClose: (s) => e.deleteTag(s, d)
                                            },
                                            {
                                              default: k(() => [
                                                E(
                                                  'span',
                                                  {
                                                    class: v(
                                                      e.nsSelect.e('tags-text')
                                                    )
                                                  },
                                                  [
                                                    T(
                                                      e.$slots,
                                                      'label',
                                                      {
                                                        label: d.currentLabel,
                                                        value: d.value
                                                      },
                                                      () => [
                                                        el(F(d.currentLabel), 1)
                                                      ]
                                                    )
                                                  ],
                                                  2
                                                )
                                              ]),
                                              _: 2
                                            },
                                            1032,
                                            [
                                              'closable',
                                              'size',
                                              'type',
                                              'effect',
                                              'style',
                                              'onClose'
                                            ]
                                          )
                                        ],
                                        2
                                      )
                                    )
                                  ),
                                  128
                                )),
                                e.collapseTags &&
                                e.states.selected.length > e.maxCollapseTags
                                  ? (h(),
                                    z(
                                      b,
                                      {
                                        key: 0,
                                        ref: 'tagTooltipRef',
                                        disabled:
                                          e.dropdownMenuVisible ||
                                          !e.collapseTagsTooltip,
                                        'fallback-placements': [
                                          'bottom',
                                          'top',
                                          'right',
                                          'left'
                                        ],
                                        effect: e.effect,
                                        placement: 'bottom',
                                        'popper-class': e.popperClass,
                                        teleported: e.teleported
                                      },
                                      {
                                        default: k(() => [
                                          E(
                                            'div',
                                            {
                                              ref: 'collapseItemRef',
                                              class: v(
                                                e.nsSelect.e('selected-item')
                                              )
                                            },
                                            [
                                              P(
                                                a,
                                                {
                                                  closable: !1,
                                                  size: e.collapseTagSize,
                                                  type: e.tagType,
                                                  effect: e.tagEffect,
                                                  'disable-transitions': '',
                                                  style: x(e.collapseTagStyle)
                                                },
                                                {
                                                  default: k(() => [
                                                    E(
                                                      'span',
                                                      {
                                                        class: v(
                                                          e.nsSelect.e(
                                                            'tags-text'
                                                          )
                                                        )
                                                      },
                                                      ' + ' +
                                                        F(
                                                          e.states.selected
                                                            .length -
                                                            e.maxCollapseTags
                                                        ),
                                                      3
                                                    )
                                                  ]),
                                                  _: 1
                                                },
                                                8,
                                                [
                                                  'size',
                                                  'type',
                                                  'effect',
                                                  'style'
                                                ]
                                              )
                                            ],
                                            2
                                          )
                                        ]),
                                        content: k(() => [
                                          E(
                                            'div',
                                            {
                                              ref: 'tagMenuRef',
                                              class: v(
                                                e.nsSelect.e('selection')
                                              )
                                            },
                                            [
                                              (h(!0),
                                              w(
                                                _e,
                                                null,
                                                xe(
                                                  e.collapseTagList,
                                                  (d) => (
                                                    h(),
                                                    w(
                                                      'div',
                                                      {
                                                        key: e.getValueKey(d),
                                                        class: v(
                                                          e.nsSelect.e(
                                                            'selected-item'
                                                          )
                                                        )
                                                      },
                                                      [
                                                        P(
                                                          a,
                                                          {
                                                            class: 'in-tooltip',
                                                            closable:
                                                              !e.selectDisabled &&
                                                              !d.isDisabled,
                                                            size: e.collapseTagSize,
                                                            type: e.tagType,
                                                            effect: e.tagEffect,
                                                            'disable-transitions':
                                                              '',
                                                            onClose: (s) =>
                                                              e.deleteTag(s, d)
                                                          },
                                                          {
                                                            default: k(() => [
                                                              E(
                                                                'span',
                                                                {
                                                                  class: v(
                                                                    e.nsSelect.e(
                                                                      'tags-text'
                                                                    )
                                                                  )
                                                                },
                                                                [
                                                                  T(
                                                                    e.$slots,
                                                                    'label',
                                                                    {
                                                                      label:
                                                                        d.currentLabel,
                                                                      value:
                                                                        d.value
                                                                    },
                                                                    () => [
                                                                      el(
                                                                        F(
                                                                          d.currentLabel
                                                                        ),
                                                                        1
                                                                      )
                                                                    ]
                                                                  )
                                                                ],
                                                                2
                                                              )
                                                            ]),
                                                            _: 2
                                                          },
                                                          1032,
                                                          [
                                                            'closable',
                                                            'size',
                                                            'type',
                                                            'effect',
                                                            'onClose'
                                                          ]
                                                        )
                                                      ],
                                                      2
                                                    )
                                                  )
                                                ),
                                                128
                                              ))
                                            ],
                                            2
                                          )
                                        ]),
                                        _: 3
                                      },
                                      8,
                                      [
                                        'disabled',
                                        'effect',
                                        'popper-class',
                                        'teleported'
                                      ]
                                    ))
                                  : M('v-if', !0)
                              ]
                            )
                          : M('v-if', !0),
                        E(
                          'div',
                          {
                            class: v([
                              e.nsSelect.e('selected-item'),
                              e.nsSelect.e('input-wrapper'),
                              e.nsSelect.is('hidden', !e.filterable)
                            ])
                          },
                          [
                            re(
                              E(
                                'input',
                                {
                                  id: e.inputId,
                                  ref: 'inputRef',
                                  'onUpdate:modelValue': (d) =>
                                    (e.states.inputValue = d),
                                  type: 'text',
                                  name: e.name,
                                  class: v([
                                    e.nsSelect.e('input'),
                                    e.nsSelect.is(e.selectSize)
                                  ]),
                                  disabled: e.selectDisabled,
                                  autocomplete: e.autocomplete,
                                  style: x(e.inputStyle),
                                  tabindex: e.tabindex,
                                  role: 'combobox',
                                  readonly: !e.filterable,
                                  spellcheck: 'false',
                                  'aria-activedescendant':
                                    ((f = e.hoverOption) == null
                                      ? void 0
                                      : f.id) || '',
                                  'aria-controls': e.contentId,
                                  'aria-expanded': e.dropdownMenuVisible,
                                  'aria-label': e.ariaLabel,
                                  'aria-autocomplete': 'none',
                                  'aria-haspopup': 'listbox',
                                  onKeydown: [
                                    ae(
                                      N(
                                        (d) => e.navigateOptions('next'),
                                        ['stop', 'prevent']
                                      ),
                                      ['down']
                                    ),
                                    ae(
                                      N(
                                        (d) => e.navigateOptions('prev'),
                                        ['stop', 'prevent']
                                      ),
                                      ['up']
                                    ),
                                    ae(N(e.handleEsc, ['stop', 'prevent']), [
                                      'esc'
                                    ]),
                                    ae(N(e.selectOption, ['stop', 'prevent']), [
                                      'enter'
                                    ]),
                                    ae(N(e.deletePrevTag, ['stop']), ['delete'])
                                  ],
                                  onCompositionstart: e.handleCompositionStart,
                                  onCompositionupdate:
                                    e.handleCompositionUpdate,
                                  onCompositionend: e.handleCompositionEnd,
                                  onInput: e.onInput,
                                  onClick: N(e.toggleMenu, ['stop'])
                                },
                                null,
                                46,
                                [
                                  'id',
                                  'onUpdate:modelValue',
                                  'name',
                                  'disabled',
                                  'autocomplete',
                                  'tabindex',
                                  'readonly',
                                  'aria-activedescendant',
                                  'aria-controls',
                                  'aria-expanded',
                                  'aria-label',
                                  'onKeydown',
                                  'onCompositionstart',
                                  'onCompositionupdate',
                                  'onCompositionend',
                                  'onInput',
                                  'onClick'
                                ]
                              ),
                              [[ft, e.states.inputValue]]
                            ),
                            e.filterable
                              ? (h(),
                                w(
                                  'span',
                                  {
                                    key: 0,
                                    ref: 'calculatorRef',
                                    'aria-hidden': 'true',
                                    class: v(e.nsSelect.e('input-calculator')),
                                    textContent: F(e.states.inputValue)
                                  },
                                  null,
                                  10,
                                  ['textContent']
                                ))
                              : M('v-if', !0)
                          ],
                          2
                        ),
                        e.shouldShowPlaceholder
                          ? (h(),
                            w(
                              'div',
                              {
                                key: 1,
                                class: v([
                                  e.nsSelect.e('selected-item'),
                                  e.nsSelect.e('placeholder'),
                                  e.nsSelect.is(
                                    'transparent',
                                    !e.hasModelValue ||
                                      (e.expanded && !e.states.inputValue)
                                  )
                                ])
                              },
                              [
                                e.hasModelValue
                                  ? T(
                                      e.$slots,
                                      'label',
                                      {
                                        key: 0,
                                        label: e.currentPlaceholder,
                                        value: e.modelValue
                                      },
                                      () => [
                                        E(
                                          'span',
                                          null,
                                          F(e.currentPlaceholder),
                                          1
                                        )
                                      ]
                                    )
                                  : (h(),
                                    w(
                                      'span',
                                      { key: 1 },
                                      F(e.currentPlaceholder),
                                      1
                                    ))
                              ],
                              2
                            ))
                          : M('v-if', !0)
                      ],
                      2
                    ),
                    E(
                      'div',
                      { ref: 'suffixRef', class: v(e.nsSelect.e('suffix')) },
                      [
                        e.iconComponent && !e.showClose
                          ? (h(),
                            z(
                              o,
                              {
                                key: 0,
                                class: v([
                                  e.nsSelect.e('caret'),
                                  e.nsSelect.e('icon'),
                                  e.iconReverse
                                ])
                              },
                              {
                                default: k(() => [
                                  (h(), z(Ie(e.iconComponent)))
                                ]),
                                _: 1
                              },
                              8,
                              ['class']
                            ))
                          : M('v-if', !0),
                        e.showClose && e.clearIcon
                          ? (h(),
                            z(
                              o,
                              {
                                key: 1,
                                class: v([
                                  e.nsSelect.e('caret'),
                                  e.nsSelect.e('icon'),
                                  e.nsSelect.e('clear')
                                ]),
                                onClick: e.handleClearClick
                              },
                              {
                                default: k(() => [(h(), z(Ie(e.clearIcon)))]),
                                _: 1
                              },
                              8,
                              ['class', 'onClick']
                            ))
                          : M('v-if', !0),
                        e.validateState && e.validateIcon && e.needStatusIcon
                          ? (h(),
                            z(
                              o,
                              {
                                key: 2,
                                class: v([
                                  e.nsInput.e('icon'),
                                  e.nsInput.e('validateIcon'),
                                  e.nsInput.is(
                                    'loading',
                                    e.validateState === 'validating'
                                  )
                                ])
                              },
                              {
                                default: k(() => [
                                  (h(), z(Ie(e.validateIcon)))
                                ]),
                                _: 1
                              },
                              8,
                              ['class']
                            ))
                          : M('v-if', !0)
                      ],
                      2
                    )
                  ],
                  10,
                  ['onClick']
                )
              ]
            }),
            content: k(() => [
              P(
                g,
                { ref: 'menuRef' },
                {
                  default: k(() => [
                    e.$slots.header
                      ? (h(),
                        w(
                          'div',
                          {
                            key: 0,
                            class: v(e.nsSelect.be('dropdown', 'header')),
                            onClick: N(() => {}, ['stop'])
                          },
                          [T(e.$slots, 'header')],
                          10,
                          ['onClick']
                        ))
                      : M('v-if', !0),
                    re(
                      P(
                        S,
                        {
                          id: e.contentId,
                          ref: 'scrollbarRef',
                          tag: 'ul',
                          'wrap-class': e.nsSelect.be('dropdown', 'wrap'),
                          'view-class': e.nsSelect.be('dropdown', 'list'),
                          class: v([
                            e.nsSelect.is('empty', e.filteredOptionsCount === 0)
                          ]),
                          role: 'listbox',
                          'aria-label': e.ariaLabel,
                          'aria-orientation': 'vertical',
                          onScroll: e.popupScroll
                        },
                        {
                          default: k(() => [
                            e.showNewOption
                              ? (h(),
                                z(
                                  y,
                                  {
                                    key: 0,
                                    value: e.states.inputValue,
                                    created: !0
                                  },
                                  null,
                                  8,
                                  ['value']
                                ))
                              : M('v-if', !0),
                            P(t, null, {
                              default: k(() => [T(e.$slots, 'default')]),
                              _: 3
                            })
                          ]),
                          _: 3
                        },
                        8,
                        [
                          'id',
                          'wrap-class',
                          'view-class',
                          'class',
                          'aria-label',
                          'onScroll'
                        ]
                      ),
                      [[$e, e.states.options.size > 0 && !e.loading]]
                    ),
                    e.$slots.loading && e.loading
                      ? (h(),
                        w(
                          'div',
                          {
                            key: 1,
                            class: v(e.nsSelect.be('dropdown', 'loading'))
                          },
                          [T(e.$slots, 'loading')],
                          2
                        ))
                      : e.loading || e.filteredOptionsCount === 0
                        ? (h(),
                          w(
                            'div',
                            {
                              key: 2,
                              class: v(e.nsSelect.be('dropdown', 'empty'))
                            },
                            [
                              T(e.$slots, 'empty', {}, () => [
                                E('span', null, F(e.emptyText), 1)
                              ])
                            ],
                            2
                          ))
                        : M('v-if', !0),
                    e.$slots.footer
                      ? (h(),
                        w(
                          'div',
                          {
                            key: 3,
                            class: v(e.nsSelect.be('dropdown', 'footer')),
                            onClick: N(() => {}, ['stop'])
                          },
                          [T(e.$slots, 'footer')],
                          10,
                          ['onClick']
                        ))
                      : M('v-if', !0)
                  ]),
                  _: 3
                },
                512
              )
            ]),
            _: 3
          },
          8,
          [
            'visible',
            'placement',
            'teleported',
            'popper-class',
            'popper-options',
            'fallback-placements',
            'effect',
            'transition',
            'persistent',
            'append-to',
            'show-arrow',
            'offset',
            'onBeforeShow',
            'onHide'
          ]
        )
      ],
      16,
      ['onMouseleave']
    )),
    [[r, e.handleClickOutside, e.popperRef]]
  )
}
var cn = ce(un, [
  ['render', dn],
  ['__file', 'select.vue']
])
const pn = X({
  name: 'ElOptionGroup',
  componentName: 'ElOptionGroup',
  props: { label: String, disabled: Boolean },
  setup(e) {
    const i = ee('select'),
      a = I(),
      b = Ce(),
      o = I([])
    rl(vl, de({ ...Re(e) }))
    const y = c(() => o.value.some((r) => r.visible === !0)),
      t = (r) => {
        var f
        return (
          r.type.name === 'ElOption' && !!((f = r.component) != null && f.proxy)
        )
      },
      S = (r) => {
        const f = G(r),
          d = []
        return (
          f.forEach((s) => {
            var u
            mt(s) &&
              (t(s)
                ? d.push(s.component.proxy)
                : A(s.children) && s.children.length
                  ? d.push(...S(s.children))
                  : (u = s.component) != null &&
                    u.subTree &&
                    d.push(...S(s.component.subTree)))
          }),
          d
        )
      },
      g = () => {
        o.value = S(b.subTree)
      }
    return (
      De(() => {
        g()
      }),
      Nt(a, g, { attributes: !0, subtree: !0, childList: !0 }),
      { groupRef: a, visible: y, ns: i }
    )
  }
})
function fn(e, i, a, b, o, y) {
  return re(
    (h(),
    w(
      'ul',
      { ref: 'groupRef', class: v(e.ns.be('group', 'wrap')) },
      [
        E('li', { class: v(e.ns.be('group', 'title')) }, F(e.label), 3),
        E('li', null, [
          E('ul', { class: v(e.ns.b('group')) }, [T(e.$slots, 'default')], 2)
        ])
      ],
      2
    )),
    [[$e, e.visible]]
  )
}
var ml = ce(pn, [
  ['render', fn],
  ['__file', 'option-group.vue']
])
const Ln = ul(cn, { Option: Le, OptionGroup: ml }),
  Nn = dl(Le)
dl(ml)
export { Ln as E, Nn as a }
