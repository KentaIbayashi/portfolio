import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import router from './router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import messages from '@/const/messages'
import 'swiper/css/swiper.css'
import { messages } from '@/const/messages'
Vue.use(VueI18n)
Vue.use(VueAwesomeSwiper)
Vue.component('v-icon', Icon)

Vue.config.productionTip = false

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ja', // set locale
  fallbackLocale: 'ja',
  messages // set locale messages
})
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
