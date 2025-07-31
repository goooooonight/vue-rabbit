<script setup>
import { useSubCategory } from '@/composables/useSubCategory'
import SubFilter from '@/components/sub-category/SubFilter.vue'
import SubProduct from '@/components/sub-category/SubProduct.vue'

// 二级分类
const { subCate } = useSubCategory()
</script>

<template>
  <div class="xtx-container">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator=">" class="mx-2 my-10">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <!-- 一级分类路由 -->
      <el-breadcrumb-item :to="`/category/${subCate.parentId}`">{{
        subCate.parentName
      }}</el-breadcrumb-item>
      <!-- 二级分类路由 -->
      <el-breadcrumb-item>
        <transition name="slide-right" mode="out-in">
          <span :key="subCate.id">{{ subCate.name }}</span>
        </transition>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 筛选面板 -->
    <SubFilter
      :brands="subCate.brands"
      :sale-properties="subCate.saleProperties"
    ></SubFilter>
    <!-- 商品列表 -->
    <SubProduct :category-id="subCate.id"></SubProduct>
  </div>
</template>

<style scoped lang="scss">
// 面包屑分类名称切换动画
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-right-enter-to,
.slide-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
