<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="#">inicio</a></li>
            <li><a href="#" class="active">despesas</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Despesas</button>
            
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
            
            <table>
                <thead>
                    <tr>
                        <th>
                            <label>
                                 <input type="checkbox" class="field__checkbox" @click="selectAll($event)">
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
                    <tr class="dotted" :class="{focused: focused === expense.id }" 
                        v-for="expense in expenses.data" :key="expense.id" 
                        @click.stop="focus(expense.id)" 
                        @dblclick="edit(expense.id)"
                    >
                        <td>
                             <label>
                                <input type="checkbox" class="field__checkbox" 
                                    @click.stop="select(expense.id, $event.target.checked)" 
                                    :checked="selected.includes(expense.id)"
                                >
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
                search: '',
                selected: [],
                focused: ''
            }
        },
        
        computed: {
            expenses(){
                return this.$store.state.expenses.items
            },

            params() {
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
            },

            select(id, checked) {
                
                if(checked){
                    this.selected.push(id)
                    return
                }
                const index = this.selected.findIndex( (element) => id === element )
                
                //Early return tecnica
                if(index < 0 ){
                    return
                }
                this.selected.splice(index, 1)
            },

            selectAll($event) {
                if ($event.target.checked){
                        this.selected = this.expenses.data.map( (expense) => expense.id)
                     
                    return 
                }

                this.selected = []
            },

            focus (id){
                this.focused = id
            },
            
            onPress ($event){
                // console.log($event.keyCode)
                if(!this.focused){

                    return
                }

                if($event.keyCode === 32){
                    this.select(this.focused, !this.selected.includes(this.focused) )

                    return
                }

                let index = this.expenses.data.findIndex( (element) => this.focused === element.id)

                if ($event.keyCode === 38) {
                    index--
                } else if ($event.keyCode === 40) {
                    index++
                }

                if(!this.expenses.data[index]){
                    
                    return
                }

                this.focused = this.expenses.data[index].id
            }
        
        },

        components: {
           paginate: PaginationGeneral, 
           search: SearchPanel
          
        },

        mounted() {
            document.addEventListener("keyup", this.onPress)

        },

        destroyed() {
            document.removeEventListener("keyup", this.onPress)
        }
        
    }
</script>