<template>
    <!-- <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="categories.html" >categorias</a></li>
            <li><a href="index.html" class="active">editar</a></li>

        </nav>

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">{{category.nome}}</button>
            
        </nav>

        <div class="tabs-container">

             <form-category 
                :category="category" 
                :update="true">
            </form-category>

        </div>

    </div> -->

<div>
	<div class="mx-auto px-8 py-2">
		<nav class="text-black font-bold my-1" aria-label="Breadcrumb">
			<ol class="list-none p-0 inline-flex">
				<li class="flex items-center">
					<router-link :to="{name: 'painel.dashboard'}">Home</router-link>
					<svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
						<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
					</svg>
				</li>

				<li class="flex items-center">
					<router-link :to="{name: 'painel.dashboard'}">Categorias</router-link>
					<svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
						<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
					</svg>
				</li>
				
				<li>
					
					<a href="#" class="text-gray-500" aria-current="page">Editar</a>
				</li>
			</ol>
		</nav>
	</div>
	
	<!-- component -->
	<div class="mx-auto px-8 py-1">
		<div class="flex justify-between">
			<div class="mt-3 flex flex-col sm:flex-row">
				<button class=" border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<router-link class="inline-block px-4 py-2" :to="{name: 'painel.categorias'}">Voltar</router-link>
				</button>
			</div>
		</div>

		<form-category 
			:value="category" 
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
