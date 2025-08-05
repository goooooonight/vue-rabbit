import request from '@/utils/request'

// 合并购物车
export const mergeCartAPI = (cartList) => {
  return request.post('/member/cart/merge', cartList)
}

// 获取购物车列表
export const getCartAPI = () => {
  return request.get('/member/cart')
}

// 删除商品
export const removeCartAPI = (ids) => {
  return request.delete('/member/cart', {
    data: { ids: ids }
  })
}

// 加入商品
export const addCartAPI = (obj) => {
  return request.post('/member/cart', obj)
}

// 修改购物车商品
export const editCartAPI = (id, obj) => {
  return request.put(`/member/cart/${id}`, obj)
}

// 修改购物车全选状态
export const editAllCheckAPI = (obj) => {
  return request.put('/member/cart/selected', obj)
}
