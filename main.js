import Vue from 'vue'
import App from './App'
import store from './store'
// import uView from 'uview-ui'
// import division from './components/division.vue'
// import iconfont from './components/iconfont'

// Vue.component('division',division)
// Vue.component('iconfont',iconfont)

Vue.config.productionTip = false
// Vue.use(uView)

App.mpType = 'app'
App.store = store

const app = new Vue({
    ...App
})
app.$mount()
