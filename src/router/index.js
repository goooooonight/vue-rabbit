import { createRouter, createWebHistory } from 'vue-router'
// import { useUserStore } from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 登录页
    { path: '/login', component: () => import('@/views/login/XtxLogin.vue') },
    // 布局架子
    {
      path: '/',
      component: () => import('@/views/layout/XtxLayout.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('@/views/home/XtxHome.vue')
        },
        // 分类
        {
          path: '/category/:cateId',
          component: () => import('@/views/category/XtxCategory.vue')
        },
        // 二级分类
        {
          path: '/category/sub/:subCateId',
          component: () => import('@/views/sub-category/XtxSubCategory.vue')
        },
        // 商品详细
        {
          path: '/goods/:goodsId',
          component: () => import('@/views/goods/XtxGoods.vue')
        },
        // 购物车
        { path: '/cart', component: () => import('@/views/cart/XtxCart.vue') }
      ]
    },
    // 404
    { path: '/*', component: () => import('@/views/NotFound.vue') }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

// 路由守卫
// router.beforeEach((to) => {
//   const userStore = useUserStore()
//   if (!userStore.token && to.path !== '/login') return '/login'
// })
export default router
