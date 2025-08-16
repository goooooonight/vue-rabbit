import { E as I, a as L } from './base-BSl8DOKd.js'
import { g as $, E as R, a as F } from './home-Cc7lWpvj.js'
import { E as N, a as V } from './breadcrumb-item-DgelPev1.js'
import {
  _ as g,
  e as h,
  c as i,
  o as e,
  a as n,
  d as r,
  t as f,
  w as o,
  f as y,
  g as d,
  F as m,
  j as p,
  r as b,
  A as k,
  B as D,
  C as T,
  m as x,
  x as j,
  l as z,
  T as G,
  k as P
} from './index-62YaKhWX.js'
import { G as U } from './GoodsItem-CB4kddJi.js'
import { a as X } from './category-D4LaOi0H.js'
import './aria-DW8X8pJS.js'
import './index-DaO4KZCs.js'
import './vnode-CiKbLLZx.js'
import './event-BB_Ol6Sd.js'
import './throttle-aZyllSdW.js'
import './debounce-CGA4J1no.js'
import './request-B0GuyAcH.js'
const A = { class: 'h-[458px] bg-white my-6 py-[20px]' },
  M = { class: 'relative mb-10' },
  O = { class: 'text-center text-[28px] leading-[60px] text-[#666666]' },
  S = { class: 'flex' },
  q = {
    __name: 'CatePanel',
    props: { children: Object },
    setup(s) {
      return (l, t) => {
        const u = I,
          c = h('RouterLink')
        return (
          e(),
          i('div', A, [
            n('div', M, [
              n('h3', O, ' - ' + f(s.children.name) + ' - ', 1),
              t[1] ||
                (t[1] = n(
                  'p',
                  { class: 'text-center text-[20px] text-[#999]' },
                  '这里四字，这里也是',
                  -1
                )),
              r(
                c,
                {
                  to: `/category/sub/${s.children.id}`,
                  class:
                    'check-all absolute top-0 right-[20px] text-lg flex items-center gap-1'
                },
                {
                  default: o(() => [
                    t[0] || (t[0] = y('查看全部')),
                    r(
                      u,
                      { color: '#999' },
                      { default: o(() => [r(d(L))]), _: 1 }
                    )
                  ]),
                  _: 1,
                  __: [0]
                },
                8,
                ['to']
              )
            ]),
            n('ul', S, [
              (e(!0),
              i(
                m,
                null,
                p(
                  s.children.goods,
                  (_) => (
                    e(),
                    i('li', { key: _.id }, [
                      r(
                        c,
                        { to: '/' },
                        {
                          default: o(() => [
                            r(U, { item: _ }, null, 8, ['item'])
                          ]),
                          _: 2
                        },
                        1024
                      )
                    ])
                  )
                ),
                128
              ))
            ])
          ])
        )
      }
    }
  },
  H = g(q, [['__scopeId', 'data-v-af46e7f5']]),
  J = () => {
    const s = b([]),
      l = async () => {
        const {
          data: { result: t }
        } = await $('2')
        s.value = t
      }
    return k(() => l()), { bannerList: s }
  },
  K = () => {
    const s = b({}),
      l = D().params.cateId,
      t = async (u) => {
        const {
          data: { result: c }
        } = await X(u)
        s.value = c
      }
    return (
      k(() => t(l)),
      T((u) => {
        t(u.params.cateId)
      }),
      { cate: s }
    )
  },
  Q = { class: 'xtx-container' },
  W = ['src'],
  Y = { class: 'h-[260px] bg-white my-6' },
  Z = { class: 'flex' },
  tt = { alt: '', class: 'w-[100px] h-[100px]' },
  et = { class: 'leading-[40px] text-[16px]' },
  st = {
    __name: 'XtxCategory',
    setup(s) {
      const { cate: l } = K(),
        { bannerList: t } = J()
      return (u, c) => {
        const _ = V,
          v = N,
          C = F,
          B = R,
          w = h('RouterLink'),
          E = z('img-lazy')
        return (
          e(),
          i('div', Q, [
            r(
              v,
              { separator: '>', class: 'mx-2 my-10' },
              {
                default: o(() => [
                  r(
                    _,
                    { to: '/' },
                    {
                      default: o(() => c[0] || (c[0] = [y('首页')])),
                      _: 1,
                      __: [0]
                    }
                  ),
                  r(_, null, {
                    default: o(() => [
                      r(
                        G,
                        { name: 'slide-right', mode: 'out-in' },
                        {
                          default: o(() => [
                            (e(), i('span', { key: d(l).id }, f(d(l).name), 1))
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
            d(t).length > 0
              ? (e(),
                x(
                  B,
                  { key: 0, height: '500px' },
                  {
                    default: o(() => [
                      (e(!0),
                      i(
                        m,
                        null,
                        p(
                          d(t),
                          (a) => (
                            e(),
                            x(
                              C,
                              { key: a.id },
                              {
                                default: o(() => [
                                  n(
                                    'img',
                                    { src: a.imgUrl, alt: '' },
                                    null,
                                    8,
                                    W
                                  )
                                ]),
                                _: 2
                              },
                              1024
                            )
                          )
                        ),
                        128
                      ))
                    ]),
                    _: 1
                  }
                ))
              : j('', !0),
            n('div', Y, [
              c[1] ||
                (c[1] = n(
                  'h3',
                  {
                    class:
                      'text-center text-[28px] leading-[100px] text-[#666666]'
                  },
                  ' 全部分类 ',
                  -1
                )),
              n('ul', Z, [
                (e(!0),
                i(
                  m,
                  null,
                  p(
                    d(l).children,
                    (a) => (
                      e(),
                      i('li', { key: a.id, class: 'w-[168px] h-[160px]' }, [
                        r(
                          w,
                          {
                            to: `/category/sub/${a.id}`,
                            class: 'flex flex-col items-center'
                          },
                          {
                            default: o(() => [
                              P(n('img', tt, null, 512), [[E, a.picture]]),
                              n('p', et, f(a.name), 1)
                            ]),
                            _: 2
                          },
                          1032,
                          ['to']
                        )
                      ])
                    )
                  ),
                  128
                ))
              ])
            ]),
            (e(!0),
            i(
              m,
              null,
              p(
                d(l).children,
                (a) => (
                  e(), x(H, { key: a.id, children: a }, null, 8, ['children'])
                )
              ),
              128
            ))
          ])
        )
      }
    }
  },
  ft = g(st, [['__scopeId', 'data-v-df35be57']])
export { ft as default }
