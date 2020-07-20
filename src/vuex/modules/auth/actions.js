import http from '@/services/http'
import {NAME_TOKEN} from '../../../config/configs'

const RESOURCE = 'api/auth'

export default {
    login(context, params){
        context.commit('PRELOADER', true)
        return http.post('api/auth', params)
            .then(response => {
                context.commit('AUTH_USER_OK', response.data.user )
                console.log(response)

                localStorage.setItem(NAME_TOKEN, response.data.token)
            })
            .catch(error => {
                console.log(response)
            })
            .finally( () => context.commit('PRELOADER', false))
        
    },

    checkLogin(context) {
        return new Promise((resolve, reject) => {
            const token = localStorage.getItem(NAME_TOKEN)
            if(!token)
                return reject()

            http.get('api/me')
                .then(response => {
                    context.commit('AUTH_USER_OK', response.data.user)
                    
                    resolve()
                })
                .catch(() => reject())
        })
    }
}