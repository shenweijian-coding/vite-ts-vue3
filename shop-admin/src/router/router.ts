import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'index',
      path: '/index',
      component: () => import('@/views/home/home.vue')
    }
  ]
})
export default router
