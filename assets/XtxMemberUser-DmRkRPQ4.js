import { E as p, U as f, V as _, W as d, a as r } from './base-BSl8DOKd.js'
import {
  h as c,
  c as u,
  a as s,
  g as o,
  t as m,
  d as t,
  w as l,
  e as g,
  F as b,
  o as h,
  f as i
} from './index-62YaKhWX.js'
const w = {
    class:
      'h-[140px] px-[60px] flex items-center bg-[url(/src/assets/images/center-bg.png)] bg-cover'
  },
  v = { class: 'flex items-center' },
  k = ['src'],
  y = { class: '!ml-[20px] text-white text-[22px]' },
  V = { class: 'w-[360px] ml-auto flex justify-between' },
  z = { class: 'h-[400px] mt-6 px-[20px] bg-white' },
  B = { class: 'py-[20px] flex border-b border-b-[#f5f5f5]' },
  E = { class: 'h-[400px] mt-6 px-[20px] bg-white' },
  N = { class: 'py-[20px] flex border-b border-b-[#f5f5f5]' },
  L = {
    __name: 'XtxMemberUser',
    setup(U) {
      const { userInfo: x } = c()
      return (C, e) => {
        const a = p,
          n = g('RouterLink')
        return (
          h(),
          u(
            b,
            null,
            [
              s('div', w, [
                s('div', v, [
                  s(
                    'img',
                    {
                      src: o(x).avatar,
                      alt: '',
                      class: 'w-[100px] h-[100px] rounded-full'
                    },
                    null,
                    8,
                    k
                  ),
                  s('p', y, m(o(x).nickname), 1)
                ]),
                s('div', V, [
                  t(
                    n,
                    {
                      to: '/',
                      class: '!text-white flex flex-col items-center gap-[10px]'
                    },
                    {
                      default: l(() => [
                        t(
                          a,
                          { size: '40' },
                          { default: l(() => [t(o(f))]), _: 1 }
                        ),
                        e[0] ||
                          (e[0] = s(
                            'span',
                            { class: 'text-[16px]' },
                            '安全设置',
                            -1
                          ))
                      ]),
                      _: 1,
                      __: [0]
                    }
                  ),
                  t(
                    n,
                    {
                      to: '/',
                      class: '!text-white flex flex-col items-center gap-[10px]'
                    },
                    {
                      default: l(() => [
                        t(
                          a,
                          { size: '40' },
                          { default: l(() => [t(o(_))]), _: 1 }
                        ),
                        e[1] ||
                          (e[1] = s(
                            'span',
                            { class: 'text-[16px]' },
                            '会员中心',
                            -1
                          ))
                      ]),
                      _: 1,
                      __: [1]
                    }
                  ),
                  t(
                    n,
                    {
                      to: '/',
                      class: '!text-white flex flex-col items-center gap-[10px]'
                    },
                    {
                      default: l(() => [
                        t(
                          a,
                          { size: '40' },
                          { default: l(() => [t(o(d))]), _: 1 }
                        ),
                        e[2] ||
                          (e[2] = s(
                            'span',
                            { class: 'text-[16px]' },
                            '地址管理',
                            -1
                          ))
                      ]),
                      _: 1,
                      __: [2]
                    }
                  )
                ])
              ]),
              s('div', z, [
                s('div', B, [
                  e[4] ||
                    (e[4] = s('h3', { class: 'text-[22px]' }, '我的收藏', -1)),
                  t(
                    n,
                    {
                      to: '/',
                      class:
                        'ml-auto mt-auto !text-[#999] flex items-center gap-1'
                    },
                    {
                      default: l(() => [
                        e[3] || (e[3] = i(' 查看全部')),
                        t(a, null, { default: l(() => [t(o(r))]), _: 1 })
                      ]),
                      _: 1,
                      __: [3]
                    }
                  )
                ])
              ]),
              s('div', E, [
                s('div', N, [
                  e[6] ||
                    (e[6] = s('h3', { class: 'text-[22px]' }, '猜你喜欢', -1)),
                  t(
                    n,
                    {
                      to: '/',
                      class:
                        'ml-auto mt-auto !text-[#999] flex items-center gap-1'
                    },
                    {
                      default: l(() => [
                        e[5] || (e[5] = i(' 查看全部')),
                        t(a, null, { default: l(() => [t(o(r))]), _: 1 })
                      ]),
                      _: 1,
                      __: [5]
                    }
                  )
                ])
              ])
            ],
            64
          )
        )
      }
    }
  }
export { L as default }
