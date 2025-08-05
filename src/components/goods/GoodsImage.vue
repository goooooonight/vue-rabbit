<script setup>
import { defineProps, ref, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'
import { onBeforeRouteUpdate } from 'vue-router'

defineProps({
  pictures: Array
})

// 预览图片
const hoverIndex = ref(0)
// 路由更新后重置预览图片
onBeforeRouteUpdate(() => (hoverIndex.value = 0))

// 获取鼠标相对位置
const target = ref(null)
const { elementX, elementY, isOutside } = useMouseInElement(target)
// 放大窗口位置
const left = ref(0)
const top = ref(0)
// 图片放大区域
const positionX = ref(0)
const positionY = ref(0)

watch([elementX, elementY, isOutside], () => {
  // 如果鼠标不在图片上，则不运行
  if (isOutside.value) return
  // 非边界情况
  if (elementX.value > 100 && elementX.value < 300) {
    left.value = elementX.value - 100
  }
  if (elementY.value > 100 && elementY.value < 300) {
    top.value = elementY.value - 100
  }
  // 边界特殊处理
  if (elementX.value - 100 < 0) {
    left.value = 0
  }
  if (elementX.value + 100 > 400) {
    left.value = 200
  }
  if (elementY.value - 100 < 0) {
    top.value = 0
  }
  if (elementY.value + 100 > 400) {
    top.value = 200
  }
  // 修改图片放大区域
  // 由于原图片尺寸是800*800，把它放在400*400的容器里作为背景图，能够实现2倍放大的效果
  positionX.value = -left.value * 2
  positionY.value = -top.value * 2
})
</script>

<template>
  <div class="flex">
    <div class="relative">
      <!-- 图片预览 -->
      <img
        :src="pictures[hoverIndex]"
        alt=""
        class="w-[400px] h-[400px] mr-[10px]"
        @mouseenter="isShow = true"
        ref="target"
      />
      <!-- 图片放大区域 -->
      <div
        v-show="!isOutside"
        class="w-[200px] h-[200px] bg-black/20 absolute cursor-move"
        :style="[
          {
            left: `${left}px`,
            top: `${top}px`
          }
        ]"
      ></div>
      <!-- 放大后的图片 -->
      <div
        v-show="!isOutside"
        class="w-[400px] h-[400px] mr-[10px] absolute top-0 left-[410px] z-[998]"
        :style="[
          {
            backgroundImage: `url(${pictures[hoverIndex]})`,
            backgroundPositionX: `${positionX}px`,
            backgroundPositionY: `${positionY}px`,
            backgroundSize: '800px 800px'
          }
        ]"
      />
    </div>
    <!-- 图片列表 -->
    <ul>
      <li
        v-for="(pic, index) in pictures"
        :key="index"
        class="w-[68px] h-[68px] mb-[15px]"
        :class="{ 'hover-pic': hoverIndex === index }"
        @mouseenter="hoverIndex = index"
      >
        <img :src="pic" alt="" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.hover-pic {
  border: 2px $xtxColor solid;
}
</style>
