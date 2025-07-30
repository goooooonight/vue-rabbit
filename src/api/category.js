import request from '@/utils/request'

// 获取分类列表
export const getCateList = () => {
  return request.get('/home/category/head')
}
// 获取一级分类列表
export const getCate = (id) => {
  return request.get('/category', {
    params: {
      id
    }
  })
}
