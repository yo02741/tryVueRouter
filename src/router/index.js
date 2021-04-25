import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/components/index.vue'
import login from '@/components/login.vue'
import labeling from '@/components/labeling.vue'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: index,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: login,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/labeling',
    name: 'Labeling',
    component: labeling,
    meta: {
      keepAlive: false
    }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === '/login') {
    console.log('to login')
    console.log(to)
    store.state.logout = true
  }
  next();
})

export default router
