<script setup>
import { useCart } from '@/composables/useCart'
import XtxSku from '@/components/XtxSku/index.vue'
import { ref } from 'vue'
import { getGoods } from '@/api/goods'
import { ArrowDown, Delete } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message-box.css'
import 'element-plus/theme-chalk/el-overlay.css'
import { ElMessage } from 'element-plus'
import nonePic from '@/assets/images/none.png'
import { useRouter } from 'vue-router'

// 购物车状态管理 和 购物车列表
const { cartStore, cartList } = useCart()

// 商品详细
const goods = ref({})
// 是否位于加载状态
const isLoading = ref(true)
// 获取商品详细
const getGoodsFun = async (goodsId) => {
  // 进入加载状态
  isLoading.value = true
  const {
    data: { result }
  } = await getGoods(goodsId)
  goods.value = result
  // 退出加载状态
  isLoading.value = false
}

// 删除商品
const removeCart = async (skuId) => {
  await ElMessageBox.confirm('你确认删除该商品吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await cartStore.removeCart(skuId)
  ElMessage.success('商品删除成功')
}

// 路由对象
const router = useRouter()
</script>

<template>
  <div class="bg-white">
    <el-table :data="cartList" row-key="skuId">
      <!-- 是否选中 -->
      <el-table-column
        width="120"
        align="left"
        class-name="custom-table-column"
      >
        <!-- 自定义表头为全选 -->
        <template #header>
          <el-checkbox
            :model-value="cartStore.isAllCheck"
            @change="(selected) => cartStore.allCheck(selected)"
            :disabled="cartList.length === 0"
          >
            <span class="text-[16px] font-[400]">全选</span></el-checkbox
          >
        </template>
        <template #default="{ row }">
          <el-checkbox
            :model-value="row.selected"
            @change="(selected) => cartStore.singleCheck(row.skuId, selected)"
          ></el-checkbox>
        </template>
      </el-table-column>

      <!-- 商品信息 -->
      <el-table-column label="商品信息" width="400" align="center">
        <template #default="{ row }">
          <div class="flex items-center">
            <!-- 商品图片 -->
            <RouterLink :to="`/goods/${row.id}`">
              <img
                v-img-lazy="row.picture"
                alt=""
                class="w-[100px] h-[100px] mr-[10px] rounded-[2px]"
              />
            </RouterLink>
            <div>
              <!-- 商品名称 -->
              <p class="text-left">{{ row.name }}</p>
              <!-- 商品规格弹窗 -->
              <el-popover
                trigger="click"
                placement="bottom-start"
                width="400"
                @show="getGoodsFun(row.id)"
                ><div v-load="isLoading">
                  <XtxSku :goods="goods"></XtxSku>
                  <el-button type="primary" class="ml-[50px]">确定</el-button>
                </div>
                <template #reference>
                  <div
                    class="w-[200px] h-[28px] mt-[8px] px-[10px] border border-[#f5f5f5] text-start flex items-center"
                  >
                    <p class="w-[160px] text-[#999] truncate">
                      {{ row.attrsText }}
                    </p>
                    <el-icon class="ml-auto"><ArrowDown /></el-icon>
                  </div>
                </template>
              </el-popover>
            </div>
          </div>
        </template>
      </el-table-column>

      <!-- 单价 -->
      <el-table-column label="单价" width="220" align="center">
        <template #default="{ row }"> ￥{{ row.price }} </template>
      </el-table-column>

      <!-- 数量 -->
      <el-table-column prop="count" label="数量" width="180" align="center">
        <template #default="{ row }">
          <el-input-number
            class="custom-input-number"
            :model-value="row.count"
            @change="(count) => cartStore.editCount(row.skuId, count)"
            :min="1"
            :max="goods.inventory"
          />
        </template>
      </el-table-column>

      <!-- 小计 -->
      <el-table-column prop="name" label="小计" width="180" align="center">
        <template #default="{ row }">
          <span class="text-[#cf4444]">
            ￥{{ (row.price * row.count).toFixed(2) }}
          </span>
        </template>
      </el-table-column>

      <!-- 操作 -->
      <el-table-column prop="" label="操作" width="140" align="center">
        <template #default="{ row }">
          <el-button
            type="danger"
            :icon="Delete"
            circle
            plain
            @click="removeCart(row.skuId)"
          />
        </template>
      </el-table-column>

      <!-- 自定义空状态 -->
      <template #empty>
        <div class="empty-state">
          <el-empty description="购物车内暂时没有商品" :image="nonePic">
            <el-button
              type="primary"
              size="large"
              class="custom-button"
              @click="router.push('/')"
              >继续逛逛</el-button
            >
          </el-empty>
        </div>
      </template>
    </el-table>
  </div>
</template>

<style scoped lang="scss">
// 自定义表格列
:deep(.custom-table-column) {
  padding-left: 20px;
}
// 自定义输入框
.custom-input-number {
  width: 120px;
}
// 自定义按钮
.custom-button {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
// 自定义表头高度
:deep(.el-table__header-wrapper) {
  .el-table__header {
    th {
      height: 70px;
      font-size: 16px;
      font-weight: 400;
      .cell {
        line-height: 50px;
      }
    }
  }
}
</style>
