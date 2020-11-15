import $store from '@/vuex/store'
import $router from '@/router'

/**
 */
export default function () {
  $store.dispatch('logout')
  $router.push({ name: 'login' })
}
