import request from '@/utils/request'

// 生成订单
export const getOrderAPI = () => {
  return request.get('/member/order/pre')
}

// 提交订单
export const commitOrderAPI = (obj) => {
  return request.post('/member/order', obj)
}

// 获取订单详细
export const getOrderInfoAPI = (id) => {
  return request.get(`/member/order/${id}`)
}
