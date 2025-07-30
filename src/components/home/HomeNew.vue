<script setup>
import { ref } from 'vue'
import { getNew } from '@/api/home'
import HomePanel from './HomePanel.vue'
import { RouterLink } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'

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
      <template #head>
        <RouterLink
          to="/"
          class="ml-auto mt-auto text-lg flex items-center gap-1"
          >查看全部<el-icon color="#999"><ArrowRight /></el-icon></RouterLink
      ></template>
      <template #itemList>
        <div
          class="w-[306px] h-[406px] bg-[#f0f9f4] transition-transform duration-300 hover:-translate-y-2 shadow-[0_3px_8px_rgb(0_0_0_/_20%)]"
          v-for="item in newList"
          :key="item.id"
        >
          <img v-img-lazy="item.picture" alt="" class="w-[306px] h-[306px]" />
          <div
            class="px-[25px] py-[10px] flex flex-col items-center justify-center gap-2"
          >
            <p class="truncate text-[22px] w-full">{{ item.name }}</p>
            <span class="price text-[22px]">￥{{ item.price }}</span>
          </div>
        </div>
      </template>
    </HomePanel>
  </div>
</template>

<style scoped lang="scss">
a {
  color: #999;
  &:hover {
    color: $xtxColor;
  }
}
.price {
  color: $priceColor;
}
</style>
