import request from '@/utils/request'

// 获取轮播图数据
export const getBanner = (distributionSite) => {
  return request.get('/home/banner', {
    params: {
      // 投放位置
      distributionSite
    }
  })
}
// 获取新鲜好物
export const getNew = (limit) => {
  return request.get('/home/new', {
    params: {
      limit
    }
  })
}
// 获取人气推荐
export const getHot = () => {
  return request.get('/home/hot')
}
