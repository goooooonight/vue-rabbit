<script setup>
import { defineProps } from 'vue'

defineProps({
  addr: Object
})
</script>

<template>
  <ul class="flex flex-col gap-[10px]">
    <li>
      <span
        >收<i class="w-2 inline-block"></i>货<i class="w-2 inline-block"></i
        >人：</span
      >{{ addr.receiver }}
    </li>
    <li><span>联系方式：</span>{{ addr.contact }}</li>
    <li><span>收货地址：</span>{{ addr.fullLocation }}</li>
  </ul>
</template>

<style scoped lang="scss">
li {
  span {
    color: #999;
    margin-right: 12px;
  }
}
</style>
