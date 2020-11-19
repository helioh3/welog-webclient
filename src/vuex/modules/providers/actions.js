import http from '@/services/http'

const RESOURCE = 'api/v1/fornecedores'

export default {

    loadProviders (context, params) {
        context.commit('PRELOADER', true)
        http.get(`${RESOURCE}`, {params})
            .then(response => context.commit('LOAD_PROVIDERS', response?.data))
            .catch(error => {
                console.log(error)
            })
            .finally( () => context.commit('PRELOADER', false))
    },

    loadProvider (context, id) {
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            http.get(`${RESOURCE}/${id}`)
                .then(response => resolve(response.data))
                .catch(error => reject())
                .finally(() => context.commit('PRELOADER', false))
        })
    },

    storeProviders (context, params){
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            http.post(`${RESOURCE}`, params)
                .then(response => resolve())
                .catch(error => {
                    context.commit('PRELOADER', false)

					reject(error.response)
					
					console.log(error.response)
                })
        })
    },

    updateProvider (context, params){
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

    delProvider (context, id){
        context.commit('PRELOADER', true)

        return new Promise((resolve, reject) => {
            http.delete(`${RESOURCE}/${id}`)
                .then(response => resolve())
                .catch(error => reject())
                .finally(() => context.commit('PRELOADER', false))
        })
    },

    

}
