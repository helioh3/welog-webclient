<template>
    <button class="but printer" @click.prevent="buttonBack()">
        <svg class="feather">
            <use xlink:href="@/assets/svg/feather-sprite.svg#arrow-left"></use>
        </svg>
        Voltar
    </button>
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