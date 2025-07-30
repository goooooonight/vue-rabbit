import { createRouter, createWebHistory } from 'vue-router'
// import { useUserStore } from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
        }
      ]
    },
    { path: '/*', component: () => import('@/views/NotFound.vue') }
  ]
})

// 路由守卫
// router.beforeEach((to) => {
//   const userStore = useUserStore()
//   if (!userStore.token && to.path !== '/login') return '/login'
// })
export default router
