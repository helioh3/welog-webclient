<template>
<!-- <div class="box">
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
				
				<li>
					
					<a href="#" class="text-gray-500" aria-current="page">Categorias</a>
				</li>
			</ol>
		</nav>
	</div>
	
	<!-- TABS -->
	<div class="py-1">
		<ul class="list-reset flex border-b border-gray-400">
			<li class="mr-1">
				<a class="inline-block px-3" href="#"></a>
			</li>
			<li class="mr-1">
				<router-link class="bg-gray-200 inline-block py-4 px-6 text-blue hover:text-blue-darker" :to="{name: 'painel.fornecedores'}">Lista de fornecedores</router-link>
			</li>

			<li class="mr-1">
				<router-link class="bg-gray-200 inline-block py-4 px-6 text-blue hover:text-blue-darker" :to="{name: 'painel.empresas'}">Lista de empresas</router-link>
			</li>

			<li class="-mb-px mr-1">
				<router-link class="bg-white inline-block border-gray-400 border-l border-t border-r rounded-t py-4 px-6 text-blue-dark" :to="{name: 'painel.fornecedores'}">Categorias</router-link>
			</li>
			
		</ul>
	</div>

	<div class="mx-auto px-8 py-2">
		<div class="flex justify-between">
			<div class="mt-3 flex flex-col sm:flex-row">
				<div class="flex">
					<div class="relative">
						<select class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
							<option>5</option>
							<option>10</option>
							<option>20</option>
						</select>

						<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</div>

				<div class="block relative mt-3 sm:mt-0">
					<span class="absolute inset-y-0 left-0 flex items-center pl-2">
						<svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
							<path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
						</svg>
					</span>

					<input placeholder="Pesquisar" class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-3 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
				</div>
			</div>
			<!-- botao -->
			<div class="mt-4">
				<button class=" bg-pink-600 text-pink-100 rounded transition duration-300 hover:bg-pink-500 hover:text-white focus:outline-none">
					 <router-link class="inline-block px-4 py-2" :to="{name: 'painel.categorias.adicionar'}">Adicionar</router-link>
				</button>

			</div>
			
		</div>
			
		<div class="flex flex-col mt-3 ">
			<div class="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
				<div class=" list-none w-auto flex-row ">
					<div  class="flex flex-row flex-wrap">
						<li v-for="(category, index) in categories.data" :key="index" class="mr-4 mb-6 flex items-center bg-indigo-500 rounded-md p-3 text-white cursor-pointer transition duration-500 ease-in-out hover:shadow hover:bg-indigo-600">
							<div>
								<svg fill="currentColor" class="w-10 h-10" style="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"></path>
								</svg>
							</div>
							<div class="px-3 mr-auto">
								<h4 class="font-bold ">{{ category.nome }}</h4>
							</div>
							<div class="relative">
								<a href="#" @click.prevent="isOpen = !isOpen">
									<svg fill="currentColor" class="w-5 h-5" style="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
										<path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
									</svg>
								</a>

								<div v-if="isOpen" class="options absolute bg-white text-gray-600 origin-top-right right-0 mt-2 w-40 rounded-md shadow-lg ">
									<a href="#" @click.prevent="edit(category.id)" class="flex py-3 px-2 text-sm font-bold hover:bg-gray-200 ">
										<span class="mr-auto">Editar</span>
										<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" style="">
											<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
										</svg>
									</a>
									
									<a href="#" @click.prevent="ConfirmDelCategory(category)" class="flex py-3 px-2 text-sm font-bold  hover:bg-gray-200 ">
										<span class="mr-auto">Deletar</span>
										<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" style="">
											<path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
										</svg>
									</a>
								</div>

							</div>
							
						</li>
											

					</div>

					
				</div>
				
				
			</div>
		</div>
	</div>
</div>

</template>

<script>

    export default {
        created (){
            this.loadCategories()
		},

		data() {
			return {
				isOpen: false,
			};
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
			
			edit(id) {
                this.$store.dispatch('getCategory', id)
                    .then(response => {
                        this.$router.push({name: 'painel.categorias.editar', params: {id: id}})
                    })
                    .catch()
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
