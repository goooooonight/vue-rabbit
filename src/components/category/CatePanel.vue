<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { defineProps } from 'vue'

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
          <div
            class="item w-[220px] h-[300px] px-[30px] flex flex-col justify-center items-center"
          >
            <img v-img-lazy="item.picture" alt="" class="w-[160px] h-[160px]" />
            <p class="w-full text-center text-[16px] truncate">
              {{ item.name }}
            </p>
            <p class="w-full text-center truncate text-[#999]">
              {{ item.desc }}
            </p>
            <p class="price text-[20px]">￥{{ item.price }}</p>
          </div>
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
  p {
    padding-top: 10px;
  }
  .item {
    transition: all 0.3s ease;
    &:hover {
      box-shadow:
        0 4px 20px rgba(0, 0, 0, 0.15),
        0 2px 8px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
  }
  .price {
    color: $priceColor;
  }
}
</style>
