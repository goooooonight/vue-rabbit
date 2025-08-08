import { getUserOrderAPI } from '@/api/order'
import { onMounted, ref } from 'vue'

export const useMemberOrder = () => {
  // 是否进入加载状态
  const isLoading = ref(true)

  // 获取订单列表
  const orderList = ref([])
  const total = ref(0)
  const params = ref({
    orderState: 0,
    page: 1,
    pageSize: 5
  })
  const getUserOrder = async () => {
    // 进入加载状态
    isLoading.value = true
    const {
      data: { result }
    } = await getUserOrderAPI(params.value)
    orderList.value = result.items
    total.value = result.counts
    // 退出加载状态
    isLoading.value = false
  }
  onMounted(() => getUserOrder())

  return {
    isLoading,
    orderList,
    total,
    params,
    getUserOrder
  }
}
