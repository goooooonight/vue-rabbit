<script setup>
import { Search, ShoppingCart, Close } from '@element-plus/icons-vue'
import LayoutCateUl from './LayoutCateUl.vue'
import { useCart } from '@/composables/useCart'
import { useRouter } from 'vue-router'

// 购物车状态管理 购物车列表 购物车商品总数 商品总价
const { cartStore, cartList, cartCount, priceTotal } = useCart()

// 路由对象
const router = useRouter()
</script>

<template>
  <!-- 分类导航 -->
  <div class="h-[132px] bg-white">
    <div class="xtx-container flex items-center relative">
      <!-- logo -->
      <h1
        class="w-[200px] h-[132px] bg-[url(/src/assets/images/logo.png)] bg-[position:center_18px] bg-contain bg-no-repeat flex-shrink-0"
      >
        <RouterLink to="/" class="h-full">小兔鲜</RouterLink>
      </h1>
      <LayoutCateUl></LayoutCateUl>
      <!-- 搜索框 -->
      <div class="search flex items-center w-[170px] pb-0.5 mr-3">
        <el-icon><Search /></el-icon>
        <input type="text" placeholder="搜一搜" />
      </div>
      <!-- 购物车 -->
      <el-badge :value="cartCount">
        <el-popover width="400" placement="bottom-end">
          <!-- 弹窗内容 -->
          <div class="h-[400px] flex flex-col">
            <!-- 购物车内容 -->
            <div class="h-[310px]">
              <el-scrollbar>
                <div
                  v-for="item in cartList"
                  :key="item.skuId"
                  class="py-[10px] border-b border-[#f8f8f8] group flex"
                >
                  <RouterLink
                    :to="`/goods/${item.id}`"
                    class="flex items-center"
                  >
                    <!-- 商品图片 -->
                    <img
                      v-img-lazy="item.picture"
                      alt=""
                      class="w-[80px] h-[80px] mr-[10px] block"
                    />
                    <!-- 商品名称 规格 -->
                    <div class="w-[165px] min-w-0">
                      <p class="line-clamp-2 text-[16px]">{{ item.name }}</p>
                      <p class="text-[#999] truncate">{{ item.attrsText }}</p>
                    </div>
                    <!-- 商品价格 数量 -->
                    <div
                      class="w-[80px] flex flex-col justify-center items-center"
                    >
                      <p class="price text-[16px]">￥{{ item.price }}</p>
                      <p class="text-[#999] text-[16px]">x{{ item.count }}</p>
                    </div>
                  </RouterLink>
                  <!-- 删除商品 -->
                  <div
                    class="w-[25px] grid place-content-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <el-icon
                      size="18px"
                      color="#666"
                      @click="cartStore.removeCart(item.skuId)"
                      class="cursor-pointer"
                      ><Close
                    /></el-icon>
                  </div>
                </div>
              </el-scrollbar>
            </div>
            <!-- 弹窗底部 -->
            <div
              class="h-[70px] mt-auto pl-[16px] pr-[10px] bg-[#f8f8f8] flex items-center"
            >
              <div class="flex flex-col">
                <p class="text-[#999]">共 {{ cartCount }} 件商品</p>
                <p class="price text-[18px]">￥{{ priceTotal.toFixed(2) }}</p>
              </div>
              <div class="ml-auto">
                <el-button
                  type="primary"
                  size="large"
                  plain
                  class="custom-button"
                  @click="router.push('/cart')"
                  >去购物车结算</el-button
                >
              </div>
            </div>
          </div>
          <!-- 购物车弹窗索引 -->
          <template #reference>
            <RouterLink to="/cart">
              <el-icon size="22px"><ShoppingCart /></el-icon>
            </RouterLink>
          </template>
        </el-popover>
      </el-badge>
    </div>
  </div>
</template>

<style scoped lang="scss">
// logo样式
h1 {
  a {
    text-indent: -9999px;
    display: block;
  }
}
// 搜索框
.search {
  border-bottom: 1px #cdcdcd solid;
  input {
    margin-left: 5px;
  }
}
// 价格样式
.price {
  color: $priceColor;
}
// 自定义按钮
.custom-button {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
</style>
