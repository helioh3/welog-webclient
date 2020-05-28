
import axios from 'axios'

const TENANT = window.location.host.replace(process.env.VUE_APP_BASE_FRONT_DOMAIN, '')
const BACKEND = process.env.VUE_APP_BACKEND_DOMAIN.replace('X-TENANT', TENANT)


const client = axios.create({
    baseURL: BACKEND,
    
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }

})

export default client