<script setup>
import LayoutCateUl from './LayoutCateUl.vue'
import LayoutCateLi from './LayoutCateLi.vue'
import { useScroll } from '@vueuse/core'
// 获取页面滚动距离
const { y } = useScroll(window)
</script>

<template>
  <div
    class="app-header-sticky w-screen h-[100px] bg-white fixed left-0 top-0 z-[999]"
    :class="{ show: y > 78 }"
  >
    <div class="xtx-container flex items-center relative">
      <!-- logo -->
      <h1
        class="w-[200px] h-[100px] bg-[url(/src/assets/images/logo.png)] bg-position-[center_12px] bg-size-[160px] bg-no-repeat"
      >
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      <LayoutCateUl></LayoutCateUl>
      <ul class="flex items-center gap-[40px]">
        <LayoutCateLi><RouterLink to="/"> 品牌 </RouterLink></LayoutCateLi>
        <LayoutCateLi><RouterLink to="/"> 专题 </RouterLink></LayoutCateLi>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-header-sticky {
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;
  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  // logo样式
  h1 {
    a {
      text-indent: -9999px;
      display: block;
    }
  }
  ul {
    padding-left: 40px;
    border-left: 2px $xtxColor solid;
  }
}
</style>
