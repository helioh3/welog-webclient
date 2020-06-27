<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="providers.html">fornecedores</a></li>
            <li><a href="#" class="active">editar</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Fornecedor</button>
            <!-- <button class="tabs__item">Produtos</button> -->
        </nav>
        <div class="tabs-container">

            <div class="box-but">

                <div class="box-but-left">
                    <button-back></button-back>
                </div>

                <div class="box-but-right">
                     <button class="but printer ma-r-small"  @click.prevent="view(provider.id)">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#eye"></use>
                        </svg>
                        
                    </button>

                    <button class="but printer ma-r-small">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
                        </svg>
                        
                    </button>

                </div>
            </div>

            

            <form-provider :value="provider"></form-provider> 
           
        </div>

    </div>
</template>
<script>
    import FormProvider from './partials/FormProvider'
    import ButtonBack from './share/ButtonBack'


    export default {
        props:{
            id: {
                require: true
            }
        },

        created() {
            this.$store.dispatch('loadProvider', this.id)
                .then(response => {
                    this.provider = response
                })
                .catch(error => {
                    console.log(error)
                })
        },

        data(){
            return {
                provider: {
                    id: '',
                    nome: '',
                    cpf: ''
                }
            }
        },

        methods: {
            view(id){
                this.$store.dispatch('loadProvider', id)
                    .then(response => {
                        console.log(response)
                        this.$router.push({name: 'painel.fornecedores.visualizar', params:{id: id}})
                    })
                    .catch(error => {
                        
                        this.$snotify.error('Houve um erro ao editar', 'Erro')
                    })
            },

        },
        components: {
            FormProvider, ButtonBack
        }
    }
</script>