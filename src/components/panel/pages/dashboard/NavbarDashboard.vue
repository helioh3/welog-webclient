<template>
    <nav class="navbar">
        <div class="brand">
            <a href="#"><img  src="../../../../../assets/images/logo.png" class="brand__logo"  alt="Welog Logo"></a>
        </div>
        
        <ul class="menu-nav">
            <li><router-link :to="{ name: 'painel.dashboard'}" class="menu-nav__item">Inicio</router-link></li>
            <li><router-link :to="{ name: 'painel.dashboard'}" class="menu-nav__item">Despesas</router-link></li>
            <li><router-link :to="{ name: 'painel.empresas'}" class="menu-nav__item">Cadastros</router-link></li>
            <li><router-link :to="{ name: 'painel.dashboard'}" class="menu-nav__item">Relatórios</router-link></li>

            <!-- <li class="menu-nav__item"></li>
            <li class="menu-nav__item"></li>
            <li class="menu-nav__item"></li>
            <li class="menu-nav__item"></li> -->
        </ul>

        <div class="menu-user">

            <li class="menu-user__item">
                <svg class="feather menu-user__icon">
                    <use xlink:href="svg/feather-sprite.svg#bell"/>
                </svg>
                <span class="menu-user__notification">68</span>
            </li>

            <li class="menu-user__item">
                <span class="menu-user__name">Natanael</span>
                <img src="@/assets/images/natan.jpg" class="menu-user__photo" alt="">
                
            </li>
        </div>
    </nav>

</template>

<script>
export default {
    
}
</script>

<style lang="">
    
</style>