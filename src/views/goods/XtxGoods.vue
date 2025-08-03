<script setup>
import { useGoods } from '@/composables/useGoods'
import GoodsPanel from '@/components/goods/GoodsPanel.vue'
import GoodsItem from '@/components/category/GoodsItem.vue'
import { DataAnalysis } from '@element-plus/icons-vue'
import GoodsDetail from '@/components/goods/GoodsDetail.vue'
import GoodsHot from '@/components/goods/GoodsHot.vue'

// 商品详细
const { goods, isLoading } = useGoods()
</script>

<template>
  <div class="xtx-container">
    <!-- 面包屑导航 -->
    <div class="h-[72px] flex items-center">
      <el-breadcrumb separator=">" v-if="!isLoading" class="mx-5">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <!-- 一级分类路由 -->
        <el-breadcrumb-item :to="`/category/${goods.categories[1].id}`">{{
          goods.categories[1].name
        }}</el-breadcrumb-item>
        <!-- 二级分类路由 -->
        <el-breadcrumb-item :to="`/category/sub/${goods.categories[0].id}`">
          {{ goods.categories[0].name }}
        </el-breadcrumb-item>
        <!-- 商品名称 -->
        <el-breadcrumb-item>{{ goods.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 商品面板 -->
    <GoodsPanel :goods="goods" v-load="isLoading"></GoodsPanel>

    <!-- 同类商品推荐 -->
    <div v-if="!isLoading" class="my-6 px-[15px] py-[20px] bg-white">
      <h3 class="text-[20px] flex items-center gap-2">
        <el-icon color="#27ba9b"><DataAnalysis /></el-icon>同类商品推荐
      </h3>
      <div class="mt-[20px] px-[50px] flex justify-between">
        <GoodsItem
          v-for="item in goods.similarProducts"
          :key="item.id"
          :item="item"
          class=""
        >
        </GoodsItem>
      </div>
    </div>

    <div v-if="!isLoading" class="flex">
      <!-- 商品详细 -->
      <GoodsDetail :goods="goods"></GoodsDetail>
      <!-- 24小时热销榜 -->
      <div class="flex-1 flex flex-col gap-[20px]">
        <GoodsHot
          v-for="type in 2"
          :key="type"
          :goods-id="goods.id"
          :type="type"
        ></GoodsHot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
