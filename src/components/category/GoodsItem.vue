<script setup>
import { defineProps } from 'vue'

defineProps({
  item: Object
})
</script>

<template>
  <RouterLink :to="`/goods/${item.id}`">
    <div
      class="item w-[220px] h-[300px] px-[30px] flex flex-col justify-center items-center"
    >
      <img v-img-lazy="item.picture" alt="" class="w-[160px] h-[160px]" />
      <p class="w-full text-center text-[16px] truncate">
        {{ item.name }}
      </p>
      <p class="w-full text-center truncate text-[#999]">
        {{ item.desc }}
      </p>
      <p class="price text-[20px]">￥{{ item.price }}</p>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.item {
  transition: all 0.3s ease;
  &:hover {
    box-shadow:
      0 4px 20px rgba(0, 0, 0, 0.15),
      0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  p {
    padding-top: 10px;
  }
  .price {
    color: $priceColor;
  }
}
</style>
