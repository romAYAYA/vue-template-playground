import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()

import HomePage from './pages/home'
import AboutPage from './pages/about.vue'

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/about',
      component: AboutPage,
    },
  ],
})

export default router
