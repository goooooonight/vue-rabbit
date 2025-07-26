<script setup>
import HomePanel from './HomePanel.vue'
import { getHot } from '@/api/home'
import { ref } from 'vue'

// 人气推荐商品列表
const hotList = ref([])
// 获取人气推荐商品列表
const getHotFun = async () => {
  const {
    data: { result }
  } = await getHot()
  hotList.value = result
}
// 进入页面自动执行
getHotFun()
</script>

<template>
  <div class="bg-white">
    <HomePanel title="人气推荐" subTitle="人气爆款 不容错过">
      <div class="w-[306px] h-[406px]" v-for="item in hotList" :key="item.id">
        <img :src="item.picture" alt="" />
        <div
          class="px-[25px] py-[10px] flex flex-col items-center justify-center gap-2"
        >
          <p class="text-[22px]">{{ item.title }}</p>
          <span class="text-[18px] text-[#999]">{{ item.alt }}</span>
        </div>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped></style>
