<script setup>
import { ref } from 'vue'
import { getNew } from '@/api/home'
import HomePanel from './HomePanel.vue'

// 新鲜好物商品列表
const newList = ref([])
// 获取新鲜好物商品列表
const getNewFun = async () => {
  const {
    data: { result }
  } = await getNew('4')
  newList.value = result
}
// 进入页面自动执行
getNewFun()
</script>

<template>
  <div class="bg-white">
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <div
        class="w-[306px] h-[406px] bg-[#f0f9f4]"
        v-for="item in newList"
        :key="item.id"
      >
        <img :src="item.picture" alt="" />
        <div
          class="px-[25px] py-[10px] flex flex-col items-center justify-center gap-2"
        >
          <p class="truncate text-[22px] w-full">{{ item.name }}</p>
          <span class="price text-[22px]">￥{{ item.price }}</span>
        </div>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang="scss">
.price {
  color: $priceColor;
}
</style>
