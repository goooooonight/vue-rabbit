import { f as c, v as n } from './aria-DW8X8pJS.js'
import { g as a } from './_initCloneObject-CxZz_v-E.js'
var i = '[object Object]',
  s = Function.prototype,
  f = Object.prototype,
  e = s.toString,
  p = f.hasOwnProperty,
  b = e.call(Object)
function l(r) {
  if (!c(r) || n(r) != i) return !1
  var o = a(r)
  if (o === null) return !0
  var t = p.call(o, 'constructor') && o.constructor
  return typeof t == 'function' && t instanceof t && e.call(t) == b
}
export { l as i }
