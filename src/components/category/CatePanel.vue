<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { defineProps } from 'vue'
import GoodsItem from './GoodsItem.vue'

defineProps({
  // 二级分类
  children: Object
})
</script>

<template>
  <div class="h-[458px] bg-white my-6 py-[20px]">
    <!-- 面板头部 -->
    <div class="relative mb-10">
      <h3 class="text-center text-[28px] leading-[60px] text-[#666666]">
        - {{ children.name }} -
      </h3>
      <p class="text-center text-[20px] text-[#999]">这里四字，这里也是</p>
      <RouterLink
        :to="`/category/sub/${children.id}`"
        class="check-all absolute top-0 right-[20px] text-lg flex items-center gap-1"
        >查看全部<el-icon color="#999"><ArrowRight /></el-icon
      ></RouterLink>
    </div>
    <!-- 面板内容 -->
    <ul class="flex">
      <li v-for="item in children.goods" :key="item.id">
        <RouterLink to="/">
          <GoodsItem :item="item"></GoodsItem>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
// 查看全部
.check-all {
  color: #999;
  &:hover {
    color: $xtxColor;
  }
}
// 列表样式
ul {
  padding: 0 65px;
}
</style>
