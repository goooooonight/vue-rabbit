<script setup>
import { Opportunity, SuccessFilled } from '@element-plus/icons-vue'
import { getOrderInfoAPI } from '@/api/order'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// 定义路由对象
const route = useRoute()
const router = useRouter()

// 是否进入加载状态
const isLoading = ref(true)
// 支付金额
const orderPay = ref({})
// 获取订单详细
const getOrderInfo = async () => {
  // 进入加载状态
  isLoading.value = true
  const {
    data: { result }
  } = await getOrderInfoAPI(route.query.orderId)
  orderPay.value = result.payMoney
  // 退出加载状态
  isLoading.value = false
}
onMounted(() => getOrderInfo())
</script>

<template>
  <div class="xtx-container">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator=">" class="mx-2 my-10">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/cart"> 购物车 </el-breadcrumb-item>
      <el-breadcrumb-item> 支付结果 </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 支付结果 -->
    <div
      v-load="isLoading"
      class="py-[100px] leading-[40px] text-center bg-white flex flex-col items-center"
    >
      <div>
        <el-icon color="#1dc779" size="80" class="mr-[14px]"
          ><SuccessFilled
        /></el-icon>
        <p class="text-[24px]">订单支付成功</p>
        <p class="text-[16px] text-[#999]">
          我们将尽快为您发货，收货期间请保持手机畅通
        </p>
      </div>
      <div>
        <div class="text-[16px]">
          <p>支付方式：支付宝支付</p>
          <p>
            支付金额：<span class="price">￥{{ orderPay }}</span>
          </p>
        </div>
        <div class="py-[40px]">
          <el-button class="custom-btn" type="primary" size="large"
            >查看订单</el-button
          >
          <el-button
            class="custom-btn"
            type="default"
            size="large"
            @click="router.push('/')"
            >进入首页</el-button
          >
        </div>
      </div>

      <!-- 温馨提示 -->
      <p class="text-[#999] flex items-center">
        <el-icon><Opportunity /></el-icon>
        温馨提示：小兔鲜儿不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作，保护资产、谨慎操作。
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
// 支付金额
.price {
  color: $priceColor;
}
// 自定义按钮
.custom-btn {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
</style>
