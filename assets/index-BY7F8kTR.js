import { a6 as g } from './index-62YaKhWX.js'
import { C, B as x } from './base-BSl8DOKd.js'
const s = new Map()
if (x) {
  let e
  document.addEventListener('mousedown', (t) => (e = t)),
    document.addEventListener('mouseup', (t) => {
      if (e) {
        for (const n of s.values())
          for (const { documentHandler: o } of n) o(t, e)
        e = void 0
      }
    })
}
function i(e, t) {
  let n = []
  return (
    g(t.arg) ? (n = t.arg) : C(t.arg) && n.push(t.arg),
    function (o, a) {
      const r = t.instance.popperRef,
        c = o.target,
        d = a?.target,
        l = !t || !t.instance,
        f = !c || !d,
        p = e.contains(c) || e.contains(d),
        m = e === c,
        h =
          (n.length && n.some((u) => u?.contains(c))) ||
          (n.length && n.includes(d)),
        v = r && (r.contains(c) || r.contains(d))
      l || f || p || m || h || v || t.value(o, a)
    }
  )
}
const B = {
  beforeMount(e, t) {
    s.has(e) || s.set(e, []),
      s.get(e).push({ documentHandler: i(e, t), bindingFn: t.value })
  },
  updated(e, t) {
    s.has(e) || s.set(e, [])
    const n = s.get(e),
      o = n.findIndex((r) => r.bindingFn === t.oldValue),
      a = { documentHandler: i(e, t), bindingFn: t.value }
    o >= 0 ? n.splice(o, 1, a) : n.push(a)
  },
  unmounted(e) {
    s.delete(e)
  }
}
export { B as C }
