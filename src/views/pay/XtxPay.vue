<script setup>
import OrderCard from '@/components/order/OrderCard.vue'
import { SuccessFilled, CircleCloseFilled } from '@element-plus/icons-vue'

import { useOrderPay } from '@/composables/useOrderPay'
import loadGif from '@/assets/images/load.gif'

const { isLoading, timeFormat, orderInfo, isWaiting, aliPay } = useOrderPay()
</script>

<template>
  <div class="xtx-container">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator=">" class="mx-2 my-10">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/cart"> 购物车 </el-breadcrumb-item>
      <el-breadcrumb-item> 支付订单 </el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 支付倒计时 -->
    <div
      class="h-[240px] px-[80px] bg-white flex items-center"
      v-load="isLoading"
    >
      <!-- 订单倒计时 -->
      <!-- 订单未超时 -->
      <div class="flex items-center" v-if="orderInfo.countdown != -1">
        <el-icon color="#1dc779" size="80" class="mr-[14px]"
          ><SuccessFilled
        /></el-icon>
        <div class="flex flex-col gap-[6px]">
          <p class="text-[20px]">订单提交成功！请尽快完成支付。</p>
          <p class="text-[16px] text-[#999]">
            支付还剩{{ timeFormat }}，超时后将取消订单
          </p>
        </div>
      </div>
      <!-- 订单超时 -->
      <div class="w-full flex justify-center items-center" v-else>
        <el-icon color="#f56c6c" size="80" class="mr-[14px]"
          ><CircleCloseFilled
        /></el-icon>
        <div class="flex flex-col gap-[6px]">
          <p class="text-[20px]">订单超时，已自动取消!</p>
        </div>
      </div>
      <!-- 应付总额 -->
      <div class="ml-auto" v-if="orderInfo.countdown != -1">
        <span class="text-[16px] text-[#999]">应付总额：</span>
        <span class="price text-[20px]">￥{{ orderInfo.totalMoney }}</span>
      </div>
    </div>

    <!-- 支付方式 -->
    <OrderCard
      title="选择以下支付方式付款"
      class="mt-6"
      v-if="orderInfo.countdown != -1"
    >
      <!-- 支付平台 -->
      <div>
        <h4 class="text-[16px]">支付平台</h4>
        <div class="mt-[20px] flex gap-[30px]">
          <a
            href="javascript:;"
            class="my-btn bg-[url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg)] bg-cover"
          ></a>
          <a
            href="javascript:;"
            class="my-btn bg-[url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b6b02396368c9314528c0bbd85a2e06.png)] bg-cover"
            @click="aliPay"
          ></a>
        </div>
      </div>
      <!-- 支付方式 -->
      <div class="mt-[20px]">
        <h4 class="text-[16px]">支付方式</h4>
        <div class="mt-[20px] flex gap-[30px]">
          <a href="javascript:;" class="my-btn">招商银行</a>
          <a href="javascript:;" class="my-btn">工商银行</a>
          <a href="javascript:;" class="my-btn">建设银行</a>
          <a href="javascript:;" class="my-btn">中国银行</a>
          <a href="javascript:;" class="my-btn">交通银行</a>
        </div>
      </div>
    </OrderCard>

    <!-- 正在支付弹窗 -->
    <el-dialog v-model="isWaiting" title="正在支付" width="600">
      <div class="h-[260px] px-[80px] flex items-center justify-between">
        <img :src="loadGif" alt="" />
        <div class="flex flex-col gap-[30px]">
          <div>
            <p>如果支付成功：</p>
            <el-link class="custom-link" type="primary" underline="never"
              >查看订单详细></el-link
            >
          </div>
          <div>
            <p>如果支付失败：</p>
            <el-link class="custom-link" type="primary" underline="never"
              >查看相关疑问></el-link
            >
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
// 支付金额
.price {
  color: $priceColor;
}

// 支付选项盒子
.my-btn {
  width: 150px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  color: #666;
  &:hover {
    border: 1px solid $xtxColor;
  }
}

.custom-link {
  font-size: 16px;
}
</style>
