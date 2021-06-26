import Vue from 'vue'
import Router from 'vue-router'
import LOGIN from '../view/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LOGIN,
      meta: {
        title: '登录页'
      }
    }
    // { path: '/', redirect: '/login' },
    // { path: '/login', component: LOGIN }
  ]
})
