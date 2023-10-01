import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexView from '../views/IndexView.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Derctive from '../views/Directive.vue'
import Cart from '../views/Cart.vue'
import Form from '../views/Form.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/IndexView.vue')
  },
  {
    path: '/movie/detail',
    name: 'movieDetail',
    component: () => import('../views/MovieDetail.vue')
  },
  {
    path: '/directive',
    name: 'directive',
    component: () => import('../views/Directive.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/Form.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
