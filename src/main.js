import Vue from 'vue'
import App from './App'

import Fly from 'flyio/dist/npm/wx'

Vue.config.productionTip = false
App.mpType = 'app'
const fly = new Fly()
fly.config.baseURL = 'https://poer44.xyz'
Vue.prototype.$http = fly

const app = new Vue(App)
app.$mount()
