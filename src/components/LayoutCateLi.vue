<script setup>
import { defineProps } from 'vue'
defineProps({
  itemName: String
})
</script>

<template>
  <li class="cate-li">
    {{ itemName }}
  </li>
</template>

<style scoped lang="scss">
// 分类列表项样式
.cate-li {
  width: 38px;
  text-align: center;
  &:hover {
    color: $xtxColor;
    border-bottom: 1px $xtxColor solid;
  }
}
</style>
