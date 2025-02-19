//配置路由
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/Home/Home.vue'
const Login=()=>import('@/views/Login.vue') 
const Category=()=>import('@/views/Category/Category.vue') 
const routes = [
  {
    path:'/',
    name:'Layout',
    component:Layout,
    children:[
      {
        path:'/',
        component:Home
      },{
        path:'/Category/:id',
        component:Category
      }
    ]
  },{
    path:'/Login',
    component:Login
  }
]

const router = createRouter({
  //hash模式
  history: createWebHashHistory(),
  routes
})

export default router
