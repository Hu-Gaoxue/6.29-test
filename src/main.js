import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入初始化样式
import '@/assets/style/base.css'
import '@/assets/style/variables.less'
//引入elementui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import myElement from '@/components/library'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
