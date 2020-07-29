
import http from '@/services/http'

const RESOURCE = 'api/v1/usuarios'
const DELETAR = 'api/v1/deletar'

export default {

    loadUser (context, id) {
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            http.get(`${RESOURCE}/${id}`)
                .then(response => resolve(response.data))
                .catch(error => reject())
                .finally(() => context.commit('PRELOADER', false))
        })
    },

    loadUsers(context){
        context.commit('PRELOADER', true)
        http.get(`${RESOURCE}`)
            .then(response => context.commit('LOAD_USERS', response.data))
            .catch(error => {
                console.log()
            })
            .finally(() => context.commit('PRELOADER', false))
    },

    storeUsers (context, params){
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            http.post('api/v1/registrar', params)
                .then(response => resolve())
                .catch(error => {
                    context.commit('PRELOADER', false)

                    reject(error.response)
                })
        })
    },
    updateUser (context, params){
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            http.put(`${RESOURCE}/${params.id}`, params)
                .then(response => resolve())
                .catch(error => {
                    context.commit('PRELOADER', false)

                    reject(error.response)
                })
                
        })
    },

    delUser (context, id){
        context.commit('PRELOADER', true)

        return new Promise((resolve, reject) => {
            http.delete(`${DELETAR}/${id}`)
                .then(response => resolve())
                .catch(error => reject())
                .finally(() => context.commit('PRELOADER', false))
        })
    },

}