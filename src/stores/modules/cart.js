import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  getCartAPI,
  removeCartAPI,
  addCartAPI,
  editCartAPI,
  editAllCheckAPI
} from '@/api/cart'
import { useUserStore } from './user'

export const useCartStore = defineStore(
  'rabbit-cart',
  () => {
    // 根据token判断是否登录
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)

    // 购物车数组
    const cartList = ref([])

    // 添加商品至购物车
    const addCart = async (goods) => {
      // 如果已登录，则调用接口
      if (isLogin.value) {
        await addCartAPI({ skuId: goods.skuId, count: goods.count })
        getCartFromServer()
      } else {
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
    }

    // 删除指定商品
    const removeCart = async (skuId) => {
      // 如果已登录，则调用接口
      if (isLogin.value) {
        await removeCartAPI([skuId])
        getCartFromServer()
      } else {
        const index = cartList.value.findIndex((item) => item.skuId === skuId)
        if (index !== -1) {
          cartList.value.splice(index, 1)
        }
      }
    }

    // 删除选中的商品
    const removeSelectedCart = async () => {
      // 如果已登录，则调用接口
      if (isLogin.value) {
        // 获取选中商品skuId的数组
        const ids = cartList.value
          .filter((item) => item.selected)
          .map((item) => item.skuId)
        await removeCartAPI(ids)
        getCartFromServer()
      } else {
        cartList.value = cartList.value.filter((item) => !item.selected)
      }
    }

    // 单选功能
    const singleCheck = async (skuId, selected) => {
      // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
      // 如果已登录，则调用接口
      if (isLogin.value) {
        // 获取商品个数
        const count = item.count
        await editCartAPI(skuId, {
          selected: selected,
          count: count
        })
      }
    }

    // 全选功能
    const allCheck = async (selected) => {
      // 获取需要修改选中状态的商品skuId数组
      const ids = cartList.value
        .filter((item) => item.selected != selected)
        .map((item) => item.skuId)
      // 把cartList中的每一项的selected都设置为当前的全选框状态
      cartList.value.forEach((item) => (item.selected = selected))
      // 如果已登录，则调用接口
      if (isLogin.value) {
        await editAllCheckAPI({ selected: selected, ids: ids })
      }
    }
    // 是否全选
    const isAllCheck = computed(() => {
      return (
        cartList.value.length > 0 &&
        cartList.value.every((item) => item.selected)
      )
    })

    // 修改商品个数
    const editCount = async (skuId, count) => {
      // 通过skuId找到要修改的那一项 然后把它的count修改为传过来的count
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.count = count
      // 如果已登录，则调用接口
      if (isLogin.value) {
        // 获取商品选中状态
        const selected = item.selected
        await editCartAPI(skuId, {
          selected: selected,
          count: count
        })
      }
    }

    // 清空购物车
    const clearCart = () => {
      cartList.value = []
    }

    // 从服务器中获取购物车列表
    const getCartFromServer = async () => {
      const {
        data: { result }
      } = await getCartAPI()
      cartList.value = result
    }

    return {
      cartList,
      addCart,
      removeCart,
      removeSelectedCart,
      singleCheck,
      allCheck,
      isAllCheck,
      editCount,
      clearCart,
      getCartFromServer
    }
  },
  {
    persist: true
  }
)
