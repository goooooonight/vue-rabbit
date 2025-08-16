import { i as e } from './request-B0GuyAcH.js'
const o = () => e.get('/member/order/pre'),
  m = (r) => e.post('/member/order', r),
  s = (r) => e.get(`/member/order/${r}`),
  n = (r) => e.get('/member/order', { params: r })
export { s as a, n as b, m as c, o as g }
