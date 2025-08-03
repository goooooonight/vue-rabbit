import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块
export const useUserStore = defineStore(
  'rabbit-user',
  () => {
    // 用户信息
    // 定义用户信息对象
    const userInfo = ref({})
    // 设置用户信息
    const setUserInfo = (newInfo) => {
      userInfo.value = newInfo
    }
    return { userInfo, setUserInfo }
  },
  // 持久化
  {
    persist: true
  }
)
