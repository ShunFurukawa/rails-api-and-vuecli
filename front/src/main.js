import Vue from 'vue'
// import App from './App.vue'
import Post from './views/Post.vue'
import vuetify from './plugins/vuetify';
import axios from "axios"

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  vuetify,
  render: h => h(Post),
}).$mount('#app')
