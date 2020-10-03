<template>
    <div>
        <preloader-panel></preloader-panel>
            <navbar-dashboard></navbar-dashboard>
            
            <main class="flex-1 bg-white">
				<router-view></router-view> 
            </main>
      
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
