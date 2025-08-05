<script setup>
import CartTable from '@/components/cart/CartTable.vue'
import CartPanel from '@/components/cart/CartPanel.vue'
</script>

<template>
  <div class="xtx-container">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator=">" class="mx-2 my-10">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item> 购物车 </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 购物车 -->
    <CartTable></CartTable>
    <!-- 购物车操作面板 -->
    <CartPanel></CartPanel>
  </div>
</template>

<style scoped lang="scss"></style>
