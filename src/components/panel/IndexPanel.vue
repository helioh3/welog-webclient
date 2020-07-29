<template>
    <div>
        <preloader-panel></preloader-panel>
        <div class="container">  
            <header class="admin-header">
                <navbar-dashboard></navbar-dashboard>
            </header>

            <main class="admin-main">
                <router-view></router-view>
            </main>

        <footer class="admin-footer">
            <div class="menu-footer">      
                <img src="images/logo-footer.png" class="menu-footer__logo-footer" alt="">
                <li><a href="#" class="menu-footer__item">sobre</a></li>
                <li><a href="#" class="menu-footer__item">ajuda</a></li>
            </div>
        </footer>

        </div>
    </div>

</template>

<script>
    import NavbarDashboard from '../panel/pages/dashboard/NavbarDashboard'

    export default{
       created() {
           this.$store.dispatch('getCategories')
       },

        components: {
            NavbarDashboard
        }
    }
</script>

<style lang="">
    
</style>