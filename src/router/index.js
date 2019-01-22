import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = () => import('../pages/Main')
const Home = () => import('../pages/Home')
const Login = () => import('../pages/Login')

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
      ],
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
    },
  ],
})
