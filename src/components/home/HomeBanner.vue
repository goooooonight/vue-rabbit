<script setup>
import { getBanner } from '@/api/home'
import { ref } from 'vue'
import HomeCategory from './HomeCategory.vue'

// 轮播图数据
const bannerList = ref([])
// 获取轮播图数据
const getBannerFun = async () => {
  const {
    data: { result }
  } = await getBanner('1')
  bannerList.value = result
}
// 进入页面自动执行
getBannerFun()
</script>

<template>
  <div class="xtx-container">
    <div class="relative">
      <HomeCategory></HomeCategory>
      <el-carousel v-if="bannerList.length > 0" height="500px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
// 轮播图组件样式
// 轮播图左侧按钮
:deep(.el-carousel__arrow--left) {
  margin-left: 250px;
}
// 轮播图底部指示器
:deep(.el-carousel__indicators--horizontal) {
  margin-left: 125px;
}
</style>
