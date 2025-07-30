<script setup>
import LayoutNav from '@/components/layout/LayoutNav.vue'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
import LayoutFixedNav from '@/components/layout/LayoutFixedNav.vue'
import { useCateStore } from '@/stores/modules/category'

// 分类模块对象
const cateStore = useCateStore()
// 进入页面执行一次,获取分类列表
cateStore.getCategory()
</script>

<template>
  <!-- 头部导航 -->
  <LayoutHeader></LayoutHeader>
  <!-- 分类导航 -->
  <LayoutNav></LayoutNav>
  <!-- 固定分类导航 -->
  <LayoutFixedNav></LayoutFixedNav>
  <!-- 主体部分 -->
  <router-view />
  <!-- 底部信息 -->
  <LayoutFooter></LayoutFooter>
</template>

<style scoped lang="scss"></style>
