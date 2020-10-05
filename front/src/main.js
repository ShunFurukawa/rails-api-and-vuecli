import Vue from 'vue'
// import App from './App.vue'
import Post from './views/Post.vue'
import axios from "axios"

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(Post),
}).$mount('#app')
