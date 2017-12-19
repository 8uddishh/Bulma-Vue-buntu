// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

require('./assets/scss/bulmabuntu.scss')

Vue.config.productionTip = false

// event buses
export const bus = new Vue()

// filters
Vue.filter('currency', function (value) {
  return `$${parseFloat(value).toFixed(2)}`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
