<script setup></script>

<template>
  <div class="xtx-container">
    <div class="mt-6 flex">
      <!-- 左侧菜单栏 -->
      <div class="w-[230px]">
        <el-menu default-active="1-1" router>
          <el-sub-menu index="1">
            <template #title>
              <span>我的账户</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/member/user">个人中心</el-menu-item>
              <el-menu-item index="1-2">消息通知</el-menu-item>
              <el-menu-item index="1-3">个人信息</el-menu-item>
              <el-menu-item index="1-4">安全设置</el-menu-item>
              <el-menu-item index="1-5">我的足迹</el-menu-item>
              <el-menu-item index="1-6">地址管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <span>交易管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/member/order">我的订单</el-menu-item>
              <el-menu-item index="2-2">优惠券</el-menu-item>
              <el-menu-item index="2-3">评价晒单</el-menu-item>
              <el-menu-item index="2-4">售后服务</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <span>我的收藏</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">收藏的商品</el-menu-item>
              <el-menu-item index="3-2">收藏的专题</el-menu-item>
              <el-menu-item index="3-3">关注的品牌</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <span>帮助中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">帮助中心</el-menu-item>
              <el-menu-item index="4-2">在线客服</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </div>

      <!-- 右侧内容 -->
      <div class="ml-6 bg-white flex-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
