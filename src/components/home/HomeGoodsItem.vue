<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

defineProps({
  item: Object
})

// 聚焦物品id
const hoverId = ref('')
</script>

<template>
  <div
    class="item w-[240px] h-[300px] px-[30px] py-[15px] flex flex-col items-center gap-[6px] overflow-hidden"
    @mouseenter="hoverId = item.id"
    @mouseleave="hoverId = ''"
  >
    <img v-img-lazy="item.picture" alt="" class="w-[160px] h-[160px]" />
    <p class="w-full h-[48px] text-[16px] line-clamp-2">{{ item.name }}</p>
    <p class="w-full truncate text-[#999]">{{ item.desc }}</p>
    <p class="price text-[20px]">￥{{ item.price }}</p>
    <div
      class="overlay w-[240px] h-[85px] flex flex-col justify-center items-center text-white bg-[#27ba9b] z-10 absolute bottom-0 left-0"
      :class="{ show: hoverId === item.id }"
    >
      <span class="w-[130px] pb-2 text-[20px] border-b text-center"
        >找相似</span
      >
      <span class="w-[130px] pt-2 flex justify-center"
        >发现更多宝贝<ArrowRight class="w-4"
      /></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  transition: all 0.3s ease;

  &:hover {
    box-shadow:
      0 0 0 1px $xtxColor,
      0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  .price {
    color: $priceColor;
  }
  // 覆盖样式
  .overlay {
    transform: translateY(100%);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    pointer-events: none;
    &.show {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    }
  }
}
</style>
