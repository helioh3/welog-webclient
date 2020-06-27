
import http from '@/services/http'

const RESOURCE = 'api/v1/empresas'

export default {


    loadCompanies(context){
        context.commit('PRELOADER', true)
        http.get(`${RESOURCE}`)
            .then(response => context.commit('LOAD_COMPANIES', response.data))
            .catch(error => {
                console.log()
            })
            .finally(() => context.commit('PRELOADER', false))
            
    },

    storeCompanies (context, params) {
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            http.post(`${RESOURCE}`, params)
                .then(response => resolve())
                .catch(error => {
                    

                    reject(error.response)
                })
                .finally(() => context.commit('PRELOADER', false))
        })

    },

    loadCompany (context, id) {
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            http.get(`${RESOURCE}/${id}`)
                .then(response => resolve(response.data))
                .catch(error => reject())
                .finally(() => context.commit('PRELOADER', false))
        })
    },

    updateCompany (context, params){
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

    delCompany (context, id){
        context.commit('PRELOADER', true)

        return new Promise((resolve, reject) => {
            http.delete(`${RESOURCE}/${id}`)
                .then(response => resolve())
                .catch(error => reject())
                .finally(() => context.commit('PRELOADER', false))
        })
    },

}