import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueCarousel from 'vue-carousel';
import store from './store'

Vue.config.productionTip = false
Vue.use(VueCarousel);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
