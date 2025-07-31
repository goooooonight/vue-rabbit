<script setup>
import { useCateStore } from '@/stores/modules/category'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'

// 分类列表
const { cateList } = storeToRefs(useCateStore())

// 获得焦点的分类id
const hoverCateId = ref('')
// 当前悬停的分类的商品lieb
const cateGoods = computed(() => {
  const foundCate = cateList.value.find((item) => item.id === hoverCateId.value)
  return foundCate?.goods || []
})
// 延时隐藏定时器
let hideTimer = null
// 鼠标进入分类项
const handleCateEnter = (id) => {
  // 清除隐藏定时器
  if (hideTimer) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
  hoverCateId.value = id
}
// 鼠标离开分类项
const handleCateLeave = () => {
  // 延时隐藏，给用户时间移动到二级分类
  hideTimer = setTimeout(() => {
    hoverCateId.value = ''
  }, 200)
}
// 鼠标进入二级分类列表
const handleChildrenEnter = () => {
  // 清除隐藏定时器
  if (hideTimer) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
}
// 鼠标离开二级分类列表
const handleChildrenLeave = () => {
  hoverCateId.value = ''
}
</script>

<template>
  <div
    class="w-full h-full flex absolute top-0 left-0 z-998 pointer-events-none"
  >
    <!-- 左侧分类列表 -->
    <ul class="w-[250px] h-full flex flex-col bg-black/85 pointer-events-auto">
      <li
        v-for="cate in cateList"
        :key="cate.id"
        class="flex-1 flex items-center pl-[40px]"
        @mouseenter="handleCateEnter(cate.id)"
        @mouseleave="handleCateLeave"
      >
        <RouterLink :to="`/category/${cate.id}`" class="text-lg mr-2">{{
          cate.name
        }}</RouterLink>
        <RouterLink
          v-for="children in cate.children.slice(0, 2)"
          :key="children.id"
          :to="`/category/sub/${children.id}`"
          class="mr-2"
        >
          {{ children.name }}</RouterLink
        >
      </li>
      <li
        class="flex-1 flex items-center pl-[40px]"
        @mouseenter="handleCateEnter('11')"
        @mouseleave="handleCateLeave"
      >
        <RouterLink to="/" class="text-lg mr-2">品牌</RouterLink>
        <RouterLink to="/" class="mr-2">品牌推荐</RouterLink>
      </li>
    </ul>
    <!-- 右侧分类推荐 -->
    <div
      class="flex-1 bg-white/65 px-4 py-8 pointer-events-auto"
      v-show="hoverCateId"
      @mouseenter="handleChildrenEnter"
      @mouseleave="handleChildrenLeave"
    >
      <div class="mb-8">
        <h4 class="text-2xl">
          分类推荐<small class="ml-2 text-base text-gray-600"
            >根据您的购买或浏览记录推荐</small
          >
        </h4>
      </div>
      <div class="flex gap-3 flex-wrap">
        <div
          v-for="item in cateGoods"
          :key="item.id"
          class="w-[313px] h-[120px] bg-white border-gray-300 border-2 rounded-sm flex items-center gap-2 px-2"
        >
          <img v-img-lazy="item.picture" alt="" class="w-[95px]" />
          <div class="flex-1 min-w-0">
            <h5 class="name">{{ item.name }}</h5>
            <p class="desc truncate">{{ item.desc }}</p>
            <span class="price"
              ><span class="text-lg">￥</span>{{ item.price }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
li {
  &:hover {
    background-color: $xtxColor;
  }
  a {
    color: white;
  }
}
// 分类推荐物品样式
.name {
  font-size: 16px;
  color: #666;
}
.desc {
  color: #999;
}
.price {
  font-size: 22px;
  color: $priceColor;
}
</style>
