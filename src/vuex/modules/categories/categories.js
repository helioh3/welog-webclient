import http from '@/services/http'

export default {

    state: {
        items: {
            data: [],
        }
    },

    mutations: {
        LOAD_CATEGORIES(state, categories) {
            state.items = categories
        }
    },

    actions: {
        getCategories (context){
            context.commit('PRELOADER', true)
            http.get('/api/v1/categorias')
                .then(response => {
                    context.commit('LOAD_CATEGORIES', response)
                })
                .catch(error => {
                    // console.log(errors)
                })
                .finally( () => context.commit('PRELOADER', false))
        },

        getCategory (context, id){

            context.commit('PRELOADER',true)
            return new Promise((resolve, reject) => {
                http.get(`/api/v1/categorias/${id}`)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error ))
                    .finally(() => context.commit('PRELOADER', false))
            })
        },

        addCategories (context, params){

            context.commit('PRELOADER', true)
            return new Promise((resolve, reject) => {
                http.post('api/v1/categorias', params)
                    .then(response => resolve())
                    .catch(error => reject(error ))
                    .finally(() => context.commit('PRELOADER', false))
            })
        },

        updateCategory (context, params) {
            
            context.commit('PRELOADER', true)
            return new Promise((resolve, reject) => {
                http.put(`api/v1/categorias/${params.id}`, params)
                    .then(response => resolve())
                    .catch(error => reject(error))
                    .finally(() => context.commit('PRELOADER', false))
            })
        },

        deleteCategory(context, id){

            context.commit('PRELOADER', true)

            return new Promise((resolve, reject) => {
                http.delete(`api/v1/categorias/${id}`)
                    .then(response => resolve())
                    .catch(error => reject(error))
                    .finally(() => context.commit('PRELOADER', false))
            })
        }
    },

    getters: {
        
    }




}
