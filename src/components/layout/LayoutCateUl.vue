<script setup>
import { ref, watch } from 'vue'
import { useCateStore } from '@/stores/modules/category'
import { storeToRefs } from 'pinia'

// 分类模块对象
const cateStore = useCateStore()
// 分类列表
const { cateList } = storeToRefs(cateStore)

// 当前聚焦的分类id
const hoverCateId = ref('')
// 当前聚焦的分类的二级分类
const childrenCate = ref([])

// 获取二级分类
watch(hoverCateId, () => {
  if (hoverCateId.value) {
    childrenCate.value = cateList.value.find(
      (item) => item.id === hoverCateId.value
    ).children
  } else {
    childrenCate.value = []
  }
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
  <!-- 分类列表 -->
  <ul class="cate-ul w-[820px] flex items-center gap-[40px] z-[998]">
    <li class="w-[38px] text-center">
      <RouterLink to="/"> 首页 </RouterLink>
    </li>
    <li
      v-for="item in cateList"
      :key="item.id"
      class="w-[38px] text-center"
      @mouseenter="handleCateEnter(item.id)"
      @mouseleave="handleCateLeave"
    >
      <RouterLink active-class="active" :to="`/category/${item.id}`">
        {{ item.name }}
      </RouterLink>
    </li>
  </ul>
  <!-- 二级分类列表 -->
  <transition name="menu">
    <ul
      class="children-cate flex items-center gap-6 h-[120px] w-full bg-white shadow-[0_-6px_8px_-1px_rgba(0,0,0,0.1)] absolute left-1/2 top-4/5 z-[999]"
      v-show="hoverCateId"
      @mouseenter="handleChildrenEnter"
      @mouseleave="handleChildrenLeave"
    >
      <li v-for="(item, index) in childrenCate" :key="index">
        <div class="flex flex-col items-center">
          <img :src="item.picture" alt="" class="w-[50px] h-[50px] mb-2" />
          <span>{{ item.name }}</span>
        </div>
      </li>
    </ul>
  </transition>
</template>

<style scoped lang="scss">
// 分类导航列表样式
.cate-ul {
  padding-left: 40px;
  a {
    &:hover {
      color: $xtxColor;
      border-bottom: 1px $xtxColor solid;
    }
  }
  // 导航激活状态样式
  .active {
    color: $xtxColor;
    border-bottom: 1px $xtxColor solid;
  }
}
// 二级分类列表
.children-cate {
  padding: 0 5%;
  transform: translateX(-50%);
}
// 二级分类动画
// 菜单动画
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}

.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>
