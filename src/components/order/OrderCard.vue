<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String
})
</script>

<template>
  <div class="bg-white">
    <!-- 卡片头部 -->
    <div class="h-[60px] mx-[20px] py-[18px] border-b border-b-[#f5f5f5]">
      <h2 class="text-[16px] font-[400]">{{ title }}</h2>
    </div>
    <!-- 卡片内容 -->
    <div class="p-[20px]">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
