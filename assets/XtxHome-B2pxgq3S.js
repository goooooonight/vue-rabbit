import { E as N, a as T, d as D, e as q } from './base-Bes0XUun.js'
import {
  E as O,
  g as U,
  a as X,
  b as A,
  c as J,
  d as K
} from './home-DvSQs10U.js'
import {
  _ as L,
  s as R,
  r as b,
  q as j,
  e as S,
  l as w,
  c as n,
  o as e,
  a as t,
  k as $,
  F as v,
  j as y,
  d as l,
  w as i,
  f as g,
  t as d,
  m as B,
  g as f,
  v as Q,
  x as W,
  y as F,
  R as H,
  p as P
} from './index-DU_P6jZu.js'
import { u as G } from './category-BmXome1H.js'
import { a as Y, E as Z } from './button-ByJsP9uv.js'
import './aria-CnJd5Vss.js'
import './index-Ckf-fyZT.js'
import './vnode-DLkXDgL1.js'
import './event-BB_Ol6Sd.js'
import './throttle-BSmyBOmV.js'
import './debounce-BUz-fiHp.js'
import './request-FXAcKJdj.js'
import './category-CwYMqhg4.js'
import './index-BWDAezSb.js'
import './use-form-common-props-BOay2t_u.js'
import './index-D26JKrGB.js'
import './constants-Dnj8X3EN.js'
import './index-r5W6hzzQ.js'
const tt = {
    class: 'w-full h-full flex absolute top-0 left-0 z-998 pointer-events-none'
  },
  et = {
    class: 'w-[250px] h-full flex flex-col bg-black/85 pointer-events-auto'
  },
  st = ['onMouseenter'],
  ot = { class: 'flex gap-3 flex-wrap' },
  lt = { alt: '', class: 'w-[95px]' },
  nt = { class: 'flex-1 min-w-0' },
  at = { class: 'text-[16px] text-[#666]' },
  it = { class: 'text-[#999] truncate' },
  rt = { class: 'price text-[22px]' },
  ct = {
    __name: 'HomeCategory',
    setup(_) {
      const { cateList: a } = R(G()),
        m = b(''),
        s = j(() => a.value.find((p) => p.id === m.value)?.goods || [])
      let c = null
      const u = (C) => {
          c && (clearTimeout(c), (c = null)), (m.value = C)
        },
        o = () => {
          c = setTimeout(() => {
            m.value = ''
          }, 200)
        },
        r = () => {
          c && (clearTimeout(c), (c = null))
        },
        k = () => {
          m.value = ''
        }
      return (C, p) => {
        const h = S('RouterLink'),
          V = w('img-lazy')
        return (
          e(),
          n('div', tt, [
            t('ul', et, [
              (e(!0),
              n(
                v,
                null,
                y(
                  f(a),
                  (x) => (
                    e(),
                    n(
                      'li',
                      {
                        key: x.id,
                        class: 'flex-1 flex items-center pl-[40px]',
                        onMouseenter: (z) => u(x.id),
                        onMouseleave: o
                      },
                      [
                        l(
                          h,
                          { to: `/category/${x.id}`, class: 'text-lg mr-2' },
                          { default: i(() => [g(d(x.name), 1)]), _: 2 },
                          1032,
                          ['to']
                        ),
                        (e(!0),
                        n(
                          v,
                          null,
                          y(
                            x.children.slice(0, 2),
                            (z) => (
                              e(),
                              B(
                                h,
                                {
                                  key: z.id,
                                  to: `/category/sub/${z.id}`,
                                  class: 'mr-2'
                                },
                                { default: i(() => [g(d(z.name), 1)]), _: 2 },
                                1032,
                                ['to']
                              )
                            )
                          ),
                          128
                        ))
                      ],
                      40,
                      st
                    )
                  )
                ),
                128
              )),
              t(
                'li',
                {
                  class: 'flex-1 flex items-center pl-[40px]',
                  onMouseenter: p[0] || (p[0] = (x) => u('11')),
                  onMouseleave: o
                },
                [
                  l(
                    h,
                    { to: '/', class: 'text-lg mr-2' },
                    {
                      default: i(() => p[1] || (p[1] = [g('品牌')])),
                      _: 1,
                      __: [1]
                    }
                  ),
                  l(
                    h,
                    { to: '/', class: 'mr-2' },
                    {
                      default: i(() => p[2] || (p[2] = [g('品牌推荐')])),
                      _: 1,
                      __: [2]
                    }
                  )
                ],
                32
              )
            ]),
            $(
              t(
                'div',
                {
                  class: 'flex-1 bg-white/65 px-4 py-8 pointer-events-auto',
                  onMouseenter: r,
                  onMouseleave: k
                },
                [
                  p[4] ||
                    (p[4] = t(
                      'div',
                      { class: 'mb-8' },
                      [
                        t('h4', { class: 'text-2xl' }, [
                          g(' 分类推荐'),
                          t(
                            'small',
                            { class: 'ml-2 text-base text-gray-600' },
                            '根据您的购买或浏览记录推荐'
                          )
                        ])
                      ],
                      -1
                    )),
                  t('div', ot, [
                    (e(!0),
                    n(
                      v,
                      null,
                      y(
                        s.value,
                        (x) => (
                          e(),
                          n('div', { key: x.id }, [
                            l(
                              h,
                              {
                                to: `/goods/${x.id}`,
                                class:
                                  'w-[313px] h-[120px] bg-white hover:bg-[#e6faf5] border-[#eee] border-[1px] rounded-[2px] flex items-center gap-2 px-2'
                              },
                              {
                                default: i(() => [
                                  $(t('img', lt, null, 512), [[V, x.picture]]),
                                  t('div', nt, [
                                    t('h5', at, d(x.name), 1),
                                    t('p', it, d(x.desc), 1),
                                    t('span', rt, [
                                      p[3] ||
                                        (p[3] = t(
                                          'span',
                                          { class: 'text-lg' },
                                          '￥',
                                          -1
                                        )),
                                      g(d(x.price), 1)
                                    ])
                                  ])
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
                ],
                544
              ),
              [[Q, m.value]]
            )
          ])
        )
      }
    }
  },
  ut = L(ct, [['__scopeId', 'data-v-1ee2118b']]),
  _t = { class: 'xtx-container' },
  dt = { key: 0, class: 'relative' },
  pt = ['src'],
  mt = {
    __name: 'HomeBanner',
    setup(_) {
      const a = b([])
      return (
        (async () => {
          const {
            data: { result: s }
          } = await U('1')
          a.value = s
        })(),
        (s, c) => {
          const u = X,
            o = O
          return (
            e(),
            n('div', _t, [
              a.value.length > 0
                ? (e(),
                  n('div', dt, [
                    l(ut),
                    l(
                      o,
                      { height: '500px' },
                      {
                        default: i(() => [
                          (e(!0),
                          n(
                            v,
                            null,
                            y(
                              a.value,
                              (r) => (
                                e(),
                                B(
                                  u,
                                  { key: r.id },
                                  {
                                    default: i(() => [
                                      t(
                                        'img',
                                        { src: r.imgUrl, alt: '' },
                                        null,
                                        8,
                                        pt
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
                    )
                  ]))
                : W('', !0)
            ])
          )
        }
      )
    }
  },
  xt = L(mt, [['__scopeId', 'data-v-e2948239']]),
  ft = { class: 'xtx-container px-[10px]' },
  gt = { class: 'flex py-[40px]' },
  vt = { class: 'text-4xl' },
  ht = { class: 'ml-6 text-lg text-[#999]' },
  yt = { class: 'flex gap-2' },
  E = {
    __name: 'HomePanel',
    props: { title: String, subTitle: String },
    setup(_) {
      return (a, m) => (
        e(),
        n('div', ft, [
          t('div', gt, [
            t('h1', vt, [g(d(_.title), 1), t('small', ht, d(_.subTitle), 1)]),
            F(a.$slots, 'head')
          ]),
          t('div', yt, [F(a.$slots, 'itemList')])
        ])
      )
    }
  },
  bt = { class: 'bg-white' },
  $t = { alt: '', class: 'w-[306px] h-[306px]' },
  wt = {
    class: 'px-[25px] py-[10px] flex flex-col items-center justify-center gap-2'
  },
  kt = { class: 'truncate text-[22px] w-full' },
  Ct = { class: 'price text-[22px]' },
  Ht = {
    __name: 'HomeNew',
    setup(_) {
      const a = b([])
      return (
        (async () => {
          const {
            data: { result: s }
          } = await A('4')
          a.value = s
        })(),
        (s, c) => {
          const u = N,
            o = w('img-lazy')
          return (
            e(),
            n('div', bt, [
              l(
                E,
                { title: '新鲜好物', 'sub-title': '新鲜出炉 品质靠谱' },
                {
                  head: i(() => [
                    l(
                      f(H),
                      {
                        to: '/',
                        class:
                          'check-all ml-auto mt-auto text-lg flex items-center gap-1'
                      },
                      {
                        default: i(() => [
                          c[0] || (c[0] = g('查看全部')),
                          l(
                            u,
                            { color: '#999' },
                            { default: i(() => [l(f(T))]), _: 1 }
                          )
                        ]),
                        _: 1,
                        __: [0]
                      }
                    )
                  ]),
                  itemList: i(() => [
                    (e(!0),
                    n(
                      v,
                      null,
                      y(
                        a.value,
                        (r) => (
                          e(),
                          n(
                            'div',
                            {
                              class:
                                'w-[306px] h-[406px] bg-[#f0f9f4] transition-transform duration-300 hover:-translate-y-2 shadow-[0_3px_8px_rgb(0_0_0_/_20%)]',
                              key: r.id
                            },
                            [
                              l(
                                f(H),
                                { to: `/goods/${r.id}` },
                                {
                                  default: i(() => [
                                    $(t('img', $t, null, 512), [
                                      [o, r.picture]
                                    ]),
                                    t('div', wt, [
                                      t('p', kt, d(r.name), 1),
                                      t('span', Ct, '￥' + d(r.price), 1)
                                    ])
                                  ]),
                                  _: 2
                                },
                                1032,
                                ['to']
                              )
                            ]
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  _: 1
                }
              )
            ])
          )
        }
      )
    }
  },
  Lt = L(Ht, [['__scopeId', 'data-v-5bdbf5e0']]),
  zt = { class: 'bg-white' },
  Bt = { alt: '' },
  Et = {
    class: 'px-[25px] py-[10px] flex flex-col items-center justify-center gap-2'
  },
  It = { class: 'text-[22px]' },
  Tt = { class: 'text-[18px] text-[#999]' },
  Ft = {
    __name: 'HomeHot',
    setup(_) {
      const a = b([])
      return (
        (async () => {
          const {
            data: { result: s }
          } = await J()
          a.value = s
        })(),
        (s, c) => {
          const u = w('img-lazy')
          return (
            e(),
            n('div', zt, [
              l(
                E,
                { title: '人气推荐', subTitle: '人气爆款 不容错过' },
                {
                  itemList: i(() => [
                    (e(!0),
                    n(
                      v,
                      null,
                      y(
                        a.value,
                        (o) => (
                          e(),
                          n(
                            'div',
                            {
                              class:
                                'w-[306px] h-[406px] transition-transform duration-300 hover:-translate-y-2 shadow-[0_3px_8px_rgb(0_0_0_/_20%)]',
                              key: o.id
                            },
                            [
                              $(t('img', Bt, null, 512), [[u, o.picture]]),
                              t('div', Et, [
                                t('p', It, d(o.title), 1),
                                t('span', Tt, d(o.alt), 1)
                              ])
                            ]
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  _: 1
                }
              )
            ])
          )
        }
      )
    }
  },
  Mt = { alt: '', class: 'h-full' },
  M = 2,
  I = 5,
  Nt = {
    __name: 'HomeBrand',
    setup(_) {
      const a = b([])
      ;(async () => {
        const {
          data: { result: u }
        } = await K(M * I)
        a.value = u
      })()
      const s = b(1),
        c = j(() => {
          const u = (s.value - 1) * I,
            o = u + I
          return a.value.slice(u, o)
        })
      return (u, o) => {
        const r = Z,
          k = Y,
          C = E,
          p = w('img-lazy')
        return (
          e(),
          n('div', null, [
            l(
              C,
              { title: '热门品牌', subTitle: '国际经典 品质保证' },
              {
                head: i(() => [
                  l(
                    k,
                    { class: 'ml-auto mt-auto' },
                    {
                      default: i(() => [
                        l(
                          r,
                          {
                            type: 'primary',
                            size: 'default',
                            icon: f(D),
                            disabled: s.value <= 1,
                            onClick: o[0] || (o[0] = (h) => s.value--),
                            class: 'w-2'
                          },
                          null,
                          8,
                          ['icon', 'disabled']
                        ),
                        l(
                          r,
                          {
                            type: 'primary',
                            size: 'default',
                            icon: f(q),
                            disabled: s.value >= M,
                            onClick: o[1] || (o[1] = (h) => s.value++),
                            class: 'w-2'
                          },
                          null,
                          8,
                          ['icon', 'disabled']
                        )
                      ]),
                      _: 1
                    }
                  )
                ]),
                itemList: i(() => [
                  (e(!0),
                  n(
                    v,
                    null,
                    y(
                      c.value,
                      (h) => (
                        e(),
                        n(
                          'div',
                          {
                            class:
                              'w-[240px] h-[305px] transition-transform duration-300 hover:-translate-y-2 shadow-[0_3px_8px_rgb(0_0_0_/_20%)]',
                            key: h.id
                          },
                          [$(t('img', Mt, null, 512), [[p, h.picture]])]
                        )
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              }
            )
          ])
        )
      }
    }
  },
  Rt = { alt: '', class: 'w-[160px] h-[160px]' },
  jt = { class: 'w-full h-[48px] text-[16px] line-clamp-2' },
  St = { class: 'w-full truncate text-[#999]' },
  Pt = { class: 'price text-[20px]' },
  Gt = { class: 'w-[130px] pt-2 flex justify-center' },
  Vt = {
    __name: 'HomeGoodsItem',
    props: { item: Object },
    setup(_) {
      const a = b('')
      return (m, s) => {
        const c = S('RouterLink'),
          u = w('img-lazy')
        return (
          e(),
          B(
            c,
            { to: `/goods/${_.item.id}` },
            {
              default: i(() => [
                t(
                  'div',
                  {
                    class:
                      'item w-[240px] h-[300px] px-[30px] py-[15px] flex flex-col items-center gap-[6px] overflow-hidden',
                    onMouseenter: s[0] || (s[0] = (o) => (a.value = _.item.id)),
                    onMouseleave: s[1] || (s[1] = (o) => (a.value = ''))
                  },
                  [
                    $(t('img', Rt, null, 512), [[u, _.item.picture]]),
                    t('p', jt, d(_.item.name), 1),
                    t('p', St, d(_.item.desc), 1),
                    t('p', Pt, '￥' + d(_.item.price), 1),
                    t(
                      'div',
                      {
                        class: P([
                          'overlay w-[240px] h-[85px] flex flex-col justify-center items-center text-white bg-[#27ba9b] z-10 absolute bottom-0 left-0',
                          { show: a.value === _.item.id }
                        ])
                      },
                      [
                        s[3] ||
                          (s[3] = t(
                            'span',
                            {
                              class:
                                'w-[130px] pb-2 text-[20px] border-b text-center'
                            },
                            '找相似',
                            -1
                          )),
                        t('span', Gt, [
                          s[2] || (s[2] = g('发现更多宝贝')),
                          l(f(T), { class: 'w-4' })
                        ])
                      ],
                      2
                    )
                  ],
                  32
                )
              ]),
              _: 1
            },
            8,
            ['to']
          )
        )
      }
    }
  },
  Dt = L(Vt, [['__scopeId', 'data-v-3e3cccef']]),
  qt = { class: 'bg-white' },
  Ot = { class: 'ml-auto mt-auto flex items-center' },
  Ut = { class: 'flex text-lg' },
  Xt = {
    class:
      'w-[240px] h-[610px] bg-gradient-to-br from-[#93ddcd] via-[#a8e6d7] to-[#1dc779] shadow-lg rounded-lg overflow-hidden'
  },
  At = { alt: '' },
  Jt = { class: 'grid grid-cols-4 gap-2' },
  Kt = {
    __name: 'HomeProduct',
    setup(_) {
      const { cateList: a } = R(G())
      return (m, s) => {
        const c = N,
          u = w('img-lazy')
        return (
          e(),
          n('div', qt, [
            (e(!0),
            n(
              v,
              null,
              y(
                f(a).slice(0, 4),
                (o) => (
                  e(),
                  B(
                    E,
                    { title: o.name, key: o.id },
                    {
                      head: i(() => [
                        t('div', Ot, [
                          t('ul', Ut, [
                            (e(!0),
                            n(
                              v,
                              null,
                              y(
                                o.children.slice(0, 4),
                                (r) => (
                                  e(),
                                  n('li', { key: r.id }, [
                                    l(
                                      f(H),
                                      {
                                        to: `/category/sub/${r.id}`,
                                        class:
                                          'children-li px-4 py-1 rounded-[5px]'
                                      },
                                      {
                                        default: i(() => [g(d(r.name), 1)]),
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
                          ]),
                          l(
                            f(H),
                            {
                              to: `/category/${o.id}`,
                              class:
                                'check-all ml-[80px] text-lg flex items-center gap-1'
                            },
                            {
                              default: i(() => [
                                s[0] || (s[0] = g('查看全部')),
                                l(
                                  c,
                                  { color: '#999' },
                                  { default: i(() => [l(f(T))]), _: 1 }
                                )
                              ]),
                              _: 2,
                              __: [0]
                            },
                            1032,
                            ['to']
                          )
                        ])
                      ]),
                      itemList: i(() => [
                        t('div', Xt, [
                          l(
                            f(H),
                            {
                              to: `/category/${o.id}`,
                              class: 'w-full h-full grid place-items-center'
                            },
                            {
                              default: i(() => [
                                $(t('img', At, null, 512), [[u, o.picture]])
                              ]),
                              _: 2
                            },
                            1032,
                            ['to']
                          )
                        ]),
                        t('ul', Jt, [
                          (e(!0),
                          n(
                            v,
                            null,
                            y(
                              o.goods.slice(0, 8),
                              (r, k) => (
                                e(),
                                n(
                                  'li',
                                  {
                                    key: r.id,
                                    class: P([
                                      'relative',
                                      { 'border-b-2 border-b-[#93ddcd]': k < 4 }
                                    ])
                                  },
                                  [l(Dt, { item: r }, null, 8, ['item'])],
                                  2
                                )
                              )
                            ),
                            128
                          ))
                        ])
                      ]),
                      _: 2
                    },
                    1032,
                    ['title']
                  )
                )
              ),
              128
            ))
          ])
        )
      }
    }
  },
  Qt = L(Kt, [['__scopeId', 'data-v-bc04cf28']]),
  xe = {
    __name: 'XtxHome',
    setup(_) {
      return (a, m) => (
        e(), n(v, null, [l(xt), l(Lt), l(Ft), l(Nt), l(Qt)], 64)
      )
    }
  }
export { xe as default }
