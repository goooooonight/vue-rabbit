import {
  S as se,
  L as z,
  O as Q,
  q as k,
  c as R,
  o as w,
  a as I,
  x as U,
  y as C,
  p as y,
  g as e,
  t as H,
  d as M,
  w as g,
  m as K,
  W as ae,
  N as J,
  I as te,
  r as S,
  i as q,
  A as ne,
  Q as re,
  D as ie,
  T as de,
  k as ue,
  V as ce,
  a3 as fe,
  v as ve,
  H as pe
} from './index-62YaKhWX.js'
import { u as me, a as ye, E as ge, b as Ce } from './index-SbFAmMDn.js'
import { F as be, t as he, E as Ee, a as we } from './index-Dog6wp49.js'
import {
  f as W,
  _ as Y,
  E as Se,
  y as ke,
  x as Ie,
  r as De,
  P as Te,
  Q as Z,
  B as Be,
  h as Fe,
  w as Pe
} from './base-BSl8DOKd.js'
import { a as Ae, C as $e, l as Le } from './aria-DW8X8pJS.js'
import { u as _e, f as Oe } from './request-B0GuyAcH.js'
import { U as X } from './event-BB_Ol6Sd.js'
import { u as G } from './index-Cq-mCDaI.js'
import { u as Ne } from './index-CdlSpGPi.js'
const x = Symbol('dialogInjectionKey'),
  ee = W({
    center: Boolean,
    alignCenter: Boolean,
    closeIcon: { type: Ae },
    draggable: Boolean,
    overflow: Boolean,
    fullscreen: Boolean,
    headerClass: String,
    bodyClass: String,
    footerClass: String,
    showClose: { type: Boolean, default: !0 },
    title: { type: String, default: '' },
    ariaLevel: { type: String, default: '2' }
  }),
  Re = { close: () => !0 },
  Me =
    (...o) =>
    (a) => {
      o.forEach((s) => {
        se(s) ? s(a) : (s.value = a)
      })
    },
  ze = z({ name: 'ElDialogContent' }),
  Ve = z({
    ...ze,
    props: ee,
    emits: Re,
    setup(o, { expose: a }) {
      const s = o,
        { t: $ } = _e(),
        { Close: i } = $e,
        { dialogRef: f, headerRef: b, bodyId: h, ns: t, style: d } = Q(x),
        { focusTrapRef: p } = Q(be),
        m = k(() => [
          t.b(),
          t.is('fullscreen', s.fullscreen),
          t.is('draggable', s.draggable),
          t.is('align-center', s.alignCenter),
          { [t.m('center')]: s.center }
        ]),
        E = Me(p, f),
        u = k(() => s.draggable),
        v = k(() => s.overflow),
        { resetPosition: T, updatePosition: B } = me(f, b, u, v)
      return (
        a({ resetPosition: T, updatePosition: B }),
        (n, D) => (
          w(),
          R(
            'div',
            { ref: e(E), class: y(e(m)), style: J(e(d)), tabindex: '-1' },
            [
              I(
                'header',
                {
                  ref_key: 'headerRef',
                  ref: b,
                  class: y([
                    e(t).e('header'),
                    n.headerClass,
                    { 'show-close': n.showClose }
                  ])
                },
                [
                  C(n.$slots, 'header', {}, () => [
                    I(
                      'span',
                      {
                        role: 'heading',
                        'aria-level': n.ariaLevel,
                        class: y(e(t).e('title'))
                      },
                      H(n.title),
                      11,
                      ['aria-level']
                    )
                  ]),
                  n.showClose
                    ? (w(),
                      R(
                        'button',
                        {
                          key: 0,
                          'aria-label': e($)('el.dialog.close'),
                          class: y(e(t).e('headerbtn')),
                          type: 'button',
                          onClick: (L) => n.$emit('close')
                        },
                        [
                          M(
                            e(Se),
                            { class: y(e(t).e('close')) },
                            {
                              default: g(() => [
                                (w(), K(ae(n.closeIcon || e(i))))
                              ]),
                              _: 1
                            },
                            8,
                            ['class']
                          )
                        ],
                        10,
                        ['aria-label', 'onClick']
                      ))
                    : U('v-if', !0)
                ],
                2
              ),
              I(
                'div',
                { id: e(h), class: y([e(t).e('body'), n.bodyClass]) },
                [C(n.$slots, 'default')],
                10,
                ['id']
              ),
              n.$slots.footer
                ? (w(),
                  R(
                    'footer',
                    { key: 0, class: y([e(t).e('footer'), n.footerClass]) },
                    [C(n.$slots, 'footer')],
                    2
                  ))
                : U('v-if', !0)
            ],
            6
          )
        )
      )
    }
  })
var qe = Y(Ve, [['__file', 'dialog-content.vue']])
const Ue = W({
    ...ee,
    appendToBody: Boolean,
    appendTo: { type: he.to.type, default: 'body' },
    beforeClose: { type: Ie(Function) },
    destroyOnClose: Boolean,
    closeOnClickModal: { type: Boolean, default: !0 },
    closeOnPressEscape: { type: Boolean, default: !0 },
    lockScroll: { type: Boolean, default: !0 },
    modal: { type: Boolean, default: !0 },
    openDelay: { type: Number, default: 0 },
    closeDelay: { type: Number, default: 0 },
    top: { type: String },
    modelValue: Boolean,
    modalClass: String,
    headerClass: String,
    bodyClass: String,
    footerClass: String,
    width: { type: [String, Number] },
    zIndex: { type: Number },
    trapFocus: Boolean,
    headerAriaLevel: { type: String, default: '2' }
  }),
  Ke = {
    open: () => !0,
    opened: () => !0,
    close: () => !0,
    closed: () => !0,
    [X]: (o) => ke(o),
    openAutoFocus: () => !0,
    closeAutoFocus: () => !0
  },
  je = (o, a) => {
    var s
    const i = te().emit,
      { nextZIndex: f } = Le()
    let b = ''
    const h = G(),
      t = G(),
      d = S(!1),
      p = S(!1),
      m = S(!1),
      E = S((s = o.zIndex) != null ? s : f())
    let u, v
    const T = Oe('namespace', Te),
      B = k(() => {
        const r = {},
          c = `--${T.value}-dialog`
        return (
          o.fullscreen ||
            (o.top && (r[`${c}-margin-top`] = o.top),
            o.width && (r[`${c}-width`] = De(o.width))),
          r
        )
      }),
      n = k(() => (o.alignCenter ? { display: 'flex' } : {}))
    function D() {
      i('opened')
    }
    function L() {
      i('closed'), i(X, !1), o.destroyOnClose && (m.value = !1)
    }
    function V() {
      i('close')
    }
    function _() {
      v?.(),
        u?.(),
        o.openDelay && o.openDelay > 0
          ? ({ stop: u } = Z(() => O(), o.openDelay))
          : O()
    }
    function F() {
      u?.(),
        v?.(),
        o.closeDelay && o.closeDelay > 0
          ? ({ stop: v } = Z(() => N(), o.closeDelay))
          : N()
    }
    function P() {
      function r(c) {
        c || ((p.value = !0), (d.value = !1))
      }
      o.beforeClose ? o.beforeClose(r) : F()
    }
    function A() {
      o.closeOnClickModal && P()
    }
    function O() {
      Be && (d.value = !0)
    }
    function N() {
      d.value = !1
    }
    function l() {
      i('openAutoFocus')
    }
    function j() {
      i('closeAutoFocus')
    }
    function oe(r) {
      var c
      ;((c = r.detail) == null ? void 0 : c.focusReason) === 'pointer' &&
        r.preventDefault()
    }
    o.lockScroll && ye(d)
    function le() {
      o.closeOnPressEscape && P()
    }
    return (
      q(
        () => o.zIndex,
        () => {
          var r
          E.value = (r = o.zIndex) != null ? r : f()
        }
      ),
      q(
        () => o.modelValue,
        (r) => {
          var c
          r
            ? ((p.value = !1),
              _(),
              (m.value = !0),
              (E.value = (c = o.zIndex) != null ? c : f()),
              re(() => {
                i('open'),
                  a.value &&
                    ((a.value.parentElement.scrollTop = 0),
                    (a.value.parentElement.scrollLeft = 0),
                    (a.value.scrollTop = 0))
              }))
            : d.value && F()
        }
      ),
      q(
        () => o.fullscreen,
        (r) => {
          a.value &&
            (r
              ? ((b = a.value.style.transform), (a.value.style.transform = ''))
              : (a.value.style.transform = b))
        }
      ),
      ne(() => {
        o.modelValue && ((d.value = !0), (m.value = !0), _())
      }),
      {
        afterEnter: D,
        afterLeave: L,
        beforeLeave: V,
        handleClose: P,
        onModalClick: A,
        close: F,
        doClose: N,
        onOpenAutoFocus: l,
        onCloseAutoFocus: j,
        onCloseRequested: le,
        onFocusoutPrevented: oe,
        titleId: h,
        bodyId: t,
        closed: p,
        style: B,
        overlayDialogStyle: n,
        rendered: m,
        visible: d,
        zIndex: E
      }
    )
  },
  Qe = z({ name: 'ElDialog', inheritAttrs: !1 }),
  Ze = z({
    ...Qe,
    props: Ue,
    emits: Ke,
    setup(o, { expose: a }) {
      const s = o,
        $ = ie()
      Ne(
        {
          scope: 'el-dialog',
          from: 'the title slot',
          replacement: 'the header slot',
          version: '3.0.0',
          ref: 'https://element-plus.org/en-US/component/dialog.html#slots'
        },
        k(() => !!$.title)
      )
      const i = Fe('dialog'),
        f = S(),
        b = S(),
        h = S(),
        {
          visible: t,
          titleId: d,
          bodyId: p,
          style: m,
          overlayDialogStyle: E,
          rendered: u,
          zIndex: v,
          afterEnter: T,
          afterLeave: B,
          beforeLeave: n,
          handleClose: D,
          onModalClick: L,
          onOpenAutoFocus: V,
          onCloseAutoFocus: _,
          onCloseRequested: F,
          onFocusoutPrevented: P
        } = je(s, f)
      pe(x, {
        dialogRef: f,
        headerRef: b,
        bodyId: p,
        ns: i,
        rendered: u,
        style: m
      })
      const A = Ce(L),
        O = k(() => s.draggable && !s.fullscreen)
      return (
        a({
          visible: t,
          dialogContentRef: h,
          resetPosition: () => {
            var l
            ;(l = h.value) == null || l.resetPosition()
          },
          handleClose: D
        }),
        (l, j) => (
          w(),
          K(
            e(we),
            {
              to: l.appendTo,
              disabled: l.appendTo !== 'body' ? !1 : !l.appendToBody
            },
            {
              default: g(() => [
                M(
                  de,
                  {
                    name: 'dialog-fade',
                    onAfterEnter: e(T),
                    onAfterLeave: e(B),
                    onBeforeLeave: e(n),
                    persisted: ''
                  },
                  {
                    default: g(() => [
                      ue(
                        M(
                          e(ge),
                          {
                            'custom-mask-event': '',
                            mask: l.modal,
                            'overlay-class': l.modalClass,
                            'z-index': e(v)
                          },
                          {
                            default: g(() => [
                              I(
                                'div',
                                {
                                  role: 'dialog',
                                  'aria-modal': 'true',
                                  'aria-label': l.title || void 0,
                                  'aria-labelledby': l.title ? void 0 : e(d),
                                  'aria-describedby': e(p),
                                  class: y(
                                    `${e(i).namespace.value}-overlay-dialog`
                                  ),
                                  style: J(e(E)),
                                  onClick: e(A).onClick,
                                  onMousedown: e(A).onMousedown,
                                  onMouseup: e(A).onMouseup
                                },
                                [
                                  M(
                                    e(Ee),
                                    {
                                      loop: '',
                                      trapped: e(t),
                                      'focus-start-el': 'container',
                                      onFocusAfterTrapped: e(V),
                                      onFocusAfterReleased: e(_),
                                      onFocusoutPrevented: e(P),
                                      onReleaseRequested: e(F)
                                    },
                                    {
                                      default: g(() => [
                                        e(u)
                                          ? (w(),
                                            K(
                                              qe,
                                              ce(
                                                {
                                                  key: 0,
                                                  ref_key: 'dialogContentRef',
                                                  ref: h
                                                },
                                                l.$attrs,
                                                {
                                                  center: l.center,
                                                  'align-center': l.alignCenter,
                                                  'close-icon': l.closeIcon,
                                                  draggable: e(O),
                                                  overflow: l.overflow,
                                                  fullscreen: l.fullscreen,
                                                  'header-class': l.headerClass,
                                                  'body-class': l.bodyClass,
                                                  'footer-class': l.footerClass,
                                                  'show-close': l.showClose,
                                                  title: l.title,
                                                  'aria-level':
                                                    l.headerAriaLevel,
                                                  onClose: e(D)
                                                }
                                              ),
                                              fe(
                                                {
                                                  header: g(() => [
                                                    l.$slots.title
                                                      ? C(l.$slots, 'title', {
                                                          key: 1
                                                        })
                                                      : C(l.$slots, 'header', {
                                                          key: 0,
                                                          close: e(D),
                                                          titleId: e(d),
                                                          titleClass:
                                                            e(i).e('title')
                                                        })
                                                  ]),
                                                  default: g(() => [
                                                    C(l.$slots, 'default')
                                                  ]),
                                                  _: 2
                                                },
                                                [
                                                  l.$slots.footer
                                                    ? {
                                                        name: 'footer',
                                                        fn: g(() => [
                                                          C(l.$slots, 'footer')
                                                        ])
                                                      }
                                                    : void 0
                                                ]
                                              ),
                                              1040,
                                              [
                                                'center',
                                                'align-center',
                                                'close-icon',
                                                'draggable',
                                                'overflow',
                                                'fullscreen',
                                                'header-class',
                                                'body-class',
                                                'footer-class',
                                                'show-close',
                                                'title',
                                                'aria-level',
                                                'onClose'
                                              ]
                                            ))
                                          : U('v-if', !0)
                                      ]),
                                      _: 3
                                    },
                                    8,
                                    [
                                      'trapped',
                                      'onFocusAfterTrapped',
                                      'onFocusAfterReleased',
                                      'onFocusoutPrevented',
                                      'onReleaseRequested'
                                    ]
                                  )
                                ],
                                46,
                                [
                                  'aria-label',
                                  'aria-labelledby',
                                  'aria-describedby',
                                  'onClick',
                                  'onMousedown',
                                  'onMouseup'
                                ]
                              )
                            ]),
                            _: 3
                          },
                          8,
                          ['mask', 'overlay-class', 'z-index']
                        ),
                        [[ve, e(t)]]
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['onAfterEnter', 'onAfterLeave', 'onBeforeLeave']
                )
              ]),
              _: 3
            },
            8,
            ['to', 'disabled']
          )
        )
      )
    }
  })
var Ge = Y(Ze, [['__file', 'dialog.vue']])
const ro = Pe(Ge),
  He = { class: 'bg-white' },
  Je = { class: 'h-[60px] mx-[20px] py-[18px] border-b border-b-[#f5f5f5]' },
  We = { class: 'text-[16px] font-[400]' },
  Ye = { class: 'p-[20px]' },
  io = {
    __name: 'OrderCard',
    props: { title: String },
    setup(o) {
      return (a, s) => (
        w(),
        R('div', He, [
          I('div', Je, [I('h2', We, H(o.title), 1)]),
          I('div', Ye, [C(a.$slots, 'default')])
        ])
      )
    }
  }
export { ro as E, io as _ }
