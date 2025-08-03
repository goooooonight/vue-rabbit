<script setup>
import { defineProps, ref } from 'vue'

defineProps({
  goods: Object
})

// 当前显示的选项卡
const tabShow = ref('detail')
</script>

<template>
  <div class="w-[940px] bg-white">
    <!-- 选项卡 -->
    <div class="flex border-b border-b-[#f5f5f5]">
      <div
        class="tab-item border-r border-r-[#f5f5f5]"
        @click="tabShow = 'detail'"
      >
        <span :class="{ 'tab-active-item': tabShow === 'detail' }"
          >商品详细</span
        >
      </div>
      <div class="tab-item" @click="tabShow = 'comment'">
        <div class="flex">
          <span :class="{ 'tab-active-item': tabShow === 'comment' }"
            >商品评价</span
          >
          <span class="comment-count">({{ goods.commentCount }})</span>
        </div>
      </div>
    </div>
    <!-- 显示内容 -->
    <div class="p-[40px]">
      <!-- 商品详细 -->
      <div v-if="tabShow === 'detail'">
        <div
          v-if="goods.details.properties.length > 0"
          class="mb-[40px] flex gap-x-[30px] gap-y-[10px] flex-wrap"
        >
          <dl
            v-for="property in goods.details.properties"
            :key="property.name"
            class="flex"
          >
            <dt class="mr-[5px] text-[#999]">{{ property.name }}</dt>
            <dd class="text-[#666] flex-1">{{ property.value }}</dd>
          </dl>
        </div>
        <img
          v-for="pic in goods.details.pictures"
          :key="pic"
          v-img-lazy="pic"
          alt=""
          class="w-full"
        />
      </div>
      <!-- 商品评价 -->
      <div v-else>评价</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tab-item {
  font-size: 18px;
  padding: 0 40px;
  cursor: pointer;
  span {
    display: block;
    padding: 20px 0;
  }
  .comment-count {
    color: $priceColor;
  }
}
.tab-active-item {
  border-bottom: 2px $xtxColor solid;
}
</style>
