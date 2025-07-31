import { getBanner } from '@/api/home'
import { ref, onMounted } from 'vue'

export const useBanner = () => {
  // 轮播图数据
  const bannerList = ref([])
  // 获取轮播图数据
  const getBannerFun = async () => {
    const {
      data: { result }
    } = await getBanner('2')
    bannerList.value = result
  }
  onMounted(() => getBannerFun())
  return {
    bannerList
  }
}
