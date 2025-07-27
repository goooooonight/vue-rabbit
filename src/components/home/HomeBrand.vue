<script setup>
import { getBrand } from '@/api/home'
import { ref, computed } from 'vue'
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'

// 热门品牌商品列表
const brandList = ref([])
// 获取热门品牌列表
const getBrandFun = async () => {
  const {
    data: { result }
  } = await getBrand(pageTotal * pageCount)
  brandList.value = result
  console.log(result)
}
// 进入页面自动执行
getBrandFun()

// 总页数
const pageTotal = 2
// 每页商品个数
const pageCount = 5
// 当前页数
const page = ref(1)
// 当前页显示的品牌列表
const currentPageBrands = computed(() => {
  const start = (page.value - 1) * pageCount
  const end = start + pageCount
  return brandList.value.slice(start, end)
})
</script>

<template>
  <div>
    <HomePanel title="热门品牌" subTitle="国际经典 品质保证">
      <template #head>
        <!-- 分页切换按钮组 -->
        <el-button-group class="ml-auto mt-auto">
          <el-button
            type="primary"
            size="default"
            :icon="ArrowLeftBold"
            :disabled="page <= 1"
            @click="page--"
            class="w-2"
          ></el-button>
          <el-button
            type="primary"
            size="default"
            :icon="ArrowRightBold"
            :disabled="page >= pageTotal"
            @click="page++"
            class="w-2"
          ></el-button>
        </el-button-group>
      </template>
      <!-- 品牌列表 -->
      <template #itemList>
        <div
          class="w-[240px] h-[305px] transition-transform duration-300 hover:-translate-y-2 shadow-[0_3px_8px_rgb(0_0_0_/_20%)]"
          v-for="item in currentPageBrands"
          :key="item.id"
        >
          <img :src="item.picture" alt="" class="h-full" />
        </div>
      </template>
    </HomePanel>
  </div>
</template>

<style scoped></style>
