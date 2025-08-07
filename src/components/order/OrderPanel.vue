<script setup>
import OrderCard from './OrderCard.vue'
import { useAddress } from '@/composables/useAddress'
import { useOrder } from '@/composables/useOrder'
import AddressUl from './AddressUl.vue'
import AddressFormDialog from './AddressFormDialog.vue'
import { Close } from '@element-plus/icons-vue'
import { commitOrderAPI } from '@/api/order'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useCart } from '@/composables/useCart'

// 获取地址相关对象、方法
const {
  activeAddr,
  userAddresses,
  getAddress,
  dialogRef,
  openAdd,
  openEdit,
  switchVisible,
  activeAddrDialog,
  confirmSwitch,
  getAddrById,
  deleteAddress
} = useAddress()

// 获取订单相关对象、方法
const { goods, summary, isLoading } = useOrder()

// 定义路由对象
const router = useRouter()
// 提交订单
const commitOrder = async () => {
  const {
    data: { result }
  } = await commitOrderAPI({
    deliveryTimeType: 1, // 配送时间
    payType: 1, //支付方式
    payChannel: 1, //支付渠道
    buyerMessage: '', //买家备注留言
    goods: goods.value.map((item) => ({
      skuId: item.skuId,
      count: item.count
    })), //商品集合
    addressId: activeAddr.value //收货地址id
  })
  ElMessage.success('提交订单成功')
  // 删除购物车选中商品
  useCart().cartStore.removeSelectedCart()
  // 跳转支付页
  router.push(`/pay?orderId=${result.id}`)
}
</script>

<template>
  <div v-load="isLoading" class="bg-white">
    <!-- 收货地址卡片 -->
    <OrderCard title="收货地址" v-if="!isLoading && userAddresses.length > 0">
      <!-- 顶部标题 -->
      <div class="px-[10px] py-[15px] border border-[#f5f5f5] flex">
        <div class="flex flex-1">
          <!-- 收货信息 -->
          <AddressUl :addr="getAddrById(activeAddr)"></AddressUl>
          <!-- 修改地址 -->
          <el-link
            type="primary"
            underline="never"
            class="w-[160px] px-[20px] ml-auto border-r border-r-[#f5f5f5]"
            @click="openEdit(getAddrById(activeAddr))"
            >修改地址</el-link
          >
        </div>
        <!-- 切换地址 添加地址 -->
        <div
          class="w-[420px] px-[20px] ml-auto flex justify-center items-center"
        >
          <el-button
            type="primary"
            size="large"
            plain
            class="custom-button"
            @click="switchVisible = true"
            >切换地址</el-button
          >
          <el-button
            type="primary"
            size="large"
            plain
            class="custom-button"
            @click="openAdd"
            >添加地址</el-button
          >
        </div>
      </div>
    </OrderCard>
    <!-- 添加/修改地址对话框 -->
    <AddressFormDialog
      ref="dialogRef"
      @update-address="getAddress"
    ></AddressFormDialog>
    <!-- 切换地址对话框 -->
    <el-dialog v-model="switchVisible" title="切换收货地址" width="600">
      <!-- 地址列表 -->
      <div class="h-[400px] px-[20px] pt-[20px] overflow-auto">
        <!-- 地址盒子 -->
        <div
          class="my-box p-[15px] mb-[10px] rounded-[3px] border border-[#ededed] cursor-pointer group flex"
          :class="{ 'my-active-box': activeAddrDialog === addr.id }"
          v-for="addr in userAddresses"
          :key="addr.id"
          @click="activeAddrDialog = addr.id"
        >
          <AddressUl :addr="addr"></AddressUl>
          <!-- 删除地址 -->
          <div
            class="w-[50px] ml-auto grid place-content-center opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <el-icon
              size="23px"
              color="#666"
              @click="deleteAddress(addr.id)"
              class="cursor-pointer"
              ><Close
            /></el-icon>
          </div>
        </div>
      </div>
      <!-- 对话框底部按钮组 -->
      <template #footer>
        <div class="flex justify-center gap-[10px]">
          <el-button
            type="info"
            @click="switchVisible = false"
            class="commit-btn"
            >取消</el-button
          >
          <el-button type="primary" @click="confirmSwitch" class="commit-btn">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>

    <!-- 商品信息卡片 -->
    <OrderCard title="商品信息">
      <!-- 商品列表 -->
      <el-table :data="goods" row-key="skuId">
        <!-- 商品信息 -->
        <el-table-column label="商品信息" width="520" align="center">
          <template #default="{ row }">
            <div>
              <!-- 商品图片 -->
              <RouterLink :to="`/goods/${row.id}`" class="flex items-center">
                <img
                  v-img-lazy="row.picture"
                  alt=""
                  class="w-[100px] h-[100px] mr-[10px] rounded-[2px]"
                />

                <div class="flex-1 text-left min-w-0">
                  <!-- 商品名称 -->
                  <p>{{ row.name }}</p>
                  <!-- 商品规格 -->
                  <p class="text-[#999] truncate">{{ row.attrsText }}</p>
                </div>
              </RouterLink>
            </div>
          </template>
        </el-table-column>

        <!-- 单价 -->
        <el-table-column label="单价" width="170" align="center">
          <template #default="{ row }"> ￥{{ row.price }} </template>
        </el-table-column>

        <!-- 数量 -->
        <el-table-column prop="count" label="数量" width="170" align="center">
        </el-table-column>

        <!-- 小计 -->
        <el-table-column prop="name" label="小计" width="170" align="center">
          <template #default="{ row }">
            <span> ￥{{ (row.price * row.count).toFixed(2) }} </span>
          </template>
        </el-table-column>

        <!-- 实付 -->
        <el-table-column prop="name" label="实付" width="170" align="center">
          <template #default="{ row }">
            <span> ￥{{ (row.price * row.count).toFixed(2) }} </span>
          </template>
        </el-table-column>
      </el-table>
    </OrderCard>

    <!-- 配送时间卡片 -->
    <OrderCard title="配送时间">
      <div class="flex gap-[25px]">
        <a href="javascript:;" class="my-btn my-active-btn"
          >不限送货时间：周一至周日</a
        >
        <a href="javascript:;" class="my-btn">工作日送货：周一至周五</a>
        <a href="javascript:;" class="my-btn">双休日、假日送货：周六至周日</a>
      </div>
    </OrderCard>

    <!-- 支付方式卡片 -->
    <OrderCard title="支付方式">
      <div class="flex gap-[25px]">
        <a href="javascript:;" class="my-btn my-active-btn">在线支付</a>
        <a href="javascript:;" class="my-btn">货到付款</a>
        <p class="leading-[50px] text-[#999]">货到付款需5元手续费</p>
      </div>
    </OrderCard>

    <!-- 金额明细卡片 -->
    <OrderCard title="金额明细" class="border-b border-b-[#f5f5f5]">
      <!-- 顶部标题 -->
      <template #header>
        <h2 class="text-[16px] font-[400]">金额明细</h2>
      </template>
      <div>
        <dl>
          <dt>商品件数:</dt>
          <dd>{{ summary.goodsCount }}件</dd>
        </dl>
        <dl>
          <dt>商品总价:</dt>
          <dd>￥{{ summary.totalPrice }}</dd>
        </dl>
        <dl>
          <dt>运<i class="w-8 inline-block"></i>费:</dt>
          <dd>￥{{ summary.postFee }}</dd>
        </dl>
        <dl>
          <dt>应付总额:</dt>
          <dd class="price text-[20px]">￥{{ summary.totalPayPrice }}</dd>
        </dl>
      </div>
    </OrderCard>

    <!-- 提交订单按钮 -->
    <div class="p-[60px] flex justify-end">
      <el-button
        type="primary"
        size="large"
        class="commit-btn"
        @click="commitOrder"
        >提交订单</el-button
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
// 收货地址
// 切换收货地址盒子
.my-box {
  &:hover {
    box-shadow: 0 0 0 1.5px $xtxColor;
  }
}
// 选择盒子
.my-active-box {
  box-shadow: 0 0 0 1.5px $xtxColor;
  background-color: #e6faf6;
}

// 自定义按钮样式
.custom-button {
  width: 140px;
  height: 46px;
}

// 商品信息
// 自定义表头高度
:deep(.el-table__header-wrapper) {
  .el-table__header {
    th {
      height: 60px;
      font-size: 16px;
      font-weight: 400;
      background-color: #f5f5f5;
      .cell {
        color: #333;
      }
    }
  }
}

// 配送选项盒子
.my-btn {
  width: 228px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  color: #666;
  &:hover {
    border: 1px solid $xtxColor;
  }
}
.my-active-btn {
  border: 1px solid $xtxColor;
}

// 金额明细
dl {
  width: 300px;
  height: 50px;
  line-height: 50px;
  margin-left: auto;
  display: flex;
  dd {
    margin-left: auto;
  }
  // 价格样式
  .price {
    color: $priceColor;
  }
}

// 提交订单按钮
.commit-btn {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
</style>
