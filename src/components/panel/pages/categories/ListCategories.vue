<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="#" class="active">categorias</a></li>
        </nav>  

       <nav class="tabs">
            <router-link class="tabs__item tabs__item" :to="{name: 'painel.fornecedores'}">Fornecedores</router-link>
            <router-link class="tabs__item tabs__item" :to="{name: 'painel.empresas'}">Empresas</router-link>
            
            <router-link class="tabs__item tabs__item--active" :to="{name: 'painel.categorias'}">Categorias</router-link>

        </nav>
        <div class="tabs-container">

            <div class="box-but">
                <div class="box-but-left">
 
                    <router-link class="but printer ma-r-small" :to="{name: 'painel.categorias.adicionar'}" >
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#plus-circle"></use>
                        </svg>

                    </router-link> 

                </div>

                <div class="box-but-right"></div>
            </div>

            <div class="box-categories">  
               <ul v-for="(category, index) in categories.data" :key="index">
                    <li class="category">
                        <div class="category__title">{{ category.nome }}</div>

                        <div class="al-right">
                            <router-link class="but but-icon" :to="{name: 'painel.categorias.editar', params:{id: category.id}}">
                                <svg class="feather">
                                    <use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"/>
                                </svg>
                            </router-link>

                            <button class="but but-icon">
                                 <svg class="feather">
                                    <use xlink:href="@/assets/svg/feather-sprite.svg#trash"  @click.prevent="ConfirmDelCategory(category)"/>
                                </svg>
                            </button>
           
                        </div>
                    </li>
                 </ul>
            </div>

            
        </div>

    </div>
</template>

<script>

    export default {
        created (){
            this.loadCategories()
        },

        computed: {
            categories () {
                return this.$store.state.categories.items
            }
        },

        methods: {
            loadCategories(){
                this.$store.dispatch('getCategories')
            },

            ConfirmDelCategory(category) {
                this.$snotify.error(`Deseja realmente deletar categoria: ${category.nome} ?`, 'Deletar ?', {
                    position: "centerCenter",
                    showProgressBar: true,
                    closeOnClick: true,  
                    buttons: [
                        {text: 'Não', action: null },
                        {text: 'Sim', action: (value)=>  {this.delCategory(category), this.$snotify.remove(value.id)} }
                    ]
                })
            },

            delCategory (category) {
                this.$store.dispatch('deleteCategory', category.id)
                    .then(() => {
                        this.$snotify.success(`Sucesso ao deletar: ${category.nome}`)
                        
                        this.loadCategories()
                    })
                    .catch(error => {
                        console.log(error)

                        this.$snotify.error('Erro ao deletar categoria', 'Erro')
                    })
            }
        }
        
    }
</script>

<style lang="">
    
</style>