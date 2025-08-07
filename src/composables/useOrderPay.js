import { getOrderInfoAPI } from '@/api/order'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useCountDown } from '@/composables/useCountDown'

export const useOrderPay = () => {
  // 定义路由对象
  const route = useRoute()
  // 订单id
  const orderId = route.query.orderId

  // 是否进入加载状态
  const isLoading = ref(true)

  // 获取计时器相关对象、函数
  const { timeFormat, start } = useCountDown()

  // 订单详细
  const orderInfo = ref({})
  // 获取订单详细
  const getOrderInfo = async () => {
    // 进入加载状态
    isLoading.value = true
    const {
      data: { result }
    } = await getOrderInfoAPI(orderId)
    orderInfo.value = result
    // 退出加载状态
    isLoading.value = false
    // 开始倒计时
    start(orderInfo.value.countdown)
  }
  onMounted(() => getOrderInfo())

  // 是否进入等待订单支付状态
  const isWaiting = ref(false)
  // 支付地址
  const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
  const backURL = 'http://localhost:5173/paycallback'
  const redirectUrl = encodeURIComponent(backURL)
  const payUrl = `${baseURL}pay/aliPay?orderId=${orderId}&redirect=${redirectUrl}`
  // 跳转至支付宝支付
  const aliPay = () => {
    window.open(payUrl)
    // 进入等待订单支付状态
    isWaiting.value = true
  }

  return {
    orderId,
    isLoading,
    timeFormat,
    orderInfo,
    isWaiting,
    aliPay
  }
}
