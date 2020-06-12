<template>
    <div>
        <form action="" @submit.prevent="search">
            <div action="" class="search ma-r-big">
                <input type="text" class="search__input" v-model="filter" placeholder="pesquisar">
                
            </div>
            
        </form>

    </div>

</template>
<script>
export default {
    data () {
        return {
            filter: ''
        }
    },

    methods: {
        search () {
            this.$emit('search', this.filter)
        }
    }
}
</script>

<style lang="">
    
</style>