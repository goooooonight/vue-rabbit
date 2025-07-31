<script setup>
import CatePanel from '@/components/category/CatePanel.vue'
import { useBanner } from '@/composables/useBanner'
import { useCategory } from '@/composables/useCategory'

// 一级分类
const { cate } = useCategory()

// 轮播图数据
const { bannerList } = useBanner()
</script>

<template>
  <div class="xtx-container">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator=">" class="mx-2 my-10">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <transition name="slide-right" mode="out-in">
          <span :key="cate.id">{{ cate.name }}</span>
        </transition>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 轮播图 -->
    <el-carousel v-if="bannerList.length > 0" height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 全部分类 -->
    <div class="h-[260px] bg-white my-6">
      <h3 class="text-center text-[28px] leading-[100px] text-[#666666]">
        全部分类
      </h3>
      <ul class="flex">
        <li
          v-for="item in cate.children"
          :key="item.id"
          class="w-[168px] h-[160px]"
        >
          <RouterLink
            :to="`/category/sub/${item.id}`"
            class="flex flex-col items-center"
          >
            <img v-img-lazy="item.picture" alt="" class="w-[100px] h-[100px]" />
            <p class="leading-[40px] text-[16px]">{{ item.name }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
    <!-- 二级分类列表 -->
    <CatePanel
      v-for="children in cate.children"
      :key="children.id"
      :children="children"
    ></CatePanel>
  </div>
</template>

<style scoped lang="scss">
ul {
  padding: 0 32px;
  a {
    &:hover {
      color: $xtxColor;
    }
  }
}

// 面包屑分类名称切换动画
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-right-enter-to,
.slide-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
