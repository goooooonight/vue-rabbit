import request from '@/utils/request'

// 获取分类列表
export const getCate = () => {
  return request.get('/home/category/head')
}
