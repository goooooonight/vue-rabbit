<script setup>
import { defineProps } from 'vue'

defineProps({
  // 主标题
  title: String,
  // 副标题
  subTitle: String
})
</script>

<template>
  <div class="xtx-container px-[10px]">
    <!-- 标题 -->
    <div class="flex py-[40px]">
      <h1 class="text-4xl">
        {{ title
        }}<small class="ml-6 text-lg text-[#999]">{{ subTitle }}</small>
      </h1>
      <slot name="head"></slot>
    </div>
    <!-- 商品展示 -->
    <div class="flex gap-2">
      <slot name="itemList"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
