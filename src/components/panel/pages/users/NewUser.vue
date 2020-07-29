<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="users.html" >usuarios</a></li>
            <li><a href="index.html" class="active">novo</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Usuários</button>
        </nav>

        <div class="tabs-container">
            
            <form-user></form-user>
            
        </div>

    </div>
</template>

<script>
    import FormUser from '../users/partials/FormUser'

    export default {
        components: {
            FormUser
        }
    }
</script>