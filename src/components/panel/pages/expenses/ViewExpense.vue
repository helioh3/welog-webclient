<template>  
    <div class="box">
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

                    <button class="but printer ma-r-small">
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

        <form-view-expense></form-view-expense>
        

    </div>
</template>
<script>
    import FormViewExpense from './partials/FormViewExpense'

export default {

     
//    methods: {
//       expenses () {
//            return this.$store.state.expenses
//       }
//    }
    components: {
        FormViewExpense
    }
}
</script>