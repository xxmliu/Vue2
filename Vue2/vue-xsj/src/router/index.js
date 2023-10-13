import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/index'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'index',
        name: '/home/index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'actor-list/:page',
        component: () => import('../views/actor/ActorList.vue')
      },
      {
        path: 'actor-add',
        component: () => import('../views/actor/ActorAdd.vue')
      },
      {
        path: 'director-list',
        component: () => import('../views/director/DirectorList.vue')
      },
      {
        path: 'director-add',
        component: () => import('../views/director/DirectorAdd.vue')
      }
    ]
  },
  {
    path: '/user/login',
    component: () => import('../views/user/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from ,next) => {
  if(to.path == '/user/login'){
    next()
    return;
  }

  let user = store.state.user
  if (user){ // 用户已经登录
    next()
  } else{
    router.push('/user/login')
  }
})  

export default router
