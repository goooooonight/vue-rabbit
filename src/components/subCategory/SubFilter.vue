<script setup>
import { defineProps } from 'vue'
import FilterList from './FilterList.vue'

defineProps({
  // 品牌列表
  brands: Array,
  // 其他参数列表
  saleProperties: Array
})
</script>

<template>
  <!-- 筛选面板 -->
  <div class="bg-white p-[25px] flex flex-col gap-[20px]">
    <!-- 品牌 -->
    <FilterList title="品牌" :items="brands"></FilterList>
    <!-- 其他配置 -->
    <FilterList
      v-for="property in saleProperties"
      :key="property.id"
      :title="property.name"
      :items="property.properties"
    ></FilterList>
  </div>
</template>

<style scoped></style>
