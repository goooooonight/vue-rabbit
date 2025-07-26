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
