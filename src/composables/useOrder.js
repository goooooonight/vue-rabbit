import { getOrderAPI } from '@/api/order'
import { ref, onMounted } from 'vue'

export const useOrder = () => {
  // 商品信息
  const goods = ref([])
  // 订单总计
  const summary = ref({})

  // 是否进入加载状态
  const isLoading = ref(true)

  // 获取订单信息
  const getOrder = async () => {
    // 进入加载状态
    isLoading.value = true
    const {
      data: { result }
    } = await getOrderAPI()
    goods.value = result.goods
    summary.value = result.summary
    // 退出加载状态
    isLoading.value = false
  }

  onMounted(() => {
    getOrder()
  })

  return {
    goods,
    summary,
    isLoading
  }
}
