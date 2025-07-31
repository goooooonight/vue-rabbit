import request from '@/utils/request'

// 获取二级分类列表
export const getSubCate = (id) => {
  return request.get('/category/sub/filter', {
    params: {
      id
    }
  })
}

// 获取二级分类商品列表
export const getSubCateItems = (data) => {
  return request.post('/category/goods/temporary', data)
}
