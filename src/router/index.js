import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../vuex/store'
import routes from './routes'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.state.auth.authenticated) {
    store.commit('CHANGE_URL_DEFAULT', to.name)
    return router.push({ name: 'login' })
  }

  if (to.matched.some(record => record.meta.auth) && !store.state.auth.authenticated) {
    store.commit('CHANGE_URL_DEFAULT', to.name)
    return router.push({ name: 'login' })
    // console.log(record.meta.auth)
  }

  if (to.meta.hasOwnProperty('auth') && !to.meta.auth && store.state.auth.authenticated) {
    return router.push({ name: 'painel.dashboard' })
  }

  next()

})

export default router
