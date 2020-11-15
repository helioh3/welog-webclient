<template>
    <!-- component -->
	<div class="bg-white border rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
		<form action="" @submit.prevent="onSubmit">
			<div class="-mx-3 md:flex mb-6">
				<div class="md:w-1/5 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Foto/Logo
					</label>
					<input type="file"  class="py-3 pr-0 mb-3 appearance-none"  />
					<p class="text-red text-xs italic">Please fill out this field.</p>
				</div>

				<div class="md:w-2/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Nome Completo *
					</label>
					<input type="text" v-model="provider.nome" 
						class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" placeholder="Nome Completo"
						oninput="this.value = this.value.toUpperCase()"
					>
				</div>

				<div class="md:w-1/5 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						ESTADO *
					</label>
					<input v-model="provider.estado" 
						class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Codigo"
						oninput="this.value = this.value.toUpperCase()"
					>
					
				</div>

			</div>

			<div class="-mx-3 md:flex mb-10">
				
				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						CNPJ / CPF *
					</label>
					<input v-model="provider.cnpj" v-mask="['##.###.###/####-##', '###.###.###-##']" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="CNPJ">
					
				</div>
				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Insc. Estadual
					</label>
					<input v-model="provider.inscricao_estadual" v-mask="'##.###.###.###-#'" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Inscrição Estadual">
					
				</div>
				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Atuação
					</label>
					<input  v-model="provider.atuacao" 
						class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Atuação"
						oninput="this.value = this.value.toUpperCase()"
					>
					
				</div>
			</div>

			<div class="-mx-3 md:flex mb-10">
				<div class="md:w-1/5 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						CEP *
					</label>
					<input v-model="provider.cep" v-mask="'##.###.###'" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="CEP">
					
				</div>
				
				<div class="md:w-1/5 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						CIDADE *
					</label>
					<input v-model="provider.cidade" 
						class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Cidade"
						oninput="this.value = this.value.toUpperCase()"
					>
					
				</div>
				<div class="md:w-2/5 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Endereço *
					</label>
					<input v-model="provider.endereco" 
						class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Endereço"
						oninput="this.value = this.value.toUpperCase()"
					>
					
				</div>
				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						E-email
					</label>
					<input v-model="provider.email" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="E-mail">
					
				</div>
				<div class="md:w-1/4 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						TELEFONE
					</label>
					<input v-model="provider.telefone" v-mask="'(##) #####-####'" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Telefone">
					
				</div>
			</div>
			

			<div class="-mx-3 md:flex mb-6">
				<div class="md:w-full px-3">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Observação
					</label>
					<textarea v-model="provider.observacao" 
						class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="Anotar uma observação"
						oninput="this.value = this.value.toUpperCase()"
					></textarea>
				</div> 
			</div>
			
		
		<div class="mt-4">
			<button class="mr-4 px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Salvar</button>
			<button class=" border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
				<router-link class="inline-block  px-5 py-2" :to="{name: 'painel.fornecedores'}">Cancelar</router-link>
			</button>
		</div>

		</form>
	</div>
</template>
<script>
    export default {
        name: 'FormProvider',

        props: {
            value: {
                require: false,
                type: Object,
                default: () => {
                    return {
                        id: '',
                        nome: '',
						rg: '',
						estado: '',
						cnpj: '',
						inscricao_estadual: '',
						atuacao: '',
						cep: '',
						endereco: '',
						email: '',
						telefone: '',
						observacao: ''
                    }
                }
            },

            update: {
                require: false,
                type: Boolean,
                default:false
            }

        },

        data(){
            return {
                provider: {},
                errors: {}
            }
        },

        methods: {
            onSubmit () { 
                let action = this.update ? 'updateProvider' : 'storeProviders'
                
                this.$store.dispatch(action, this.provider)
                    .then( () => {
                        this.$snotify.success('Operaçao realizada com sucesso');
                        this.$router.push({name: 'painel.fornecedores'})
                    })
                    .catch( () => {
						
						this.$snotify.error('Não foi possivel salvar', 'Erro')
						
                    })
            },
        },

        watch: {
            value: {
                imediate: true,
                handler(value){
                    this.provider = {...value}
                }
            }
        }
        
    }
</script>
