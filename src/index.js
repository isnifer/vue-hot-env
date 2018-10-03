// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// Ensure we checked auth before each page load.
// router.beforeEach(
//   (to, from, next) => {
//     return Promise
//       .all([store.dispatch(CHECK_AUTH)])
//       .then(next)
//   }
// )

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
