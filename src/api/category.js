import request from '@/utils/request'

// 获取分类列表
export const getCateList = () => {
  return request.get('/home/category/head')
}
