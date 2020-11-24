import axios from 'axios'

import logout from '@/helpers/logout'

const TENANT = window.location.host.replace(process.env.VUE_APP_BASE_FRONT_DOMAIN, '')
const BACKEND = process.env.VUE_APP_BACKEND_DOMAIN.replace('X-TENANT', TENANT)

console.log('~> BACKEND', BACKEND)

export function getBaseURL () {
  return BACKEND
}

const client = axios.create({
  baseURL: BACKEND,
  // headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }
})

// Add a response interceptor
client.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  if ([401, 403].includes(Number(error?.response?.status))) {
    logout();
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default client
