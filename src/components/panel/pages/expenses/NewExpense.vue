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
                    
                    <button class="but printer">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#arrow-left"></use>
                        </svg>
                        Voltar
                    </button>
                </div>
            </div>
            
            <form-expense></form-expense>
        </div>

    </div>
</template>

<script>
    import FormExpense from './partials/FormExpense'

    export default {


        components: {
            FormExpense
        }
        
    }
</script>