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
                    <label class="field__label">Imprimir anexo</label>
                    <svg class="feather" style="text-align: center">
                        <use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
                    </svg>
                </div>

                 <div class="field">
                    <label class="field__label">Codigo</label>
                    <p class="field__text">{{ expense.id }}</p>
                </div>

                <div class="field">
                    <label class="field__label">N. Nota Fiscal</label>
                    <p class="field__text">{{ expense.numero }}</p> 
                </div>
        
                <div class="field">
                    <label class="field__label">Fornecedor</label>
                    <p class="field__text">SAO SEBASTIÃO ENERGIA</p>
                </div>

                
            </div>

            <div class="box-field ">

                <div class="field">
                    <label class="field__label">Categoria</label>
                    <p class="field__text">COMBUSTIVEL</p>
                    <!-- <div class="field__select">
                        <select v-model="expense.category_id" disabled>
                            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.nome }}</option>

                        </select>
                    </div> -->
                </div>
               
                <div class="field">
                    <label class="field__label">Empresa de Origem</label>
                    <p class="field__text">HELIO BRITO</p>
                </div>
               
                <div class="field">
                    <label class="field__label">Data de cadastro</label>
                    <p class="field__text">99/99/9999</p>
                </div>

                <div class="field">
                    <label class="field__label">Conta Bancária</label>
                    <p class="field__text">BANCO DO BRASIL</p>
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