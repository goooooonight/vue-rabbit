import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore(
  'rabbit-cart',
  () => {
    // 购物车数组
    const cartList = ref([])

    // 添加商品至购物车
    const addCart = (goods) => {
      const item = cartList.value.find((item) => item.skuId === goods.skuId)
      // 如果已经存在同类商品，则数量加1
      if (item) {
        item.count += goods.count
      }
      // 如果不存在，则添加商品
      else {
        cartList.value.unshift(goods)
      }
    }

    // 删除指定商品
    const removeCart = (skuId) => {
      const index = cartList.value.findIndex((item) => item.skuId === skuId)
      if (index !== -1) {
        cartList.value.splice(index, 1)
      }
    }

    // 删除选中的商品
    const removeSelectedCart = () => {
      cartList.value = cartList.value.filter((item) => !item.selected)
    }

    // 单选功能
    const singleCheck = (skuId, selected) => {
      // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }

    // 全选功能
    const allCheck = (selected) => {
      // 把cartList中的每一项的selected都设置为当前的全选框状态
      cartList.value.forEach((item) => (item.selected = selected))
    }
    // 是否全选
    const isAllCheck = computed(() => {
      return (
        cartList.value.length > 0 &&
        cartList.value.every((item) => item.selected)
      )
    })

    return {
      cartList,
      addCart,
      removeCart,
      removeSelectedCart,
      singleCheck,
      allCheck,
      isAllCheck
    }
  },
  {
    persist: true
  }
)
