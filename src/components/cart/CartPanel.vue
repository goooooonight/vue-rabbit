<script setup>
import { useCart } from '@/composables/useCart'
import { ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message-box.css'
import 'element-plus/theme-chalk/el-overlay.css'
import { ElMessage } from 'element-plus'

// 购物车状态管理 购物车列表 购物车商品总数  选中商品数量 选中商品总价
const { cartStore, cartList, cartCount, checkCount, checkPrice } = useCart()

// 删除选中商品
const removeCheckCart = async () => {
  await ElMessageBox.confirm('你确认删除选中的商品吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  // 使用store方法删除选中商品
  cartStore.removeSelectedCart()
  ElMessage.success('商品删除成功')
}
</script>

<template>
  <div class="h-[80px] mt-6 px-[30px] bg-white flex">
    <!-- 左侧面板 -->
    <div class="flex items-center gap-[20px] text-[16px]">
      <el-checkbox
        :model-value="cartStore.isAllCheck"
        @change="(selected) => cartStore.allCheck(selected)"
        :disabled="cartList.length === 0"
        ><span class="text-[16px]"> 全选</span></el-checkbox
      >
      <a href="javascript:;" @click="removeCheckCart">删除商品</a>
      <a href="javascript:;">移入收藏夹</a>
      <a href="javascript:;">清空失效物品</a>
    </div>
    <!-- 右侧面板 -->
    <div class="ml-auto flex items-center">
      <p>
        共
        <span class="mx-1"> {{ cartCount }}</span>
        件商品，已选择
        <span class="mx-1">{{ checkCount }}</span
        >件，商品合计:
        <span class="price mx-2 text-[18px] font-[700]"
          >￥{{ checkPrice.toFixed(2) }}</span
        >
      </p>
      <el-button type="primary" size="large" class="custom-button ml-[20px]"
        >下单结算</el-button
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.price {
  color: $priceColor;
}
.custom-button {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
</style>
