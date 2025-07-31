import { getSubCate } from '@/api/subCategory'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export const useSubCategory = () => {
  // 二级分类
  const subCate = ref({})
  // 获取二级分类
  const subCateId = useRoute().params.subCateId
  const getSubCateFun = async (subCateId) => {
    const {
      data: { result }
    } = await getSubCate(subCateId)
    console.log(result)
    subCate.value = result
  }
  onMounted(() => getSubCateFun(subCateId))
  // 路由更新后重新获取二级分类数据
  onBeforeRouteUpdate((to) => {
    getSubCateFun(to.params.subCateId)
  })
  return {
    subCate
  }
}
