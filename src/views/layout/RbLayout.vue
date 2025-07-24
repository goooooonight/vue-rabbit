<script setup>
import LayoutNav from '@/components/LayoutNav.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutFixedNav from '@/components/LayoutFixedNav.vue'
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
