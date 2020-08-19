import http from '@/services/http'

import Vue from 'vue'

//importa a config do token
import {NAME_TOKEN} from './config/configs'

import Snotify from 'vue-snotify'

import router from './routes/routers'
import store from './vuex/store'

import App from './App.vue'

import VueTheMask from 'vue-the-mask'
import money from 'v-money'

const feather = require('feather-icons')

Vue.config.productionTip = false

Vue.use(Snotify, {toast: {showProgressBar: false}})
// this.$snotify

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
  





