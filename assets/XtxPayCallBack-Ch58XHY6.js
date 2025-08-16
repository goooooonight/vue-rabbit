import { E as g, N as B, S as E } from './base-Bes0XUun.js'
import { E as I } from './button-ByJsP9uv.js'
import { E as k, a as w } from './breadcrumb-item-BGaU_0zQ.js'
import { a as C } from './order-E16ay68r.js'
import {
  _ as N,
  r as _,
  A as P,
  c as m,
  d as e,
  k as z,
  w as o,
  l as D,
  a as s,
  f as r,
  t as V,
  g as n,
  u as A,
  B as M,
  o as c
} from './index-DU_P6jZu.js'
import './index-BWDAezSb.js'
import './request-FXAcKJdj.js'
import './aria-CnJd5Vss.js'
import './use-form-common-props-BOay2t_u.js'
import './index-D26JKrGB.js'
import './constants-Dnj8X3EN.js'
import './index-r5W6hzzQ.js'
const O = { class: 'xtx-container' },
  R = {
    class:
      'py-[100px] leading-[40px] text-center bg-white flex flex-col items-center'
  },
  S = { class: 'text-[16px]' },
  X = { class: 'price' },
  q = { class: 'py-[40px]' },
  L = { class: 'text-[#999] flex items-center' },
  T = {
    __name: 'XtxPayCallBack',
    setup($) {
      const f = M(),
        x = A(),
        a = _(!0),
        i = _({}),
        v = async () => {
          a.value = !0
          const {
            data: { result: d }
          } = await C(f.query.orderId)
          ;(i.value = d.payMoney), (a.value = !1)
        }
      return (
        P(() => v()),
        (d, t) => {
          const l = w,
            y = k,
            u = g,
            p = I,
            b = D('load')
          return (
            c(),
            m('div', O, [
              e(
                y,
                { separator: '>', class: 'mx-2 my-10' },
                {
                  default: o(() => [
                    e(
                      l,
                      { to: '/' },
                      {
                        default: o(() => t[1] || (t[1] = [r('首页')])),
                        _: 1,
                        __: [1]
                      }
                    ),
                    e(
                      l,
                      { to: '/cart' },
                      {
                        default: o(() => t[2] || (t[2] = [r(' 购物车 ')])),
                        _: 1,
                        __: [2]
                      }
                    ),
                    e(l, null, {
                      default: o(() => t[3] || (t[3] = [r(' 支付结果 ')])),
                      _: 1,
                      __: [3]
                    })
                  ]),
                  _: 1
                }
              ),
              z(
                (c(),
                m('div', R, [
                  s('div', null, [
                    e(
                      u,
                      { color: '#1dc779', size: '80', class: 'mr-[14px]' },
                      { default: o(() => [e(n(B))]), _: 1 }
                    ),
                    t[4] ||
                      (t[4] = s(
                        'p',
                        { class: 'text-[24px]' },
                        '订单支付成功',
                        -1
                      )),
                    t[5] ||
                      (t[5] = s(
                        'p',
                        { class: 'text-[16px] text-[#999]' },
                        ' 我们将尽快为您发货，收货期间请保持手机畅通 ',
                        -1
                      ))
                  ]),
                  s('div', null, [
                    s('div', S, [
                      t[7] || (t[7] = s('p', null, '支付方式：支付宝支付', -1)),
                      s('p', null, [
                        t[6] || (t[6] = r(' 支付金额：')),
                        s('span', X, '￥' + V(i.value), 1)
                      ])
                    ]),
                    s('div', q, [
                      e(
                        p,
                        { class: 'custom-btn', type: 'primary', size: 'large' },
                        {
                          default: o(() => t[8] || (t[8] = [r('查看订单')])),
                          _: 1,
                          __: [8]
                        }
                      ),
                      e(
                        p,
                        {
                          class: 'custom-btn',
                          type: 'default',
                          size: 'large',
                          onClick: t[0] || (t[0] = (j) => n(x).push('/'))
                        },
                        {
                          default: o(() => t[9] || (t[9] = [r('进入首页')])),
                          _: 1,
                          __: [9]
                        }
                      )
                    ])
                  ]),
                  s('p', L, [
                    e(u, null, { default: o(() => [e(n(E))]), _: 1 }),
                    t[10] ||
                      (t[10] = r(
                        ' 温馨提示：小兔鲜儿不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作，保护资产、谨慎操作。 '
                      ))
                  ])
                ])),
                [[b, a.value]]
              )
            ])
          )
        }
      )
    }
  },
  et = N(T, [['__scopeId', 'data-v-dbb7d538']])
export { et as default }
