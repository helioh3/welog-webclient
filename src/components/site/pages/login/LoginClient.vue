<template>
   
    <!-- <div class="container-login">
        <header class="login-header">
            <div class="brand-login">
                <a href=""><img src="@/assets/images/logo-oficial.png" class="logo" alt="" width="178" height="70"></a>
            </div>
        </header>
        
        
        <main class="login-main">
            <div class="box-login">
                <form @submit.prevent="onLogin">
                    <h1 class="title">Bem-vindo <p>Insira os dados</p></h1>
                    
                    <div class="field">
                        <input type="text" class="field__input"  placeholder="Use e-mail" v-model="formData.email"> 
                        <input type="password" class="field__input"  placeholder="Senha" v-model="formData.password"> 
                        <p>Obter ID Account</p>
                    </div>
                   
                    <button type="submit" class="but but-login">Entrar ></button>
                </form>
            </div>
        </main>
       
    </div> -->

<!-- component -->
<div class="bg-gray-200 rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
  <!-- User profile image -->
  <img class="rounded-full h-32 w-32" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="user avatar" />
  <form @submit.prevent="onLogin" class="mt-8 mb-4">
    <div class="mb-4">
      <label class="sr-only">E-mail</label>
      <input v-model="formData.email" class="border-solid border border-gray-400 rounded px-2 py-3" type="email" id="userEmail" placeholder="Email" required />
    </div>
    <div>
      <label class="sr-only">Password</label>
      <input v-model="formData.password" class="border-solid border border-gray-400 rounded px-2 py-3" type="password" id="userPass" placeholder="Password" required />
    </div>
    <div class="my-4 flex items-center">
      <input class="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
      <label for="userRemember">Me lembre</label>
    </div>
    <button class="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3 rounded" type="submit">Entrar</button>
  </form>

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
                    this.$snotify.error('dados invalidos', 'Falhou')
                })
        }
    }
}
</script>
<style lang="">
    
</style>
