import http from '@/services/http'

const RESOURCE = 'api/v1/despesas'
const INSTALLMENT = 'api/v1/parcelas'


const SETHEADERS = {
    headers: {
        'content-type' : 'multipart/form-data'
    }
}

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

    storeExpenses (context, formData){
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            http.post(`${RESOURCE}`, formData, SETHEADERS)
                .then(response => resolve())
                .catch(error => {
                    context.commit('PRELOADER', false)

                    reject(error.response)
                })
        })
    },

    updateExpense (context, params){
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            http.post(`${RESOURCE}/${params.id}`, params)
                .then(response => resolve())
                .catch(error => {
                    context.commit('PRELOADER', false)

                    reject(error.response)
                })
                
        })
    },

    updateInstallment (context, formData){
        context.commit('EXPENSE', true)
        return new Promise((resolve, reject) => {
            http.post(`${INSTALLMENT}`, formData, SETHEADERS)
                .then(response => resolve())
                .catch(error => {
                    context.commit('PRELOADER', false)

                    reject(error.response)
                })
        })
    },

    delExpense (context, id){
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            http.delete(`${RESOURCE}/${id}`)
                .then(response => resolve())
                .catch(error => reject())
                .finally(() => context.commit('PRELOADER', false))
        })
    },



}