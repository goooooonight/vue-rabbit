<script setup>
import { ref, onMounted, defineProps } from 'vue'
import GoodsItem from '../category/GoodsItem.vue'
import { getSubCateItems } from '@/api/sub-category'

// 二级分类商品列表
const itemLists = ref([])
// 获取二级分类商品列表
const getSubCateItemsFun = async () => {
  const {
    data: { result }
  } = await getSubCateItems(reqData.value)
  // 进行商品列表的拼接
  itemLists.value = [...itemLists.value, ...result.items]
}
onMounted(() => getSubCateItemsFun())
// 无限滚动后的加载函数
const loadItems = () => {
  reqData.value.page++
  getSubCateItemsFun()
}

// 二级分类id
const props = defineProps({
  categoryId: String
})
// 请求数据
const reqData = ref({
  // 二级分类id
  categoryId: props.categoryId,
  // 当前页数
  page: 1,
  // 每页商品个数
  pageSize: 20,
  // 排序方式
  sortField: ''
})
</script>

<template>
  <div class="my-6 p-[25px] bg-white">
    <!-- 头部选项 -->
    <div class="flex">
      <!-- 排序选择 -->
      <div>
        <el-tabs
          v-model="reqData.sortField"
          type="card"
          @tab-change="getSubCateItemsFun"
        >
          <el-tab-pane label="默认排序" name=""></el-tab-pane>
          <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
          <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
          <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
        </el-tabs>
      </div>
      <!-- 仅显示选择 -->
      <div class="ml-auto">
        <el-checkbox label="仅显示有货商品" size="large" />
        <el-checkbox label="仅显示特惠商品" size="large" />
      </div>
    </div>
    <!-- 商品列表 -->
    <div
      class="mt-[20px] grid grid-cols-5 justify-items-center"
      v-infinite-scroll="loadItems"
    >
      <GoodsItem
        v-for="item in itemLists"
        :key="item.id"
        :item="item"
      ></GoodsItem>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
