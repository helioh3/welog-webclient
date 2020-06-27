<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="providers.html">fornecedores</a></li>
            <li><a href="#" class="active">novo</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Fornecedor</button>
            <!-- <button class="tabs__item">Produtos</button> -->
        </nav>
        <div class="tabs-container">

            <div class="box-but">
                <button-back></button-back>
            </div>

            <form-provider ></form-provider> 
   
        </div>

    </div>
</template>

<script>
    import FormProvider from './partials/FormProvider'
    import ButtonBack from './share/ButtonBack'

export default {
   
   components: {
       FormProvider, ButtonBack
   }
}
</script>