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
                codigo: '',
                category_id: '',
                valor: ''

            }
        }
    },

    components: { FormExpense }

}
</script>
