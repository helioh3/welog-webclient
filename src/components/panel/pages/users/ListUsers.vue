<template>
    <div class="box">
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

                <!-- <li class="user">
                    <div class="al-left">
                        <div class="user__date">
                            <div class="user__date--month">11</div>
                            <div class="user__date--day">Mai</div>
                        </div>

                        <img src="@/assets/images/helio.jpg" class="user__photo" alt="">

                        <span class="user__name">Helio <br> Brito</span>
                        <span class="user__perfil">Tecnico em Informática</span>
                        <p class="user__desc"></p>
                    </div>
                    <div class="al-right">
                        <button class="but printer ma-r-small">
                            <svg class="feather">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
                            </svg>
                        </button>

                        <button class="but printer">
                            <svg class="feather">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#trash-2"></use>
                            </svg>
                        </button>
                    </div>
                </li> -->
                
            </div>
        </div>

    </div>
</template>

<script>
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
                })
                .catch(error => {
                    console.log(error)

                    this.$snotify.error('Erro ao deletar usuário', 'Erro')
                })
        },
    }
}
</script>