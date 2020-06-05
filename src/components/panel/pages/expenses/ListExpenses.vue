<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="#">inicio</a></li>
            <li><a href="#" class="active">despesas</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Despesas</button>
            <button class="tabs__item">Produtos</button>
        </nav>

        <div class="tabs-container">
            <div class="box-but">

                <div class="box-but-left">
                    <router-link class="but primary" :to="{name: 'painel.despesas.adicionar'}">Adicionar</router-link> 
                </div>

                <div class="box-but-right">

                    <div class="but-group ma-r-small">
                        <button class="but prev">
                            <svg class="feather white">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#arrow-left"></use>
                            </svg>                
                        </button>
                        <button class="but tertiary">Janeiro - 2020</button>
                        <button class="but next">
                            <svg class="feather white">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#arrow-right"></use>
                            </svg>
                        </button>
                    </div>

                    <!-- COMPONENT DE PESQUISA -->
                    <search 
                        @search="searchForm"
                    >
                    </search>

                    <button class="but printer">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
                        </svg>
                    </button>

                </div>

            </div>

            <table class="table-data">
                <thead>
                    <tr>
                        <th>
                            <label>
                                 <input type="checkbox" class="field__checkbox">
                            </label>
                        </th>
                        <th>#numero</th>
                        <th class="ac">Data</th>
                        <th>Descrição</th>
                        <th>Fornecedor</th>
                        <th>Vencimento</th>
                        <th class="ac">Status</th>
                        <th class="ac">Valor</th>                        
                    </tr>
                </thead>
                <tbody>
                    <!-- <router-link class="tabs__item tabs__item--active" :to="{name: 'painel.categorias', params:{id: category.id}}">
                        
                    </router-link> -->
                    <tr v-for="expense in expenses.data" :key="expense.id" @dblclick="edit(expense.id)">
                        <td>
                             <label>
                                 <input type="checkbox" class="field__checkbox">
                            </label>
                        </td>
                        <td>{{ expense.numero }}</td>
                        <td class="ac">22/06/2019</td>
                        <td>Serviços de reparo em caminhão Ford 2010 </td>
                        <td>JR AUTO PEÇAS </td>
                        <td> 30/06/2019   </td>
                        <td class="ac">-----</td>
                        <td class="ac">R$ {{ expense.valor }}</td>
                    </tr>
                    
                    
                </tbody>
            </table>

            <paginate
                :pagination="expenses"
                :offset="6"
                @paginate="loadExpenses"
            >
            </paginate>
        </div>

    </div>
</template>

<script>
    import PaginationGeneral from '../../../share/PaginationGeneral'
    import SearchPanel from '../../share/SearchPanel'

    export default {
        created () {
            this.loadExpenses(1)
        },

        data() {
            return {
                search: ''
            }
        },
        
        computed: {
            expenses(){
                return this.$store.state.expenses.items
            },

            params () {
                return {
                    page: this.expenses.current_page,
                    filter: this.search
                }
            }
        },

        methods: {
            loadExpenses(page){
                this.$store.dispatch('loadExpenses', {...this.params, page})
            },
            
            searchForm (filter) {
                this.search = filter,
                this.loadExpenses(1)
            },

            edit (id) {
                this.$store.dispatch('loadExpense', id)
                    .then(reponse => {
                        this.$router.push({ name: 'painel.despesas.visualizar', params: {id: id}})
                    })
                    .catch(error => {
                        this.$snotify.error('Algo errado ao visualizar', 'Erro')
                    })
            }
        },

        components: {
           paginate: PaginationGeneral, 
           search: SearchPanel
          
        }
        
    }
</script>