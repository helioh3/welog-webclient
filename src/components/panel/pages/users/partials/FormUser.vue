<template>

<form action="" @submit.prevent="onSubmit">
	<div class="flex flex-col overflow-y-auto md:flex-row">
	
          <div class="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              class="object-cover w-full h-full dark:hidden"
              src="../../../../../assets/img/create-account-office.jpeg"
              alt="Office"
            />
            <img
              aria-hidden="true"
              class="hidden object-cover w-full h-full dark:block"
              src="../../../../../assets/img/create-account-office-dark.jpeg"
              alt="Office"
            />
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div class="w-full">
              <h1
                class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
              >
                Criar um novo usuário
              </h1>

			  <label class="block text-sm">
                <span class="text-gray-700 dark:text-gray-400">Nome Completo</span>
                <input
                  class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="Rita Maria"
				  v-model="user.nome"
                />
              </label>

			  <label class="block  mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">Telefone</span>
                <input
                  class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="Telefone"
				  v-model="user.telefone"
                />
              </label>

			  <label class="block  mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">Perfil : </span>
                <select class="bg-transparent">
					<option value="user">Administrador</option>
					<option value="admin">Padrão</option>
				</select>
              </label>

			  <label class="block  mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">Data de Nascimento *</span>
                <input
                  class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="00-00-0000"
				  v-model="user.nascimento"
                />
              </label>
              <label class="block  mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">E-mail *</span>
                <input
                  class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="exemplo@servico.com"
				  v-model="user.email"
                />
              </label>
			  
              <label class="block mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">Senha *</span>
                <input
                  class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="*************"
                  type="password"
				  v-model="user.password"
                />
              </label>
			  <button class="mt-10 block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
				<router-link type="submit" class="" :to="{name: 'painel.usuarios.adicionar'}">Salvar</router-link>

			  </button>
			
				<router-link class=" block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-pink-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline-purple" :to="{name: 'painel.usuarios'}">Cancelar</router-link>

              <hr class="my-8" />

              <p class="mt-4">
                <a
                  class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  href="./login.html"
                >
                  O usuário ja existe? Entre.
                </a>
              </p>
            </div>
          </div>
    </div>

	</form>
</template>

<script>
export default {
    props: {
        value:{
            require: false,
            type: Object,
            default: () => {
                return {
                    id: '',
					nome: '',
					telefone: '',
					nascimento: '',
                    email: '',
                    password: '',
                }
            }
        },

         update: {
            require: false,
            type: Boolean,
            default: false
        }
    },
    
    data() {
        return {
            user: {},
            errros: {}
        }
    },

    methods: {
        onSubmit () { 
            let action = this.update ? 'updateUser' : 'storeUsers'
            
            this.$store.dispatch(action, this.user)
                .then( () => {
                    this.$snotify.success('Salvo com sucesso');
                    this.$router.push({name: 'painel.usuarios'})
                })
                .catch( () => {
                    this.$snotify.error('Não foi possivel salvar', 'Erro')
                })
        },
    },

     watch: {
        value: {
            imediate: true,
            handler(value){
                this.user = {...value}
            }
        }
    }
}
</script>
