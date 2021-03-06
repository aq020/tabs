// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from "./components/hello"
import Tabs from "./components/tabs"

Vue.config.productionTip = false

Vue.use(Tabs)
Vue.use(Hello)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
