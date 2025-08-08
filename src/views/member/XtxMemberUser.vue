<script setup>
import { useUserStore } from '@/stores'
import { ArrowRight, Setting, Location, Trophy } from '@element-plus/icons-vue'

const { userInfo } = useUserStore()
</script>

<template>
  <!-- 头部个人信息 -->
  <div
    class="h-[140px] px-[60px] flex items-center bg-[url(/src/assets/images/center-bg.png)] bg-cover"
  >
    <!-- 左侧 -->
    <div class="flex items-center">
      <!-- 用户头像 -->
      <img
        :src="userInfo.avatar"
        alt=""
        class="w-[100px] h-[100px] rounded-full"
      />
      <!-- 用户昵称 -->
      <p class="!ml-[20px] text-white text-[22px]">
        {{ userInfo.nickname }}
      </p>
    </div>
    <!-- 右侧 -->
    <div class="w-[360px] ml-auto flex justify-between">
      <RouterLink
        to="/"
        class="!text-white flex flex-col items-center gap-[10px]"
      >
        <el-icon size="40"><Setting /></el-icon>
        <span class="text-[16px]">安全设置</span>
      </RouterLink>
      <RouterLink
        to="/"
        class="!text-white flex flex-col items-center gap-[10px]"
      >
        <el-icon size="40"><Trophy /></el-icon>
        <span class="text-[16px]">会员中心</span>
      </RouterLink>
      <RouterLink
        to="/"
        class="!text-white flex flex-col items-center gap-[10px]"
      >
        <el-icon size="40"><Location /></el-icon>
        <span class="text-[16px]">地址管理</span>
      </RouterLink>
    </div>
  </div>

  <!-- 我的收藏 -->
  <div class="h-[400px] mt-6 px-[20px] bg-white">
    <div class="py-[20px] flex border-b border-b-[#f5f5f5]">
      <h3 class="text-[22px]">我的收藏</h3>
      <RouterLink
        to="/"
        class="ml-auto mt-auto !text-[#999] flex items-center gap-1"
      >
        查看全部<el-icon><ArrowRight /></el-icon>
      </RouterLink>
    </div>
  </div>

  <!-- 猜你喜欢 -->
  <div class="h-[400px] mt-6 px-[20px] bg-white">
    <div class="py-[20px] flex border-b border-b-[#f5f5f5]">
      <h3 class="text-[22px]">猜你喜欢</h3>
      <RouterLink
        to="/"
        class="ml-auto mt-auto !text-[#999] flex items-center gap-1"
      >
        查看全部<el-icon><ArrowRight /></el-icon>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
