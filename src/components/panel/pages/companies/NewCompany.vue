<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="companies.html">empresas</a></li>
            <li><a href="#" class="active">nova</a></li>
        </nav>  
        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Nova</button>
            <!-- <button class="tabs__item">Produtos</button> -->
        </nav>

        <div class="tabs-container">
            <form-company></form-company>
        </div>
    </div>
</template>

<script>
    import FormCompany from '../companies/partials/FormCompany'

    export default {

        components: {
            FormCompany
        },
    }

</script>