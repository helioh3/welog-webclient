<template>
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
					<a href="#" class="text-gray-500" aria-current="page">Empresas</a>
				</li>

			</ol>
		</nav>
	</div>

	<!-- TABS -->
	<div class="py-1">
    <TabsCadastro/>
	</div>

	<div class="mx-auto px-8 py-2">
		<div class="flex justify-between">
			<div class="mt-3 flex flex-col sm:flex-row">

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
					 <router-link class="inline-block px-4 py-2" :to="{name: 'painel.empresas.adicionar'}">Nova Empresa</router-link>
				</button>
			</div>

		</div>

		<div class="flex flex-col mt-3">
			<div class="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
				<div class="align-middle inline-block min-w-full overflow-hidden sm:rounded border border-gray-400">
					<table class="min-w-full">
						<thead>
							<tr>
								<th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">Empresa</th>
								<th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">CNPJ</th>
								<th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">cidade</th>
								<th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">Email</th>
								<th class="px-4 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider"></th>
							</tr>
						</thead>

						<tbody class="bg-white">
							<tr class=" cursor-pointer" v-for="company in companies.data" :key="company.id" @dblclick.prevent="view(company.id)">

								<td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<!-- <div class="flex-shrink-0 h-10 w-10">
											<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
										</div> -->

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-gray-900 uppercase">{{ company.empresa }}</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">{{ company.cnpj }}</div>
								</td>

								<td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">{{ company.cidade }}</div>
								</td>

								<td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">{{ company.email }}</div>
								</td>

								<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">

									<button @click.prevent="edit(company.id)" class="mr-1 px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
										<svg class="feather">
												<use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
											</svg>
									</button>
									<button @click.prevent="confirmDelete(company)" class="px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
										<svg class="feather">
											<use xlink:href="@/assets/svg/feather-sprite.svg#trash-2"></use>
										</svg>
									</button>
								</td>

							</tr>

						</tbody>
					</table>

				</div>
			</div>
		</div>
	</div>
</div>

</template>

<script>
    import Middle from './../../share/Middle'
    import TabsCadastro from '@/components/panel/share/TabsCadastro'
    export default {

        created () {
            this.loadCompanies()
        },

        computed: {
            companies(){
                return this.$store.state.companies.items
            }
        },

        data() {
            return {
            }
        },

        methods: {
            loadCompanies() {
                this.$store.dispatch('loadCompanies')
            },

            view(id) {
                this.$store.dispatch('loadCompany', id)
                    .then(response => {
                        this.$router.push({name: 'painel.empresas.visualizar', params: {id: id}})
                    })
                    .catch()
            },

            edit(id) {
                this.$store.dispatch('loadCompany', id)
                    .then(response => {
                        this.$router.push({name: 'painel.empresas.editar', params: {id: id}})
                    })
                    .catch()
            },

            confirmDelete(company){
                this.$snotify.error(`Deseja deletar a empresa: ${company.empresa}`, 'Confirme', {
                    position: "centerCenter",
                    timeout: 10000,
                    showProgressBar: true,
                    closeOnClick: true,
                    buttons:[
                        {text: 'Não', action: null },
                        {text: 'Sim', action: (value)=>  {this.delCompany(company.id), this.$snotify.remove(value.id)} }
                    ]
                })
            },

            delCompany (id){
                this.$store.dispatch('delCompany', id)
                    .then( () => {
                        this.$snotify.success(`Empresa deletada com sucessu`)
                        this.$router.refresh({name: 'painel.empresas'})
                    })
                    .catch(error => {
                        console.log(error)

                        this.$snotify.error('Erro ao deletar empresa', 'Erro')
                    })
            },
		},
		components: { TabsCadastro, Middle }
    }
</script>
