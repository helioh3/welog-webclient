<template>
    <div>
        <div class="load" v-show="preloader">
            <div class="gauge-loader">Loading... </div>
        </div>
    </div>
    
</template>  
<script>

export default {
    computed: {
        preloader(){
           return this.$store.state.PreloaderPanel.loading
        }
    }
}
</script>  

<style scoped>
    .load{
        position: absolute;
        background-color: rgba(255, 255, 255, 0.3);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>