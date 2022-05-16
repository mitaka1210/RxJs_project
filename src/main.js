// Core
import DependencyContainer from './core/dependency-container'

import Vue from 'vue'
import AppMainComponent from './app-main.component.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRx from 'vue-rx'

new DependencyContainer().configure()

Vue.use(VueAxios, axios)
Vue.use(VueRx)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(AppMainComponent)
}).$mount('#app')