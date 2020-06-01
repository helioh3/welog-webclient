<template>  
    <div class="box">
        <!-- <pre>{{ expense }} </pre> -->

        <nav class="breadcrumb">
            <li><a href="#">inicio</a></li>
            <li><a href="#">despesa</a></li>
            <li><a href="#" class="active">visualizar</a></li>
        </nav>

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Despesas</button>
            <!-- <button class="tabs__item">Produtos</button> -->
        </nav>

        <div class="tabs-container">
            
            <div class="box-but">
                
                <div class="box-but-left">
                    <button class="but printer">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#arrow-left"></use>
                        </svg>
                        Voltar
                    </button>

                </div>

                <div class="box-but-right">
                    <button class="but printer ma-r-small">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#dollar-sign"></use>
                        </svg>
                        
                    </button>

                    <button class="but printer ma-r-small">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
                        </svg>
                        
                    </button>

                    <button class="but printer ma-r-small" @click="edit(expense.id)">
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
            </div>
    

        </div>

        <div class="box-form view-form">
            <h2 class="box-form__title">Dados da despesa</h2>
            
            <div class="box-field">
                 <div class="field">
                    <label class="field__label">Codigo</label>
                    <input class="field__input" type="text" placeholder="" v-model="expense.id" disabled> 
                </div>

                <div class="field">
                    <label class="field__label">N. Nota 2</label>
                    <input class="field__input" type="text" placeholder="" v-model="expense.codigo" disabled> 
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
                        <select disabled>
                            <option value="">Selecione</option>
                           
                        </select> 
                    </div>
                </div>
        
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
            </div>
        </div> 
    
        <div class="box-form view-form">
            <h2 class="box-form__title">Dados da despesa</h2>
            
            <div class="box-field">
                <div class="field">
                    <label class="field__label">Valor Total(R$)</label>
                    <input class="field__input" type="number" disabled> 
                </div>

                <div class="field">
                    <label class="field__label">Data de Competência</label>
                    <input class="field__input" type="date" disabled> 
                </div>

                <div class="field">
                    <label class="field__label">Parcelamento</label>
                    <div class="field__select">
                        <select disabled>
                            <option value="">Selecione</option>
                            <option value="">1x</option>
                            <option value="">2x</option>
                        </select> 
                    </div>
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
            </div>

            <div class="box-table">
                <table class="field-table">
                    <thead>
                        <tr>
                            <th>Parcela</th>
                            <th>Vencimento</th>
                            <th>Data / Pagamento</th>
                            <th>Comprovante</th>
                            <th>Valor(R$)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1/3</td>
                            
                            <td>
                               22/09/2020
                            </td>
                            <td>
                                22/09/2020
                            </td>

                            <td>
                                <button class="but printer ma-r-small">
                                    <svg class="feather">
                                        <use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
                                    </svg>
                                    
                                </button>
                            </td>

                            <td>R$ 200,00</td>
                            <td>
                                <button class="but but-icon" disabled>
                                    <svg class="feather menu-user__icon">
                                        <use xlink:href="svg/feather-sprite.svg#thumbs-up"/>
                                    </svg>
                                </button> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div> 

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

export default {

    name: 'ViewExpense',

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
                codigo: '',
                valor: '',
            
            }
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
        }
    }
     
//    methods: {
//       expenses () {
//            return this.$store.state.expenses
//       }
//    }
    // components: {
    //     FormViewExpense
    // }
}
</script>