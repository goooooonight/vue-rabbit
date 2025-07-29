<script setup></script>

<template>
  <li class="cate-li">
    <slot></slot>
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
