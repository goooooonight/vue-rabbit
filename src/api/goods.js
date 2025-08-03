import request from '@/utils/request'

// 获取商品详细
export const getGoods = (id) => {
  return request.get('/goods', {
    params: {
      id
    }
  })
}
// 获取商品热榜
export const getHotGoods = ({ id, type, limit = 3 }) => {
  return request.get('/goods/hot', {
    params: {
      id,
      type,
      limit
    }
  })
}
