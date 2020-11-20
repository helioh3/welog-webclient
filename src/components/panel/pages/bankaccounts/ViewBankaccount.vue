<template>
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
					<!-- <a href="#">Fornecedores</a> -->
					<router-link :to="{name: 'painel.fornecedores'}">Fornecedores</router-link>
					<svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
						<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
					</svg>
				</li>
				
				<li>
					<a href="#" class="text-gray-500">Visualizar</a>
				</li>
			</ol>
		</nav>
	</div>
	<!-- component -->
	<div class="mx-auto px-8 py-1">
		<div class="flex justify-between">
			<div class="mt-3 flex flex-col sm:flex-row">
				<button class=" border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<router-link class="inline-block px-4 py-2" :to="{name: 'painel.contasbancarias'}">Voltar</router-link>
				</button>
			</div>
			
			<!-- botao -->
			<div class="mt-3">
				<button class="mr-1 px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<svg class="feather">
						<use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
					</svg>
				</button>
				<button @click.prevent="edit(bankaccount.id)" class="mr-1 px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
                        </svg>
				</button>
				<button @click.prevent="confirmDelete(bankaccount)" class="mr-1 px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<svg class="feather">
						<use xlink:href="@/assets/svg/feather-sprite.svg#trash-2"></use>
					</svg>
				</button>
			</div>
			
		</div>

			<div class="bg-white border rounded mt-2 px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
			<div class="-mx-3 md:flex mb-6 text-left">
				<table class="min-w-full">
					<tbody class="bg-white">
						<tr>
							
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Nome da conta</div>
								<div class="text-lg leading-5 text-gray-600">
									{{bankaccount.nome}}
								</div>
							</td>

							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Banco</div>
								<div class="text-lg leading-5 text-gray-600" >
									<!-- {{bankaccount.abank.Name}} -->
									{{ bankaccount.abank ? bankaccount.abank.Name : '' }}
								</div>
							</td>
							
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Agencia bancária</div>
								<div class="text-lg leading-5 text-gray-600">
									{{bankaccount.agencia}}
								</div>
							</td>

							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Conta bancária</div>
								<div class="text-lg leading-5 text-gray-600">
									{{bankaccount.conta}}
								</div>
							</td>
						</tr>

						<tr>
							<!-- <td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Categoria</div>
								<div class="text-lg leading-5 text-gray-600" >
									<select class="block appearance-none w-full bg-grey-lighter text-lg leading-5 text-gray-600" disabled>
										<option v-for="category in categories" :key="category.id" :value="category.id">{{ category.nome }}</option>
									</select>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Data</div>
								<div class="">
									<AppDate
										
										class-names="text-lg leading-5 text-gray-600"
										readonly
									/>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Conta Bancária</div>
								<div class="text-lg leading-5 text-gray-600">Caixa Economica Federal</div>
							</td> -->
						</tr>

					</tbody>
				</table>
			</div>
			
		</div>
			
	</div>
</div>

</template>

<script>
    import ButtonBack from './share/ButtonBack'

    export default {
		name: 'ViewBankaccount',
		
		props: {
            id: {
                require: true
            }
        },

        created(){
            this.$store.dispatch('loadBankaccount', this.id)
                .then(response => {
                    this.bankaccount = response
                })
        },

        data(){
            return {
                bankaccount: {
                    id: '',
					nome: '',
					banco: '',
					agencia: '',
					conta: ''
                   
                },
            }
        },

        methods: {
            edit(id){
                this.$store.dispatch('loadBankaccount', id)
                    .then(response => {
                        this.$router.push({name: 'painel.contasbancarias.editar', params:{id: id}})
                    })
                    .catch(error => {
                        
                        this.$snotify.error('Houve um erro ao editar', 'Erro')
                    })
            },

            confirmDelete(bankaccount){
                this.$snotify.error(`Deseja deletar a conta: ${bankaccount.nome}`, 'Confirme', {
                    position: "centerCenter",
                    timeout: 10000,
                    showProgressBar: true,
                    closeOnClick: true, 
                    buttons:[
                        {text: 'Não', action: null },
                        {text: 'Sim', action: (value)=>  {this.delBankaccount(bankaccount.id), this.$snotify.remove(value.id)} }
                    ] 
                })
            },

            delBankaccount (id){
                this.$store.dispatch('delBankaccount', id)
                    .then( () => {
                        this.$snotify.success(`Conta deletada com sucesso`)
                        this.$router.push({name: 'painel.contasbancarias'})
                    })
                    .catch(error => {
                        console.log(error)

                        this.$snotify.error('Erro ao deletar conta bancária', 'Erro')
                    })
            },

        },

        components: {
            ButtonBack
        }
        
    }
</script>
