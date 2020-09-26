import http from '@/services/http'

import Vue from 'vue'

import VueTailwind from 'vue-tailwind'
import settings from './settings.js'

Vue.use(VueTailwind, settings)

//importa a config do token
import {NAME_TOKEN} from './config/configs'

import Snotify from 'vue-snotify'; // 1. Import Snotify

import router from './routes/routers'
import store from './vuex/store'


import App from './App.vue'

// DEPENDENCIAS
import vSelect from 'vue-select'


import VueTheMask from 'vue-the-mask'
import money from 'v-money'


import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar);


import './assets/tailwind.css'

const feather = require('feather-icons')

Vue.config.productionTip = false



Vue.component('v-select', vSelect)

Vue.use(Snotify, {toast: {showProgressBar: false}})
// this.$snotify
Vue.use(Snotify)

Vue.use(VueTheMask)
Vue.use(money, {precision: 2, prefix: 'R$ ', decimal: ',', thousands: '.', masked: false})

Vue.component('index-panel', () => import('./components/panel/IndexPanel'))
Vue.component('preloader-panel', () => import('./components/share/PreloaderPanel'))


const app = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
});

// store.dispatch('getCategories')

//VERIFICA RECEBE O TOKEN E MANTEM LOGADO COM BASE NO TOKEN
const token = localStorage.getItem(NAME_TOKEN)
if(token)
  http.defaults.headers.common['Authorization'] = `Bearer ${token}`

// VERIFICA SE O
store.dispatch('checkLogin')
  .then( () => router.push({name: store.state.auth.urlBack}) )
  





