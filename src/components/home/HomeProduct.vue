<script setup>
import HomePanel from './HomePanel.vue'
import { useCateStore } from '@/stores/modules/category'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import HomeGoodsItem from './HomeGoodsItem.vue'

// 分类列表
const { cateList } = storeToRefs(useCateStore())
</script>

<template>
  <div class="bg-white">
    <HomePanel
      :title="cate.name"
      v-for="cate in cateList.slice(0, 4)"
      :key="cate.id"
    >
      <!-- 头部信息 -->
      <template #head>
        <div class="ml-auto mt-auto flex items-center">
          <ul class="flex text-lg">
            <li
              v-for="children in cate.children.slice(0, 4)"
              :key="children.id"
            >
              <RouterLink to="/" class="children-li px-4 py-1 rounded-[5px]">{{
                children.name
              }}</RouterLink>
            </li>
          </ul>
          <RouterLink
            :to="`/category/${cate.id}`"
            class="check-all ml-[80px] text-lg flex items-center gap-1"
            >查看全部<el-icon color="#999"><ArrowRight /></el-icon
          ></RouterLink>
        </div>
      </template>
      <!-- 商品展示 -->
      <template #itemList>
        <div
          class="w-[240px] h-[610px] bg-gradient-to-br from-[#93ddcd] via-[#a8e6d7] to-[#1dc779] shadow-lg rounded-lg overflow-hidden"
        >
          <RouterLink
            :to="`/category/${cate.id}`"
            class="w-full h-full grid place-items-center"
          >
            <img v-img-lazy="cate.picture" alt="" />
          </RouterLink>
        </div>
        <ul class="grid grid-cols-4 gap-2">
          <li
            v-for="(item, index) in cate.goods.slice(0, 8)"
            :key="item.id"
            class="relative"
            :class="{ 'border-b-2 border-b-[#93ddcd]': index < 4 }"
          >
            <HomeGoodsItem :item="item"></HomeGoodsItem>
          </li>
        </ul>
      </template>
    </HomePanel>
  </div>
</template>

<style scoped lang="scss">
.children-li {
  &:hover {
    background-color: $xtxColor;
    color: white;
  }
}
.check-all {
  color: #999;
  &:hover {
    color: $xtxColor;
  }
}
</style>
