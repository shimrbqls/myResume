import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '../views/mainPage.vue'
import hw from '../views/hw.vue'
import aboutMeEng from '../views/aboutMeEng.vue'
import aboutMeKor from '../views/aboutMeKor.vue'
import fw from '../views/fw.vue'
import sw from '../views/sw.vue'
import portfolio from '../views/portfolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/hw',
      name: 'hw',
      component: hw
    },
    {
      path: '/aboutMeEng',
      name: 'aboutMeEng',
      component: aboutMeEng
    },
    {
      path: '/aboutMeKor',
      name: 'aboutMeKor',
      component: aboutMeKor
    },
    {
      path: '/fw',
      name: 'fw',
      component: fw
    },
    {
      path: '/sw',
      name: 'sw',
      component: sw
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio
    },
  ]
})

export default router
