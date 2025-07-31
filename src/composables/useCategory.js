import { useRoute } from 'vue-router'
import { getCate } from '@/api/category'
import { ref, onMounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
export const useCategory = () => {
  // 一级分类
  const cate = ref({})
  // 获取一级分类
  const cateId = useRoute().params.cateId
  const getCateFun = async (cateId) => {
    const {
      data: { result }
    } = await getCate(cateId)
    cate.value = result
  }
  onMounted(() => getCateFun(cateId))
  // 路由更新后重新获取分类数据
  onBeforeRouteUpdate((to) => {
    getCateFun(to.params.cateId)
  })
  return {
    cate
  }
}
