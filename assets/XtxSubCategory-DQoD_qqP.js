import './base-BSl8DOKd.js'
import { E as j, a as M } from './breadcrumb-item-DgelPev1.js'
import {
  Q as k,
  S as R,
  r as h,
  B as G,
  A as B,
  C as X,
  _ as V,
  c as p,
  o as d,
  a as y,
  t as x,
  p as F,
  F as T,
  j as I,
  d as n,
  m as D,
  k as q,
  w as v,
  g as _,
  f as N,
  T as K
} from './index-62YaKhWX.js'
import { i as H } from './request-B0GuyAcH.js'
import { E as Q } from './checkbox-BuLe0ygX.js'
import { E as Y, a as J } from './tab-pane-DOIyEGel.js'
import { G as W } from './GoodsItem-CB4kddJi.js'
import { t as Z } from './error-Cq9Fpw4b.js'
import { g as tt } from './scroll-3lXb5zxa.js'
import { t as $ } from './throttle-aZyllSdW.js'
import './aria-DW8X8pJS.js'
import './index-n_Z_joOJ.js'
import './event-BB_Ol6Sd.js'
import './use-form-common-props-9xqr1Sov.js'
import './index-Cq-mCDaI.js'
import './constants-Dnj8X3EN.js'
import './isEqual-M3J1smy5.js'
import './index-CdlSpGPi.js'
import './strings-B4ayariU.js'
import './index-DaO4KZCs.js'
import './vnode-CiKbLLZx.js'
import './_baseClone-C1WxYl8n.js'
import './_initCloneObject-CxZz_v-E.js'
import './isPlainObject-CkbmvWQx.js'
import './debounce-CGA4J1no.js'
const L = (t) => {
    let e = 0,
      o = t
    for (; o; ) (e += o.offsetTop), (o = o.offsetParent)
    return e
  },
  et = (t, e) => Math.abs(L(t) - L(e)),
  u = 'ElInfiniteScroll',
  st = 50,
  ot = 200,
  at = 0,
  nt = {
    delay: { type: Number, default: ot },
    distance: { type: Number, default: at },
    disabled: { type: Boolean, default: !1 },
    immediate: { type: Boolean, default: !0 }
  },
  w = (t, e) =>
    Object.entries(nt).reduce((o, [s, a]) => {
      var r, l
      const { type: f, default: i } = a,
        m = t.getAttribute(`infinite-scroll-${s}`)
      let c = (l = (r = e[m]) != null ? r : m) != null ? l : i
      return (
        (c = c === 'false' ? !1 : c),
        (c = f(c)),
        (o[s] = Number.isNaN(c) ? i : c),
        o
      )
    }, {}),
  O = (t) => {
    const { observer: e } = t[u]
    e && (e.disconnect(), delete t[u].observer)
  },
  rt = (t, e) => {
    const {
        container: o,
        containerEl: s,
        instance: a,
        observer: r,
        lastScrollTop: l
      } = t[u],
      { disabled: f, distance: i } = w(t, a),
      { clientHeight: m, scrollHeight: c, scrollTop: b } = s,
      g = b - l
    if (((t[u].lastScrollTop = b), r || f || g < 0)) return
    let S = !1
    if (o === t) S = c - (m + b) <= i
    else {
      const { clientTop: P, scrollHeight: z } = t,
        U = et(t, s)
      S = b + m >= U + P + z - i
    }
    S && e.call(a)
  }
function E(t, e) {
  const { containerEl: o, instance: s } = t[u],
    { disabled: a } = w(t, s)
  a ||
    o.clientHeight === 0 ||
    (o.scrollHeight <= o.clientHeight ? e.call(s) : O(t))
}
const lt = {
    async mounted(t, e) {
      const { instance: o, value: s } = e
      R(s) || Z(u, "'v-infinite-scroll' binding value must be a function"),
        await k()
      const { delay: a, immediate: r } = w(t, o),
        l = tt(t, !0),
        f = l === window ? document.documentElement : l,
        i = $(rt.bind(null, t, s), a)
      if (l) {
        if (
          ((t[u] = {
            instance: o,
            container: l,
            containerEl: f,
            delay: a,
            cb: s,
            onScroll: i,
            lastScrollTop: f.scrollTop
          }),
          r)
        ) {
          const m = new MutationObserver($(E.bind(null, t, s), st))
          ;(t[u].observer = m),
            m.observe(t, { childList: !0, subtree: !0 }),
            E(t, s)
        }
        l.addEventListener('scroll', i)
      }
    },
    unmounted(t) {
      if (!t[u]) return
      const { container: e, onScroll: o } = t[u]
      e?.removeEventListener('scroll', o), O(t)
    },
    async updated(t) {
      if (!t[u]) await k()
      else {
        const { containerEl: e, cb: o, observer: s } = t[u]
        e.clientHeight && s && E(t, o)
      }
    }
  },
  C = lt
C.install = (t) => {
  t.directive('InfiniteScroll', C)
}
const it = C,
  ct = (t) => H.get('/category/sub/filter', { params: { id: t } }),
  ut = (t) => H.post('/category/goods/temporary', t),
  dt = () => {
    const t = h({}),
      e = G().params.subCateId,
      o = async (s) => {
        const {
          data: { result: a }
        } = await ct(s)
        t.value = a
      }
    return (
      B(() => o(e)),
      X((s) => {
        o(s.params.subCateId)
      }),
      { subCate: t }
    )
  },
  mt = { class: 'flex' },
  pt = { class: 'w-[80px] text-[#999]' },
  ft = { class: 'flex-1 flex flex-wrap gap-x-[30px] gap-y-[20px]' },
  _t = ['onClick'],
  bt = {
    __name: 'FilterList',
    props: { title: String, items: Array },
    setup(t) {
      const e = h('all')
      return (o, s) => (
        d(),
        p('div', mt, [
          y('span', pt, x(t.title) + ':', 1),
          y('ul', ft, [
            y(
              'li',
              {
                class: F({ active: e.value === 'all' }),
                onClick: s[0] || (s[0] = (a) => (e.value = 'all'))
              },
              ' 全部 ',
              2
            ),
            (d(!0),
            p(
              T,
              null,
              I(
                t.items,
                (a) => (
                  d(),
                  p(
                    'li',
                    {
                      key: a.id,
                      class: F([
                        'max-w-[112px] truncate',
                        { active: e.value === a.id }
                      ]),
                      onClick: (r) => (e.value = a.id)
                    },
                    x(a.name),
                    11,
                    _t
                  )
                )
              ),
              128
            ))
          ])
        ])
      )
    }
  },
  A = V(bt, [['__scopeId', 'data-v-b6465185']]),
  gt = { class: 'bg-white p-[25px] flex flex-col gap-[20px]' },
  vt = {
    __name: 'SubFilter',
    props: { brands: Array, saleProperties: Array },
    setup(t) {
      return (e, o) => (
        d(),
        p('div', gt, [
          n(A, { title: '品牌', items: t.brands }, null, 8, ['items']),
          (d(!0),
          p(
            T,
            null,
            I(
              t.saleProperties,
              (s) => (
                d(),
                D(
                  A,
                  { key: s.id, title: s.name, items: s.properties },
                  null,
                  8,
                  ['title', 'items']
                )
              )
            ),
            128
          ))
        ])
      )
    }
  },
  yt = { class: 'my-6 p-[25px] bg-white' },
  ht = { class: 'flex' },
  xt = { class: 'ml-auto' },
  St = { class: 'mt-[20px] grid grid-cols-5 justify-items-center' },
  Et = {
    __name: 'SubProduct',
    props: { categoryId: String },
    setup(t) {
      const e = h([]),
        o = async () => {
          const {
            data: { result: l }
          } = await ut(r.value)
          e.value = [...e.value, ...l.items]
        }
      B(() => o())
      const s = () => {
          r.value.page++, o()
        },
        r = h({
          categoryId: t.categoryId,
          page: 1,
          pageSize: 20,
          sortField: ''
        })
      return (l, f) => {
        const i = Y,
          m = J,
          c = Q,
          b = it
        return (
          d(),
          p('div', yt, [
            y('div', ht, [
              y('div', null, [
                n(
                  m,
                  {
                    modelValue: r.value.sortField,
                    'onUpdate:modelValue':
                      f[0] || (f[0] = (g) => (r.value.sortField = g)),
                    type: 'card',
                    onTabChange: o
                  },
                  {
                    default: v(() => [
                      n(i, { label: '默认排序', name: '' }),
                      n(i, { label: '最新商品', name: 'publishTime' }),
                      n(i, { label: '最高人气', name: 'orderNum' }),
                      n(i, { label: '评论最多', name: 'evaluateNum' })
                    ]),
                    _: 1
                  },
                  8,
                  ['modelValue']
                )
              ]),
              y('div', xt, [
                n(c, { label: '仅显示有货商品', size: 'large' }),
                n(c, { label: '仅显示特惠商品', size: 'large' })
              ])
            ]),
            q(
              (d(),
              p('div', St, [
                (d(!0),
                p(
                  T,
                  null,
                  I(
                    e.value,
                    (g) => (
                      d(), D(W, { key: g.id, item: g }, null, 8, ['item'])
                    )
                  ),
                  128
                ))
              ])),
              [[b, s]]
            )
          ])
        )
      }
    }
  },
  Ct = { class: 'xtx-container' },
  Tt = {
    __name: 'XtxSubCategory',
    setup(t) {
      const { subCate: e } = dt()
      return (o, s) => {
        const a = M,
          r = j
        return (
          d(),
          p('div', Ct, [
            n(
              r,
              { separator: '>', class: 'mx-2 my-10' },
              {
                default: v(() => [
                  n(
                    a,
                    { to: '/' },
                    {
                      default: v(() => s[0] || (s[0] = [N('首页')])),
                      _: 1,
                      __: [0]
                    }
                  ),
                  n(
                    a,
                    { to: `/category/${_(e).parentId}` },
                    { default: v(() => [N(x(_(e).parentName), 1)]), _: 1 },
                    8,
                    ['to']
                  ),
                  n(a, null, {
                    default: v(() => [
                      n(
                        K,
                        { name: 'slide-right', mode: 'out-in' },
                        {
                          default: v(() => [
                            (d(), p('span', { key: _(e).id }, x(_(e).name), 1))
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }
            ),
            n(
              vt,
              { brands: _(e).brands, 'sale-properties': _(e).saleProperties },
              null,
              8,
              ['brands', 'sale-properties']
            ),
            n(Et, { 'category-id': _(e).id }, null, 8, ['category-id'])
          ])
        )
      }
    }
  },
  Jt = V(Tt, [['__scopeId', 'data-v-f49fd396']])
export { Jt as default }
