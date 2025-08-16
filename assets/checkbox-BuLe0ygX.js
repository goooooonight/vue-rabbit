import {
  K as J,
  O as F,
  q as f,
  I as ee,
  i as ae,
  Q as le,
  r as U,
  a6 as I,
  a1 as ge,
  ac as Q,
  L as E,
  D as ne,
  m as te,
  o as x,
  w as oe,
  a as Z,
  c as S,
  x as P,
  p as C,
  g as n,
  k as N,
  M as $,
  a5 as w,
  ad as z,
  y as K,
  F as Ce,
  f as ue,
  t as se,
  W as ie,
  N as xe,
  H as Ve,
  Z as ye
} from './index-62YaKhWX.js'
import { d as re } from './request-B0GuyAcH.js'
import { u as ce, p as Se } from './index-n_Z_joOJ.js'
import { U as D, C as T } from './event-BB_Ol6Sd.js'
import {
  g as X,
  y as O,
  k as A,
  J as M,
  _ as R,
  h as j,
  f as Le,
  x as Be,
  w as Ee,
  l as de
} from './base-BSl8DOKd.js'
import {
  b as _e,
  u as q,
  a as Y,
  c as be
} from './use-form-common-props-9xqr1Sov.js'
import { d as ve } from './error-Cq9Fpw4b.js'
import { c as Ie } from './isEqual-M3J1smy5.js'
import { u as G } from './index-CdlSpGPi.js'
const me = {
    modelValue: { type: [Number, String, Boolean], default: void 0 },
    label: { type: [String, Boolean, Number, Object], default: void 0 },
    value: { type: [String, Boolean, Number, Object], default: void 0 },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: { type: String, default: void 0 },
    trueValue: { type: [String, Number], default: void 0 },
    falseValue: { type: [String, Number], default: void 0 },
    trueLabel: { type: [String, Number], default: void 0 },
    falseLabel: { type: [String, Number], default: void 0 },
    id: { type: String, default: void 0 },
    border: Boolean,
    size: re,
    tabindex: [String, Number],
    validateEvent: { type: Boolean, default: !0 },
    ...ce(['ariaControls'])
  },
  fe = {
    [D]: (e) => J(e) || X(e) || O(e),
    change: (e) => J(e) || X(e) || O(e)
  },
  _ = Symbol('checkboxGroupContextKey'),
  Fe = ({ model: e, isChecked: c }) => {
    const i = F(_, void 0),
      l = f(() => {
        var r, d
        const t = (r = i?.max) == null ? void 0 : r.value,
          v = (d = i?.min) == null ? void 0 : d.value
        return (
          (!A(t) && e.value.length >= t && !c.value) ||
          (!A(v) && e.value.length <= v && c.value)
        )
      })
    return {
      isDisabled: _e(f(() => i?.disabled.value || l.value)),
      isLimitDisabled: l
    }
  },
  Ne = (
    e,
    {
      model: c,
      isLimitExceeded: i,
      hasOwnLabel: l,
      isDisabled: b,
      isLabeledByFormItem: r
    }
  ) => {
    const d = F(_, void 0),
      { formItem: t } = q(),
      { emit: v } = ee()
    function s(a) {
      var h, p, u, k
      return [!0, e.trueValue, e.trueLabel].includes(a)
        ? (p = (h = e.trueValue) != null ? h : e.trueLabel) != null
          ? p
          : !0
        : (k = (u = e.falseValue) != null ? u : e.falseLabel) != null
          ? k
          : !1
    }
    function o(a, h) {
      v(T, s(a), h)
    }
    function m(a) {
      if (i.value) return
      const h = a.target
      v(T, s(h.checked), a)
    }
    async function V(a) {
      i.value ||
        (!l.value &&
          !b.value &&
          r.value &&
          (a.composedPath().some((u) => u.tagName === 'LABEL') ||
            ((c.value = s([!1, e.falseValue, e.falseLabel].includes(c.value))),
            await le(),
            o(c.value, a))))
    }
    const L = f(() => d?.validateEvent || e.validateEvent)
    return (
      ae(
        () => e.modelValue,
        () => {
          L.value && t?.validate('change').catch((a) => ve())
        }
      ),
      { handleChange: m, onClickRoot: V }
    )
  },
  $e = (e) => {
    const c = U(!1),
      { emit: i } = ee(),
      l = F(_, void 0),
      b = f(() => A(l) === !1),
      r = U(!1),
      d = f({
        get() {
          var t, v
          return b.value
            ? (t = l?.modelValue) == null
              ? void 0
              : t.value
            : (v = e.modelValue) != null
              ? v
              : c.value
        },
        set(t) {
          var v, s
          b.value && I(t)
            ? ((r.value =
                ((v = l?.max) == null ? void 0 : v.value) !== void 0 &&
                t.length > l?.max.value &&
                t.length > d.value.length),
              r.value === !1 && ((s = l?.changeEvent) == null || s.call(l, t)))
            : (i(D, t), (c.value = t))
        }
      })
    return { model: d, isGroup: b, isLimitExceeded: r }
  },
  we = (e, c, { model: i }) => {
    const l = F(_, void 0),
      b = U(!1),
      r = f(() => (M(e.value) ? e.label : e.value)),
      d = f(() => {
        const o = i.value
        return O(o)
          ? o
          : I(o)
            ? ge(r.value)
              ? o.map(Q).some((m) => Ie(m, r.value))
              : o.map(Q).includes(r.value)
            : o != null
              ? o === e.trueValue || o === e.trueLabel
              : !!o
      }),
      t = Y(
        f(() => {
          var o
          return (o = l?.size) == null ? void 0 : o.value
        }),
        { prop: !0 }
      ),
      v = Y(
        f(() => {
          var o
          return (o = l?.size) == null ? void 0 : o.value
        })
      ),
      s = f(() => !!c.default || !M(r.value))
    return {
      checkboxButtonSize: t,
      isChecked: d,
      isFocused: b,
      checkboxSize: v,
      hasOwnLabel: s,
      actualValue: r
    }
  },
  he = (e, c) => {
    const { formItem: i } = q(),
      { model: l, isGroup: b, isLimitExceeded: r } = $e(e),
      {
        isFocused: d,
        isChecked: t,
        checkboxButtonSize: v,
        checkboxSize: s,
        hasOwnLabel: o,
        actualValue: m
      } = we(e, c, { model: l }),
      { isDisabled: V } = Fe({ model: l, isChecked: t }),
      { inputId: L, isLabeledByFormItem: a } = be(e, {
        formItemContext: i,
        disableIdGeneration: o,
        disableIdManagement: b
      }),
      { handleChange: h, onClickRoot: p } = Ne(e, {
        model: l,
        isLimitExceeded: r,
        hasOwnLabel: o,
        isDisabled: V,
        isLabeledByFormItem: a
      })
    return (
      (() => {
        function k() {
          var y, g
          I(l.value) && !l.value.includes(m.value)
            ? l.value.push(m.value)
            : (l.value =
                (g = (y = e.trueValue) != null ? y : e.trueLabel) != null
                  ? g
                  : !0)
        }
        e.checked && k()
      })(),
      G(
        {
          from: 'label act as value',
          replacement: 'value',
          version: '3.0.0',
          scope: 'el-checkbox',
          ref: 'https://element-plus.org/en-US/component/checkbox.html'
        },
        f(() => b.value && M(e.value))
      ),
      G(
        {
          from: 'true-label',
          replacement: 'true-value',
          version: '3.0.0',
          scope: 'el-checkbox',
          ref: 'https://element-plus.org/en-US/component/checkbox.html'
        },
        f(() => !!e.trueLabel)
      ),
      G(
        {
          from: 'false-label',
          replacement: 'false-value',
          version: '3.0.0',
          scope: 'el-checkbox',
          ref: 'https://element-plus.org/en-US/component/checkbox.html'
        },
        f(() => !!e.falseLabel)
      ),
      {
        inputId: L,
        isLabeledByFormItem: a,
        isChecked: t,
        isDisabled: V,
        isFocused: d,
        checkboxButtonSize: v,
        checkboxSize: s,
        hasOwnLabel: o,
        model: l,
        actualValue: m,
        handleChange: h,
        onClickRoot: p
      }
    )
  },
  ze = E({ name: 'ElCheckbox' }),
  De = E({
    ...ze,
    props: me,
    emits: fe,
    setup(e) {
      const c = e,
        i = ne(),
        {
          inputId: l,
          isLabeledByFormItem: b,
          isChecked: r,
          isDisabled: d,
          isFocused: t,
          checkboxSize: v,
          hasOwnLabel: s,
          model: o,
          actualValue: m,
          handleChange: V,
          onClickRoot: L
        } = he(c, i),
        a = j('checkbox'),
        h = f(() => [
          a.b(),
          a.m(v.value),
          a.is('disabled', d.value),
          a.is('bordered', c.border),
          a.is('checked', r.value)
        ]),
        p = f(() => [
          a.e('input'),
          a.is('disabled', d.value),
          a.is('checked', r.value),
          a.is('indeterminate', c.indeterminate),
          a.is('focus', t.value)
        ])
      return (u, k) => (
        x(),
        te(
          ie(!n(s) && n(b) ? 'span' : 'label'),
          {
            class: C(n(h)),
            'aria-controls': u.indeterminate ? u.ariaControls : null,
            onClick: n(L)
          },
          {
            default: oe(() => {
              var y, g, H, W
              return [
                Z(
                  'span',
                  { class: C(n(p)) },
                  [
                    u.trueValue || u.falseValue || u.trueLabel || u.falseLabel
                      ? N(
                          (x(),
                          S(
                            'input',
                            {
                              key: 0,
                              id: n(l),
                              'onUpdate:modelValue': (B) =>
                                w(o) ? (o.value = B) : null,
                              class: C(n(a).e('original')),
                              type: 'checkbox',
                              indeterminate: u.indeterminate,
                              name: u.name,
                              tabindex: u.tabindex,
                              disabled: n(d),
                              'true-value':
                                (g =
                                  (y = u.trueValue) != null
                                    ? y
                                    : u.trueLabel) != null
                                  ? g
                                  : !0,
                              'false-value':
                                (W =
                                  (H = u.falseValue) != null
                                    ? H
                                    : u.falseLabel) != null
                                  ? W
                                  : !1,
                              onChange: n(V),
                              onFocus: (B) => (t.value = !0),
                              onBlur: (B) => (t.value = !1),
                              onClick: $(() => {}, ['stop'])
                            },
                            null,
                            42,
                            [
                              'id',
                              'onUpdate:modelValue',
                              'indeterminate',
                              'name',
                              'tabindex',
                              'disabled',
                              'true-value',
                              'false-value',
                              'onChange',
                              'onFocus',
                              'onBlur',
                              'onClick'
                            ]
                          )),
                          [[z, n(o)]]
                        )
                      : N(
                          (x(),
                          S(
                            'input',
                            {
                              key: 1,
                              id: n(l),
                              'onUpdate:modelValue': (B) =>
                                w(o) ? (o.value = B) : null,
                              class: C(n(a).e('original')),
                              type: 'checkbox',
                              indeterminate: u.indeterminate,
                              disabled: n(d),
                              value: n(m),
                              name: u.name,
                              tabindex: u.tabindex,
                              onChange: n(V),
                              onFocus: (B) => (t.value = !0),
                              onBlur: (B) => (t.value = !1),
                              onClick: $(() => {}, ['stop'])
                            },
                            null,
                            42,
                            [
                              'id',
                              'onUpdate:modelValue',
                              'indeterminate',
                              'disabled',
                              'value',
                              'name',
                              'tabindex',
                              'onChange',
                              'onFocus',
                              'onBlur',
                              'onClick'
                            ]
                          )),
                          [[z, n(o)]]
                        ),
                    Z('span', { class: C(n(a).e('inner')) }, null, 2)
                  ],
                  2
                ),
                n(s)
                  ? (x(),
                    S(
                      'span',
                      { key: 0, class: C(n(a).e('label')) },
                      [
                        K(u.$slots, 'default'),
                        u.$slots.default
                          ? P('v-if', !0)
                          : (x(), S(Ce, { key: 0 }, [ue(se(u.label), 1)], 64))
                      ],
                      2
                    ))
                  : P('v-if', !0)
              ]
            }),
            _: 3
          },
          8,
          ['class', 'aria-controls', 'onClick']
        )
      )
    }
  })
var Ge = R(De, [['__file', 'checkbox.vue']])
const Ue = E({ name: 'ElCheckboxButton' }),
  Pe = E({
    ...Ue,
    props: me,
    emits: fe,
    setup(e) {
      const c = e,
        i = ne(),
        {
          isFocused: l,
          isChecked: b,
          isDisabled: r,
          checkboxButtonSize: d,
          model: t,
          actualValue: v,
          handleChange: s
        } = he(c, i),
        o = F(_, void 0),
        m = j('checkbox'),
        V = f(() => {
          var a, h, p, u
          const k =
            (h = (a = o?.fill) == null ? void 0 : a.value) != null ? h : ''
          return {
            backgroundColor: k,
            borderColor: k,
            color:
              (u = (p = o?.textColor) == null ? void 0 : p.value) != null
                ? u
                : '',
            boxShadow: k ? `-1px 0 0 0 ${k}` : void 0
          }
        }),
        L = f(() => [
          m.b('button'),
          m.bm('button', d.value),
          m.is('disabled', r.value),
          m.is('checked', b.value),
          m.is('focus', l.value)
        ])
      return (a, h) => {
        var p, u, k, y
        return (
          x(),
          S(
            'label',
            { class: C(n(L)) },
            [
              a.trueValue || a.falseValue || a.trueLabel || a.falseLabel
                ? N(
                    (x(),
                    S(
                      'input',
                      {
                        key: 0,
                        'onUpdate:modelValue': (g) =>
                          w(t) ? (t.value = g) : null,
                        class: C(n(m).be('button', 'original')),
                        type: 'checkbox',
                        name: a.name,
                        tabindex: a.tabindex,
                        disabled: n(r),
                        'true-value':
                          (u = (p = a.trueValue) != null ? p : a.trueLabel) !=
                          null
                            ? u
                            : !0,
                        'false-value':
                          (y = (k = a.falseValue) != null ? k : a.falseLabel) !=
                          null
                            ? y
                            : !1,
                        onChange: n(s),
                        onFocus: (g) => (l.value = !0),
                        onBlur: (g) => (l.value = !1),
                        onClick: $(() => {}, ['stop'])
                      },
                      null,
                      42,
                      [
                        'onUpdate:modelValue',
                        'name',
                        'tabindex',
                        'disabled',
                        'true-value',
                        'false-value',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'onClick'
                      ]
                    )),
                    [[z, n(t)]]
                  )
                : N(
                    (x(),
                    S(
                      'input',
                      {
                        key: 1,
                        'onUpdate:modelValue': (g) =>
                          w(t) ? (t.value = g) : null,
                        class: C(n(m).be('button', 'original')),
                        type: 'checkbox',
                        name: a.name,
                        tabindex: a.tabindex,
                        disabled: n(r),
                        value: n(v),
                        onChange: n(s),
                        onFocus: (g) => (l.value = !0),
                        onBlur: (g) => (l.value = !1),
                        onClick: $(() => {}, ['stop'])
                      },
                      null,
                      42,
                      [
                        'onUpdate:modelValue',
                        'name',
                        'tabindex',
                        'disabled',
                        'value',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'onClick'
                      ]
                    )),
                    [[z, n(t)]]
                  ),
              a.$slots.default || a.label
                ? (x(),
                  S(
                    'span',
                    {
                      key: 2,
                      class: C(n(m).be('button', 'inner')),
                      style: xe(n(b) ? n(V) : void 0)
                    },
                    [K(a.$slots, 'default', {}, () => [ue(se(a.label), 1)])],
                    6
                  ))
                : P('v-if', !0)
            ],
            2
          )
        )
      }
    }
  })
var pe = R(Pe, [['__file', 'checkbox-button.vue']])
const Te = Le({
    modelValue: { type: Be(Array), default: () => [] },
    disabled: Boolean,
    min: Number,
    max: Number,
    size: re,
    fill: String,
    textColor: String,
    tag: { type: String, default: 'div' },
    validateEvent: { type: Boolean, default: !0 },
    ...ce(['ariaLabel'])
  }),
  Oe = { [D]: (e) => I(e), change: (e) => I(e) },
  Ae = E({ name: 'ElCheckboxGroup' }),
  Me = E({
    ...Ae,
    props: Te,
    emits: Oe,
    setup(e, { emit: c }) {
      const i = e,
        l = j('checkbox'),
        { formItem: b } = q(),
        { inputId: r, isLabeledByFormItem: d } = be(i, { formItemContext: b }),
        t = async (s) => {
          c(D, s), await le(), c(T, s)
        },
        v = f({
          get() {
            return i.modelValue
          },
          set(s) {
            t(s)
          }
        })
      return (
        Ve(_, {
          ...Se(ye(i), [
            'size',
            'min',
            'max',
            'disabled',
            'validateEvent',
            'fill',
            'textColor'
          ]),
          modelValue: v,
          changeEvent: t
        }),
        ae(
          () => i.modelValue,
          () => {
            i.validateEvent && b?.validate('change').catch((s) => ve())
          }
        ),
        (s, o) => {
          var m
          return (
            x(),
            te(
              ie(s.tag),
              {
                id: n(r),
                class: C(n(l).b('group')),
                role: 'group',
                'aria-label': n(d) ? void 0 : s.ariaLabel || 'checkbox-group',
                'aria-labelledby': n(d)
                  ? (m = n(b)) == null
                    ? void 0
                    : m.labelId
                  : void 0
              },
              { default: oe(() => [K(s.$slots, 'default')]), _: 3 },
              8,
              ['id', 'class', 'aria-label', 'aria-labelledby']
            )
          )
        }
      )
    }
  })
var ke = R(Me, [['__file', 'checkbox-group.vue']])
const Xe = Ee(Ge, { CheckboxButton: pe, CheckboxGroup: ke })
de(pe)
de(ke)
export { Xe as E }
