<template>
    <!-- <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="#" class="active">fornecedores</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Fornecedores</button>
            <router-link class="tabs__item tabs__item" :to="{name: 'painel.empresas'}">Empresas</router-link>
            <router-link class="tabs__item tabs__item" :to="{name: 'painel.categorias'}">Categorias</router-link>

        </nav>

        <div class="tabs-container">

            <div class="box-but">
                <div class="box-but-left">
                    <router-link class="but printer ma-r-small" :to="{name: 'painel.fornecedores.adicionar'}" >
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#plus-circle"></use>
                        </svg>
                    </router-link> 
                </div>

                <div class="box-but-right">
                    <search 
                        @search="searchForm"
                    >
                    </search>

                    <button class="but printer" disabled>
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
                        </svg>
                    </button>
                </div>

            </div>
          
            <table class="table-data">
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Cidade</th>
                        <th>Observação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="provider in providers.data" :key="provider.id" @dblclick.prevent="view(provider.id)">
                        <td>
                            <img src="" class="logo-companies" alt="">
                        </td>
                        <td>{{ provider.nome }}</td>
                        <td>{{ provider.cpf }}</td>
                        <td>Dianopolis</td>
                        <td>helioh3@gmail.com</td>
                        <td>Responsavel pela TI</td>
                    </tr>
                    
                </tbody>
            </table>

            <pagination
                :pagination="providers"
                :offset="6"
                :paginate="loadProviders"
            >
            </pagination>
            
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
				
				<li>
					<a href="#" class="text-gray-500" aria-current="page">Fornecedores</a>
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

			<li class="-mb-px mr-1">
				<router-link class="bg-white inline-block border-gray-400 border-l border-t border-r rounded-t py-4 px-6 text-blue-dark" :to="{name: 'painel.fornecedores'}">Lista de fornecedores</router-link>
			</li>

			<li class="mr-1">
				<router-link class="bg-gray-200 inline-block py-4 px-6 text-blue hover:text-blue-darker" :to="{name: 'painel.empresas'}">Lista de empresas</router-link>
			</li>

			<li class="mr-1">
				<router-link class="bg-gray-200 inline-block py-4 px-6 text-blue hover:text-blue-darker" :to="{name: 'painel.categorias'}">Categorias</router-link>
			</li>
			
		</ul>
	</div>

	<div class="mx-auto px-8 py-2">
		<div class="flex justify-between">

			<!-- pesquisa -->
			<search 
				@search="searchForm"
			>
			</search>

			<!-- botao -->
			<div class="mt-4">
				<button class=" bg-pink-600 text-pink-100 rounded transition duration-300 hover:bg-pink-500 hover:text-white focus:outline-none">
					 <router-link class="inline-block px-4 py-2" :to="{name: 'painel.fornecedores.adicionar'}">Adicionar</router-link>
				</button>			
				
			</div>
			
		</div>
			
		<div class="flex flex-col mt-3">
			<div class="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
				<div class="align-middle inline-block min-w-full overflow-hidden sm:rounded border border-gray-400">
					<table class="min-w-full">
						<thead>
							<tr>
								<th class="px-6 py-3 border-b border-gray-400 bg-gray-100"></th>
								<th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">Nome</th>
								<th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">Cpf</th>
								<th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">Rg</th>
								<th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">Cidade</th>
								<th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">Observação</th>
							</tr>
						</thead>

						<tbody class="bg-white">
							<tr class="dotted cursor-pointer hover:bg-orange-200" 
								v-for="provider in providers.data" :key="provider.id" @dblclick.prevent="view(provider.id)"
							>
								<td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
									<input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600">
								</td>
								<td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-gray-900">{{ provider.nome }}</div>
											<div class="text-sm leading-5 text-gray-500">john@example.com</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">{{ provider.cpf }}</div>
								</td>

								<td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">000-000</div>
								</td>

								<td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">Dianopolis-TO</div>
								</td>

								<td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">Texto para observação</div>
								</td>
								
							</tr>

						</tbody>
					</table>
					
				</div>
			</div>

			<div class="flex justify-center">
				<pagination
					:pagination="providers"
					:offset="5"
					@paginate="loadProviders"
				>
				</pagination>

			</div>
		</div>
	</div>
</div>

</template>
<script>
	import Middle from './../../share/Middle'
    import SearchProvider from '../providers/share/SearchProvider'
    import PaginationGeneral from '../../../share/PaginationGeneral'

    export default {

        created () {
            this.loadProviders(1)       
        },

        data() {
            return  {
                search: ''
            }
        },

        computed: {
            providers () {
                return this.$store.state.providers.items
            },

            params() {
                return {
                    page: this.providers.current_page,
                    filter: this.search
                }
            }
        },

        methods: {
            loadProviders(page){
                this.$store.dispatch('loadProviders', {...this.params, page})
            },

            view(id) {
                this.$store.dispatch('loadProvider', id)
                    .then(response => {
                        this.$router.push({name: 'painel.fornecedores.visualizar', params: {id: id}})
                    })
                    .catch()
            },

            searchForm (filter) {
                this.search = filter,
                this.loadProviders(1)
            },
            
        },
        
        components: {
            search: SearchProvider, pagination: PaginationGeneral, Middle
        }
    }
</script>
