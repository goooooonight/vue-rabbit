<script setup>
import OrderPanel from '@/components/order/OrderPanel.vue'
</script>

<template>
  <div class="xtx-container">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator=">" class="mx-2 my-10">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/cart"> 购物车 </el-breadcrumb-item>
      <el-breadcrumb-item> 填写订单 </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 订单填写面板 -->
    <OrderPanel></OrderPanel>
  </div>
</template>

<style scoped></style>
