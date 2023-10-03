import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
        path: 'actor-list',
        component: () => import('../views/actor/ActorList.vue')
      },
      {
        path: 'actor-add',
        component: () => import('../views/actor/ActorAdd.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
