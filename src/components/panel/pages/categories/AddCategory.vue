<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="categories.html" >categorias</a></li>
            <li><a href="index.html" class="active">nova</a></li>

        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Categoria</button>
        </nav>

        <div class="tabs-container">
            <!-- form para cadastrar categorias -->
            <form-category></form-category>
        </div>
    </div>
</template>
<script>
    import FormCategory from './partials/FormCategory'

    export default {

        components: {
            FormCategory
        }

    }
</script>

<style lang="">
    
</style>