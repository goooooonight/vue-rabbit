import { E as k, a as g } from './base-Bes0XUun.js'
import { E as C, a as F } from './form-item-CR69_ETu.js'
import { E as h } from './button-ByJsP9uv.js'
import { E as A } from './checkbox-B8oi5Mlv.js'
import { E as I } from './link-B8FVjYx5.js'
import './input-BHo3TFaK.js'
import {
  _ as L,
  r as _,
  c as U,
  a as r,
  b as B,
  d as t,
  w as o,
  e as N,
  F as R,
  u as S,
  o as q,
  f as l,
  g as x,
  h as j
} from './index-DU_P6jZu.js'
import { i as X, E as z } from './request-FXAcKJdj.js'
/* empty css                   */ import { m as M } from './cart-BGMqSPHr.js'
import { u as P } from './useCart-DMzuQVBQ.js'
import { E as T } from './index-BbAllY5l.js'
import './constants-Dnj8X3EN.js'
import './use-form-common-props-BOay2t_u.js'
import './index-D26JKrGB.js'
import './error-Cq9Fpw4b.js'
import './aria-CnJd5Vss.js'
import './_baseClone-CsHVYERe.js'
import './isEqual-Bfv98oY_.js'
import './index-fOI-oh1j.js'
import './_initCloneObject-Czt_Nu0w.js'
import './index-BWDAezSb.js'
import './index-r5W6hzzQ.js'
import './event-BB_Ol6Sd.js'
import './aria-BmU_cfaq.js'
const D = (c) => X.post('/login', c),
  G = { class: 'bg-white' },
  H = { class: 'xtx-container flex justify-between items-end' },
  J = {
    class:
      'logo w-[200px] h-[132px] bg-[url(/src/assets/images/logo.png)] bg-[position:center_18px] bg-contain bg-no-repeat flex-shrink-0'
  },
  K = {
    class:
      'h-[488px] bg-[url(/src/assets/images/login-bg.png)] bg-center bg-no-repeat bg-cover relative'
  },
  O = {
    class:
      'w-[420px] h-[300px] rounded-[2px] bg-white absolute top-[60px] right-1/6'
  },
  Q = { class: 'flex items-center gap-1' },
  W = {
    __name: 'XtxLogin',
    setup(c) {
      const a = _({ account: '', password: '', isAgree: !1 }),
        f = _(),
        v = {
          account: [
            { required: !0, message: '用户名不能为空', trigger: 'blur' }
          ],
          password: [
            { required: !0, message: '密码不能为空', trigger: 'blur' },
            { min: 6, max: 24, message: '密码长度应为6-4个字符' }
          ],
          isAgree: [
            {
              required: !0,
              validator: (m, e, s) => {
                e ? s() : s(new Error('请勾选同意隐私条款和服务条款!'))
              },
              trigger: 'change'
            }
          ]
        },
        b = S(),
        w = async () => {
          await f.value.validate()
          const {
              data: { result: m }
            } = await D({
              account: a.value.account,
              password: a.value.password
            }),
            { setUserInfo: e } = j()
          e(m)
          const { cartStore: s, cartList: d } = P()
          await M(
            d.value.map(({ skuId: p, selected: n, count: u }) => ({
              skuId: p,
              selected: n,
              count: u
            }))
          ),
            s.clearCart(),
            s.getCartFromServer(),
            z({ message: '登录成功!', type: 'success' }),
            b.replace('/')
        }
      return (m, e) => {
        const s = N('RouterLink'),
          d = k,
          p = T,
          n = F,
          u = I,
          E = A,
          y = h,
          V = C
        return (
          q(),
          U(
            R,
            null,
            [
              r('header', G, [
                r('div', H, [
                  r('h1', J, [
                    t(
                      s,
                      { to: '/', class: 'h-full block' },
                      {
                        default: o(() => e[3] || (e[3] = [l('小兔鲜')])),
                        _: 1,
                        __: [3]
                      }
                    )
                  ]),
                  t(
                    s,
                    {
                      to: '/',
                      class: 'mb-[30px] text-[18px] flex items-center'
                    },
                    {
                      default: o(() => [
                        e[4] || (e[4] = l('进入网站首页 ')),
                        t(
                          d,
                          { color: '#27ba9b', class: 'ml-2 -mr-2' },
                          { default: o(() => [t(x(g))]), _: 1 }
                        ),
                        t(
                          d,
                          { color: '#27ba9b' },
                          { default: o(() => [t(x(g))]), _: 1 }
                        )
                      ]),
                      _: 1,
                      __: [4]
                    }
                  )
                ])
              ]),
              r('main', K, [
                r('div', O, [
                  e[10] ||
                    (e[10] = r(
                      'h3',
                      {
                        class:
                          'text-[20px] font-bold text-center leading-[60px] border-b border-b-[#f5f5f5]'
                      },
                      ' 账户登录 ',
                      -1
                    )),
                  t(
                    V,
                    {
                      model: a.value,
                      ref_key: 'form',
                      ref: f,
                      rules: v,
                      'status-icon': '',
                      class: 'px-[30px] py-[25px] flex flex-col items-center'
                    },
                    {
                      default: o(() => [
                        t(
                          n,
                          { label: '账户', prop: 'account', class: 'w-full' },
                          {
                            default: o(() => [
                              t(
                                p,
                                {
                                  modelValue: a.value.account,
                                  'onUpdate:modelValue':
                                    e[0] ||
                                    (e[0] = (i) => (a.value.account = i)),
                                  placeholder: '请输入账户'
                                },
                                null,
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        t(
                          n,
                          { label: '密码', prop: 'password', class: 'w-full' },
                          {
                            default: o(() => [
                              t(
                                p,
                                {
                                  modelValue: a.value.password,
                                  'onUpdate:modelValue':
                                    e[1] ||
                                    (e[1] = (i) => (a.value.password = i)),
                                  placeholder: '请输入密码',
                                  'show-password': ''
                                },
                                null,
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        t(
                          n,
                          { class: 'mr-auto', prop: 'isAgree' },
                          {
                            default: o(() => [
                              t(
                                E,
                                {
                                  modelValue: a.value.isAgree,
                                  'onUpdate:modelValue':
                                    e[2] ||
                                    (e[2] = (i) => (a.value.isAgree = i))
                                },
                                {
                                  default: o(() => [
                                    r('p', Q, [
                                      e[7] || (e[7] = l(' 我已同意 ')),
                                      t(
                                        u,
                                        { type: 'primary', underline: 'never' },
                                        {
                                          default: o(
                                            () =>
                                              e[5] || (e[5] = [l('隐私条款')])
                                          ),
                                          _: 1,
                                          __: [5]
                                        }
                                      ),
                                      e[8] || (e[8] = l('和 ')),
                                      t(
                                        u,
                                        { type: 'primary', underline: 'never' },
                                        {
                                          default: o(
                                            () =>
                                              e[6] || (e[6] = [l('服务条款')])
                                          ),
                                          _: 1,
                                          __: [6]
                                        }
                                      )
                                    ])
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        t(
                          n,
                          { class: 'w-full' },
                          {
                            default: o(() => [
                              t(
                                y,
                                {
                                  type: 'primary',
                                  size: 'large',
                                  class: 'w-full',
                                  onClick: w
                                },
                                {
                                  default: o(
                                    () => e[9] || (e[9] = [l('点击登录')])
                                  ),
                                  _: 1,
                                  __: [9]
                                }
                              )
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ['model']
                  )
                ])
              ]),
              e[11] ||
                (e[11] = B(
                  '<footer data-v-ea7394d3><div class="h-[120px] bg-white" data-v-ea7394d3><div class="pt-[50px]" data-v-ea7394d3><ul class="flex justify-center" data-v-ea7394d3><li data-v-ea7394d3>关于我们</li><li data-v-ea7394d3>帮助中心</li><li data-v-ea7394d3>售后服务</li><li data-v-ea7394d3>配送与验收</li><li data-v-ea7394d3>商务合作</li><li data-v-ea7394d3>搜索推荐</li><li data-v-ea7394d3>友情链接</li></ul><div class="mt-[25px] text-center text-[#999]" data-v-ea7394d3>CopyRight@小兔鲜儿</div></div></div></footer>',
                  1
                ))
            ],
            64
          )
        )
      }
    }
  },
  ye = L(W, [['__scopeId', 'data-v-ea7394d3']])
export { ye as default }
