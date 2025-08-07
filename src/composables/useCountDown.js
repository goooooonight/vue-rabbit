import { ref, onUnmounted, computed } from 'vue'
import { formatTime } from '@/utils/format'

export const useCountDown = () => {
  // 定时器
  let timer = null

  // 时间
  const time = ref(0)
  // 格式化时间
  const timeFormat = computed(() => formatTime(time.value * 1000))

  // 2. 开启倒计时的函数
  const start = (currentTime) => {
    // 开始倒计时的逻辑
    // 核心逻辑的编写：每隔1s就减一
    time.value = currentTime
    timer = setInterval(() => {
      time.value--
    }, 1000)
  }
  // 组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer)
  })

  return {
    timeFormat,
    start
  }
}
