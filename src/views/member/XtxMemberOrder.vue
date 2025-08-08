<script setup>
import { ref } from 'vue'
import OrderTable from '@/components/member/OrderTable.vue'
import { useMemberOrder } from '@/composables/useMemberOrder'

const { isLoading, orderList, total, params, getUserOrder } = useMemberOrder()

// 当前激活的tab
// 默认选择全部订单
const activeTab = ref('0')
// tab列表
const tabTypes = [
  { name: '0', label: '全部订单' },
  { name: '1', label: '待付款' },
  { name: '2', label: '待发货' },
  { name: '3', label: '待收货' },
  { name: '4', label: '待评价' },
  { name: '5', label: '已完成' },
  { name: '6', label: '已取消' }
]
// tab切换
const tabChange = (type) => {
  params.value.orderState = type
  getUserOrder()
}
</script>

<template>
  <div class="bg-white">
    <!-- 选项卡 -->
    <el-tabs @tab-change="tabChange" v-model="activeTab">
      <el-tab-pane
        v-for="tab in tabTypes"
        :key="tab.name"
        :label="tab.label"
        :name="tab.name"
      >
        <!-- 订单列表 -->
        <div class="min-h-[400px] px-6" v-load="isLoading">
          <OrderTable
            v-for="order in orderList"
            :key="order.id"
            :order="order"
            class="mt-6"
          ></OrderTable>
        </div>
      </el-tab-pane>
    </el-tabs>

    <!-- 分页组件 -->
    <div class="py-8 flex">
      <el-pagination
        background
        layout=" total, prev, pager, next"
        v-model:current-page="params.page"
        v-model:page-size="params.pageSize"
        :total="total"
        :pager-count="9"
        class="mx-auto"
        @current-change="getUserOrder()"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
// 选项卡标签
:deep(.el-tabs__item) {
  width: 100px;
  padding: 0 16px !important;
}
</style>
