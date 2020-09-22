<template>
    <!-- <button class="but printer" @click.prevent="buttonBack()">
        <svg class="feather">
            <use xlink:href="@/assets/svg/feather-sprite.svg#arrow-left"></use>
        </svg>
        Voltar
    </button> -->

	<button @click.prevent="buttonBack()" class="px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Voltar</button>
</template>
<script>

export default {
    name: 'ButtonBack',
    
    methods: {
        buttonBack(){
            this.$router.push({name: 'painel.fornecedores'})
            
        },
    }
}
</script>
