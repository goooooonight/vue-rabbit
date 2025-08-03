<script setup>
import { Iphone } from '@element-plus/icons-vue'
</script>

<template>
  <!-- 头部导航 -->
  <header>
    <div class="xtx-container">
      <ul class="h-[53px] flex items-center justify-end">
        <li class="nav-item text-base">
          <RouterLink to="/login"> 请先登录</RouterLink>
        </li>
        <li><RouterLink to="/">免费注册</RouterLink></li>
        <li><RouterLink to="/">我的订单</RouterLink></li>
        <li><RouterLink to="/">会员中心</RouterLink></li>
        <li><RouterLink to="/">帮助中心</RouterLink></li>
        <li><RouterLink to="/">关于我们</RouterLink></li>
        <li>
          <RouterLink to="/" class="flex items-center">
            <el-icon><Iphone /></el-icon>手机版
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #333;
}
li {
  a {
    color: $infoTextColor;
    padding: 0 15px;
    &:hover {
      color: $xtxColor;
    }
  }
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 14%; // 从25%的位置开始
    bottom: 14%; // 到75%的位置结束
    width: 0.5px;
    background-color: #f5f5f5;
  }
  &:last-child::after {
    display: none;
  }
}
.cate-tabs {
  height: 166px;
}
</style>
