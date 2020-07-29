export default {
    AUTH_USER_OK (state, user) {
        state.authenticated =  true
        state.me = user
    },

    AUTH_USER_LOGOUT (state) {
        state.me.token = {}
        state.authenticated = false
    },

    CHANGE_URL_DEFAULT (state, url) {
        state.urlBack = url
    },
    
    
}