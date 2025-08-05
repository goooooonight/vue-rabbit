<script setup>
import { defineProps, ref } from 'vue'
import { Flag, Comment, StarFilled, Shop } from '@element-plus/icons-vue'
import GoodsImage from './GoodsImage.vue'
// import GoodsSku from './GoodsSku.vue'
import XtxSku from '@/components/XtxSku/index.vue'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useCartStore } from '@/stores/modules/cart'

const { goods } = defineProps({
  goods: Object
})

// sku对象
const skuObj = ref({})
// sku规格被操作时
const skuChange = (sku) => {
  console.log(sku)
  skuObj.value = sku
}

// 购买商品数量
const count = ref(1)

// 加入购物车
const addCart = () => {
  // sku有效时，添加至购物车
  if (skuObj.value.skuId) {
    console.log('111')
    const cartStore = useCartStore()
    cartStore.addCart({
      id: goods.id, // 商品id
      name: goods.name, // 商品名称
      picture: goods.mainPictures[0], // 商品图片
      price: goods.price, // 商品价格
      count: count.value, // 添加商品数量
      skuId: skuObj.value.skuId, // 规格id
      attrsText: skuObj.value.specsText, // 规格描述
      selected: true // 商品是否选中
    })
    ElMessage.success('加入购物车成功')
  }
  // sku无效时，提示
  else {
    ElMessage.warning('请选择完整规格')
  }
}
</script>

<template>
  <!-- 商品面板 -->
  <div class="px-[50px] py-[30px] bg-white flex">
    <!-- 左侧面板 -->
    <div>
      <!-- 图片区域 -->
      <GoodsImage
        v-if="goods.mainPictures"
        :pictures="goods.mainPictures"
      ></GoodsImage>
      <!-- 底部人气区域 -->
      <ul class="footer-ul w-[400px] flex">
        <li>
          <p class="title">销量人气</p>
          <p class="content">{{ goods.salesCount }}</p>
          <p class="link">
            <el-icon><Flag /></el-icon><RouterLink to="/">销量人气</RouterLink>
          </p>
        </li>
        <li>
          <p class="title">商品评价</p>
          <p class="content">{{ goods.commentCount }}</p>
          <p class="link">
            <el-icon><Comment /></el-icon
            ><RouterLink to="/">商品评价</RouterLink>
          </p>
        </li>
        <li>
          <p class="title">收藏人气</p>
          <p class="content">{{ goods.collectCount }}</p>
          <p class="link">
            <el-icon><StarFilled /></el-icon
            ><RouterLink to="/">收藏人气</RouterLink>
          </p>
        </li>
        <li>
          <p class="title">品牌信息</p>
          <p class="content">{{ goods.brand?.name }}</p>
          <p class="link">
            <el-icon><Shop /></el-icon><RouterLink to="/">品牌信息</RouterLink>
          </p>
        </li>
      </ul>
    </div>
    <!-- 右侧面板 -->
    <div class="ml-[60px] flex flex-col gap-[10px] flex-1">
      <!-- 商品名称 描述 价格 -->
      <p class="text-[22px]">{{ goods.name }}</p>
      <p class="text-[#999]">{{ goods.desc }}</p>
      <p>
        <span class="price">
          <span>￥</span><span class="text-[22px]">{{ goods.price }}</span>
        </span>
        <span class="ml-[15px] text-[16px] text-[#999] line-through"
          >￥{{ goods.oldPrice }}</span
        >
      </p>
      <!-- 服务面板 -->
      <div
        class="w-[500px] px-[10px] py-[20px] bg-[#f5f5f5] flex flex-col gap-[20px]"
      >
        <dl>
          <dt>促销</dt>
          <dd>12月好物放送，App领券购买直降120元</dd>
        </dl>
        <dl>
          <dt>配送</dt>
          <dd>至<el-select></el-select></dd>
        </dl>
        <dl>
          <dt>服务</dt>
          <dd>
            <ul class="flex gap-[10px]">
              <li>无忧退货</li>
              <li>快速退款</li>
              <li>免费包邮</li>
            </ul>
            <el-link type="primary" underline="never">了解详细</el-link>
          </dd>
        </dl>
      </div>
      <!-- 商品参数 数量 -->
      <div class="mt-[15px] px-[10px] flex flex-col gap-[15px]">
        <XtxSku :goods="goods" @change="skuChange"></XtxSku>
        <!-- <GoodsSku :goods="goods"></GoodsSku> -->
        <dl>
          <dt>数量</dt>
          <dd>
            <el-input-number
              class="custom-input-number"
              v-model="count"
              :min="1"
              :max="goods.inventory"
            />
          </dd>
        </dl>
      </div>
      <!-- 加入购物车按钮 -->
      <div class="w-[180px] mt-[10px]">
        <el-button type="primary" size="large" class="w-full" @click="addCart"
          >加入购物车</el-button
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// 底部列表
.footer-ul {
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;
    // 分割线
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 12%; // 从25%的位置开始
      bottom: 12%; // 到75%的位置结束
      width: 0.5px;
      background-color: #e4e4e4;
    }
    &:last-child::after {
      display: none;
    }
    // 标题
    .title {
      color: #999;
    }
    // 内容
    .content {
      color: $priceColor;
    }
    // 链接
    .link {
      display: flex;
      align-items: center;
      // 图标样式
      i {
        color: $xtxColor;
      }
      // 跳转链接样式
      a {
        &:hover {
          color: $xtxColor;
        }
      }
    }
  }
}
.price {
  color: $priceColor;
}
dl {
  display: flex;
  align-items: center;
  dt {
    color: #999;
    margin-right: 20px;
  }
  dd {
    color: #666;
    display: flex;
    align-items: center;
    gap: 10px;
    li::before {
      content: '•';
      color: $xtxColor;
      margin-right: 2px;
    }
  }
}
.custom-input-number {
  width: 120px;
}
</style>
