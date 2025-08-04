<script setup>
import { Iphone, User } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message-box.css'
import 'element-plus/theme-chalk/el-overlay.css'

const userStore = useUserStore()
// 用户信息
const { userInfo } = storeToRefs(userStore)
const { removeUserInfo } = userStore

// 退出登录
const logout = async () => {
  await ElMessageBox.confirm('你确认退出登录吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  // 清空用户信息
  removeUserInfo()
}
</script>

<template>
  <!-- 头部导航 -->
  <header>
    <div class="xtx-container">
      <ul class="h-[53px] flex items-center justify-end">
        <li class="nav-item text-base">
          <!-- 如果已登录 -- 显示昵称 -->
          <RouterLink v-if="userInfo.token" to="/" class="flex items-center">
            <el-icon size="15px" class="mr-1"><User /></el-icon>
            {{ userInfo.nickname }}</RouterLink
          >
          <!-- 如果未登录 -- 显示"请先登录" -->
          <RouterLink v-else to="/login"> 请先登录</RouterLink>
        </li>
        <li>
          <!-- 如果已登录 -- 显示"退出登录" -->
          <span v-if="userInfo.token" @click="logout" class="cursor-pointer"
            >退出登录</span
          >
          <!-- 如果未登录 -- 显示"免费注册" -->
          <RouterLink v-else to="/">免费注册</RouterLink>
        </li>
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
  a,
  span {
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
