<script setup>
import { Iphone } from '@element-plus/icons-vue'
</script>

<template>
  <!-- 头部导航 -->
  <header>
    <div class="xtx-container">
      <ul
        class="flex items-center justify-end divide-solid divide-gray-400 divide-x-2 h-[53px]"
      >
        <li class="nav-item text-base">请先登录</li>
        <li class="nav-item text-base">免费注册</li>
        <li class="nav-item text-base">我的订单</li>
        <li class="nav-item text-base">会员中心</li>
        <li class="nav-item text-base">帮助中心</li>
        <li class="nav-item text-base">关于我们</li>
        <li class="nav-item text-base flex items-center">
          <el-icon><Iphone /></el-icon>手机版
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #333;
}
.nav-item {
  color: $infoTextColor;
  padding: 0 15px;
  &:hover {
    color: $xtxColor;
  }
  cursor: pointer;
}
.cate-tabs {
  height: 166px;
}
</style>
