<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="#">inicio</a></li>
            <li><a href="#">despesas</a></li>
            <li><a href="#" class="active">nova</a></li>
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
            </div>
            
            <form-expense></form-expense>
        </div>

    </div>
</template>

<script>
    import FormExpense from './partials/FormExpense'
    import ButtonBack from '../../share/ButtonBack'

    export default {

        methods: {
            buttonBack(){
                this.$router.push({name: 'painel.despesas'})
              
            }
        },

        components: {
            FormExpense,
            ButtonBack
        }
        
    }
</script>