import { f as C, _, y as p, h as w, E, w as B } from './base-Bes0XUun.js'
import { a as S } from './aria-CnJd5Vss.js'
import { f as L } from './request-FXAcKJdj.js'
import { u as $ } from './index-BWDAezSb.js'
import {
  L as h,
  q as i,
  c,
  o,
  m,
  x as t,
  y as v,
  w as P,
  W as D,
  g as u,
  p as k
} from './index-DU_P6jZu.js'
const I = C({
    type: {
      type: String,
      values: ['primary', 'success', 'warning', 'info', 'danger', 'default'],
      default: void 0
    },
    underline: {
      type: [Boolean, String],
      values: [!0, !1, 'always', 'never', 'hover'],
      default: void 0
    },
    disabled: Boolean,
    href: { type: String, default: '' },
    target: { type: String, default: '_self' },
    icon: { type: S }
  }),
  N = { click: (r) => r instanceof MouseEvent },
  T = h({ name: 'ElLink' }),
  q = h({
    ...T,
    props: I,
    emits: N,
    setup(r, { emit: y }) {
      const n = r,
        d = L('link')
      $(
        {
          scope: 'el-link',
          from: 'The underline option (boolean)',
          replacement: "'always' | 'hover' | 'never'",
          version: '3.0.0',
          ref: 'https://element-plus.org/en-US/component/link.html#underline'
        },
        i(() => p(n.underline))
      )
      const l = w('link'),
        g = i(() => {
          var e, s, a
          return [
            l.b(),
            l.m(
              (a =
                (s = n.type) != null
                  ? s
                  : (e = d.value) == null
                    ? void 0
                    : e.type) != null
                ? a
                : 'default'
            ),
            l.is('disabled', n.disabled),
            l.is('underline', f.value === 'always'),
            l.is('hover-underline', f.value === 'hover' && !n.disabled)
          ]
        }),
        f = i(() => {
          var e, s, a
          return p(n.underline)
            ? n.underline
              ? 'hover'
              : 'never'
            : (a =
                  (s = n.underline) != null
                    ? s
                    : (e = d.value) == null
                      ? void 0
                      : e.underline) != null
              ? a
              : 'hover'
        })
      function b(e) {
        n.disabled || y('click', e)
      }
      return (e, s) => (
        o(),
        c(
          'a',
          {
            class: k(u(g)),
            href: e.disabled || !e.href ? void 0 : e.href,
            target: e.disabled || !e.href ? void 0 : e.target,
            onClick: b
          },
          [
            e.icon
              ? (o(),
                m(
                  u(E),
                  { key: 0 },
                  { default: P(() => [(o(), m(D(e.icon)))]), _: 1 }
                ))
              : t('v-if', !0),
            e.$slots.default
              ? (o(),
                c(
                  'span',
                  { key: 1, class: k(u(l).e('inner')) },
                  [v(e.$slots, 'default')],
                  2
                ))
              : t('v-if', !0),
            e.$slots.icon ? v(e.$slots, 'icon', { key: 2 }) : t('v-if', !0)
          ],
          10,
          ['href', 'target']
        )
      )
    }
  })
var z = _(q, [['__file', 'link.vue']])
const W = B(z)
export { W as E }
