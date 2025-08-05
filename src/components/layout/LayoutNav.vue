<script setup>
import { Search, ShoppingCart } from '@element-plus/icons-vue'
import LayoutCateUl from './LayoutCateUl.vue'
import { useCart } from '@/composables/useCart'

// 购物车商品总数
const { cartCount } = useCart()
</script>

<template>
  <!-- 分类导航 -->
  <div class="h-[132px] bg-white">
    <div class="xtx-container flex items-center relative">
      <!-- logo -->
      <h1
        class="w-[200px] h-[132px] bg-[url(/src/assets/images/logo.png)] bg-[position:center_18px] bg-contain bg-no-repeat flex-shrink-0"
      >
        <RouterLink to="/" class="h-full">小兔鲜</RouterLink>
      </h1>
      <LayoutCateUl></LayoutCateUl>
      <!-- 搜索框 -->
      <div class="search flex items-center w-[170px] pb-0.5 mr-3">
        <el-icon><Search /></el-icon>
        <input type="text" placeholder="搜一搜" />
      </div>
      <!-- 购物车 -->
      <el-badge :value="cartCount">
        <RouterLink to="/cart">
          <el-icon size="22px"><ShoppingCart /></el-icon>
        </RouterLink>
      </el-badge>
    </div>
  </div>
</template>

<style scoped lang="scss">
// logo样式
h1 {
  a {
    text-indent: -9999px;
    display: block;
  }
}
// 搜索框
.search {
  border-bottom: 1px #cdcdcd solid;
  input {
    margin-left: 5px;
  }
}
</style>
