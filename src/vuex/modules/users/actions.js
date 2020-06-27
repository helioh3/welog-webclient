
import http from '@/services/http'

const RESOURCE = 'api/v1/usuarios'

export default {
    loadUsers (context, params) {
        context.commit('PRELOADER', true)
        http.get(`${RESOURCE}`, {params})
            .then(response => context.commit('LOAD_USERS', response.data))
            .catch(error => {
                console.log(error)
            })
            .finally( () => context.commit('PRELOADER', false))
    },
}