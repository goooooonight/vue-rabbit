import { getGoods } from '@/api/goods'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export const useGoods = () => {
  // 商品详细
  const goods = ref({})
  // 商品id
  const goodsId = useRoute().params.goodsId
  // 获取商品详细
  const getGoodsFun = async (goodsId) => {
    // 进入加载状态
    isLoading.value = true
    const {
      data: { result }
    } = await getGoods(goodsId)
    goods.value = result
    // 退出加载状态
    isLoading.value = false
  }
  onMounted(() => getGoodsFun(goodsId))
  // 路由更新后重新获取商品详细
  onBeforeRouteUpdate((to) => {
    getGoodsFun(to.params.goodsId)
  })

  // 是否位于加载状态
  const isLoading = ref(true)

  return {
    goods,
    isLoading
  }
}
