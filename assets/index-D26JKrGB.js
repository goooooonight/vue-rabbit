import { a9 as o, $ as a } from './base-Bes0XUun.js'
import { g as s, O as c, I as i } from './index-DU_P6jZu.js'
const t = { prefix: Math.floor(Math.random() * 1e4), current: 0 },
  u = Symbol('elIdInjection'),
  I = () => (i() ? c(u, t) : t),
  p = (n) => {
    const e = I(),
      r = o()
    return a(() => s(n) || `${r.value}-id-${e.prefix}-${e.current++}`)
  }
export { I as a, p as u }
