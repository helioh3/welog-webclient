<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="#" class="active">fornecedores</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Fornecedores</button>
            <router-link class="tabs__item tabs__item" :to="{name: 'painel.empresas'}">Empresas</router-link>
            <router-link class="tabs__item tabs__item" :to="{name: 'painel.categorias'}">Categorias</router-link>

        </nav>

        <div class="tabs-container">

            <div class="box-but">
                <div class="box-but-left">
                    <router-link class="but printer ma-r-small" :to="{name: 'painel.fornecedores.adicionar'}" >
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#plus-circle"></use>
                        </svg>
                    </router-link> 
                </div>

                <div class="box-but-right">
                    <search 
                        @search="searchForm"
                    >
                    </search>

                    <button class="but printer" disabled>
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
                        </svg>
                    </button>
                </div>

            </div>
           <!-- <pre>{{ provider }}</pre> -->
            <table class="table-data">
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Cidade</th>
                        <th>Observação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="provider in providers.data" :key="provider.id" @dblclick.prevent="view(provider.id)">
                        <td>
                            <img src="" class="logo-companies" alt="">
                        </td>
                        <td>{{ provider.nome }}</td>
                        <td>{{ provider.cpf }}</td>
                        <td>Dianopolis</td>
                        <td>helioh3@gmail.com</td>
                        <td>Responsavel pela TI</td>
                    </tr>
                    
                </tbody>
            </table>

            <pagination
                :pagination="providers"
                :offset="6"
                :paginate="loadProviders"
            >
            </pagination>
            
        </div>

    </div>
</template>
<script>
    import SearchPanel from '../../share/SearchPanel'
    import PaginationGeneral from '../../../share/PaginationGeneral'

    export default {

        created () {
            this.loadProviders(1)       
        },

        data() {
            return  {
                search: ''
            }
        },

        computed: {
            providers () {
                return this.$store.state.providers.items
            },

            params () {
                return {
                    page: this.providers.current_page,
                    filter: this.search
                }
            }
        },

        methods: {
            loadProviders(page){
                this.$store.dispatch('loadProviders', {...this.params, page})
            },

            view(id) {
                this.$store.dispatch('loadProvider', id)
                    .then(response => {
                        this.$router.push({name: 'painel.fornecedores.visualizar', params: {id: id}})
                    })
                    .catch()
            },

            searchForm (filter) {
                this.search = filter,
                this.loadProviders(1)
            },
            
        },
        
        components: {
            search: SearchPanel, pagination: PaginationGeneral
        }
    }
</script>