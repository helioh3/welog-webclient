import http from '@/services/http'

const RESOURCE = 'api/v1/bancos'

export default {

  loadBanks (context, params) {
    context.commit('PRELOADER', true)
    http.get(`${RESOURCE}`, { params })
      .then(response => context.commit('LOAD_BANKS', response.data))
      .catch(error => console.log(error))
      .finally(() => context.commit('PRELOADER', false))
  },

}
