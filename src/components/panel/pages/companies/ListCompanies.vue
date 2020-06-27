<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="#" class="active">cadastros</a></li>
        </nav>  

        <nav class="tabs">
            <router-link class="tabs__item tabs__item" :to="{name: 'painel.fornecedores'}">Fornecedores</router-link>
            <router-link class="tabs__item tabs__item--active" :to="{name: 'painel.fornecedores'}">Empresas</router-link>
            
            <router-link class="tabs__item tabs__item" :to="{name: 'painel.categorias'}">Categorias</router-link>

        </nav>

        <div class="tabs-container">

            <div class="box-but">
                <div class="box-but-left">
                    <router-link class="but primary" :to="{name: 'painel.empresas.adicionar'}">Adicionar</router-link> 
                </div>
                 <div class="box-but-right"></div>
            </div>
        
            <table class="table-data">
                <thead>
                    <tr>
                        <th>logo</th>
                        <th>Empresa</th>
                        <th>CNPJ</th>
                        <th>Cidade</th>
                        <th>E-mail</th>
                        <th>Executar</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr v-for="company in companies" :key="company.id" @dblclick.prevent="view(company.id)">
                        
                        <td>
                            <img src="" class="logo-companies" alt="">
                            
                        </td>
                        <td>{{ company.empresa }}</td>
                        <td>{{ company.cnpj }}</td>
                        <td>Dianopolis</td>
                        <td>saosebastiao@gmail.com</td>
                        <td>
                            <div class="box-but-right">
                                 <button class="but printer ma-r-small">
                                    <svg class="feather">
                                        <use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
                                    </svg>
                                </button>

                                <button class="but printer ma-r-small" @click.prevent="edit(company.id)">
                                    <svg class="feather">
                                        <use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
                                    </svg>
                                </button>
                                
                            </div>
                        </td>


                    </tr>
                    
                </tbody>
            </table>
            
        </div>

    </div>
</template>

<script>
    
    export default {
      
        created () {
            this.loadCompanies()
        },

        computed: {
            companies(){
                return this.$store.state.companies.items
            }
        },

        data() {
            return {
            }
        },

        methods: {
            loadCompanies() {
                this.$store.dispatch('loadCompanies')
            },

            view(id) {
                this.$store.dispatch('loadCompany', id)
                    .then(response => {
                        this.$router.push({name: 'painel.empresas.visualizar', params: {id: id}})
                    })
                    .catch()
            },

            edit(id) {
                this.$store.dispatch('loadCompany', id)
                    .then(response => {
                        this.$router.push({name: 'painel.empresas.editar', params: {id: id}})
                    })
                    .catch()
            },

            confirmDelete(company){
                this.$snotify.error(`Deseja deletar as empresa numero: ${company.id}`, 'Confirme', {
                    position: "centerCenter",
                    timeout: 10000,
                    showProgressBar: true,
                    closeOnClick: true, 
                    buttons:[
                        {text: 'Não', action: null },
                        {text: 'Sim', action: (value)=>  {this.delCompany(company.id), this.$snotify.remove(value.id)} }
                    ] 
                })
            },

            delCompany (id){
                this.$store.dispatch('delCompany', id)
                    .then( () => {
                        this.$snotify.success(`Empresa deletada com sucessu`)
                        this.$router.push({name: 'painel.empresas'})
                    })
                    .catch(error => {
                        console.log(error)

                        this.$snotify.error('Erro ao deletar empresa', 'Erro')
                    })
            },
        }
    }
</script>