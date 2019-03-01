// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueSession from 'vue-session'
import Vuetify from 'vuetify'
import store from '@/store/store'
import { sync } from 'vuex-router-sync'
// index.js or main.js

Vue.use(VueResource)
Vue.use(VueSession)
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.config.productionTip = false
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'
import VDragged from 'v-dragged'

Vue.use(VDragged)
const moment = require('moment')

Vue.use(require('vue-moment'), {
  moment
})
sync(store, router)

import LineChart from './components/Graphics/LineChart'
import BarChart from './components/Graphics/BarChart'
import Doughnut from './components/Graphics/Doughnut'
import BubbleChart from './components/Graphics/BubbleChart'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, LineChart, BarChart, Doughnut, BubbleChart},
  template: '<App/>',

})

