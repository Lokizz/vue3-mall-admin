/*
 * @Author: MacLoki
 * @Date: 2022-06-26 20:31:45
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-28 17:11:43
 * @FilePath: /vue3-mall-admin/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
