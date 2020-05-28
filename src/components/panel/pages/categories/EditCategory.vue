<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="categories.html" >categorias</a></li>
            <li><a href="index.html" class="active">editar</a></li>

        </nav>

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">{{category.nome}}</button>

            <!-- <router-link class="tabs__item tabs__item--active" :to="{name: 'painel.categorias', params:{id: category.id}}">
                <svg class="feather">
                    <use xlink:href="svg/feather-sprite.svg#edit-2"/>
                </svg>
            </router-link> -->
            
        </nav>

        <div class="tabs-container">

             <form-category 
                :category="category" 
                :update="true">
            </form-category>

        </div>

    </div>
</template>
<script>
    import FormCategory from './partials/FormCategory'

    export default {
        props: {
            id: {
                require: true
            }
        },

        created () {
            this.$store.dispatch('getCategory', this.id)
                .then(response => 
                    this.category = response
                )
                .catch(error => {
                    console.log(error)
                })
        },

        data () {
            return {
                category: {}
            }
        },
        
        components: {
            FormCategory
        }

    }
</script>

<style lang="">
    
</style>