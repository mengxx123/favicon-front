import Vue from 'vue'
import router from './router'
import App from './App'
import http from '@/util/http'
import qs from 'qs'
import storage from '@/util/storage'
import ui from './components/index'
// 全部加载
import YunserUI from 'yunser-ui-vue'
import 'yunser-ui-vue/dist/yunser-ui.css'
import './scss/main.scss'
// const Vue = window.Vue
// const router = window.router

// 全部加载
Vue.use(YunserUI)

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$qs = qs
Vue.prototype.$storage = storage

Vue.use(ui)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
