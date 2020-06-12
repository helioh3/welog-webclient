<template>  
    <div class="box">
        <!-- <pre>{{ expense }} </pre> -->

        <nav class="breadcrumb">
            <li><a href="#">inicio</a></li>
            <li><a href="#">despesa</a></li>
            <li><a href="#" class="active">pagamento</a></li>
        </nav>

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Despesa</button>
            <!-- <button class="tabs__item">Produtos</button> -->
        </nav>

        <div class="tabs-container">
            <div class="box-but">
                
                <div class="box-but-left">
                   <button-back></button-back>

                </div>

                <div class="box-but-right">
                    <button class="but printer ma-r-small"  @click.prevent="view(expense.id)">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#eye"></use>
                        </svg>
                        
                    </button>

                    <button class="but printer ma-r-small">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
                        </svg>
                        
                    </button>

                    <button class="but printer ma-r-small" @click.prevent="edit(expense.id)">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
                        </svg>
                    </button>

                </div>
            </div>
    
        </div>

        <div class="box-form view-form">
            <h2 class="box-form__title">Dados da despesa</h2>
            <div class="box-field">
                 <div class="field">
                    <label class="field__label">numero</label>
                    <input class="field__input" type="text" placeholder="" v-model="expense.id" disabled> 
                </div>

                <div class="field">
                    <label class="field__label">N. Nota Fiscal</label>
                    <input class="field__input" type="text" placeholder="" v-model="expense.numero" disabled> 
                </div>
        
                <div class="field">
                    <label class="field__label">Fornecedor</label>
                    <div class="field__select">
                        <select disabled>
                            <!-- <option selected="selected"> mudar</option> -->
                            <option value="">Selecione</option>
                            <option value="">Selecione</option>
                            <option value="">Selecione</option>
                        </select> 
                    </div>
                </div>
        
                <div class="field">
                    <label class="field__label">Categoria</label>
                    <div class="field__select">
                        <select v-model="expense.category_id" disabled>
                            <!-- <option value=""></option> -->
                            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.nome }}</option>

                        </select>
                    </div>
                </div>
            </div>

            <div class="box-field">
                <div class="field">
                    <label class="field__label">Empresa de Origem</label>
                    <div class="field__select">
                        <select disabled>
                            <option value="">Selecione</option>
                            <option value="">testestestestestestestestest</option>
                            <option value="">Selecione</option>
                        </select>
                    </div>
                </div>
               
                <div class="field">
                    <label class="field__label">Data de cadastro</label>
                    <input v-mask="'##/##/####'" class="field__input w-mini-small" type="text" disabled>
                </div>

                <div class="field">
                    <label class="field__label">Conta Bancária</label>
                    <div class="field__select">
                        <select disabled>
                            <option value="">Selecione</option>
                            <option value="">Banco do Brasil</option>
                            <option value="">Sicredi</option>
                        </select>
                    </div>
                </div>
                 <div class="field">
                    <label class="field__label">Valor (R$)</label>
                    <money class="field__input w-mini-small" type="text" v-model="expense.valor" disabled />
                </div>
            </div>     
        </div> 

        <form-pay :value="expense"></form-pay>

        <div class="box-form view-form">
            <h2 class="box-form__title">Informções extra</h2>
            <div class="box-field">
                <div class="field">
                    <label>Observação</label>
                        <textarea cols="30" rows="3" disabled></textarea>
                </div>
                
            </div>
        </div>
    </div>

</template>
<script>
    // import FormViewExpense from './partials/FormViewExpense'
    import FormPay from './partials/FormPay'
    import ButtonBack from '../../share/ButtonBack'

    export default {
        name: 'PayExpense',

        props: {
            id: {
                require: true
            }
        },

        created(){
            this.$store.dispatch('loadExpense', this.id)
                .then(response => {
                    this.expense = response
                })
        },

        data(){
            return {
                expense: {
                    id: '',
                    numero: '',
                    valor: '',
                
                }
            }
        },

        computed: {
            categories(){
                return this.$store.state.categories.items.data
            }
        },

        methods: {
            edit(id){
                this.$store.dispatch('loadExpense', id)
                    .then(response => {
                        console.log(response)
                        this.$router.push({name: 'painel.despesas.editar', params:{id: id}})
                    })
                    .catch(error => {
                        
                        this.$snotify.error('Houve um erro ao editar', 'Erro')
                    })
            },

            view(id){
                this.$store.dispatch('loadExpense', id)
                    .then(response => {
                        console.log(response)
                        this.$router.push({name: 'painel.despesas.visualizar', params:{id: id}})
                    })
                    .catch(error => {
                        
                        this.$snotify.error('Houve um erro ao editar', 'Erro')
                    })
            },

            
        },

       components: {
           FormPay,
           ButtonBack
          
        }

    }
</script>