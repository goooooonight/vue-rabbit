<script setup>
import { defineProps, ref, onMounted } from 'vue'
import { getHotGoods } from '@/api/goods'
import GoodsItem from '@/components/category/GoodsItem.vue'

const props = defineProps({
  goodsId: String,
  type: Number
})

// 商品热榜
const hotGoods = ref([])
// 获取商品热榜
const getHotGoodsFun = async () => {
  const {
    data: { result }
  } = await getHotGoods(props)
  hotGoods.value = result
}
// 热销榜标题
const titleByType = {
  1: '24小时热销榜',
  2: '周热销榜'
}
onMounted(() => getHotGoodsFun())
</script>

<template>
  <div class="ml-6 flex flex-col">
    <!-- 标题 -->
    <h3 class="h-[70px] bg-[#e26237] text-[#fff] text-[18px] leading-[70px]">
      {{ titleByType[type] }}
    </h3>
    <!-- 商品榜单 -->
    <ul>
      <li
        class="bg-white flex justify-center"
        v-for="item in hotGoods"
        :key="item.id"
      >
        <GoodsItem :item="item"></GoodsItem>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
h3 {
  padding-left: 25px;
}
li {
  padding: 20px 0;
  margin-top: 10px;
}
</style>
