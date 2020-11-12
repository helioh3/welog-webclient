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

					<li class="flex items-center">
					<!-- <a href="#">Fornecedores</a> -->
					<router-link :to="{name: 'painel.despesas'}">Despesas</router-link>
					<svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
						<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
					</svg>
				</li>

					<li>
						<a href="#" class="text-gray-500" aria-current="page">Visualizar</a>
					</li>
				</ol>
			</nav>
		</div>

		<!-- component -->
		<div class="mx-auto px-8 py-1">
		<div class="flex justify-between">
			<div class="mt-3 flex flex-col sm:flex-row">
				<button class=" border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<router-link class="inline-block px-4 py-2" :to="{name: 'painel.despesas'}">Voltar</router-link>
				</button>

			</div>
			<!-- botao -->
			<div class="mt-3">
				<button @click.prevent="pay(expense.id)" class="mr-1 px-4 py-2 bg-white border-gray-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<svg class="feather">
						<use xlink:href="@/assets/svg/feather-sprite.svg#dollar-sign"></use>
					</svg>
				</button>
				<button class="mr-1 px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<svg class="feather">
						<use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
					</svg>
				</button>
				<button @click.prevent="edit(expense.id)" class="mr-1 px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
                        </svg>
				</button>
				<button @click.prevent="confirmDelete(expense)" class="mr-1 px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
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
								<div class="text-sm lea	ding-5 text-gray-900">NFe/Boleto</div>
								<div class="text-sm leading-5 text-gray-500">
									<svg class="feather cursor-pointer" @click.prevent="download(expense.anexo)">
										<use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
									</svg>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Codigo</div>
								<div class="text-lg leading-5 text-gray-600">{{ expense.id }}</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Numero NFe</div>
								<div class="text-lg leading-5 text-gray-600">{{ expense.numero }}</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Empresa</div>
								<div class="text-lg leading-5 text-gray-600" >
									<select class="block appearance-none w-full bg-grey-lighter text-lg leading-5 text-gray-600" disabled>
										<option v-for="company in companies" :key="company.id" :value="company.id">{{ company.empresa }}</option>
									</select>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Fornecedor</div>
								<div class="text-lg leading-5 text-gray-600" >
									<select class=" appearance-none w-full bg-grey-lighter text-lg leading-5 text-gray-600" disabled>
										<option v-for="provider in providers" :key="provider.id" :value="provider.id">{{ provider.nome }}</option>
									</select>
								</div>
							</td>
						</tr>

						<tr>
							<td class="px-6 py-4 whitespace-no-wrap">
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
										:value="expense.data"
										class-names="text-lg leading-5 text-gray-600"
										readonly
									/>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Conta Bancária</div>
								<div class="text-lg leading-5 text-gray-600">Caixa Economica Federal</div>
							</td>
						</tr>

					</tbody>
				</table>

			</div>

			<div class="-mx-3 md:flex mb-12">
				<div class="md:w-full px-3">
					<table class="md:w-full">
						<thead>
							<tr>
								<th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-700 tracking-wider">Parcela</th>
								<th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider">Vencimento</th>
								<th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider">Pagamento</th>
								<th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider">Banco</th>
								<th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider">Conta</th>
								<th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider">Comprovante</th>
								<th class="px-6 py-3 border-b-2 border-gray-300 text-right text-sm leading-4 text-gray-700 tracking-wider">Valor (R$)</th>
								<th class="px-6 py-3 border-b-2 border-gray-300 text-right text-sm leading-4 text-gray-700 tracking-wider">Status</th>
							</tr>
						</thead>
						<tbody class="bg-white">
							<tr
								v-for="(item, index) in expense.installments"
								:key="index"
							>
								<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
									<div class="flex items-center">
										<div>
											<div class="text-sm leading-5 text-gray-800">
												{{ index + 1 }} / {{ expense.installments.length }}
											</div>
										</div>
									</div>
								</td>
								<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
									<AppDate
										:value="item.data_vencimento"
										readonly
									/>
								</td>
								<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
									<AppDate
										:value="item.data_pagamento"
										readonly
									/>
								</td>
								
								
								<td class="px-6 py-2 whitespace-no-wrap border-b text-left text-blue-900 border-gray-500 text-sm leading-5">
									
									<div class="text-sm leading-5 text-gray-500">
										{{installments.banco}}
									</div>
								</td>

								<td class="px-6 py-3 whitespace-no-wrap border-b text-left text-blue-900 border-gray-500 text-sm leading-5">
									<div class="text-sm leading-5 text-gray-500">
										CONTA
									</div>
								</td>

								<td class="text-center px-6 py-3 whitespace-no-wrap border-b border-gray-500">
									<svg class="feather cursor-pointer w-8" @click.prevent="previewPrint(item.comprovante)">
										<use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
									</svg>
								</td>
								
								<td class="px-6 py-3 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
									
									<div class="text-sm leading-5 text-gray-800">
										<AppMoney
											:value="item.valor"
											readonly
										/>
									</div>
									
								</td>
								<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500 text-right">
									<AppStatus :status="item.status" />
								</td>

							</tr>

						</tbody>
					</table>

				</div>
			</div>

				<div class="-mx-3 md:flex mb-6">
					<table>
						<tbody>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap">
									<div class="text-sm leading-5 text-gray-900">Observação</div>
									<div class="text-sm leading-5 text-gray-500">{{ expense.observacao }}</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

			</div>

		</div>
	</div>

</template>
<script>

    import ButtonBack from '../../share/ButtonBack'
    import { getBaseURL } from '../../../../services/http'
    import AppStatus from '@/components/share/AppStatus'
    import AppMoney from '@/components/share/Form/AppMoney'

    export default {
        name: 'ViewExpense',

        props: {
            id: {
                require: true
            }
        },

        created(){
            this.$store.dispatch('loadExpense', this.id)
                .then(response => {
					this.expense = response
				}),
				this.$store.dispatch('loadProviders')
        },

        data(){
            return {
                expense: {
                    id: '',
                    numero: ''

                },
				
                installments: [
                    {
						
                        data_vencimento: '',
                        data_pagamento: '',
                        valor: ''

                    }
                ]

            }
        },

        computed: {
            companies() {
				return this.$store.state.companies.items.data
			},

			providers() {
				return this.$store.state.providers.items.data
			},

            categories() {
                return this.$store.state.categories.items.data
			},
        },

        methods: {
			
            edit(id){
                this.$store.dispatch('loadExpense', id)
                    .then(response => {
                        console.log(response)
                        this.$router.push({name: 'painel.despesas.editar', params:{id: id}})
                    })
                    .catch(error => {
						
                        this.$snotify.error('Houve um erro ao editar', 'Erro')
                    })
            },

            pay(id){
                this.$store.dispatch('loadExpense', id)
                    .then(response => {
                        this.$router.push({name: 'painel.despesas.pagar', params:{id: id}})
                    })
                    .catch(error => {

                        this.$snotify.error('Houve um erro ao pagar', 'Erro')
                    })
            },

            confirmDelete(expense){
                this.$snotify.error(`Deseja deletar a despesa de codigo: ${expense.id}`, 'Confirme', {
                    position: "centerCenter",
                    timeout: 10000,
                    showProgressBar: true,
                    closeOnClick: true,
                    buttons:[
                        {text: 'Não', action: null },
                        {text: 'Sim', action: (value)=>  {this.delExpense(expense.id), this.$snotify.remove(value.id)} }
                    ]
                })
            },


            delExpense (id){
                this.$store.dispatch('delExpense', id)
                    .then(() => {
                        this.$snotify.success(`Deletado com sucesso`)
                        this.$router.push({name: 'painel.despesas'})
                    })
                    .catch(error => {
                        console.log(error)

                        this.$snotify.error('Erro ao deletar categoria', 'Erro')
                    })
            },

            download(anexo) {
                window.open(`${getBaseURL()}/download${anexo}`)
                // window.open("http://cvv.test/download" + anexo)
                // console.log(window.location.origin + "/download/" + anexo)
			},
			
			previewPrint(comprovante) {
                window.open(`${getBaseURL()}/download${comprovante}`)
                // window.open("http://cvv.test/download" + anexo)
                // console.log(window.location.origin + "/download/" + anexo)
            }

        },
        components: {
			AppMoney,
			AppStatus,
			ButtonBack
        }

    }
</script>
