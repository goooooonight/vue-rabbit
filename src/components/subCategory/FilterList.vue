<script setup>
import { defineProps, ref } from 'vue'

defineProps({
  // 列表头
  title: String,
  // 列表
  items: Array
})

// 选择的规格
const activeId = ref('all')
</script>

<template>
  <div class="flex">
    <span class="w-[80px] text-[#999]">{{ title }}:</span>
    <ul class="flex-1 flex flex-wrap gap-x-[30px] gap-y-[20px]">
      <li :class="{ active: activeId === 'all' }" @click="activeId = 'all'">
        全部
      </li>
      <li
        v-for="item in items"
        :key="item.id"
        class="max-w-[112px] truncate"
        :class="{ active: activeId === item.id }"
        @click="activeId = item.id"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
li {
  cursor: pointer;
  &:hover {
    color: $xtxColor;
  }
}
.active {
  color: $xtxColor;
}
</style>
