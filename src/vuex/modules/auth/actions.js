import http from '@/services/http'
import {NAME_TOKEN} from '../../../config/configs'

const RESOURCE = 'api/v1/auth'

export default {
    login(context, params){
        context.commit('PRELOADER', true)
        return http.post('api/v1/auth', params)
            .then(response => {
                context.commit('AUTH_USER_OK', response.data.user )
                // console.log(response)
                const token = response.data.token
                localStorage.setItem(NAME_TOKEN, token)
                http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            })
            // .catch(error => {console.log(response)})
            .finally( () => context.commit('PRELOADER', false))
        
    },

    checkLogin(context) {
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            const token = localStorage.getItem(NAME_TOKEN)
            if(!token){
                return reject()
            }
            http.get('api/v1/me')
                .then(response => {
                    context.commit('AUTH_USER_OK', response.data.user)

                    resolve()
                })
                .catch( () => reject() )
                .finally(() => context.commit('PRELOADER', false))
        })
    },

    logout (context) {
        localStorage.removeItem(NAME_TOKEN)

        context.commit('AUTH_USER_LOGOUT')
        
    }
}