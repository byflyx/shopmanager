import Vue from 'vue'
import ElementUI from 'element-ui'
import Http from './plugins/http'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import '@/assets/index.css'
import router from './router'

// 使用Axios插件
Vue.use(Http)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
