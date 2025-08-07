import request from '@/utils/request'

export const getOrderAPI = () => {
  return request.get('/member/order/pre')
}
