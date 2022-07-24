import Vue from 'vue'
import App from './App.vue'
import router from './router';
import lineClamp from 'vue-line-clamp'


Vue.config.productionTip = false
Vue.use(lineClamp, {
  // plugin options
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')





