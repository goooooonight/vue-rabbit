import { u as d } from './cart-BUo9iONd.js'
import { s as l, q as c } from './index-62YaKhWX.js'
const i = () => {
  const u = d(),
    { cartList: t } = l(u),
    o = c(() => t.value.reduce((e, r) => e + r.count, 0)),
    n = c(() => t.value.reduce((e, r) => (r.selected ? e + r.count : e), 0)),
    s = c(() =>
      t.value.reduce((e, r) => (r.selected ? e + r.count * r.price : e), 0)
    ),
    a = c(() => t.value.reduce((e, r) => e + r.count * r.price, 0))
  return {
    cartStore: u,
    cartList: t,
    cartCount: o,
    checkCount: n,
    checkPrice: s,
    priceTotal: a
  }
}
export { i as u }
