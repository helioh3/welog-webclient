
import Vue from 'vue'
import Snotify from 'vue-snotify'

import router from './routes/routers'
import store from './vuex/store'

import App from './App.vue'

const feather = require('feather-icons')


Vue.config.productionTip = false

Vue.use(Snotify, {toast: {showProgressBar: false}})
// this.$snotify

Vue.component('index-panel', () => import('./components/panel/IndexPanel'))
Vue.component('preloader-panel', () => import('./components/share/PreloaderPanel'))

const app = new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App),
  });

store.dispatch('getCategories')



// import Vue from 'vue'
// import App from './App.vue'



// new Vue({
//   render: h => h(App),
// }).$mount('#app')
