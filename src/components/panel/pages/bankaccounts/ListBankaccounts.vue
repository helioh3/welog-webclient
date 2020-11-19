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
					<a href="#" class="text-gray-500" aria-current="page">Contas bancárias</a>
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

			<!-- pesquisa -->
			<search
				@search="searchForm"
			>
			</search>

			<!-- botao -->
			<div class="mt-4">
				<button class=" bg-pink-600 text-pink-100 rounded transition duration-300 hover:bg-pink-500 hover:text-white focus:outline-none">
					 <router-link class="inline-block px-4 py-2" :to="{name: 'painel.contasbancarias.adicionar'}">Nova conta</router-link>
				</button>

			</div>

		</div>

		<div class="flex flex-col mt-3">
			<div class="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
				<div class="align-middle inline-block min-w-full overflow-hidden sm:rounded border border-gray-400">
					<table class="min-w-full">
						<thead>
							<tr>
								<th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">Nome da conta</th>
								<th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">Instituição Bancária</th>

								<th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">Conta</th>
								<th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-center text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">Situação</th>
							</tr>
						</thead>

						<tbody class="bg-white">
							<tr class="dotted cursor-pointer hover:bg-orange-200"
								v-for="bankaccount in bankaccounts.data" :key="bankaccount.id" @dblclick.prevent="view(bankaccount.id)"
							>

								<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">{{bankaccount.nome}}</div>
								</td>
								<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">
										<!-- {{ bankaccount ? bankaccount.abank.Name : '' }} -->
										{{bankaccount.abank.Name}}
									</div>
								</td>

								<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">{{bankaccount.conta}}</div>
								</td>

								<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm text-center leading-5 text-gray-900">Ativo</div>
								</td>

							</tr>

						</tbody>
					</table>

				</div>
			</div>

			<div class="flex justify-center">
				<pagination
					:pagination="bankaccounts"
					:offset="5"
					@paginate="loadBankaccounts"
				>
				</pagination>

			</div>
		</div>
	</div>
</div>

</template>
<script>
	import Middle from './../../share/Middle'
    import SearchBankaccount from '../bankaccounts/share/SearchBankaccount'
    import PaginationGeneral from '../../../share/PaginationGeneral'
  	import TabsCadastro from '@/components/panel/share/TabsCadastro'

    export default {

        created () {
			this.loadBankaccounts(1)
			
        },

        data() {
            return  {
                search: ''
            }
        },

        computed: {
            bankaccounts () {
                return this.$store.state.bankaccounts.items
			},
			
			banks () {
				return this.$store.state.banks.items
				},

            params() {
                return {
                    page: this.bankaccounts.current_page,
                    filter: this.search
                }
            }
        },

        methods: {
            loadBankaccounts(page){
                this.$store.dispatch('loadBankaccounts', {...this.params, page})
            },

            view(id) {
                this.$store.dispatch('loadBankaccount', id)
                    .then(response => {
                        this.$router.push({name: 'painel.contasbancarias.visualizar', params: {id: id}})
                    })
                    .catch()
            },

			 searchForm (filter) {
                this.search = filter,
                this.loadBankaccounts(1)
			},
			
			/**
			 * @param {Record<string,unknown>} item
			 */
			getBankAccountOptions (bankaccount) {
				// quando o item não possui um banco selecionado...
				if (!bankaccount.banco) {
					// ... retornar um array vazio
					return []
				}
				
				// quando a lista de contas não é um array válido...
				if (!Array.isArray(this.bankaccounts)) {
					// ... retornar um array vazio
					return []
				}
				// ... retornar uma lista de contas filtradas pelo banco selecionado
				return this.bankaccounts.filter((bankAccount) => Number(bankAccount.banco) === Number(item.banco))
			}




		},
	

        components: {
          TabsCadastro,
            search: SearchBankaccount, pagination: PaginationGeneral, Middle
        }
    }
</script>
