import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../pages/Main'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../pages/Home')
        },
      ]
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('../pages/Login')
    },
  ]
})
