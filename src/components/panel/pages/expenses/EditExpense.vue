<template>
    <div class="box">
        <!-- <pre> {{ expense }}</pre> -->
        <nav class="breadcrumb">
            <li><a href="#">inicio</a></li>
            <li><a href="#">despesas</a></li>
            <li><a href="#" class="active">editar</a></li>
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

                    <button class="but printer ma-r-small" @click.prevent="pay(expense.id)">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#dollar-sign"></use>
                        </svg>
                        
                    </button>

                    <button class="but printer ma-r-small">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
                        </svg>
                        
                    </button>

                    <!-- <button class="but printer ma-r-small" @click.prevent="edit(expense.id)">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
                        </svg>
                    </button> -->

                    <!-- <button class="but printer" @click.prevent="confirmDelete(expense)">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#trash-2"></use>
                        </svg>
                    </button> -->
                </div>
            </div>

            <form-expense
              :value="expense"
              :update="true"
            >
            </form-expense>

        </div>

    </div>
</template>
<script>
    import FormExpense from './partials/FormExpense'
    import ButtonBack from '../../share/ButtonBack'

export default {
    props: {
        id: {
            require: true
        }
    },

    created () {
        this.$store.dispatch('loadExpense', this.id)
            .then(response => {
                this.expense = response
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    },

    data(){
        return {
            expense: {
                id: '',
                numero: '',
                category_id: '',
                valor: ''
            }
        }
    },

    methods: {
        
        pay(id){
            this.$store.dispatch('loadExpense', id)
                .then(response => {
                    console.log(response)
                    this.$router.push({name: 'painel.despesas.pagar', params:{id: id}})
                })
                .catch(error => {
                    this.$snotify.error('Houve um erro ao pagar', 'Erro')
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

    components: { FormExpense, ButtonBack }

}
</script>
