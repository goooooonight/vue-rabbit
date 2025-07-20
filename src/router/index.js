import { createRouter, createWebHistory } from 'vue-router'
// import { useUserStore } from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/RbLogin.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/RbLayout.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('@/views/home/RbHome.vue')
        },
        {
          path: '/category',
          component: () => import('@/views/category/RbCategory.vue')
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
