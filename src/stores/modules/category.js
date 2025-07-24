import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCate } from '@/api/category'

// 用户模块
export const useCateStore = defineStore('rabbit-category', () => {
  // 分类列表
  const cateList = ref([])
  // 获取分类列表
  const getCategory = async () => {
    const {
      data: { result }
    } = await getCate()
    cateList.value = result
  }

  return { cateList, getCategory }
})
