import {
  m as X,
  E as V,
  n as D,
  o as F,
  p as H,
  q as O
} from './base-Bes0XUun.js'
import { E as R, a as T } from './breadcrumb-item-BGaU_0zQ.js'
import { g as A, X as U, E as Y, a as q } from './index-SiNDpEpF.js'
import {
  r as f,
  B as J,
  A as j,
  C as B,
  _ as C,
  U as K,
  i as Q,
  c as r,
  o as i,
  a as t,
  k as I,
  v as P,
  g as u,
  N as z,
  F as b,
  j as y,
  p as G,
  m as S,
  x as $,
  t as x,
  d as n,
  w as p,
  f as _,
  e as W,
  l as L
} from './index-DU_P6jZu.js'
import { E as Z } from './button-ByJsP9uv.js'
import './input-BHo3TFaK.js'
import { E as tt } from './link-B8FVjYx5.js'
import './tag-BDl_GAG7.js'
import { E as et } from './select-Bz5GldId.js'
import './scrollbar-Deottvjw.js'
import './popper-D0fPJ8qx.js'
/* empty css                   */ import { u as st } from './cart-BGMqSPHr.js'
import { E as N } from './request-FXAcKJdj.js'
import { G as M } from './GoodsItem-72SklCoH.js'
import './aria-CnJd5Vss.js'
import './index-BbAllY5l.js'
import './index-fOI-oh1j.js'
import './event-BB_Ol6Sd.js'
import './use-form-common-props-BOay2t_u.js'
import './index-D26JKrGB.js'
import './constants-Dnj8X3EN.js'
import './aria-BmU_cfaq.js'
import './error-Cq9Fpw4b.js'
import './index-BWDAezSb.js'
import './index-r5W6hzzQ.js'
import './isEqual-Bfv98oY_.js'
import './strings-CYJXMOCd.js'
import './scroll-aQCI3ZGR.js'
import './debounce-BUz-fiHp.js'
import './index-Cy4a31WU.js'
import './vnode-DLkXDgL1.js'
import './index-e-8dcJ2f.js'
const ot = () => {
    const s = f({}),
      o = J().params.goodsId,
      c = async (d) => {
        a.value = !0
        const {
          data: { result: l }
        } = await A(d)
        ;(s.value = l), (a.value = !1)
      }
    j(() => c(o)),
      B((d) => {
        c(d.params.goodsId)
      })
    const a = f(!0)
    return { goods: s, isLoading: a }
  },
  lt = { class: 'flex' },
  nt = { class: 'relative' },
  at = ['src'],
  it = ['onMouseenter'],
  dt = ['src'],
  ut = {
    __name: 'GoodsImage',
    props: { pictures: Array },
    setup(s) {
      const o = f(0)
      B(() => (o.value = 0))
      const c = f(null),
        { elementX: a, elementY: d, isOutside: l } = K(c),
        e = f(0),
        m = f(0),
        g = f(0),
        v = f(0)
      return (
        Q([a, d, l], () => {
          l.value ||
            (a.value > 100 && a.value < 300 && (e.value = a.value - 100),
            d.value > 100 && d.value < 300 && (m.value = d.value - 100),
            a.value - 100 < 0 && (e.value = 0),
            a.value + 100 > 400 && (e.value = 200),
            d.value - 100 < 0 && (m.value = 0),
            d.value + 100 > 400 && (m.value = 200),
            (g.value = -e.value * 2),
            (v.value = -m.value * 2))
        }),
        (E, h) => (
          i(),
          r('div', lt, [
            t('div', nt, [
              t(
                'img',
                {
                  src: s.pictures[o.value],
                  alt: '',
                  class: 'w-[400px] h-[400px] mr-[10px]',
                  onMouseenter: h[0] || (h[0] = (w) => (E.isShow = !0)),
                  ref_key: 'target',
                  ref: c
                },
                null,
                40,
                at
              ),
              I(
                t(
                  'div',
                  {
                    class:
                      'w-[200px] h-[200px] bg-black/20 absolute cursor-move',
                    style: z([{ left: `${e.value}px`, top: `${m.value}px` }])
                  },
                  null,
                  4
                ),
                [[P, !u(l)]]
              ),
              I(
                t(
                  'div',
                  {
                    class:
                      'w-[400px] h-[400px] mr-[10px] absolute top-0 left-[410px] z-[998]',
                    style: z([
                      {
                        backgroundImage: `url(${s.pictures[o.value]})`,
                        backgroundPositionX: `${g.value}px`,
                        backgroundPositionY: `${v.value}px`,
                        backgroundSize: '800px 800px'
                      }
                    ])
                  },
                  null,
                  4
                ),
                [[P, !u(l)]]
              )
            ]),
            t('ul', null, [
              (i(!0),
              r(
                b,
                null,
                y(
                  s.pictures,
                  (w, k) => (
                    i(),
                    r(
                      'li',
                      {
                        key: k,
                        class: G([
                          'w-[68px] h-[68px] mb-[15px]',
                          { 'hover-pic': o.value === k }
                        ]),
                        onMouseenter: (ee) => (o.value = k)
                      },
                      [t('img', { src: w, alt: '' }, null, 8, dt)],
                      42,
                      it
                    )
                  )
                ),
                128
              ))
            ])
          ])
        )
      )
    }
  },
  rt = C(ut, [['__scopeId', 'data-v-65f4c061']]),
  ct = { class: 'px-[50px] py-[30px] bg-white flex' },
  pt = { class: 'footer-ul w-[400px] flex' },
  mt = { class: 'content' },
  xt = { class: 'link' },
  _t = { class: 'content' },
  ft = { class: 'link' },
  vt = { class: 'content' },
  gt = { class: 'link' },
  bt = { class: 'content' },
  yt = { class: 'link' },
  kt = { class: 'ml-[60px] flex flex-col gap-[10px] flex-1' },
  $t = { class: 'text-[22px]' },
  ht = { class: 'text-[#999]' },
  wt = { class: 'price' },
  It = { class: 'text-[22px]' },
  Ct = { class: 'ml-[15px] text-[16px] text-[#999] line-through' },
  Et = {
    class: 'w-[500px] px-[10px] py-[20px] bg-[#f5f5f5] flex flex-col gap-[20px]'
  },
  Gt = { class: 'mt-[15px] px-[10px] flex flex-col gap-[15px]' },
  St = { class: 'w-[180px] mt-[10px]' },
  Bt = {
    __name: 'GoodsPanel',
    props: { goods: Object },
    setup(s) {
      const o = f({}),
        c = (l) => {
          o.value = l
        },
        a = f(1)
      B(() => {
        a.value = 1
      })
      const d = async () => {
        o.value.skuId
          ? (await st().addCart({
              id: s.goods.id,
              name: s.goods.name,
              picture: s.goods.mainPictures[0],
              price: s.goods.price,
              count: a.value,
              skuId: o.value.skuId,
              attrsText: o.value.specsText,
              selected: !0
            }),
            N.success('加入购物车成功'))
          : N.warning('请选择完整规格')
      }
      return (l, e) => {
        const m = V,
          g = W('RouterLink'),
          v = et,
          E = tt,
          h = Y,
          w = Z
        return (
          i(),
          r('div', ct, [
            t('div', null, [
              s.goods.mainPictures
                ? (i(),
                  S(rt, { key: 0, pictures: s.goods.mainPictures }, null, 8, [
                    'pictures'
                  ]))
                : $('', !0),
              t('ul', pt, [
                t('li', null, [
                  e[2] || (e[2] = t('p', { class: 'title' }, '销量人气', -1)),
                  t('p', mt, x(s.goods.salesCount), 1),
                  t('p', xt, [
                    n(m, null, { default: p(() => [n(u(X))]), _: 1 }),
                    n(
                      g,
                      { to: '/' },
                      {
                        default: p(() => e[1] || (e[1] = [_('销量人气')])),
                        _: 1,
                        __: [1]
                      }
                    )
                  ])
                ]),
                t('li', null, [
                  e[4] || (e[4] = t('p', { class: 'title' }, '商品评价', -1)),
                  t('p', _t, x(s.goods.commentCount), 1),
                  t('p', ft, [
                    n(m, null, { default: p(() => [n(u(D))]), _: 1 }),
                    n(
                      g,
                      { to: '/' },
                      {
                        default: p(() => e[3] || (e[3] = [_('商品评价')])),
                        _: 1,
                        __: [3]
                      }
                    )
                  ])
                ]),
                t('li', null, [
                  e[6] || (e[6] = t('p', { class: 'title' }, '收藏人气', -1)),
                  t('p', vt, x(s.goods.collectCount), 1),
                  t('p', gt, [
                    n(m, null, { default: p(() => [n(u(F))]), _: 1 }),
                    n(
                      g,
                      { to: '/' },
                      {
                        default: p(() => e[5] || (e[5] = [_('收藏人气')])),
                        _: 1,
                        __: [5]
                      }
                    )
                  ])
                ]),
                t('li', null, [
                  e[8] || (e[8] = t('p', { class: 'title' }, '品牌信息', -1)),
                  t('p', bt, x(s.goods.brand?.name), 1),
                  t('p', yt, [
                    n(m, null, { default: p(() => [n(u(H))]), _: 1 }),
                    n(
                      g,
                      { to: '/' },
                      {
                        default: p(() => e[7] || (e[7] = [_('品牌信息')])),
                        _: 1,
                        __: [7]
                      }
                    )
                  ])
                ])
              ])
            ]),
            t('div', kt, [
              t('p', $t, x(s.goods.name), 1),
              t('p', ht, x(s.goods.desc), 1),
              t('p', null, [
                t('span', wt, [
                  e[9] || (e[9] = t('span', null, '￥', -1)),
                  t('span', It, x(s.goods.price), 1)
                ]),
                t('span', Ct, '￥' + x(s.goods.oldPrice), 1)
              ]),
              t('div', Et, [
                e[15] ||
                  (e[15] = t(
                    'dl',
                    null,
                    [
                      t('dt', null, '促销'),
                      t('dd', null, '12月好物放送，App领券购买直降120元')
                    ],
                    -1
                  )),
                t('dl', null, [
                  e[11] || (e[11] = t('dt', null, '配送', -1)),
                  t('dd', null, [e[10] || (e[10] = _('至')), n(v)])
                ]),
                t('dl', null, [
                  e[14] || (e[14] = t('dt', null, '服务', -1)),
                  t('dd', null, [
                    e[13] ||
                      (e[13] = t(
                        'ul',
                        { class: 'flex gap-[10px]' },
                        [
                          t('li', null, '无忧退货'),
                          t('li', null, '快速退款'),
                          t('li', null, '免费包邮')
                        ],
                        -1
                      )),
                    n(
                      E,
                      { type: 'primary', underline: 'never' },
                      {
                        default: p(() => e[12] || (e[12] = [_('了解详细')])),
                        _: 1,
                        __: [12]
                      }
                    )
                  ])
                ])
              ]),
              t('div', Gt, [
                n(U, { goods: s.goods, onChange: c }, null, 8, ['goods']),
                t('dl', null, [
                  e[16] || (e[16] = t('dt', null, '数量', -1)),
                  t('dd', null, [
                    n(
                      h,
                      {
                        class: 'custom-input-number',
                        modelValue: a.value,
                        'onUpdate:modelValue':
                          e[0] || (e[0] = (k) => (a.value = k)),
                        min: 1,
                        max: s.goods.inventory,
                        disabled: s.goods.inventory === 0
                      },
                      null,
                      8,
                      ['modelValue', 'max', 'disabled']
                    )
                  ])
                ])
              ]),
              t('div', St, [
                n(
                  w,
                  {
                    type: 'primary',
                    size: 'large',
                    class: 'w-full',
                    disabled: s.goods.inventory === 0,
                    onClick: d
                  },
                  {
                    default: p(() => e[17] || (e[17] = [_('加入购物车')])),
                    _: 1,
                    __: [17]
                  },
                  8,
                  ['disabled']
                )
              ])
            ])
          ])
        )
      }
    }
  },
  Pt = C(Bt, [['__scopeId', 'data-v-8252f8b6']]),
  zt = { class: 'w-[940px] bg-white' },
  Nt = { class: 'flex border-b border-b-[#f5f5f5]' },
  Vt = { class: 'flex' },
  jt = { class: 'comment-count' },
  Lt = { class: 'p-[40px]' },
  Mt = { key: 0 },
  Xt = { key: 0, class: 'mb-[40px] flex gap-x-[30px] gap-y-[10px] flex-wrap' },
  Dt = { class: 'mr-[5px] text-[#999]' },
  Ft = { class: 'text-[#666] flex-1' },
  Ht = { key: 1 },
  Ot = {
    __name: 'GoodsDetail',
    props: { goods: Object },
    setup(s) {
      const o = f('detail')
      return (c, a) => {
        const d = L('img-lazy')
        return (
          i(),
          r('div', zt, [
            t('div', Nt, [
              t(
                'div',
                {
                  class: 'tab-item border-r border-r-[#f5f5f5]',
                  onClick: a[0] || (a[0] = (l) => (o.value = 'detail'))
                },
                [
                  t(
                    'span',
                    { class: G({ 'tab-active-item': o.value === 'detail' }) },
                    '商品详细',
                    2
                  )
                ]
              ),
              t(
                'div',
                {
                  class: 'tab-item',
                  onClick: a[1] || (a[1] = (l) => (o.value = 'comment'))
                },
                [
                  t('div', Vt, [
                    t(
                      'span',
                      {
                        class: G({ 'tab-active-item': o.value === 'comment' })
                      },
                      '商品评价',
                      2
                    ),
                    t('span', jt, '(' + x(s.goods.commentCount) + ')', 1)
                  ])
                ]
              )
            ]),
            t('div', Lt, [
              o.value === 'detail'
                ? (i(),
                  r('div', Mt, [
                    s.goods.details.properties.length > 0
                      ? (i(),
                        r('div', Xt, [
                          (i(!0),
                          r(
                            b,
                            null,
                            y(
                              s.goods.details.properties,
                              (l) => (
                                i(),
                                r('dl', { key: l.name, class: 'flex' }, [
                                  t('dt', Dt, x(l.name), 1),
                                  t('dd', Ft, x(l.value), 1)
                                ])
                              )
                            ),
                            128
                          ))
                        ]))
                      : $('', !0),
                    (i(!0),
                    r(
                      b,
                      null,
                      y(s.goods.details.pictures, (l) =>
                        I(
                          (i(), r('img', { key: l, alt: '', class: 'w-full' })),
                          [[d, l]]
                        )
                      ),
                      128
                    ))
                  ]))
                : (i(), r('div', Ht, '评价'))
            ])
          ])
        )
      }
    }
  },
  Rt = C(Ot, [['__scopeId', 'data-v-4551be58']]),
  Tt = { class: 'ml-6 flex flex-col' },
  At = {
    class: 'h-[70px] bg-[#e26237] text-[#fff] text-[18px] leading-[70px]'
  },
  Ut = {
    __name: 'GoodsHot',
    props: { goodsId: String, type: Number },
    setup(s) {
      const o = s,
        c = f([]),
        a = async () => {
          const {
            data: { result: l }
          } = await q(o)
          c.value = l
        },
        d = { 1: '24小时热销榜', 2: '周热销榜' }
      return (
        j(() => a()),
        (l, e) => (
          i(),
          r('div', Tt, [
            t('h3', At, x(d[s.type]), 1),
            t('ul', null, [
              (i(!0),
              r(
                b,
                null,
                y(
                  c.value,
                  (m) => (
                    i(),
                    r(
                      'li',
                      { class: 'bg-white flex justify-center', key: m.id },
                      [n(M, { item: m }, null, 8, ['item'])]
                    )
                  )
                ),
                128
              ))
            ])
          ])
        )
      )
    }
  },
  Yt = C(Ut, [['__scopeId', 'data-v-32664660']]),
  qt = { class: 'xtx-container' },
  Jt = { class: 'h-[72px] flex items-center' },
  Kt = { key: 0, class: 'my-6 px-[15px] py-[20px] bg-white' },
  Qt = { class: 'text-[20px] flex items-center gap-2' },
  Wt = { class: 'mt-[20px] px-[50px] flex justify-between' },
  Zt = { key: 1, class: 'flex' },
  te = { class: 'flex-1 flex flex-col gap-[20px]' },
  je = {
    __name: 'XtxGoods',
    setup(s) {
      const { goods: o, isLoading: c } = ot()
      return (a, d) => {
        const l = T,
          e = R,
          m = V,
          g = L('load')
        return (
          i(),
          r('div', qt, [
            t('div', Jt, [
              u(c)
                ? $('', !0)
                : (i(),
                  S(
                    e,
                    { key: 0, separator: '>', class: 'mx-5' },
                    {
                      default: p(() => [
                        n(
                          l,
                          { to: '/' },
                          {
                            default: p(() => d[0] || (d[0] = [_('首页')])),
                            _: 1,
                            __: [0]
                          }
                        ),
                        n(
                          l,
                          { to: `/category/${u(o).categories[1].id}` },
                          {
                            default: p(() => [
                              _(x(u(o).categories[1].name), 1)
                            ]),
                            _: 1
                          },
                          8,
                          ['to']
                        ),
                        n(
                          l,
                          { to: `/category/sub/${u(o).categories[0].id}` },
                          {
                            default: p(() => [
                              _(x(u(o).categories[0].name), 1)
                            ]),
                            _: 1
                          },
                          8,
                          ['to']
                        ),
                        n(l, null, {
                          default: p(() => [_(x(u(o).name), 1)]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }
                  ))
            ]),
            I(n(Pt, { goods: u(o) }, null, 8, ['goods']), [[g, u(c)]]),
            u(c)
              ? $('', !0)
              : (i(),
                r('div', Kt, [
                  t('h3', Qt, [
                    n(
                      m,
                      { color: '#27ba9b' },
                      { default: p(() => [n(u(O))]), _: 1 }
                    ),
                    d[1] || (d[1] = _('同类商品推荐 '))
                  ]),
                  t('div', Wt, [
                    (i(!0),
                    r(
                      b,
                      null,
                      y(
                        u(o).similarProducts,
                        (v) => (
                          i(),
                          S(M, { key: v.id, item: v, class: '' }, null, 8, [
                            'item'
                          ])
                        )
                      ),
                      128
                    ))
                  ])
                ])),
            u(c)
              ? $('', !0)
              : (i(),
                r('div', Zt, [
                  n(Rt, { goods: u(o) }, null, 8, ['goods']),
                  t('div', te, [
                    (i(),
                    r(
                      b,
                      null,
                      y(2, (v) =>
                        n(
                          Yt,
                          { key: v, 'goods-id': u(o).id, type: v },
                          null,
                          8,
                          ['goods-id', 'type']
                        )
                      ),
                      64
                    ))
                  ])
                ]))
          ])
        )
      }
    }
  }
export { je as default }
