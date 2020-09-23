<template>
    <!-- <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="providers.html">fornecedores</a></li>
            <li><a href="#" class="active">editar</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Fornecedor</button>
          
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

    </div> -->
<div>
	<!-- BRANDCRUBS -->
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
					<!-- <a href="#">Fornecedores</a> -->
					<router-link :to="{name: 'painel.despesas'}">Fornecedores</router-link>
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
				 <button-back></button-back>
	
			</div>
			
			<div class="mt-3">
				<button class="mr-1 px-4 py-2 bg-white border-gray-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<svg class="feather">
						<use xlink:href="@/assets/svg/feather-sprite.svg#eye"></use>
					</svg>
				</button>
				<button class="mr-1 px-4 py-2 bg-white border-gray-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
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
