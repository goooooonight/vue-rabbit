import { u as z } from './index-D26JKrGB.js'
import { f as c, a as m } from './constants-Dnj8X3EN.js'
import {
  O as v,
  r as d,
  q as t,
  A as b,
  i as h,
  ah as y,
  a9 as F,
  I as w,
  g as p
} from './index-DU_P6jZu.js'
import { h as _ } from './request-FXAcKJdj.js'
const U = () => {
    const s = v(c, void 0),
      o = v(m, void 0)
    return { form: s, formItem: o }
  },
  j = (
    s,
    { formItemContext: o, disableIdGeneration: u, disableIdManagement: l }
  ) => {
    u || (u = d(!1)), l || (l = d(!1))
    const e = d()
    let a
    const n = t(() => {
      var i
      return !!(
        !(s.label || s.ariaLabel) &&
        o &&
        o.inputIds &&
        ((i = o.inputIds) == null ? void 0 : i.length) <= 1
      )
    })
    return (
      b(() => {
        a = h(
          [y(s, 'id'), u],
          ([i, f]) => {
            const r = i ?? (f ? void 0 : z().value)
            r !== e.value &&
              (o?.removeInputId &&
                (e.value && o.removeInputId(e.value),
                !l?.value && !f && r && o.addInputId(r)),
              (e.value = r))
          },
          { immediate: !0 }
        )
      }),
      F(() => {
        a && a(), o?.removeInputId && e.value && o.removeInputId(e.value)
      }),
      { isLabeledByFormItem: n, inputId: e }
    )
  },
  I = (s) => {
    const o = w()
    return t(() => {
      var u, l
      return (l = (u = o?.proxy) == null ? void 0 : u.$props) == null
        ? void 0
        : l[s]
    })
  },
  q = (s, o = {}) => {
    const u = d(void 0),
      l = o.prop ? u : I('size'),
      e = o.global ? u : _(),
      a = o.form ? { size: void 0 } : v(c, void 0),
      n = o.formItem ? { size: void 0 } : v(m, void 0)
    return t(() => l.value || p(s) || n?.size || a?.size || e.value || '')
  },
  A = (s) => {
    const o = I('disabled'),
      u = v(c, void 0)
    return t(() => o.value || p(s) || u?.disabled || !1)
  }
export { q as a, A as b, j as c, U as u }
