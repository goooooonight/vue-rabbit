import { u as h, r as Pe, a as Y, E as Ve } from './popper-D33_jZo9.js'
import {
  _,
  f as x,
  x as T,
  y as ze,
  h as Ke,
  r as De,
  w as Ue,
  z as He,
  E as Fe,
  A as pe,
  B as je,
  C as fe,
  k as qe
} from './base-BSl8DOKd.js'
import { E as D, a as Ge, T as Je, b as me } from './aria-DW8X8pJS.js'
import {
  L as j,
  y as H,
  r as I,
  O as We,
  A as Be,
  g as w,
  G as Ie,
  H as ve,
  q as v,
  m as E,
  o as m,
  w as C,
  x as k,
  c as Z,
  p as d,
  t as $,
  f as Q,
  V as Xe,
  Q as U,
  e as z,
  k as ee,
  d as L,
  a as B,
  M as W,
  N as ge,
  W as K,
  X,
  v as te,
  T as Ye,
  P as Ze,
  Y as ne,
  i as be,
  Z as Qe,
  S as se,
  K as le,
  J as Se,
  $ as Te,
  a0 as ye,
  a1 as Me
} from './index-62YaKhWX.js'
import { E as _e } from './button-Cl62p-Gj.js'
import { E as xe } from './index-Dlng04ZD.js'
import { E as et, u as tt, a as ot, b as nt } from './index-SbFAmMDn.js'
import { E as st } from './index-Dog6wp49.js'
import { o as he } from './aria-BmU_cfaq.js'
import { c as at, b as lt } from './request-B0GuyAcH.js'
import { u as Ce } from './index-Cq-mCDaI.js'
const rt = j({ inheritAttrs: !1 })
function it(e, t, a, l, r, s) {
  return H(e.$slots, 'default')
}
var ut = _(rt, [
  ['render', it],
  ['__file', 'collection.vue']
])
const dt = j({ name: 'ElCollectionItem', inheritAttrs: !1 })
function ct(e, t, a, l, r, s) {
  return H(e.$slots, 'default')
}
var pt = _(dt, [
  ['render', ct],
  ['__file', 'collection-item.vue']
])
const ft = 'data-el-collection-item',
  mt = (e) => {
    const t = `El${e}Collection`,
      a = `${t}Item`,
      l = Symbol(t),
      r = Symbol(a),
      s = {
        ...ut,
        name: t,
        setup() {
          const p = I(),
            f = new Map()
          ve(l, {
            itemMap: f,
            getItems: () => {
              const g = w(p)
              if (!g) return []
              const u = Array.from(g.querySelectorAll(`[${ft}]`))
              return [...f.values()].sort(
                (R, P) => u.indexOf(R.ref) - u.indexOf(P.ref)
              )
            },
            collectionRef: p
          })
        }
      },
      c = {
        ...pt,
        name: a,
        setup(p, { attrs: f }) {
          const o = I(),
            g = We(l, void 0)
          ve(r, { collectionItemRef: o }),
            Be(() => {
              const u = w(o)
              u && g.itemMap.set(u, { ref: u, ...f })
            }),
            Ie(() => {
              const u = w(o)
              g.itemMap.delete(u)
            })
        }
      }
    return {
      COLLECTION_INJECTION_KEY: l,
      COLLECTION_ITEM_INJECTION_KEY: r,
      ElCollection: s,
      ElCollectionItem: c
    }
  },
  oe = x({
    trigger: Y.trigger,
    triggerKeys: {
      type: T(Array),
      default: () => [D.enter, D.numpadEnter, D.space, D.down]
    },
    effect: { ...h.effect, default: 'light' },
    type: { type: T(String) },
    placement: { type: T(String), default: 'bottom' },
    popperOptions: { type: T(Object), default: () => ({}) },
    id: String,
    size: { type: String, default: '' },
    splitButton: Boolean,
    hideOnClick: { type: Boolean, default: !0 },
    loop: { type: Boolean, default: !0 },
    showTimeout: { type: Number, default: 150 },
    hideTimeout: { type: Number, default: 150 },
    tabindex: { type: T([Number, String]), default: 0 },
    maxHeight: { type: T([Number, String]), default: '' },
    popperClass: { type: String, default: '' },
    disabled: Boolean,
    role: { type: String, values: Pe, default: 'menu' },
    buttonProps: { type: T(Object) },
    teleported: h.teleported,
    persistent: { type: Boolean, default: !0 }
  })
x({
  command: { type: [Object, String, Number], default: () => ({}) },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: { type: Ge }
})
x({ onKeydown: { type: T(Function) } })
mt('Dropdown')
const vt = x({
    trigger: Y.trigger,
    triggerKeys: Y.triggerKeys,
    placement: oe.placement,
    disabled: Y.disabled,
    visible: h.visible,
    transition: h.transition,
    popperOptions: oe.popperOptions,
    tabindex: oe.tabindex,
    content: h.content,
    popperStyle: h.popperStyle,
    popperClass: h.popperClass,
    enterable: { ...h.enterable, default: !0 },
    effect: { ...h.effect, default: 'light' },
    teleported: h.teleported,
    appendTo: h.appendTo,
    title: String,
    width: { type: [String, Number], default: 150 },
    offset: { type: Number, default: void 0 },
    showAfter: { type: Number, default: 0 },
    hideAfter: { type: Number, default: 200 },
    autoClose: { type: Number, default: 0 },
    showArrow: { type: Boolean, default: !0 },
    persistent: { type: Boolean, default: !0 },
    'onUpdate:visible': { type: Function }
  }),
  gt = {
    'update:visible': (e) => ze(e),
    'before-enter': () => !0,
    'before-leave': () => !0,
    'after-enter': () => !0,
    'after-leave': () => !0
  },
  bt = 'onUpdate:visible',
  yt = j({ name: 'ElPopover' }),
  ht = j({
    ...yt,
    props: vt,
    emits: gt,
    setup(e, { expose: t, emit: a }) {
      const l = e,
        r = v(() => l[bt]),
        s = Ke('popover'),
        c = I(),
        p = v(() => {
          var n
          return (n = w(c)) == null ? void 0 : n.popperRef
        }),
        f = v(() => [{ width: De(l.width) }, l.popperStyle]),
        o = v(() => [s.b(), l.popperClass, { [s.m('plain')]: !!l.content }]),
        g = v(() => l.transition === `${s.namespace.value}-fade-in-linear`),
        u = () => {
          var n
          ;(n = c.value) == null || n.hide()
        },
        q = () => {
          a('before-enter')
        },
        R = () => {
          a('before-leave')
        },
        P = () => {
          a('after-enter')
        },
        S = () => {
          a('update:visible', !1), a('after-leave')
        }
      return (
        t({ popperRef: p, hide: u }),
        (n, A) => (
          m(),
          E(
            w(Ve),
            Xe({ ref_key: 'tooltipRef', ref: c }, n.$attrs, {
              trigger: n.trigger,
              'trigger-keys': n.triggerKeys,
              placement: n.placement,
              disabled: n.disabled,
              visible: n.visible,
              transition: n.transition,
              'popper-options': n.popperOptions,
              tabindex: n.tabindex,
              content: n.content,
              offset: n.offset,
              'show-after': n.showAfter,
              'hide-after': n.hideAfter,
              'auto-close': n.autoClose,
              'show-arrow': n.showArrow,
              'aria-label': n.title,
              effect: n.effect,
              enterable: n.enterable,
              'popper-class': w(o),
              'popper-style': w(f),
              teleported: n.teleported,
              'append-to': n.appendTo,
              persistent: n.persistent,
              'gpu-acceleration': w(g),
              'onUpdate:visible': w(r),
              onBeforeShow: q,
              onBeforeHide: R,
              onShow: P,
              onHide: S
            }),
            {
              content: C(() => [
                n.title
                  ? (m(),
                    Z(
                      'div',
                      { key: 0, class: d(w(s).e('title')), role: 'title' },
                      $(n.title),
                      3
                    ))
                  : k('v-if', !0),
                H(n.$slots, 'default', {}, () => [Q($(n.content), 1)])
              ]),
              default: C(() => [
                n.$slots.reference
                  ? H(n.$slots, 'reference', { key: 0 })
                  : k('v-if', !0)
              ]),
              _: 3
            },
            16,
            [
              'trigger',
              'trigger-keys',
              'placement',
              'disabled',
              'visible',
              'transition',
              'popper-options',
              'tabindex',
              'content',
              'offset',
              'show-after',
              'hide-after',
              'auto-close',
              'show-arrow',
              'aria-label',
              'effect',
              'enterable',
              'popper-class',
              'popper-style',
              'teleported',
              'append-to',
              'persistent',
              'gpu-acceleration',
              'onUpdate:visible'
            ]
          )
        )
      )
    }
  })
var Ct = _(ht, [['__file', 'popover.vue']])
const Ee = (e, t) => {
  const a = t.arg || t.value,
    l = a?.popperRef
  l && (l.triggerRef = e)
}
var Et = {
  mounted(e, t) {
    Ee(e, t)
  },
  updated(e, t) {
    Ee(e, t)
  }
}
const wt = 'popover',
  Bt = He(Et, wt),
  Wt = Ue(Ct, { directive: Bt }),
  It = (e) => ['', ...at].includes(e),
  ae = '_trap-focus-children',
  O = [],
  we = (e) => {
    if (O.length === 0) return
    const t = O[O.length - 1][ae]
    if (t.length > 0 && e.code === D.tab) {
      if (t.length === 1) {
        e.preventDefault(), document.activeElement !== t[0] && t[0].focus()
        return
      }
      const a = e.shiftKey,
        l = e.target === t[0],
        r = e.target === t[t.length - 1]
      l && a && (e.preventDefault(), t[t.length - 1].focus()),
        r && !a && (e.preventDefault(), t[0].focus())
    }
  },
  St = {
    beforeMount(e) {
      ;(e[ae] = he(e)),
        O.push(e),
        O.length <= 1 && document.addEventListener('keydown', we)
    },
    updated(e) {
      U(() => {
        e[ae] = he(e)
      })
    },
    unmounted() {
      O.shift(), O.length === 0 && document.removeEventListener('keydown', we)
    }
  },
  Tt = j({
    name: 'ElMessageBox',
    directives: { TrapFocus: St },
    components: {
      ElButton: _e,
      ElFocusTrap: st,
      ElInput: xe,
      ElOverlay: et,
      ElIcon: Fe,
      ...Je
    },
    inheritAttrs: !1,
    props: {
      buttonSize: { type: String, validator: It },
      modal: { type: Boolean, default: !0 },
      lockScroll: { type: Boolean, default: !0 },
      showClose: { type: Boolean, default: !0 },
      closeOnClickModal: { type: Boolean, default: !0 },
      closeOnPressEscape: { type: Boolean, default: !0 },
      closeOnHashChange: { type: Boolean, default: !0 },
      center: Boolean,
      draggable: Boolean,
      overflow: Boolean,
      roundButton: Boolean,
      container: { type: String, default: 'body' },
      boxType: { type: String, default: '' }
    },
    emits: ['vanish', 'action'],
    setup(e, { emit: t }) {
      const {
          locale: a,
          zIndex: l,
          ns: r,
          size: s
        } = lt(
          'message-box',
          v(() => e.buttonSize)
        ),
        { t: c } = a,
        { nextZIndex: p } = l,
        f = I(!1),
        o = Ze({
          autofocus: !0,
          beforeClose: null,
          callback: null,
          cancelButtonText: '',
          cancelButtonClass: '',
          confirmButtonText: '',
          confirmButtonClass: '',
          customClass: '',
          customStyle: {},
          dangerouslyUseHTMLString: !1,
          distinguishCancelAndClose: !1,
          icon: '',
          closeIcon: '',
          inputPattern: null,
          inputPlaceholder: '',
          inputType: 'text',
          inputValue: '',
          inputValidator: void 0,
          inputErrorMessage: '',
          message: '',
          modalFade: !0,
          modalClass: '',
          showCancelButton: !1,
          showConfirmButton: !0,
          type: '',
          title: void 0,
          showInput: !1,
          action: '',
          confirmButtonLoading: !1,
          cancelButtonLoading: !1,
          confirmButtonLoadingIcon: ne(pe),
          cancelButtonLoadingIcon: ne(pe),
          confirmButtonDisabled: !1,
          editorErrorMessage: '',
          validateError: !1,
          zIndex: p()
        }),
        g = v(() => {
          const i = o.type
          return { [r.bm('icon', i)]: i && me[i] }
        }),
        u = Ce(),
        q = Ce(),
        R = v(() => {
          const i = o.type
          return o.icon || (i && me[i]) || ''
        }),
        P = v(() => !!o.message),
        S = I(),
        n = I(),
        A = I(),
        G = I(),
        re = I(),
        ke = v(() => o.confirmButtonClass)
      be(
        () => o.inputValue,
        async (i) => {
          await U(), e.boxType === 'prompt' && i && ue()
        },
        { immediate: !0 }
      ),
        be(
          () => f.value,
          (i) => {
            var b, y
            i &&
              (e.boxType !== 'prompt' &&
                (o.autofocus
                  ? (A.value =
                      (y = (b = re.value) == null ? void 0 : b.$el) != null
                        ? y
                        : S.value)
                  : (A.value = S.value)),
              (o.zIndex = p())),
              e.boxType === 'prompt' &&
                (i
                  ? U().then(() => {
                      var ce
                      G.value &&
                        G.value.$el &&
                        (o.autofocus
                          ? (A.value = (ce = Ne()) != null ? ce : S.value)
                          : (A.value = S.value))
                    })
                  : ((o.editorErrorMessage = ''), (o.validateError = !1)))
          }
        )
      const $e = v(() => e.draggable),
        Oe = v(() => e.overflow)
      tt(S, n, $e, Oe),
        Be(async () => {
          await U(),
            e.closeOnHashChange && window.addEventListener('hashchange', V)
        }),
        Ie(() => {
          e.closeOnHashChange && window.removeEventListener('hashchange', V)
        })
      function V() {
        f.value &&
          ((f.value = !1),
          U(() => {
            o.action && t('action', o.action)
          }))
      }
      const ie = () => {
          e.closeOnClickModal &&
            J(o.distinguishCancelAndClose ? 'close' : 'cancel')
        },
        Ae = nt(ie),
        Le = (i) => {
          if (o.inputType !== 'textarea')
            return i.preventDefault(), J('confirm')
        },
        J = (i) => {
          var b
          ;(e.boxType === 'prompt' && i === 'confirm' && !ue()) ||
            ((o.action = i),
            o.beforeClose
              ? (b = o.beforeClose) == null || b.call(o, i, o, V)
              : V())
        },
        ue = () => {
          if (e.boxType === 'prompt') {
            const i = o.inputPattern
            if (i && !i.test(o.inputValue || ''))
              return (
                (o.editorErrorMessage =
                  o.inputErrorMessage || c('el.messagebox.error')),
                (o.validateError = !0),
                !1
              )
            const b = o.inputValidator
            if (se(b)) {
              const y = b(o.inputValue)
              if (y === !1)
                return (
                  (o.editorErrorMessage =
                    o.inputErrorMessage || c('el.messagebox.error')),
                  (o.validateError = !0),
                  !1
                )
              if (le(y))
                return (o.editorErrorMessage = y), (o.validateError = !0), !1
            }
          }
          return (o.editorErrorMessage = ''), (o.validateError = !1), !0
        },
        Ne = () => {
          var i, b
          const y = (i = G.value) == null ? void 0 : i.$refs
          return (b = y?.input) != null ? b : y?.textarea
        },
        de = () => {
          J('close')
        },
        Re = () => {
          e.closeOnPressEscape && de()
        }
      return (
        e.lockScroll && ot(f),
        {
          ...Qe(o),
          ns: r,
          overlayEvent: Ae,
          visible: f,
          hasMessage: P,
          typeClass: g,
          contentId: u,
          inputId: q,
          btnSize: s,
          iconComponent: R,
          confirmButtonClasses: ke,
          rootRef: S,
          focusStartRef: A,
          headerRef: n,
          inputRef: G,
          confirmRef: re,
          doClose: V,
          handleClose: de,
          onCloseRequested: Re,
          handleWrapperClick: ie,
          handleInputEnter: Le,
          handleAction: J,
          t: c
        }
      )
    }
  })
function Mt(e, t, a, l, r, s) {
  const c = z('el-icon'),
    p = z('el-input'),
    f = z('el-button'),
    o = z('el-focus-trap'),
    g = z('el-overlay')
  return (
    m(),
    E(
      Ye,
      {
        name: 'fade-in-linear',
        onAfterLeave: (u) => e.$emit('vanish'),
        persisted: ''
      },
      {
        default: C(() => [
          ee(
            L(
              g,
              {
                'z-index': e.zIndex,
                'overlay-class': [e.ns.is('message-box'), e.modalClass],
                mask: e.modal
              },
              {
                default: C(() => [
                  B(
                    'div',
                    {
                      role: 'dialog',
                      'aria-label': e.title,
                      'aria-modal': 'true',
                      'aria-describedby': e.showInput ? void 0 : e.contentId,
                      class: d(`${e.ns.namespace.value}-overlay-message-box`),
                      onClick: e.overlayEvent.onClick,
                      onMousedown: e.overlayEvent.onMousedown,
                      onMouseup: e.overlayEvent.onMouseup
                    },
                    [
                      L(
                        o,
                        {
                          loop: '',
                          trapped: e.visible,
                          'focus-trap-el': e.rootRef,
                          'focus-start-el': e.focusStartRef,
                          onReleaseRequested: e.onCloseRequested
                        },
                        {
                          default: C(() => [
                            B(
                              'div',
                              {
                                ref: 'rootRef',
                                class: d([
                                  e.ns.b(),
                                  e.customClass,
                                  e.ns.is('draggable', e.draggable),
                                  { [e.ns.m('center')]: e.center }
                                ]),
                                style: ge(e.customStyle),
                                tabindex: '-1',
                                onClick: W(() => {}, ['stop'])
                              },
                              [
                                e.title !== null && e.title !== void 0
                                  ? (m(),
                                    Z(
                                      'div',
                                      {
                                        key: 0,
                                        ref: 'headerRef',
                                        class: d([
                                          e.ns.e('header'),
                                          { 'show-close': e.showClose }
                                        ])
                                      },
                                      [
                                        B(
                                          'div',
                                          { class: d(e.ns.e('title')) },
                                          [
                                            e.iconComponent && e.center
                                              ? (m(),
                                                E(
                                                  c,
                                                  {
                                                    key: 0,
                                                    class: d([
                                                      e.ns.e('status'),
                                                      e.typeClass
                                                    ])
                                                  },
                                                  {
                                                    default: C(() => [
                                                      (m(),
                                                      E(K(e.iconComponent)))
                                                    ]),
                                                    _: 1
                                                  },
                                                  8,
                                                  ['class']
                                                ))
                                              : k('v-if', !0),
                                            B('span', null, $(e.title), 1)
                                          ],
                                          2
                                        ),
                                        e.showClose
                                          ? (m(),
                                            Z(
                                              'button',
                                              {
                                                key: 0,
                                                type: 'button',
                                                class: d(e.ns.e('headerbtn')),
                                                'aria-label': e.t(
                                                  'el.messagebox.close'
                                                ),
                                                onClick: (u) =>
                                                  e.handleAction(
                                                    e.distinguishCancelAndClose
                                                      ? 'close'
                                                      : 'cancel'
                                                  ),
                                                onKeydown: X(
                                                  W(
                                                    (u) =>
                                                      e.handleAction(
                                                        e.distinguishCancelAndClose
                                                          ? 'close'
                                                          : 'cancel'
                                                      ),
                                                    ['prevent']
                                                  ),
                                                  ['enter']
                                                )
                                              },
                                              [
                                                L(
                                                  c,
                                                  { class: d(e.ns.e('close')) },
                                                  {
                                                    default: C(() => [
                                                      (m(),
                                                      E(
                                                        K(
                                                          e.closeIcon || 'close'
                                                        )
                                                      ))
                                                    ]),
                                                    _: 1
                                                  },
                                                  8,
                                                  ['class']
                                                )
                                              ],
                                              42,
                                              [
                                                'aria-label',
                                                'onClick',
                                                'onKeydown'
                                              ]
                                            ))
                                          : k('v-if', !0)
                                      ],
                                      2
                                    ))
                                  : k('v-if', !0),
                                B(
                                  'div',
                                  {
                                    id: e.contentId,
                                    class: d(e.ns.e('content'))
                                  },
                                  [
                                    B(
                                      'div',
                                      { class: d(e.ns.e('container')) },
                                      [
                                        e.iconComponent &&
                                        !e.center &&
                                        e.hasMessage
                                          ? (m(),
                                            E(
                                              c,
                                              {
                                                key: 0,
                                                class: d([
                                                  e.ns.e('status'),
                                                  e.typeClass
                                                ])
                                              },
                                              {
                                                default: C(() => [
                                                  (m(), E(K(e.iconComponent)))
                                                ]),
                                                _: 1
                                              },
                                              8,
                                              ['class']
                                            ))
                                          : k('v-if', !0),
                                        e.hasMessage
                                          ? (m(),
                                            Z(
                                              'div',
                                              {
                                                key: 1,
                                                class: d(e.ns.e('message'))
                                              },
                                              [
                                                H(
                                                  e.$slots,
                                                  'default',
                                                  {},
                                                  () => [
                                                    e.dangerouslyUseHTMLString
                                                      ? (m(),
                                                        E(
                                                          K(
                                                            e.showInput
                                                              ? 'label'
                                                              : 'p'
                                                          ),
                                                          {
                                                            key: 1,
                                                            for: e.showInput
                                                              ? e.inputId
                                                              : void 0,
                                                            innerHTML: e.message
                                                          },
                                                          null,
                                                          8,
                                                          ['for', 'innerHTML']
                                                        ))
                                                      : (m(),
                                                        E(
                                                          K(
                                                            e.showInput
                                                              ? 'label'
                                                              : 'p'
                                                          ),
                                                          {
                                                            key: 0,
                                                            for: e.showInput
                                                              ? e.inputId
                                                              : void 0
                                                          },
                                                          {
                                                            default: C(() => [
                                                              Q(
                                                                $(
                                                                  e.dangerouslyUseHTMLString
                                                                    ? ''
                                                                    : e.message
                                                                ),
                                                                1
                                                              )
                                                            ]),
                                                            _: 1
                                                          },
                                                          8,
                                                          ['for']
                                                        ))
                                                  ]
                                                )
                                              ],
                                              2
                                            ))
                                          : k('v-if', !0)
                                      ],
                                      2
                                    ),
                                    ee(
                                      B(
                                        'div',
                                        { class: d(e.ns.e('input')) },
                                        [
                                          L(
                                            p,
                                            {
                                              id: e.inputId,
                                              ref: 'inputRef',
                                              modelValue: e.inputValue,
                                              'onUpdate:modelValue': (u) =>
                                                (e.inputValue = u),
                                              type: e.inputType,
                                              placeholder: e.inputPlaceholder,
                                              'aria-invalid': e.validateError,
                                              class: d({
                                                invalid: e.validateError
                                              }),
                                              onKeydown: X(e.handleInputEnter, [
                                                'enter'
                                              ])
                                            },
                                            null,
                                            8,
                                            [
                                              'id',
                                              'modelValue',
                                              'onUpdate:modelValue',
                                              'type',
                                              'placeholder',
                                              'aria-invalid',
                                              'class',
                                              'onKeydown'
                                            ]
                                          ),
                                          B(
                                            'div',
                                            {
                                              class: d(e.ns.e('errormsg')),
                                              style: ge({
                                                visibility: e.editorErrorMessage
                                                  ? 'visible'
                                                  : 'hidden'
                                              })
                                            },
                                            $(e.editorErrorMessage),
                                            7
                                          )
                                        ],
                                        2
                                      ),
                                      [[te, e.showInput]]
                                    )
                                  ],
                                  10,
                                  ['id']
                                ),
                                B(
                                  'div',
                                  { class: d(e.ns.e('btns')) },
                                  [
                                    e.showCancelButton
                                      ? (m(),
                                        E(
                                          f,
                                          {
                                            key: 0,
                                            loading: e.cancelButtonLoading,
                                            'loading-icon':
                                              e.cancelButtonLoadingIcon,
                                            class: d([e.cancelButtonClass]),
                                            round: e.roundButton,
                                            size: e.btnSize,
                                            onClick: (u) =>
                                              e.handleAction('cancel'),
                                            onKeydown: X(
                                              W(
                                                (u) => e.handleAction('cancel'),
                                                ['prevent']
                                              ),
                                              ['enter']
                                            )
                                          },
                                          {
                                            default: C(() => [
                                              Q(
                                                $(
                                                  e.cancelButtonText ||
                                                    e.t('el.messagebox.cancel')
                                                ),
                                                1
                                              )
                                            ]),
                                            _: 1
                                          },
                                          8,
                                          [
                                            'loading',
                                            'loading-icon',
                                            'class',
                                            'round',
                                            'size',
                                            'onClick',
                                            'onKeydown'
                                          ]
                                        ))
                                      : k('v-if', !0),
                                    ee(
                                      L(
                                        f,
                                        {
                                          ref: 'confirmRef',
                                          type: 'primary',
                                          loading: e.confirmButtonLoading,
                                          'loading-icon':
                                            e.confirmButtonLoadingIcon,
                                          class: d([e.confirmButtonClasses]),
                                          round: e.roundButton,
                                          disabled: e.confirmButtonDisabled,
                                          size: e.btnSize,
                                          onClick: (u) =>
                                            e.handleAction('confirm'),
                                          onKeydown: X(
                                            W(
                                              (u) => e.handleAction('confirm'),
                                              ['prevent']
                                            ),
                                            ['enter']
                                          )
                                        },
                                        {
                                          default: C(() => [
                                            Q(
                                              $(
                                                e.confirmButtonText ||
                                                  e.t('el.messagebox.confirm')
                                              ),
                                              1
                                            )
                                          ]),
                                          _: 1
                                        },
                                        8,
                                        [
                                          'loading',
                                          'loading-icon',
                                          'class',
                                          'round',
                                          'disabled',
                                          'size',
                                          'onClick',
                                          'onKeydown'
                                        ]
                                      ),
                                      [[te, e.showConfirmButton]]
                                    )
                                  ],
                                  2
                                )
                              ],
                              14,
                              ['onClick']
                            )
                          ]),
                          _: 3
                        },
                        8,
                        [
                          'trapped',
                          'focus-trap-el',
                          'focus-start-el',
                          'onReleaseRequested'
                        ]
                      )
                    ],
                    42,
                    [
                      'aria-label',
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
              ['z-index', 'overlay-class', 'mask']
            ),
            [[te, e.visible]]
          )
        ]),
        _: 3
      },
      8,
      ['onAfterLeave']
    )
  )
}
var kt = _(Tt, [
  ['render', Mt],
  ['__file', 'index.vue']
])
const F = new Map(),
  $t = (e) => {
    let t = document.body
    return (
      e.appendTo &&
        (le(e.appendTo) && (t = document.querySelector(e.appendTo)),
        fe(e.appendTo) && (t = e.appendTo),
        fe(t) || (t = document.body)),
      t
    )
  },
  Ot = (e, t, a = null) => {
    const l = L(
      kt,
      e,
      se(e.message) || Se(e.message)
        ? { default: se(e.message) ? e.message : () => e.message }
        : null
    )
    return (
      (l.appContext = a),
      Te(l, t),
      $t(e).appendChild(t.firstElementChild),
      l.component
    )
  },
  At = () => document.createElement('div'),
  Lt = (e, t) => {
    const a = At()
    ;(e.onVanish = () => {
      Te(null, a), F.delete(r)
    }),
      (e.onAction = (s) => {
        const c = F.get(r)
        let p
        e.showInput ? (p = { value: r.inputValue, action: s }) : (p = s),
          e.callback
            ? e.callback(p, l.proxy)
            : s === 'cancel' || s === 'close'
              ? e.distinguishCancelAndClose && s !== 'cancel'
                ? c.reject('close')
                : c.reject('cancel')
              : c.resolve(p)
      })
    const l = Ot(e, a, t),
      r = l.proxy
    for (const s in e)
      ye(e, s) &&
        !ye(r.$props, s) &&
        (s === 'closeIcon' && Me(e[s]) ? (r[s] = ne(e[s])) : (r[s] = e[s]))
    return (r.visible = !0), r
  }
function N(e, t = null) {
  if (!je) return Promise.reject()
  let a
  return (
    le(e) || Se(e) ? (e = { message: e }) : (a = e.callback),
    new Promise((l, r) => {
      const s = Lt(e, t ?? N._context)
      F.set(s, { options: e, callback: a, resolve: l, reject: r })
    })
  )
}
const Nt = ['alert', 'confirm', 'prompt'],
  Rt = {
    alert: { closeOnPressEscape: !1, closeOnClickModal: !1 },
    confirm: { showCancelButton: !0 },
    prompt: { showCancelButton: !0, showInput: !0 }
  }
Nt.forEach((e) => {
  N[e] = Pt(e)
})
function Pt(e) {
  return (t, a, l, r) => {
    let s = ''
    return (
      Me(a) ? ((l = a), (s = '')) : qe(a) ? (s = '') : (s = a),
      N(
        Object.assign({ title: s, message: t, type: '', ...Rt[e] }, l, {
          boxType: e
        }),
        r
      )
    )
  }
}
N.close = () => {
  F.forEach((e, t) => {
    t.doClose()
  }),
    F.clear()
}
N._context = null
const M = N
M.install = (e) => {
  ;(M._context = e._context),
    (e.config.globalProperties.$msgbox = M),
    (e.config.globalProperties.$messageBox = M),
    (e.config.globalProperties.$alert = M.alert),
    (e.config.globalProperties.$confirm = M.confirm),
    (e.config.globalProperties.$prompt = M.prompt)
}
const Xt = M
export { Wt as E, Xt as a }
