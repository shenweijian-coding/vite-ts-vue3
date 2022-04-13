import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Layout from '@/layout/AppLayout.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          name: 'home',
          path: '/home',
          component: () => import('@/views/home/home.vue')
        }
      ]
    }
  ]
})
export default router
