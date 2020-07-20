<template>
    <!-- CONTEUDO DO SISTEMA -->
    <div class="container-login">
        <header class="login-header">
            <div class="brand-login">
                <a href=""><img src="@/assets/images/logo-oficial.png" class="logo" alt="" width="178" height="70"></a>
            </div>
        </header>
        <!-- CONTEUDO DO SISTEMA -->
        <main class="login-main">
            <div class="box-login">
                <form @submit.prevent="onLogin">
                    <h1 class="title">Login-se <strong>CONTA - SENHA</strong> </h1>
                    
                    <div class="field">
                        <input type="text" class="field__input"  placeholder="Usuário ID" v-model="formData.email"> 
                        <input type="password" class="field__input"  placeholder="Senha" v-model="formData.password"> 
                        <p>Obter ID Account</p>
                    </div>
                   
                    <button type="submit" class="but but-login">Entrar ></button>
                </form>
            </div>
        </main>
        <!-- RODAPE DO SISTEMA -->
        <!-- <footer class="admin-footer">
            <div class="menu-footer">      
                <img src="images/logo-footer.png" class="menu-footer__logo-footer" alt="">
                <li><a href="#" class="menu-footer__item">sobre</a></li>
                <li><a href="#" class="menu-footer__item">ajuda</a></li>
            </div>
        </footer> -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onLogin() {
            this.$store.dispatch('login', this.formData)
                .then(() => {
                    this.$router.push({name: 'painel.dashboard'})
                })
                .catch( error => {
                    console.log(error)
                })
        }
    }
}
</script>
<style lang="">
    
</style>