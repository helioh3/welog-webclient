export default {
    AUTH_USER_OK (state, user) {
        state.authenticated =  true,
        state.me = user
    }   
}