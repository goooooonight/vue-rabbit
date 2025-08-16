import { f as v } from './vnode-CiKbLLZx.js'
import {
  E as m,
  L as x,
  aa as M,
  aj as p,
  A as O,
  J as R
} from './index-62YaKhWX.js'
const S = (l, u, t) =>
    v(l.subTree)
      .filter((e) => {
        var s
        return (
          R(e) &&
          ((s = e.type) == null ? void 0 : s.name) === u &&
          !!e.component
        )
      })
      .map((e) => e.component.uid)
      .map((e) => t[e])
      .filter((e) => !!e),
  B = (l, u) => {
    const t = m({}),
      c = m([]),
      d = new WeakMap(),
      e = (n) => {
        ;(t.value[n.uid] = n),
          p(t),
          O(() => {
            const o = n.getVnode().el,
              r = o.parentNode
            if (!d.has(r)) {
              d.set(r, [])
              const i = r.insertBefore.bind(r)
              r.insertBefore = (a, h) => (
                d.get(r).some((f) => a === f || h === f) && p(t), i(a, h)
              )
            }
            d.get(r).push(o)
          })
      },
      s = (n) => {
        delete t.value[n.uid], p(t)
        const o = n.getVnode().el,
          r = o.parentNode,
          i = d.get(r),
          a = i.indexOf(o)
        i.splice(a, 1)
      },
      C = () => {
        c.value = S(l, u, t.value)
      },
      g = (n) => n.render(),
      N = x({
        setup(n, { slots: o }) {
          return () => (C(), o.default ? M(g, { render: o.default }) : null)
        }
      })
    return { children: c, addChild: e, removeChild: s, ChildrenSorter: N }
  }
export { B as u }
