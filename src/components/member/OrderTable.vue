<script setup>
defineProps({
  order: Object
})

// 订单支付方式
const payTypeMAP = {
  1: '在线支付',
  2: '货到付款'
}
// 订单状态
const orderStateMAP = {
  1: '待付款',
  2: '待发货',
  3: '待收货',
  4: '待评价',
  5: '待完成',
  6: '已取消'
}
</script>

<template>
  <div class="border border-[#f5f5f5]">
    <!-- 表格头部 -->
    <div class="h-[70px] px-[20px] bg-[#f5f5f5] flex items-center">
      <!-- 下单时间 订单编号-->
      <div class="flex gap-[20px]">
        <p>下单时间：{{ order.payLatestTime }}</p>
        <p>订单编号：{{ order.id }}</p>
      </div>
      <!-- 删除订单 -->
      <a href="javascript:;" class="ml-auto !text-[#999]">删除</a>
    </div>
    <!-- 订单列表 -->
    <div>
      <div class="flex text-center">
        <!-- 购买商品 -->
        <ul class="text-start">
          <li
            v-for="item in order.skus"
            :key="item.id"
            class="py-[10px] flex items-center"
          >
            <!-- 商品图片 -->
            <img
              v-img-lazy="item.image"
              alt=""
              class="w-[70px] h-[70px] mr-[10px] ml-[10px]"
            />
            <div class="w-[220px]">
              <!-- 商品名称 -->
              <p class="line-clamp-2">{{ item.name }}</p>
              <!-- 商品规格 -->
              <p class="text-[#999] truncate">{{ item.attrsText }}</p>
            </div>
            <!-- 商品价格 -->
            <div class="w-[100px] text-center">￥{{ item.curPrice }}</div>
            <!-- 商品数量 -->
            <div class="w-[80px] text-center">x{{ item.quantity }}</div>
          </li>
        </ul>

        <!-- 订单状态 -->
        <div class="w-[120px] grid place-content-center">
          {{ orderStateMAP[order.orderState] }}
        </div>
        <!-- 实付金额 -->
        <div class="w-[200px] flex flex-col justify-center gap-[10px]">
          <p class="price">￥{{ order.payMoney }}</p>
          <p>（含运费：￥{{ order.postFee }}）</p>
          <p>{{ payTypeMAP[order.payType] }}</p>
        </div>
        <!-- 订单操作 -->
        <div class="w-[140px] grid place-content-center">
          <a href="javascript:;">查看详细</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.price {
  color: $priceColor;
}

// 使用 CSS 选择器处理商品列表边框
ul li:not(:last-child) {
  border-bottom: 1px solid #f5f5f5;
}

// 使用 CSS 选择器处理右侧区域边框
.flex.text-center > *:not(:last-child) {
  border-right: 1px solid #f5f5f5;
}
</style>
