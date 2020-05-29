import http from '@/services/http'


const RESOURCE = 'api/v1/despesas'

export default {

    loadExpenses (context, params) {
        context.commit('PRELOADER', true)
        http.get(`${RESOURCE}`, {params})
            .then(response => context.commit('LOAD_EXPENSES', response.data))
            .catch(error => {
                console.log(error)
            })
            .finally( () => context.commit('PRELOADER', false))
            
    },

    loadExpense (context, id) {
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            http.get(`${RESOURCE}/${id}`)
                .then(response => resolve(response.data))
                .catch(error => reject())
                .finally(() => context.commit('PRELOADER', false))

        })
    },

    storeExpenses (context, params){
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            http.post(`${RESOURCE}`, params)
                .then(response => resolve())
                .catch(error => reject(error ))
                .finally(() => context.commit('PRELOADER', false))

        })
    },



}