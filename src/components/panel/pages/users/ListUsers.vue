<template>
    <!-- <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="#" class="active">usuarios</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Usuários</button>
        </nav>

        <div class="tabs-container">
            <div class="box-but">
                <div class="box-but-left">
                    <router-link class="but printer ma-r-small" :to="{name: 'painel.usuarios.adicionar'}" >
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#plus-circle"></use>
                        </svg>
                    </router-link>
                </div>

                <div class="box-but-right"></div>

            </div>

            <div class="box-users">

                <li class="user" v-for="user in users" :key="user.id">
                    <div class="al-left">
                        <div class="user__date">
                            <div class="user__date--month">26</div>
                            <div class="user__date--day">Nov</div>
                        </div>

                        <img src="@/assets/images/natan.jpg" class="user__photo" alt="">

                        <span class="user__name">{{ user.nome }} <br></span>
                        <span class="user__perfil">Gerente Administrativo</span>
                        <p class="user__desc"></p>
                    </div>
                    <div class="al-right">
                        <button class="but printer ma-r-small" @click="edit(user.id)">
                            <svg class="feather">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
                            </svg>
                        </button>

                        <button class="but printer" @click.prevent="confirmDelete(user)">
                            <svg class="feather">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#trash-2"></use>
                            </svg>
                        </button>
                    </div>
                </li>
                
               
            </div>
        </div>

    </div> -->

    <div>
        <!-- BRANDCRUBS -->
		<div class="mx-auto px-8 py-2">
			<nav class="text-black font-bold my-1" aria-label="Breadcrumb">
				<ol class="list-none p-0 inline-flex">
					<li class="flex items-center">
						<router-link :to="{name: 'painel.dashboard'}">Home</router-link>
						<svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
							<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
						</svg>
					</li>

					<li>
						<a href="#" class="text-gray-500" aria-current="page">Usuarios</a>
					</li>
				</ol>
			</nav>
		</div>

		<!-- TABS -->
		<div class="py-1">
			<TabsUserCadastro/>
		</div>

		
    </div>
    
</template>

<script>

import TabsUserCadastro from '@/components/panel/pages/users/share/TabsCadastro'
export default {

    created () {
         this.loadUsers()
    },

    computed: {
        users() {
            return this.$store.state.users.items
        }
    },

    methods: {
        loadUsers() {
            this.$store.dispatch('loadUsers')
        },

        edit (id) {
            this.$store.dispatch('loadUser', id)
                .then(reponse => {
                    this.$router.push({ name: 'painel.usuarios.editar', params: {id: id}})
                })
                .catch(error => {
                    this.$snotify.error('Erro ao editar', 'Erro')
                })
        },

        confirmDelete(user){
            this.$snotify.error(`Deseja deletar o usuário de nome: ${user.nome}`, 'Confirme', {
                position: "centerCenter",
                timeout: 10000,
                showProgressBar: true,
                closeOnClick: true, 
                buttons:[
                    {text: 'Não', action: null },
                    {text: 'Sim', action: (value)=>  {this.delUser(user.id), this.$snotify.remove(value.id)} }
                ] 
            })
        },

        delUser (id){
            this.$store.dispatch('delUser', id)
                .then( () => {
                    this.$snotify.success(`Usuário deletado com sucesso`)
                    this.$router.push({name: 'painel.usuarios'})

                    this.loadUsers()
                })
                .catch(error => {
                    console.log(error)

                    this.$snotify.error('Erro ao deletar usuário', 'Erro')
                })
        },
	},
	components: {
		TabsUserCadastro
	}
}
</script>
