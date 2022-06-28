/*
 * @Author: MacLoki
 * @Date: 2022-06-26 20:31:45
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-28 22:22:21
 * @FilePath: /vue3-mall-admin/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import SvgIcon from '@/icons'

const app = createApp(App)
SvgIcon(app)
app.use(store).use(router).mount('#app')
