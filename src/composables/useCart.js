import { useCartStore } from '@/stores/modules/cart'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

export const useCart = () => {
  // 购物车状态管理
  const cartStore = useCartStore()
  // 购物车列表
  const { cartList } = storeToRefs(cartStore)

  // 购物车商品数量
  const cartCount = computed(() => {
    return cartList.value.reduce((count, item) => count + item.count, 0)
  })

  // 已选择商品数量
  const checkCount = computed(() => {
    return cartList.value.reduce((count, item) => {
      if (item.selected) {
        return count + item.count
      }
      return count
    }, 0)
  })

  // 已选择商品总价
  const checkPrice = computed(() => {
    return cartList.value.reduce((price, item) => {
      if (item.selected) {
        return price + item.count * item.price
      }
      return price
    }, 0)
  })

  return {
    cartStore,
    cartList,
    cartCount,
    checkCount,
    checkPrice
  }
}
