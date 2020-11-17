<template>
	<!-- component -->
	<div class="bg-white border rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
		<form action="" @submit.prevent="onSubmit">
			<div class="-mx-3 md:flex mb-6">
				<div class="md:w-1/4 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
						Logo
					</label>
					<input type="file" class="py-3 pr-0 mb-3 appearance-none focus:outline-none" />
					<!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
				</div>
				<div class="md:w-2/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Nome / Empresa *
					</label>
					<input type="text" v-model="company.empresa" 
						class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" placeholder="Nome Fantasia Completo"
						oninput="this.value = this.value.toUpperCase()"	
					>
				</div>

				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
						Cidade *
					</label>
					<input v-model="company.cidade" 
						class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="Cidade"
						oninput="this.value = this.value.toUpperCase()"
					>
					<!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
				</div>
				
			</div>

			<div class="-mx-3 md:flex mb-6">
				<div class="md:w-1/5 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
						Data de Registro
					</label>
					<AppDate
						ref="data"
						v-model="company.data_registro"
					/>
					<!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
				</div>

				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
						Inscrição Estadual
					</label>
					<input v-model="company.inscricao_estadual" v-mask="'##.###.###.###-#'" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Inscrição Estadual">
					<!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
				</div>
				
				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						CNPJ / CPF *
					</label>
					<input v-model="company.cnpj" v-mask="'##.###.###/####-##'" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="CNPJ">
				</div>
				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Email
					</label>
					<input v-model="company.email" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="E-mail">
				</div>
			</div>

			<table class="md:w-full">
				<thead>
					<tr>
						<th class="px-0 py-3  border-gray-300 text-left leading-4 tracking-wider">
							Socio
						</th>
						<th class="px-6 py-3  border-gray-300 text-left text-sm leading-4 tracking-wider">
							Nome
						</th>
						<th class="px-6 py-3  border-gray-300 text-left text-sm leading-4 tracking-wider">
							Nascimento
						</th>

						<th class="px-6 py-3  border-gray-300 text-left text-sm leading-4 tracking-wider">
							CPF
						</th>
						<th class="px-6 py-3  border-gray-300 text-left text-sm leading-4 tracking-wider">
							RG
						</th>
						<th class="px-6 py-3  border-gray-300 text-center text-sm leading-4 tracking-wider">
							Participação
						</th>
					</tr>
				</thead>
				
				<tbody class="bg-white">
					<tr
						v-for="(item, index) in company.partners"
                		:key="index"
					>
						<td class="px-4 py-3 whitespace-no-wrap ">
							<div class="flex items-center">
								<div class="text-sm leading-5 text-gray-800">  
									{{ index + 1 }}
								</div>
							</div>
						</td>
						
						<td class="w-1/3 px-4 py-3 whitespace-no-wrap ">
							<input v-model="item.nome" 
								class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4" type="text" placeholder="Nome completo"
								oninput="this.value = this.value.toUpperCase()"
							>
						</td>

						<td class="w-1/5 px-4 py-3 whitespace-no-wrap ">
							<AppDate
								ref="data"
								v-model="item.data_nascimento"
							/>
						</td>

						<td class="w-1/6 px-4 py-3 whitespace-no-wrap ">
							<input v-model="item.rg" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4" type="text" placeholder="RG">
						</td>

						<td class="px-4 py-3 whitespace-no-wrap text-right  text-sm">
							<input v-model="item.participacao" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4" type="text" placeholder="Cota %">
						</td>

						<td class="px-0 py-3 whitespace-no-wrap text-right  text-sm leading-5">
							<button
								@click.prevent="removeItem(index)"
								class="px-4 py-3  border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none"
							>Remover
							</button>
						</td>
					</tr>

				</tbody>
          	</table>
			
			<button
				@click.prevent="addItem"
				class="my-3 px-5 py-3 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
			>+
			</button> 
			
			<div class="mt-4">
				<button type="submit" class="mr-4 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none inline-block  px-5 py-2">
					salvar
				</button>
				<button class=" border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
					<router-link class="inline-block  px-5 py-2" :to="{name: 'painel.empresas'}">Cancelar</router-link>
				</button>
			</div>

		</form>
	</div>

</template>
<script>

export default {
    props: {
        value:{
            require: false,
            type: Object,
            default: () => {
                return {
					id: '',
					empresa: '',
					cidade: '',
					data_registro: '',
					inscricao_estadual: '',
					cnpj: '',
					email: '',
					partners: [
						{	
							nome: '',
							data_nascimento: '',
							cpf: '',
							rg: '',
							participacao: ''
						}
					]
                }
            }
        },
        
        update: {
            require: false,
            type: Boolean,
            default: false
        }
	},
	created () {
		this.$store.dispatch('loadCompanies')
	
	},
    
    data(){
        return {
			errors: {},
            company: {}
            
        }
    },

    methods: {
        onSubmit () { 
            let action = this.update ? 'updateCompany' : 'storeCompanies'
            
            this.$store.dispatch(action, this.company)
                .then( () => {
                    this.$snotify.success('Salvo com sucesso');
                    this.$router.push({name: 'painel.empresas'})
                })
                .catch( () => {
                    this.$snotify.error('Não foi possivel salvar', 'Erro')
                })
		},
		
		addItem () {
			this.company.partners.push({
				
				socio:1 
			})
		},

		removeItem (index) {
			this.company.partners.splice(index, 1)
		},
    },

    watch: {
		value: {
		immediate: true,
		handler (value) {
			this.company = { ...value }
		}
    }
    
  }

    
}
</script>
