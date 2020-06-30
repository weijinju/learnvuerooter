// 配置路由器信息
import  VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import HomeNews from '../components/HomeNews'
import HomeMessage from '../components/HomeMessage'

// const  Home = () => import('../components/Home')
// const  About =()=> import ('../components/About');
// const  User =()=> import ('../components/User')
// const  HomeNews = ()=> import ('../components/HomeNews')
// const  HomeMessage = ()=> import ('../components/HomeMessage')
//1. 通过vue.use（插件),安装插件
Vue.use(VueRouter)
// 2.创建VueRouter对象
const routes = [
  {
    path:'',
    // 重定向
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    children:[
      {
          path:'news',
          component:'HomeNews'
      },
      {
        path:'message',
        component:'HomeMessage'
      }
    ]
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/user/:userId',
    component:User
  }
]
const  router =  new VueRouter({
  // 配置路径和组件之间的映射关系
  routes,
  mode:'history',
  linkactiveClass:'active'
})

// 将router对象传入到Vue实例中
export  default router
