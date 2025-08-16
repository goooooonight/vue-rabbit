import {
  O as ue,
  r as M,
  q as S,
  g,
  a5 as Gt,
  S as V,
  I as ke,
  H as Xt,
  L as fe,
  c as Ce,
  o as I,
  y as Re,
  d as Fe,
  w as ne,
  k as st,
  a as Oe,
  N as ot,
  p as j,
  f as Zt,
  t as at,
  v as it,
  T as lt,
  ar as Yt,
  A as Qt,
  i as en,
  m as G,
  x as te,
  W as tn,
  F as nn,
  M as rn,
  Q as sn,
  K as Me,
  J as ct,
  $ as Ie,
  h as ut,
  as as on
} from './index-DU_P6jZu.js'
import {
  n as an,
  F as ln,
  l as cn,
  G as un,
  H as fn,
  m as dn,
  a as pn,
  b as je,
  k as mn,
  u as hn,
  T as yn,
  E as gn
} from './aria-CnJd5Vss.js'
import {
  a5 as bn,
  f as Le,
  h as ft,
  P as wn,
  a6 as Sn,
  x as ae,
  _ as dt,
  g as Z,
  r as ze,
  w as En,
  B as pt,
  E as qe,
  Q as Tn,
  y as we,
  C as Cn,
  a7 as Rn
} from './base-Bes0XUun.js'
const mt = Symbol()
function ht(e, t, n) {
  var r = e == null ? void 0 : an(e, t)
  return r === void 0 ? n : r
}
function On(e, t, n) {
  return e == null ? e : ln(e, t, n)
}
var vn = {
  name: 'en',
  el: {
    breadcrumb: { label: 'Breadcrumb' },
    colorpicker: {
      confirm: 'OK',
      clear: 'Clear',
      defaultLabel: 'color picker',
      description:
        'current color is {color}. press enter to select a new color.',
      alphaLabel: 'pick alpha value'
    },
    datepicker: {
      now: 'Now',
      today: 'Today',
      cancel: 'Cancel',
      clear: 'Clear',
      confirm: 'OK',
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month',
      monthTablePrompt: 'Use the arrow keys and enter to select the month',
      yearTablePrompt: 'Use the arrow keys and enter to select the year',
      selectedDate: 'Selected date',
      selectDate: 'Select date',
      selectTime: 'Select time',
      startDate: 'Start Date',
      startTime: 'Start Time',
      endDate: 'End Date',
      endTime: 'End Time',
      prevYear: 'Previous Year',
      nextYear: 'Next Year',
      prevMonth: 'Previous Month',
      nextMonth: 'Next Month',
      year: '',
      month1: 'January',
      month2: 'February',
      month3: 'March',
      month4: 'April',
      month5: 'May',
      month6: 'June',
      month7: 'July',
      month8: 'August',
      month9: 'September',
      month10: 'October',
      month11: 'November',
      month12: 'December',
      week: 'week',
      weeks: {
        sun: 'Sun',
        mon: 'Mon',
        tue: 'Tue',
        wed: 'Wed',
        thu: 'Thu',
        fri: 'Fri',
        sat: 'Sat'
      },
      weeksFull: {
        sun: 'Sunday',
        mon: 'Monday',
        tue: 'Tuesday',
        wed: 'Wednesday',
        thu: 'Thursday',
        fri: 'Friday',
        sat: 'Saturday'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'May',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Oct',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    inputNumber: { decrease: 'decrease number', increase: 'increase number' },
    select: {
      loading: 'Loading',
      noMatch: 'No matching data',
      noData: 'No data',
      placeholder: 'Select'
    },
    mention: { loading: 'Loading' },
    dropdown: { toggleDropdown: 'Toggle Dropdown' },
    cascader: {
      noMatch: 'No matching data',
      loading: 'Loading',
      placeholder: 'Select',
      noData: 'No data'
    },
    pagination: {
      goto: 'Go to',
      pagesize: '/page',
      total: 'Total {total}',
      pageClassifier: '',
      page: 'Page',
      prev: 'Go to previous page',
      next: 'Go to next page',
      currentPage: 'page {pager}',
      prevPages: 'Previous {pager} pages',
      nextPages: 'Next {pager} pages',
      deprecationWarning:
        'Deprecated usages detected, please refer to the el-pagination documentation for more details'
    },
    dialog: { close: 'Close this dialog' },
    drawer: { close: 'Close this dialog' },
    messagebox: {
      title: 'Message',
      confirm: 'OK',
      cancel: 'Cancel',
      error: 'Illegal input',
      close: 'Close this dialog'
    },
    upload: {
      deleteTip: 'press delete to remove',
      delete: 'Delete',
      preview: 'Preview',
      continue: 'Continue'
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}',
      defaultRangeStartLabel: 'pick start value',
      defaultRangeEndLabel: 'pick end value'
    },
    table: {
      emptyText: 'No Data',
      confirmFilter: 'Confirm',
      resetFilter: 'Reset',
      clearFilter: 'All',
      sumText: 'Sum'
    },
    tour: { next: 'Next', previous: 'Previous', finish: 'Finish' },
    tree: { emptyText: 'No Data' },
    transfer: {
      noMatch: 'No matching data',
      noData: 'No data',
      titles: ['List 1', 'List 2'],
      filterPlaceholder: 'Enter keyword',
      noCheckedFormat: '{total} items',
      hasCheckedFormat: '{checked}/{total} checked'
    },
    image: { error: 'FAILED' },
    pageHeader: { title: 'Back' },
    popconfirm: { confirmButtonText: 'Yes', cancelButtonText: 'No' },
    carousel: {
      leftArrow: 'Carousel arrow left',
      rightArrow: 'Carousel arrow right',
      indicator: 'Carousel switch to index {index}'
    }
  }
}
const xn = (e) => (t, n) => An(t, n, g(e)),
  An = (e, t, n) =>
    ht(n, e, e).replace(/\{(\w+)\}/g, (r, s) => {
      var a
      return `${(a = t?.[s]) != null ? a : `{${s}}`}`
    }),
  Nn = (e) => {
    const t = S(() => g(e).name),
      n = Gt(e) ? e : M(e)
    return { lang: t, locale: n, t: xn(e) }
  },
  yt = Symbol('localeContextKey'),
  Pn = (e) => {
    const t = e || ue(yt, M())
    return Nn(S(() => t.value || vn))
  },
  _n = ['', 'default', 'small', 'large'],
  Bs = bn({ type: String, values: _n, required: !1 }),
  gt = Symbol('size'),
  Ds = () => {
    const e = ue(gt, {})
    return S(() => g(e.size) || '')
  },
  bt = Symbol('emptyValuesContextKey'),
  kn = ['', void 0, null],
  Fn = void 0,
  Us = Le({
    emptyValues: Array,
    valueOnClear: {
      type: [String, Number, Boolean, Function],
      default: void 0,
      validator: (e) => (V(e) ? !e() : !e)
    }
  }),
  Ms = (e, t) => {
    const n = ke() ? ue(bt, M({})) : M({}),
      r = S(() => e.emptyValues || n.value.emptyValues || kn),
      s = S(() =>
        V(e.valueOnClear)
          ? e.valueOnClear()
          : e.valueOnClear !== void 0
            ? e.valueOnClear
            : V(n.value.valueOnClear)
              ? n.value.valueOnClear()
              : n.value.valueOnClear !== void 0
                ? n.value.valueOnClear
                : Fn
      ),
      a = (o) => r.value.includes(o)
    return (
      r.value.includes(s.value),
      { emptyValues: r, valueOnClear: s, isEmptyValue: a }
    )
  },
  $e = (e) => Object.keys(e),
  Is = (e, t, n) => ({
    get value() {
      return ht(e, t, n)
    },
    set value(r) {
      On(e, t, r)
    }
  }),
  ie = M()
function wt(e, t = void 0) {
  const n = ke() ? ue(mt, ie) : ie
  return e
    ? S(() => {
        var r, s
        return (s = (r = n.value) == null ? void 0 : r[e]) != null ? s : t
      })
    : n
}
function Ln(e, t) {
  const n = wt(),
    r = ft(
      e,
      S(() => {
        var l
        return ((l = n.value) == null ? void 0 : l.namespace) || wn
      })
    ),
    s = Pn(
      S(() => {
        var l
        return (l = n.value) == null ? void 0 : l.locale
      })
    ),
    a = cn(
      S(() => {
        var l
        return ((l = n.value) == null ? void 0 : l.zIndex) || un
      })
    ),
    o = S(() => {
      var l
      return g(t) || ((l = n.value) == null ? void 0 : l.size) || ''
    })
  return Bn(S(() => g(n) || {})), { ns: r, locale: s, zIndex: a, size: o }
}
const Bn = (e, t, n = !1) => {
    var r
    const s = !!ke(),
      a = s ? wt() : void 0,
      o = (r = void 0) != null ? r : s ? Xt : void 0
    if (!o) return
    const l = S(() => {
      const f = g(e)
      return a?.value ? Dn(a.value, f) : f
    })
    return (
      o(mt, l),
      o(
        yt,
        S(() => l.value.locale)
      ),
      o(
        Sn,
        S(() => l.value.namespace)
      ),
      o(
        fn,
        S(() => l.value.zIndex)
      ),
      o(gt, { size: S(() => l.value.size || '') }),
      o(
        bt,
        S(() => ({
          emptyValues: l.value.emptyValues,
          valueOnClear: l.value.valueOnClear
        }))
      ),
      (n || !ie.value) && (ie.value = l.value),
      l
    )
  },
  Dn = (e, t) => {
    const n = [...new Set([...$e(e), ...$e(t)])],
      r = {}
    for (const s of n) r[s] = t[s] !== void 0 ? t[s] : e[s]
    return r
  },
  Un = Le({
    value: { type: [String, Number], default: '' },
    max: { type: Number, default: 99 },
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      values: ['primary', 'success', 'warning', 'info', 'danger'],
      default: 'danger'
    },
    showZero: { type: Boolean, default: !0 },
    color: String,
    badgeStyle: { type: ae([String, Object, Array]) },
    offset: { type: ae(Array), default: [0, 0] },
    badgeClass: { type: String }
  }),
  Mn = fe({ name: 'ElBadge' }),
  In = fe({
    ...Mn,
    props: Un,
    setup(e, { expose: t }) {
      const n = e,
        r = ft('badge'),
        s = S(() =>
          n.isDot
            ? ''
            : Z(n.value) && Z(n.max)
              ? n.max < n.value
                ? `${n.max}+`
                : `${n.value}`
              : `${n.value}`
        ),
        a = S(() => {
          var o, l, f, u, c
          return [
            {
              backgroundColor: n.color,
              marginRight: ze(
                -((l = (o = n.offset) == null ? void 0 : o[0]) != null ? l : 0)
              ),
              marginTop: ze(
                (u = (f = n.offset) == null ? void 0 : f[1]) != null ? u : 0
              )
            },
            (c = n.badgeStyle) != null ? c : {}
          ]
        })
      return (
        t({ content: s }),
        (o, l) => (
          I(),
          Ce(
            'div',
            { class: j(g(r).b()) },
            [
              Re(o.$slots, 'default'),
              Fe(
                lt,
                {
                  name: `${g(r).namespace.value}-zoom-in-center`,
                  persisted: ''
                },
                {
                  default: ne(() => [
                    st(
                      Oe(
                        'sup',
                        {
                          class: j([
                            g(r).e('content'),
                            g(r).em('content', o.type),
                            g(r).is('fixed', !!o.$slots.default),
                            g(r).is('dot', o.isDot),
                            g(r).is('hide-zero', !o.showZero && n.value === 0),
                            o.badgeClass
                          ]),
                          style: ot(g(a))
                        },
                        [
                          Re(o.$slots, 'content', { value: g(s) }, () => [
                            Zt(at(g(s)), 1)
                          ])
                        ],
                        6
                      ),
                      [[it, !o.hidden && (g(s) || o.isDot || o.$slots.content)]]
                    )
                  ]),
                  _: 3
                },
                8,
                ['name']
              )
            ],
            2
          )
        )
      )
    }
  })
var jn = dt(In, [['__file', 'badge.vue']])
const zn = En(jn),
  k = {},
  St = ['primary', 'success', 'info', 'warning', 'error'],
  A = dn({
    customClass: '',
    dangerouslyUseHTMLString: !1,
    duration: 3e3,
    icon: void 0,
    id: '',
    message: '',
    onClose: void 0,
    showClose: !1,
    type: 'info',
    plain: !1,
    offset: 16,
    zIndex: 0,
    grouping: !1,
    repeatNum: 1,
    appendTo: pt ? document.body : void 0
  }),
  qn = Le({
    customClass: { type: String, default: A.customClass },
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: A.dangerouslyUseHTMLString
    },
    duration: { type: Number, default: A.duration },
    icon: { type: pn, default: A.icon },
    id: { type: String, default: A.id },
    message: { type: ae([String, Object, Function]), default: A.message },
    onClose: { type: ae(Function), default: A.onClose },
    showClose: { type: Boolean, default: A.showClose },
    type: { type: String, values: St, default: A.type },
    plain: { type: Boolean, default: A.plain },
    offset: { type: Number, default: A.offset },
    zIndex: { type: Number, default: A.zIndex },
    grouping: { type: Boolean, default: A.grouping },
    repeatNum: { type: Number, default: A.repeatNum }
  }),
  $n = { destroy: () => !0 },
  B = Yt([]),
  Hn = (e) => {
    const t = B.findIndex((s) => s.id === e),
      n = B[t]
    let r
    return t > 0 && (r = B[t - 1]), { current: n, prev: r }
  },
  Vn = (e) => {
    const { prev: t } = Hn(e)
    return t ? t.vm.exposed.bottom.value : 0
  },
  Jn = (e, t) => (B.findIndex((r) => r.id === e) > 0 ? 16 : t),
  Kn = fe({ name: 'ElMessage' }),
  Wn = fe({
    ...Kn,
    props: qn,
    emits: $n,
    setup(e, { expose: t, emit: n }) {
      const r = e,
        { Close: s } = yn,
        a = M(!1),
        { ns: o, zIndex: l } = Ln('message'),
        { currentZIndex: f, nextZIndex: u } = l,
        c = M(),
        d = M(!1),
        b = M(0)
      let E
      const p = S(() =>
          r.type ? (r.type === 'error' ? 'danger' : r.type) : 'info'
        ),
        h = S(() => {
          const w = r.type
          return { [o.bm('icon', w)]: w && je[w] }
        }),
        m = S(() => r.icon || je[r.type] || ''),
        T = S(() => Vn(r.id)),
        C = S(() => Jn(r.id, r.offset) + T.value),
        O = S(() => b.value + C.value),
        F = S(() => ({ top: `${C.value}px`, zIndex: f.value }))
      function v() {
        r.duration !== 0 &&
          ({ stop: E } = Tn(() => {
            _()
          }, r.duration))
      }
      function L() {
        E?.()
      }
      function _() {
        ;(d.value = !1),
          sn(() => {
            var w
            a.value || ((w = r.onClose) == null || w.call(r), n('destroy'))
          })
      }
      function H({ code: w }) {
        w === gn.esc && _()
      }
      return (
        Qt(() => {
          v(), u(), (d.value = !0)
        }),
        en(
          () => r.repeatNum,
          () => {
            L(), v()
          }
        ),
        mn(document, 'keydown', H),
        hn(c, () => {
          b.value = c.value.getBoundingClientRect().height
        }),
        t({ visible: d, bottom: O, close: _ }),
        (w, _s) => (
          I(),
          G(
            lt,
            {
              name: g(o).b('fade'),
              onBeforeEnter: (Wt) => (a.value = !0),
              onBeforeLeave: w.onClose,
              onAfterLeave: (Wt) => w.$emit('destroy'),
              persisted: ''
            },
            {
              default: ne(() => [
                st(
                  Oe(
                    'div',
                    {
                      id: w.id,
                      ref_key: 'messageRef',
                      ref: c,
                      class: j([
                        g(o).b(),
                        { [g(o).m(w.type)]: w.type },
                        g(o).is('closable', w.showClose),
                        g(o).is('plain', w.plain),
                        w.customClass
                      ]),
                      style: ot(g(F)),
                      role: 'alert',
                      onMouseenter: L,
                      onMouseleave: v
                    },
                    [
                      w.repeatNum > 1
                        ? (I(),
                          G(
                            g(zn),
                            {
                              key: 0,
                              value: w.repeatNum,
                              type: g(p),
                              class: j(g(o).e('badge'))
                            },
                            null,
                            8,
                            ['value', 'type', 'class']
                          ))
                        : te('v-if', !0),
                      g(m)
                        ? (I(),
                          G(
                            g(qe),
                            { key: 1, class: j([g(o).e('icon'), g(h)]) },
                            { default: ne(() => [(I(), G(tn(g(m))))]), _: 1 },
                            8,
                            ['class']
                          ))
                        : te('v-if', !0),
                      Re(w.$slots, 'default', {}, () => [
                        w.dangerouslyUseHTMLString
                          ? (I(),
                            Ce(
                              nn,
                              { key: 1 },
                              [
                                te(
                                  " Caution here, message could've been compromised, never use user's input as message "
                                ),
                                Oe(
                                  'p',
                                  {
                                    class: j(g(o).e('content')),
                                    innerHTML: w.message
                                  },
                                  null,
                                  10,
                                  ['innerHTML']
                                )
                              ],
                              2112
                            ))
                          : (I(),
                            Ce(
                              'p',
                              { key: 0, class: j(g(o).e('content')) },
                              at(w.message),
                              3
                            ))
                      ]),
                      w.showClose
                        ? (I(),
                          G(
                            g(qe),
                            {
                              key: 2,
                              class: j(g(o).e('closeBtn')),
                              onClick: rn(_, ['stop'])
                            },
                            { default: ne(() => [Fe(g(s))]), _: 1 },
                            8,
                            ['class', 'onClick']
                          ))
                        : te('v-if', !0)
                    ],
                    46,
                    ['id']
                  ),
                  [[it, d.value]]
                )
              ]),
              _: 3
            },
            8,
            ['name', 'onBeforeEnter', 'onBeforeLeave', 'onAfterLeave']
          )
        )
      )
    }
  })
var Gn = dt(Wn, [['__file', 'message.vue']])
let Xn = 1
const Et = (e) => {
    const t = !e || Me(e) || ct(e) || V(e) ? { message: e } : e,
      n = { ...A, ...t }
    if (!n.appendTo) n.appendTo = document.body
    else if (Me(n.appendTo)) {
      let r = document.querySelector(n.appendTo)
      Cn(r) || (r = document.body), (n.appendTo = r)
    }
    return (
      we(k.grouping) && !n.grouping && (n.grouping = k.grouping),
      Z(k.duration) && n.duration === 3e3 && (n.duration = k.duration),
      Z(k.offset) && n.offset === 16 && (n.offset = k.offset),
      we(k.showClose) && !n.showClose && (n.showClose = k.showClose),
      we(k.plain) && !n.plain && (n.plain = k.plain),
      n
    )
  },
  Zn = (e) => {
    const t = B.indexOf(e)
    if (t === -1) return
    B.splice(t, 1)
    const { handler: n } = e
    n.close()
  },
  Yn = ({ appendTo: e, ...t }, n) => {
    const r = `message_${Xn++}`,
      s = t.onClose,
      a = document.createElement('div'),
      o = {
        ...t,
        id: r,
        onClose: () => {
          s?.(), Zn(c)
        },
        onDestroy: () => {
          Ie(null, a)
        }
      },
      l = Fe(
        Gn,
        o,
        V(o.message) || ct(o.message)
          ? { default: V(o.message) ? o.message : () => o.message }
          : null
      )
    ;(l.appContext = n || J._context),
      Ie(l, a),
      e.appendChild(a.firstElementChild)
    const f = l.component,
      c = {
        id: r,
        vnode: l,
        vm: f,
        handler: {
          close: () => {
            f.exposed.close()
          }
        },
        props: l.component.props
      }
    return c
  },
  J = (e = {}, t) => {
    if (!pt) return { close: () => {} }
    const n = Et(e)
    if (n.grouping && B.length) {
      const s = B.find(({ vnode: a }) => {
        var o
        return ((o = a.props) == null ? void 0 : o.message) === n.message
      })
      if (s) return (s.props.repeatNum += 1), (s.props.type = n.type), s.handler
    }
    if (Z(k.max) && B.length >= k.max) return { close: () => {} }
    const r = Yn(n, t)
    return B.push(r), r.handler
  }
St.forEach((e) => {
  J[e] = (t = {}, n) => {
    const r = Et(t)
    return J({ ...r, type: e }, n)
  }
})
function Qn(e) {
  const t = [...B]
  for (const n of t) (!e || e === n.props.type) && n.handler.close()
}
J.closeAll = Qn
J._context = null
const He = Rn(J, '$message')
function Tt(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: er } = Object.prototype,
  { getPrototypeOf: Be } = Object,
  { iterator: de, toStringTag: Ct } = Symbol,
  pe = ((e) => (t) => {
    const n = er.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  D = (e) => ((e = e.toLowerCase()), (t) => pe(t) === e),
  me = (e) => (t) => typeof t === e,
  { isArray: K } = Array,
  Y = me('undefined')
function tr(e) {
  return (
    e !== null &&
    !Y(e) &&
    e.constructor !== null &&
    !Y(e.constructor) &&
    N(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const Rt = D('ArrayBuffer')
function nr(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Rt(e.buffer)),
    t
  )
}
const rr = me('string'),
  N = me('function'),
  Ot = me('number'),
  he = (e) => e !== null && typeof e == 'object',
  sr = (e) => e === !0 || e === !1,
  re = (e) => {
    if (pe(e) !== 'object') return !1
    const t = Be(e)
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Ct in e) &&
      !(de in e)
    )
  },
  or = D('Date'),
  ar = D('File'),
  ir = D('Blob'),
  lr = D('FileList'),
  cr = (e) => he(e) && N(e.pipe),
  ur = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (N(e.append) &&
          ((t = pe(e)) === 'formdata' ||
            (t === 'object' &&
              N(e.toString) &&
              e.toString() === '[object FormData]'))))
    )
  },
  fr = D('URLSearchParams'),
  [dr, pr, mr, hr] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    D
  ),
  yr = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function Q(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let r, s
  if ((typeof e != 'object' && (e = [e]), K(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e)
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = a.length
    let l
    for (r = 0; r < o; r++) (l = a[r]), t.call(null, e[l], l, e)
  }
}
function vt(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    s
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s
  return null
}
const z =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  xt = (e) => !Y(e) && e !== z
function ve() {
  const { caseless: e } = (xt(this) && this) || {},
    t = {},
    n = (r, s) => {
      const a = (e && vt(t, s)) || s
      re(t[a]) && re(r)
        ? (t[a] = ve(t[a], r))
        : re(r)
          ? (t[a] = ve({}, r))
          : K(r)
            ? (t[a] = r.slice())
            : (t[a] = r)
    }
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Q(arguments[r], n)
  return t
}
const gr = (e, t, n, { allOwnKeys: r } = {}) => (
    Q(
      t,
      (s, a) => {
        n && N(s) ? (e[a] = Tt(s, n)) : (e[a] = s)
      },
      { allOwnKeys: r }
    ),
    e
  ),
  br = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  wr = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  Sr = (e, t, n, r) => {
    let s, a, o
    const l = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
        (o = s[a]), (!r || r(o, e, t)) && !l[o] && ((t[o] = e[o]), (l[o] = !0))
      e = n !== !1 && Be(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  Er = (e, t, n) => {
    ;(e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  Tr = (e) => {
    if (!e) return null
    if (K(e)) return e
    let t = e.length
    if (!Ot(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  Cr = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Be(Uint8Array)),
  Rr = (e, t) => {
    const r = (e && e[de]).call(e)
    let s
    for (; (s = r.next()) && !s.done; ) {
      const a = s.value
      t.call(e, a[0], a[1])
    }
  },
  Or = (e, t) => {
    let n
    const r = []
    for (; (n = e.exec(t)) !== null; ) r.push(n)
    return r
  },
  vr = D('HTMLFormElement'),
  xr = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s
    }),
  Ve = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Ar = D('RegExp'),
  At = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    Q(n, (s, a) => {
      let o
      ;(o = t(s, a, e)) !== !1 && (r[a] = o || s)
    }),
      Object.defineProperties(e, r)
  },
  Nr = (e) => {
    At(e, (t, n) => {
      if (N(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1
      const r = e[n]
      if (N(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  Pr = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((a) => {
          n[a] = !0
        })
      }
    return K(e) ? r(e) : r(String(e).split(t)), n
  },
  _r = () => {},
  kr = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t)
function Fr(e) {
  return !!(e && N(e.append) && e[Ct] === 'FormData' && e[de])
}
const Lr = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (he(r)) {
          if (t.indexOf(r) >= 0) return
          if (!('toJSON' in r)) {
            t[s] = r
            const a = K(r) ? [] : {}
            return (
              Q(r, (o, l) => {
                const f = n(o, s + 1)
                !Y(f) && (a[l] = f)
              }),
              (t[s] = void 0),
              a
            )
          }
        }
        return r
      }
    return n(e, 0)
  },
  Br = D('AsyncFunction'),
  Dr = (e) => e && (he(e) || N(e)) && N(e.then) && N(e.catch),
  Nt = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            z.addEventListener(
              'message',
              ({ source: s, data: a }) => {
                s === z && a === n && r.length && r.shift()()
              },
              !1
            ),
            (s) => {
              r.push(s), z.postMessage(n, '*')
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == 'function',
    N(z.postMessage)
  ),
  Ur =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(z)
      : (typeof process < 'u' && process.nextTick) || Nt,
  Mr = (e) => e != null && N(e[de]),
  i = {
    isArray: K,
    isArrayBuffer: Rt,
    isBuffer: tr,
    isFormData: ur,
    isArrayBufferView: nr,
    isString: rr,
    isNumber: Ot,
    isBoolean: sr,
    isObject: he,
    isPlainObject: re,
    isReadableStream: dr,
    isRequest: pr,
    isResponse: mr,
    isHeaders: hr,
    isUndefined: Y,
    isDate: or,
    isFile: ar,
    isBlob: ir,
    isRegExp: Ar,
    isFunction: N,
    isStream: cr,
    isURLSearchParams: fr,
    isTypedArray: Cr,
    isFileList: lr,
    forEach: Q,
    merge: ve,
    extend: gr,
    trim: yr,
    stripBOM: br,
    inherits: wr,
    toFlatObject: Sr,
    kindOf: pe,
    kindOfTest: D,
    endsWith: Er,
    toArray: Tr,
    forEachEntry: Rr,
    matchAll: Or,
    isHTMLForm: vr,
    hasOwnProperty: Ve,
    hasOwnProp: Ve,
    reduceDescriptors: At,
    freezeMethods: Nr,
    toObjectSet: Pr,
    toCamelCase: xr,
    noop: _r,
    toFiniteNumber: kr,
    findKey: vt,
    global: z,
    isContextDefined: xt,
    isSpecCompliantForm: Fr,
    toJSONObject: Lr,
    isAsyncFn: Br,
    isThenable: Dr,
    setImmediate: Nt,
    asap: Ur,
    isIterable: Mr
  }
function y(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null))
}
i.inherits(y, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: i.toJSONObject(this.config),
      code: this.code,
      status: this.status
    }
  }
})
const Pt = y.prototype,
  _t = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
].forEach((e) => {
  _t[e] = { value: e }
})
Object.defineProperties(y, _t)
Object.defineProperty(Pt, 'isAxiosError', { value: !0 })
y.from = (e, t, n, r, s, a) => {
  const o = Object.create(Pt)
  return (
    i.toFlatObject(
      e,
      o,
      function (f) {
        return f !== Error.prototype
      },
      (l) => l !== 'isAxiosError'
    ),
    y.call(o, e.message, t, n, r, s),
    (o.cause = e),
    (o.name = e.name),
    a && Object.assign(o, a),
    o
  )
}
const Ir = null
function xe(e) {
  return i.isPlainObject(e) || i.isArray(e)
}
function kt(e) {
  return i.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function Je(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, a) {
          return (s = kt(s)), !n && a ? '[' + s + ']' : s
        })
        .join(n ? '.' : '')
    : t
}
function jr(e) {
  return i.isArray(e) && !e.some(xe)
}
const zr = i.toFlatObject(i, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function ye(e, t, n) {
  if (!i.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = i.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (h, m) {
        return !i.isUndefined(m[h])
      }
    ))
  const r = n.metaTokens,
    s = n.visitor || c,
    a = n.dots,
    o = n.indexes,
    f = (n.Blob || (typeof Blob < 'u' && Blob)) && i.isSpecCompliantForm(t)
  if (!i.isFunction(s)) throw new TypeError('visitor must be a function')
  function u(p) {
    if (p === null) return ''
    if (i.isDate(p)) return p.toISOString()
    if (i.isBoolean(p)) return p.toString()
    if (!f && i.isBlob(p))
      throw new y('Blob is not supported. Use a Buffer instead.')
    return i.isArrayBuffer(p) || i.isTypedArray(p)
      ? f && typeof Blob == 'function'
        ? new Blob([p])
        : Buffer.from(p)
      : p
  }
  function c(p, h, m) {
    let T = p
    if (p && !m && typeof p == 'object') {
      if (i.endsWith(h, '{}'))
        (h = r ? h : h.slice(0, -2)), (p = JSON.stringify(p))
      else if (
        (i.isArray(p) && jr(p)) ||
        ((i.isFileList(p) || i.endsWith(h, '[]')) && (T = i.toArray(p)))
      )
        return (
          (h = kt(h)),
          T.forEach(function (O, F) {
            !(i.isUndefined(O) || O === null) &&
              t.append(
                o === !0 ? Je([h], F, a) : o === null ? h : h + '[]',
                u(O)
              )
          }),
          !1
        )
    }
    return xe(p) ? !0 : (t.append(Je(m, h, a), u(p)), !1)
  }
  const d = [],
    b = Object.assign(zr, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: xe
    })
  function E(p, h) {
    if (!i.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error('Circular reference detected in ' + h.join('.'))
      d.push(p),
        i.forEach(p, function (T, C) {
          ;(!(i.isUndefined(T) || T === null) &&
            s.call(t, T, i.isString(C) ? C.trim() : C, h, b)) === !0 &&
            E(T, h ? h.concat(C) : [C])
        }),
        d.pop()
    }
  }
  if (!i.isObject(e)) throw new TypeError('data must be an object')
  return E(e), t
}
function Ke(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0'
  }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r]
  })
}
function De(e, t) {
  ;(this._pairs = []), e && ye(e, this, t)
}
const Ft = De.prototype
Ft.append = function (t, n) {
  this._pairs.push([t, n])
}
Ft.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ke)
      }
    : Ke
  return this._pairs
    .map(function (s) {
      return n(s[0]) + '=' + n(s[1])
    }, '')
    .join('&')
}
function qr(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function Lt(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || qr
  i.isFunction(n) && (n = { serialize: n })
  const s = n && n.serialize
  let a
  if (
    (s
      ? (a = s(t, n))
      : (a = i.isURLSearchParams(t) ? t.toString() : new De(t, n).toString(r)),
    a)
  ) {
    const o = e.indexOf('#')
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + a)
  }
  return e
}
class We {
  constructor() {
    this.handlers = []
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    i.forEach(this.handlers, function (r) {
      r !== null && t(r)
    })
  }
}
const Bt = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  $r = typeof URLSearchParams < 'u' ? URLSearchParams : De,
  Hr = typeof FormData < 'u' ? FormData : null,
  Vr = typeof Blob < 'u' ? Blob : null,
  Jr = {
    isBrowser: !0,
    classes: { URLSearchParams: $r, FormData: Hr, Blob: Vr },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  },
  Ue = typeof window < 'u' && typeof document < 'u',
  Ae = (typeof navigator == 'object' && navigator) || void 0,
  Kr =
    Ue &&
    (!Ae || ['ReactNative', 'NativeScript', 'NS'].indexOf(Ae.product) < 0),
  Wr =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  Gr = (Ue && window.location.href) || 'http://localhost',
  Xr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ue,
        hasStandardBrowserEnv: Kr,
        hasStandardBrowserWebWorkerEnv: Wr,
        navigator: Ae,
        origin: Gr
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  x = { ...Xr, ...Jr }
function Zr(e, t) {
  return ye(
    e,
    new x.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, a) {
          return x.isNode && i.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : a.defaultVisitor.apply(this, arguments)
        }
      },
      t
    )
  )
}
function Yr(e) {
  return i
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function Qr(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const s = n.length
  let a
  for (r = 0; r < s; r++) (a = n[r]), (t[a] = e[a])
  return t
}
function Dt(e) {
  function t(n, r, s, a) {
    let o = n[a++]
    if (o === '__proto__') return !0
    const l = Number.isFinite(+o),
      f = a >= n.length
    return (
      (o = !o && i.isArray(s) ? s.length : o),
      f
        ? (i.hasOwnProp(s, o) ? (s[o] = [s[o], r]) : (s[o] = r), !l)
        : ((!s[o] || !i.isObject(s[o])) && (s[o] = []),
          t(n, r, s[o], a) && i.isArray(s[o]) && (s[o] = Qr(s[o])),
          !l)
    )
  }
  if (i.isFormData(e) && i.isFunction(e.entries)) {
    const n = {}
    return (
      i.forEachEntry(e, (r, s) => {
        t(Yr(r), s, n, 0)
      }),
      n
    )
  }
  return null
}
function es(e, t, n) {
  if (i.isString(e))
    try {
      return (t || JSON.parse)(e), i.trim(e)
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r
    }
  return (n || JSON.stringify)(e)
}
const ee = {
  transitional: Bt,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        s = r.indexOf('application/json') > -1,
        a = i.isObject(t)
      if ((a && i.isHTMLForm(t) && (t = new FormData(t)), i.isFormData(t)))
        return s ? JSON.stringify(Dt(t)) : t
      if (
        i.isArrayBuffer(t) ||
        i.isBuffer(t) ||
        i.isStream(t) ||
        i.isFile(t) ||
        i.isBlob(t) ||
        i.isReadableStream(t)
      )
        return t
      if (i.isArrayBufferView(t)) return t.buffer
      if (i.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        )
      let l
      if (a) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return Zr(t, this.formSerializer).toString()
        if ((l = i.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const f = this.env && this.env.FormData
          return ye(l ? { 'files[]': t } : t, f && new f(), this.formSerializer)
        }
      }
      return a || s ? (n.setContentType('application/json', !1), es(t)) : t
    }
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ee.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === 'json'
      if (i.isResponse(t) || i.isReadableStream(t)) return t
      if (t && i.isString(t) && ((r && !this.responseType) || s)) {
        const o = !(n && n.silentJSONParsing) && s
        try {
          return JSON.parse(t)
        } catch (l) {
          if (o)
            throw l.name === 'SyntaxError'
              ? y.from(l, y.ERR_BAD_RESPONSE, this, null, this.response)
              : l
        }
      }
      return t
    }
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: x.classes.FormData, Blob: x.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0
    }
  }
}
i.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  ee.headers[e] = {}
})
const ts = i.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
  ]),
  ns = (e) => {
    const t = {}
    let n, r, s
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            ;(s = o.indexOf(':')),
              (n = o.substring(0, s).trim().toLowerCase()),
              (r = o.substring(s + 1).trim()),
              !(!n || (t[n] && ts[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r))
          }),
      t
    )
  },
  Ge = Symbol('internals')
function X(e) {
  return e && String(e).trim().toLowerCase()
}
function se(e) {
  return e === !1 || e == null ? e : i.isArray(e) ? e.map(se) : String(e)
}
function rs(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  for (; (r = n.exec(e)); ) t[r[1]] = r[2]
  return t
}
const ss = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function Se(e, t, n, r, s) {
  if (i.isFunction(r)) return r.call(this, t, n)
  if ((s && (t = n), !!i.isString(t))) {
    if (i.isString(r)) return t.indexOf(r) !== -1
    if (i.isRegExp(r)) return r.test(t)
  }
}
function os(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function as(e, t) {
  const n = i.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, a, o) {
        return this[r].call(this, t, s, a, o)
      },
      configurable: !0
    })
  })
}
let P = class {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const s = this
    function a(l, f, u) {
      const c = X(f)
      if (!c) throw new Error('header name must be a non-empty string')
      const d = i.findKey(s, c)
      ;(!d || s[d] === void 0 || u === !0 || (u === void 0 && s[d] !== !1)) &&
        (s[d || f] = se(l))
    }
    const o = (l, f) => i.forEach(l, (u, c) => a(u, c, f))
    if (i.isPlainObject(t) || t instanceof this.constructor) o(t, n)
    else if (i.isString(t) && (t = t.trim()) && !ss(t)) o(ns(t), n)
    else if (i.isObject(t) && i.isIterable(t)) {
      let l = {},
        f,
        u
      for (const c of t) {
        if (!i.isArray(c))
          throw TypeError('Object iterator must return a key-value pair')
        l[(u = c[0])] = (f = l[u])
          ? i.isArray(f)
            ? [...f, c[1]]
            : [f, c[1]]
          : c[1]
      }
      o(l, n)
    } else t != null && a(n, t, r)
    return this
  }
  get(t, n) {
    if (((t = X(t)), t)) {
      const r = i.findKey(this, t)
      if (r) {
        const s = this[r]
        if (!n) return s
        if (n === !0) return rs(s)
        if (i.isFunction(n)) return n.call(this, s, r)
        if (i.isRegExp(n)) return n.exec(s)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = X(t)), t)) {
      const r = i.findKey(this, t)
      return !!(r && this[r] !== void 0 && (!n || Se(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let s = !1
    function a(o) {
      if (((o = X(o)), o)) {
        const l = i.findKey(r, o)
        l && (!n || Se(r, r[l], l, n)) && (delete r[l], (s = !0))
      }
    }
    return i.isArray(t) ? t.forEach(a) : a(t), s
  }
  clear(t) {
    const n = Object.keys(this)
    let r = n.length,
      s = !1
    for (; r--; ) {
      const a = n[r]
      ;(!t || Se(this, this[a], a, t, !0)) && (delete this[a], (s = !0))
    }
    return s
  }
  normalize(t) {
    const n = this,
      r = {}
    return (
      i.forEach(this, (s, a) => {
        const o = i.findKey(r, a)
        if (o) {
          ;(n[o] = se(s)), delete n[a]
          return
        }
        const l = t ? os(a) : String(a).trim()
        l !== a && delete n[a], (n[l] = se(s)), (r[l] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      i.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && i.isArray(r) ? r.join(', ') : r)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
  }
  getSetCookie() {
    return this.get('set-cookie') || []
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const r = new this(t)
    return n.forEach((s) => r.set(s)), r
  }
  static accessor(t) {
    const r = (this[Ge] = this[Ge] = { accessors: {} }).accessors,
      s = this.prototype
    function a(o) {
      const l = X(o)
      r[l] || (as(s, o), (r[l] = !0))
    }
    return i.isArray(t) ? t.forEach(a) : a(t), this
  }
}
P.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization'
])
i.reduceDescriptors(P.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1)
  return {
    get: () => e,
    set(r) {
      this[n] = r
    }
  }
})
i.freezeMethods(P)
function Ee(e, t) {
  const n = this || ee,
    r = t || n,
    s = P.from(r.headers)
  let a = r.data
  return (
    i.forEach(e, function (l) {
      a = l.call(n, a, s.normalize(), t ? t.status : void 0)
    }),
    s.normalize(),
    a
  )
}
function Ut(e) {
  return !!(e && e.__CANCEL__)
}
function W(e, t, n) {
  y.call(this, e ?? 'canceled', y.ERR_CANCELED, t, n),
    (this.name = 'CanceledError')
}
i.inherits(W, y, { __CANCEL__: !0 })
function Mt(e, t, n) {
  const r = n.config.validateStatus
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new y(
          'Request failed with status code ' + n.status,
          [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      )
}
function is(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function ls(e, t) {
  e = e || 10
  const n = new Array(e),
    r = new Array(e)
  let s = 0,
    a = 0,
    o
  return (
    (t = t !== void 0 ? t : 1e3),
    function (f) {
      const u = Date.now(),
        c = r[a]
      o || (o = u), (n[s] = f), (r[s] = u)
      let d = a,
        b = 0
      for (; d !== s; ) (b += n[d++]), (d = d % e)
      if (((s = (s + 1) % e), s === a && (a = (a + 1) % e), u - o < t)) return
      const E = c && u - c
      return E ? Math.round((b * 1e3) / E) : void 0
    }
  )
}
function cs(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    a
  const o = (u, c = Date.now()) => {
    ;(n = c), (s = null), a && (clearTimeout(a), (a = null)), e.apply(null, u)
  }
  return [
    (...u) => {
      const c = Date.now(),
        d = c - n
      d >= r
        ? o(u, c)
        : ((s = u),
          a ||
            (a = setTimeout(() => {
              ;(a = null), o(s)
            }, r - d)))
    },
    () => s && o(s)
  ]
}
const le = (e, t, n = 3) => {
    let r = 0
    const s = ls(50, 250)
    return cs((a) => {
      const o = a.loaded,
        l = a.lengthComputable ? a.total : void 0,
        f = o - r,
        u = s(f),
        c = o <= l
      r = o
      const d = {
        loaded: o,
        total: l,
        progress: l ? o / l : void 0,
        bytes: f,
        rate: u || void 0,
        estimated: u && l && c ? (l - o) / u : void 0,
        event: a,
        lengthComputable: l != null,
        [t ? 'download' : 'upload']: !0
      }
      e(d)
    }, n)
  },
  Xe = (e, t) => {
    const n = e != null
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]]
  },
  Ze =
    (e) =>
    (...t) =>
      i.asap(() => e(...t)),
  us = x.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, x.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(x.origin),
        x.navigator && /(msie|trident)/i.test(x.navigator.userAgent)
      )
    : () => !0,
  fs = x.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, a) {
          const o = [e + '=' + encodeURIComponent(t)]
          i.isNumber(n) && o.push('expires=' + new Date(n).toGMTString()),
            i.isString(r) && o.push('path=' + r),
            i.isString(s) && o.push('domain=' + s),
            a === !0 && o.push('secure'),
            (document.cookie = o.join('; '))
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
          )
          return t ? decodeURIComponent(t[3]) : null
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5)
        }
      }
    : {
        write() {},
        read() {
          return null
        },
        remove() {}
      }
function ds(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function ps(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function It(e, t, n) {
  let r = !ds(t)
  return e && (r || n == !1) ? ps(e, t) : t
}
const Ye = (e) => (e instanceof P ? { ...e } : e)
function $(e, t) {
  t = t || {}
  const n = {}
  function r(u, c, d, b) {
    return i.isPlainObject(u) && i.isPlainObject(c)
      ? i.merge.call({ caseless: b }, u, c)
      : i.isPlainObject(c)
        ? i.merge({}, c)
        : i.isArray(c)
          ? c.slice()
          : c
  }
  function s(u, c, d, b) {
    if (i.isUndefined(c)) {
      if (!i.isUndefined(u)) return r(void 0, u, d, b)
    } else return r(u, c, d, b)
  }
  function a(u, c) {
    if (!i.isUndefined(c)) return r(void 0, c)
  }
  function o(u, c) {
    if (i.isUndefined(c)) {
      if (!i.isUndefined(u)) return r(void 0, u)
    } else return r(void 0, c)
  }
  function l(u, c, d) {
    if (d in t) return r(u, c)
    if (d in e) return r(void 0, u)
  }
  const f = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (u, c, d) => s(Ye(u), Ye(c), d, !0)
  }
  return (
    i.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = f[c] || s,
        b = d(e[c], t[c], c)
      ;(i.isUndefined(b) && d !== l) || (n[c] = b)
    }),
    n
  )
}
const jt = (e) => {
    const t = $({}, e)
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: a,
      headers: o,
      auth: l
    } = t
    ;(t.headers = o = P.from(o)),
      (t.url = Lt(
        It(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer
      )),
      l &&
        o.set(
          'Authorization',
          'Basic ' +
            btoa(
              (l.username || '') +
                ':' +
                (l.password ? unescape(encodeURIComponent(l.password)) : '')
            )
        )
    let f
    if (i.isFormData(n)) {
      if (x.hasStandardBrowserEnv || x.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0)
      else if ((f = o.getContentType()) !== !1) {
        const [u, ...c] = f
          ? f
              .split(';')
              .map((d) => d.trim())
              .filter(Boolean)
          : []
        o.setContentType([u || 'multipart/form-data', ...c].join('; '))
      }
    }
    if (
      x.hasStandardBrowserEnv &&
      (r && i.isFunction(r) && (r = r(t)), r || (r !== !1 && us(t.url)))
    ) {
      const u = s && a && fs.read(a)
      u && o.set(s, u)
    }
    return t
  },
  ms = typeof XMLHttpRequest < 'u',
  hs =
    ms &&
    function (e) {
      return new Promise(function (n, r) {
        const s = jt(e)
        let a = s.data
        const o = P.from(s.headers).normalize()
        let { responseType: l, onUploadProgress: f, onDownloadProgress: u } = s,
          c,
          d,
          b,
          E,
          p
        function h() {
          E && E(),
            p && p(),
            s.cancelToken && s.cancelToken.unsubscribe(c),
            s.signal && s.signal.removeEventListener('abort', c)
        }
        let m = new XMLHttpRequest()
        m.open(s.method.toUpperCase(), s.url, !0), (m.timeout = s.timeout)
        function T() {
          if (!m) return
          const O = P.from(
              'getAllResponseHeaders' in m && m.getAllResponseHeaders()
            ),
            v = {
              data:
                !l || l === 'text' || l === 'json'
                  ? m.responseText
                  : m.response,
              status: m.status,
              statusText: m.statusText,
              headers: O,
              config: e,
              request: m
            }
          Mt(
            function (_) {
              n(_), h()
            },
            function (_) {
              r(_), h()
            },
            v
          ),
            (m = null)
        }
        'onloadend' in m
          ? (m.onloadend = T)
          : (m.onreadystatechange = function () {
              !m ||
                m.readyState !== 4 ||
                (m.status === 0 &&
                  !(m.responseURL && m.responseURL.indexOf('file:') === 0)) ||
                setTimeout(T)
            }),
          (m.onabort = function () {
            m && (r(new y('Request aborted', y.ECONNABORTED, e, m)), (m = null))
          }),
          (m.onerror = function () {
            r(new y('Network Error', y.ERR_NETWORK, e, m)), (m = null)
          }),
          (m.ontimeout = function () {
            let F = s.timeout
              ? 'timeout of ' + s.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const v = s.transitional || Bt
            s.timeoutErrorMessage && (F = s.timeoutErrorMessage),
              r(
                new y(
                  F,
                  v.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
                  e,
                  m
                )
              ),
              (m = null)
          }),
          a === void 0 && o.setContentType(null),
          'setRequestHeader' in m &&
            i.forEach(o.toJSON(), function (F, v) {
              m.setRequestHeader(v, F)
            }),
          i.isUndefined(s.withCredentials) ||
            (m.withCredentials = !!s.withCredentials),
          l && l !== 'json' && (m.responseType = s.responseType),
          u && (([b, p] = le(u, !0)), m.addEventListener('progress', b)),
          f &&
            m.upload &&
            (([d, E] = le(f)),
            m.upload.addEventListener('progress', d),
            m.upload.addEventListener('loadend', E)),
          (s.cancelToken || s.signal) &&
            ((c = (O) => {
              m &&
                (r(!O || O.type ? new W(null, e, m) : O), m.abort(), (m = null))
            }),
            s.cancelToken && s.cancelToken.subscribe(c),
            s.signal &&
              (s.signal.aborted ? c() : s.signal.addEventListener('abort', c)))
        const C = is(s.url)
        if (C && x.protocols.indexOf(C) === -1) {
          r(new y('Unsupported protocol ' + C + ':', y.ERR_BAD_REQUEST, e))
          return
        }
        m.send(a || null)
      })
    },
  ys = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : [])
    if (t || n) {
      let r = new AbortController(),
        s
      const a = function (u) {
        if (!s) {
          ;(s = !0), l()
          const c = u instanceof Error ? u : this.reason
          r.abort(
            c instanceof y ? c : new W(c instanceof Error ? c.message : c)
          )
        }
      }
      let o =
        t &&
        setTimeout(() => {
          ;(o = null), a(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT))
        }, t)
      const l = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((u) => {
            u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener('abort', a)
          }),
          (e = null))
      }
      e.forEach((u) => u.addEventListener('abort', a))
      const { signal: f } = r
      return (f.unsubscribe = () => i.asap(l)), f
    }
  },
  gs = function* (e, t) {
    let n = e.byteLength
    if (n < t) {
      yield e
      return
    }
    let r = 0,
      s
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s)
  },
  bs = async function* (e, t) {
    for await (const n of ws(e)) yield* gs(n, t)
  },
  ws = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e
      return
    }
    const t = e.getReader()
    try {
      for (;;) {
        const { done: n, value: r } = await t.read()
        if (n) break
        yield r
      }
    } finally {
      await t.cancel()
    }
  },
  Qe = (e, t, n, r) => {
    const s = bs(e, t)
    let a = 0,
      o,
      l = (f) => {
        o || ((o = !0), r && r(f))
      }
    return new ReadableStream(
      {
        async pull(f) {
          try {
            const { done: u, value: c } = await s.next()
            if (u) {
              l(), f.close()
              return
            }
            let d = c.byteLength
            if (n) {
              let b = (a += d)
              n(b)
            }
            f.enqueue(new Uint8Array(c))
          } catch (u) {
            throw (l(u), u)
          }
        },
        cancel(f) {
          return l(f), s.return()
        }
      },
      { highWaterMark: 2 }
    )
  },
  ge =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  zt = ge && typeof ReadableStream == 'function',
  Ss =
    ge &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  qt = (e, ...t) => {
    try {
      return !!e(...t)
    } catch {
      return !1
    }
  },
  Es =
    zt &&
    qt(() => {
      let e = !1
      const t = new Request(x.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half'
        }
      }).headers.has('Content-Type')
      return e && !t
    }),
  et = 64 * 1024,
  Ne = zt && qt(() => i.isReadableStream(new Response('').body)),
  ce = { stream: Ne && ((e) => e.body) }
ge &&
  ((e) => {
    ;['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !ce[t] &&
        (ce[t] = i.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new y(
                `Response type '${t}' is not supported`,
                y.ERR_NOT_SUPPORT,
                r
              )
            })
    })
  })(new Response())
const Ts = async (e) => {
    if (e == null) return 0
    if (i.isBlob(e)) return e.size
    if (i.isSpecCompliantForm(e))
      return (
        await new Request(x.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength
    if (i.isArrayBufferView(e) || i.isArrayBuffer(e)) return e.byteLength
    if ((i.isURLSearchParams(e) && (e = e + ''), i.isString(e)))
      return (await Ss(e)).byteLength
  },
  Cs = async (e, t) => {
    const n = i.toFiniteNumber(e.getContentLength())
    return n ?? Ts(t)
  },
  Rs =
    ge &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: a,
        timeout: o,
        onDownloadProgress: l,
        onUploadProgress: f,
        responseType: u,
        headers: c,
        withCredentials: d = 'same-origin',
        fetchOptions: b
      } = jt(e)
      u = u ? (u + '').toLowerCase() : 'text'
      let E = ys([s, a && a.toAbortSignal()], o),
        p
      const h =
        E &&
        E.unsubscribe &&
        (() => {
          E.unsubscribe()
        })
      let m
      try {
        if (
          f &&
          Es &&
          n !== 'get' &&
          n !== 'head' &&
          (m = await Cs(c, r)) !== 0
        ) {
          let v = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
            L
          if (
            (i.isFormData(r) &&
              (L = v.headers.get('content-type')) &&
              c.setContentType(L),
            v.body)
          ) {
            const [_, H] = Xe(m, le(Ze(f)))
            r = Qe(v.body, et, _, H)
          }
        }
        i.isString(d) || (d = d ? 'include' : 'omit')
        const T = 'credentials' in Request.prototype
        p = new Request(t, {
          ...b,
          signal: E,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: r,
          duplex: 'half',
          credentials: T ? d : void 0
        })
        let C = await fetch(p, b)
        const O = Ne && (u === 'stream' || u === 'response')
        if (Ne && (l || (O && h))) {
          const v = {}
          ;['status', 'statusText', 'headers'].forEach((w) => {
            v[w] = C[w]
          })
          const L = i.toFiniteNumber(C.headers.get('content-length')),
            [_, H] = (l && Xe(L, le(Ze(l), !0))) || []
          C = new Response(
            Qe(C.body, et, _, () => {
              H && H(), h && h()
            }),
            v
          )
        }
        u = u || 'text'
        let F = await ce[i.findKey(ce, u) || 'text'](C, e)
        return (
          !O && h && h(),
          await new Promise((v, L) => {
            Mt(v, L, {
              data: F,
              headers: P.from(C.headers),
              status: C.status,
              statusText: C.statusText,
              config: e,
              request: p
            })
          })
        )
      } catch (T) {
        throw (
          (h && h(),
          T && T.name === 'TypeError' && /Load failed|fetch/i.test(T.message)
            ? Object.assign(new y('Network Error', y.ERR_NETWORK, e, p), {
                cause: T.cause || T
              })
            : y.from(T, T && T.code, e, p))
        )
      }
    }),
  Pe = { http: Ir, xhr: hs, fetch: Rs }
i.forEach(Pe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const tt = (e) => `- ${e}`,
  Os = (e) => i.isFunction(e) || e === null || e === !1,
  $t = {
    getAdapter: (e) => {
      e = i.isArray(e) ? e : [e]
      const { length: t } = e
      let n, r
      const s = {}
      for (let a = 0; a < t; a++) {
        n = e[a]
        let o
        if (
          ((r = n),
          !Os(n) && ((r = Pe[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new y(`Unknown adapter '${o}'`)
        if (r) break
        s[o || '#' + a] = r
      }
      if (!r) {
        const a = Object.entries(s).map(
          ([l, f]) =>
            `adapter ${l} ` +
            (f === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        )
        let o = t
          ? a.length > 1
            ? `since :
` +
              a.map(tt).join(`
`)
            : ' ' + tt(a[0])
          : 'as no adapter specified'
        throw new y(
          'There is no suitable adapter to dispatch the request ' + o,
          'ERR_NOT_SUPPORT'
        )
      }
      return r
    },
    adapters: Pe
  }
function Te(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new W(null, e)
}
function nt(e) {
  return (
    Te(e),
    (e.headers = P.from(e.headers)),
    (e.data = Ee.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    $t
      .getAdapter(e.adapter || ee.adapter)(e)
      .then(
        function (r) {
          return (
            Te(e),
            (r.data = Ee.call(e, e.transformResponse, r)),
            (r.headers = P.from(r.headers)),
            r
          )
        },
        function (r) {
          return (
            Ut(r) ||
              (Te(e),
              r &&
                r.response &&
                ((r.response.data = Ee.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = P.from(r.response.headers)))),
            Promise.reject(r)
          )
        }
      )
  )
}
const Ht = '1.10.0',
  be = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    be[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  }
)
const rt = {}
be.transitional = function (t, n, r) {
  function s(a, o) {
    return (
      '[Axios v' +
      Ht +
      "] Transitional option '" +
      a +
      "'" +
      o +
      (r ? '. ' + r : '')
    )
  }
  return (a, o, l) => {
    if (t === !1)
      throw new y(
        s(o, ' has been removed' + (n ? ' in ' + n : '')),
        y.ERR_DEPRECATED
      )
    return (
      n &&
        !rt[o] &&
        ((rt[o] = !0),
        console.warn(
          s(
            o,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(a, o, l) : !0
    )
  }
}
be.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0)
}
function vs(e, t, n) {
  if (typeof e != 'object')
    throw new y('options must be an object', y.ERR_BAD_OPTION_VALUE)
  const r = Object.keys(e)
  let s = r.length
  for (; s-- > 0; ) {
    const a = r[s],
      o = t[a]
    if (o) {
      const l = e[a],
        f = l === void 0 || o(l, a, e)
      if (f !== !0)
        throw new y('option ' + a + ' must be ' + f, y.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new y('Unknown option ' + a, y.ERR_BAD_OPTION)
  }
}
const oe = { assertOptions: vs, validators: be },
  U = oe.validators
let q = class {
  constructor(t) {
    ;(this.defaults = t || {}),
      (this.interceptors = { request: new We(), response: new We() })
  }
  async request(t, n) {
    try {
      return await this._request(t, n)
    } catch (r) {
      if (r instanceof Error) {
        let s = {}
        Error.captureStackTrace ? Error.captureStackTrace(s) : (s = new Error())
        const a = s.stack ? s.stack.replace(/^.+\n/, '') : ''
        try {
          r.stack
            ? a &&
              !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, '')) &&
              (r.stack +=
                `
` + a)
            : (r.stack = a)
        } catch {}
      }
      throw r
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = $(this.defaults, n))
    const { transitional: r, paramsSerializer: s, headers: a } = n
    r !== void 0 &&
      oe.assertOptions(
        r,
        {
          silentJSONParsing: U.transitional(U.boolean),
          forcedJSONParsing: U.transitional(U.boolean),
          clarifyTimeoutError: U.transitional(U.boolean)
        },
        !1
      ),
      s != null &&
        (i.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : oe.assertOptions(
              s,
              { encode: U.function, serialize: U.function },
              !0
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      oe.assertOptions(
        n,
        {
          baseUrl: U.spelling('baseURL'),
          withXsrfToken: U.spelling('withXSRFToken')
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let o = a && i.merge(a.common, a[n.method])
    a &&
      i.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (p) => {
          delete a[p]
        }
      ),
      (n.headers = P.concat(o, a))
    const l = []
    let f = !0
    this.interceptors.request.forEach(function (h) {
      ;(typeof h.runWhen == 'function' && h.runWhen(n) === !1) ||
        ((f = f && h.synchronous), l.unshift(h.fulfilled, h.rejected))
    })
    const u = []
    this.interceptors.response.forEach(function (h) {
      u.push(h.fulfilled, h.rejected)
    })
    let c,
      d = 0,
      b
    if (!f) {
      const p = [nt.bind(this), void 0]
      for (
        p.unshift.apply(p, l),
          p.push.apply(p, u),
          b = p.length,
          c = Promise.resolve(n);
        d < b;

      )
        c = c.then(p[d++], p[d++])
      return c
    }
    b = l.length
    let E = n
    for (d = 0; d < b; ) {
      const p = l[d++],
        h = l[d++]
      try {
        E = p(E)
      } catch (m) {
        h.call(this, m)
        break
      }
    }
    try {
      c = nt.call(this, E)
    } catch (p) {
      return Promise.reject(p)
    }
    for (d = 0, b = u.length; d < b; ) c = c.then(u[d++], u[d++])
    return c
  }
  getUri(t) {
    t = $(this.defaults, t)
    const n = It(t.baseURL, t.url, t.allowAbsoluteUrls)
    return Lt(n, t.params, t.paramsSerializer)
  }
}
i.forEach(['delete', 'get', 'head', 'options'], function (t) {
  q.prototype[t] = function (n, r) {
    return this.request($(r || {}, { method: t, url: n, data: (r || {}).data }))
  }
})
i.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (a, o, l) {
      return this.request(
        $(l || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: a,
          data: o
        })
      )
    }
  }
  ;(q.prototype[t] = n()), (q.prototype[t + 'Form'] = n(!0))
})
let xs = class Vt {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise(function (a) {
      n = a
    })
    const r = this
    this.promise.then((s) => {
      if (!r._listeners) return
      let a = r._listeners.length
      for (; a-- > 0; ) r._listeners[a](s)
      r._listeners = null
    }),
      (this.promise.then = (s) => {
        let a
        const o = new Promise((l) => {
          r.subscribe(l), (a = l)
        }).then(s)
        return (
          (o.cancel = function () {
            r.unsubscribe(a)
          }),
          o
        )
      }),
      t(function (a, o, l) {
        r.reason || ((r.reason = new W(a, o, l)), n(r.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r)
      }
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    )
  }
  static source() {
    let t
    return {
      token: new Vt(function (s) {
        t = s
      }),
      cancel: t
    }
  }
}
function As(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function Ns(e) {
  return i.isObject(e) && e.isAxiosError === !0
}
const _e = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
}
Object.entries(_e).forEach(([e, t]) => {
  _e[t] = e
})
function Jt(e) {
  const t = new q(e),
    n = Tt(q.prototype.request, t)
  return (
    i.extend(n, q.prototype, t, { allOwnKeys: !0 }),
    i.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Jt($(e, s))
    }),
    n
  )
}
const R = Jt(ee)
R.Axios = q
R.CanceledError = W
R.CancelToken = xs
R.isCancel = Ut
R.VERSION = Ht
R.toFormData = ye
R.AxiosError = y
R.Cancel = R.CanceledError
R.all = function (t) {
  return Promise.all(t)
}
R.spread = As
R.isAxiosError = Ns
R.mergeConfig = $
R.AxiosHeaders = P
R.formToJSON = (e) => Dt(i.isHTMLForm(e) ? new FormData(e) : e)
R.getAdapter = $t.getAdapter
R.HttpStatusCode = _e
R.default = R
const {
    Axios: qs,
    AxiosError: $s,
    CanceledError: Hs,
    isCancel: Vs,
    CancelToken: Js,
    VERSION: Ks,
    all: Ws,
    Cancel: Gs,
    isAxiosError: Xs,
    spread: Zs,
    toFormData: Ys,
    AxiosHeaders: Qs,
    HttpStatusCode: eo,
    formToJSON: to,
    getAdapter: no,
    mergeConfig: ro
  } = R,
  Ps = 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  Kt = R.create({ baseURL: Ps, timeout: 1e5 })
Kt.interceptors.request.use(
  (e) => {
    const n = ut().userInfo.token
    return n && (e.headers.Authorization = `Bearer ${n}`), e
  },
  (e) => Promise.reject(e)
)
Kt.interceptors.response.use(
  (e) =>
    e.data.code === '1'
      ? e
      : (He({ message: e.data.message || '服务异常', type: 'error' }),
        Promise.reject(e.data)),
  (e) => (
    He({ message: e.response.data.message || '服务异常', type: 'error' }),
    console.log(e),
    e.response?.status === 401 && (ut().removeUserInfo(), on.push('/login')),
    Promise.reject(e)
  )
)
export {
  He as E,
  zn as a,
  Ln as b,
  _n as c,
  Bs as d,
  ht as e,
  wt as f,
  Is as g,
  Ds as h,
  Kt as i,
  Ms as j,
  Us as k,
  Pn as u
}
