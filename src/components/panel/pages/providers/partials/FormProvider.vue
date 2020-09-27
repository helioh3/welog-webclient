<template>

<!-- <div>
       
        <form  @submit.prevent="onSubmit">
            <div class="box-form">
                <h2 class="box-form__title">Dados de Pessoa Fisica</h2>
                
                <div class="box-field">
                    <div class="field">
                        <label class="field__label">Logo ou Foto</label>
                        <input class="field__input" type="file"> 
                    </div>

                    <div class="field">
                        <label class="field__label">Nome</label>
                        <input class="field__input" type="text" v-model="provider.nome"> 
                    </div>
                    <div class="field">
                        <label class="field__label">CPF</label>
                        <input class="field__input" type="text" v-model="provider.cpf"> 
                    </div>
                    <div class="field">
                        <label class="field__label">RG</label>
                        <input class="field__input" type="text"> 
                    </div>
                    <div class="field">
                        <label class="field__label">Sexo</label>
                        <div class="field__select">
                            <select>
                                <option value="">Masculino</option>
                                <option value="">Feminino</option>
                            </select> 
                        </div>
                    </div>

                </div>
            </div>

            
            <div class="box-form">
                <h2 class="box-form__title">Dados Pessoa Jurídica</h2>
                <div class="box-field">
                    
                    <div class="field">
                        <label class="field__label">Fantasia</label>
                        <input class="field__input" type="text"> 
                    </div>

                    <div class="field">
                        <label class="field__label">CNPJ</label>
                        <input class="field__input" type="text"> 
                    </div>

                    <div class="field">
                        <label class="field__label">Inscrição Estadual</label>
                        <input class="field__input" type="text"> 
                    </div>

                    <div class="field">
                        <label class="field__label">Atuação</label>
                        <input class="field__input" type="text"> 
                    </div>

                </div>
            </div>

          
            <div class="box-form">
                <h2 class="box-form__title">Dados Gerais</h2>
                <div class="box-field">
                    
                    <div class="field">
                        <label class="field__label">CEP</label>
                        <input class="field__input" type="text"> 
                    </div>

                    <div class="field">
                        <label class="field__label">Estado</label>
                        <input class="field__input" type="text"> 
                    </div>

                    <div class="field">
                        <label class="field__label">Cidade</label>
                        <div class="field__select">
                            <select>
                                <option value="">Dianopolis</option>
                                <option value="">Bahia</option>
                                <option value="">Selecione</option>
                            </select> 
                        </div>
                    </div>

                    <div class="field">
                        <label class="field__label">Telefone</label>
                        <input class="field__input" type="text"> 
                    </div>

                    <div class="field">
                        <label class="field__label">Endereço</label>
                        <input class="field__input" type="text"> 
                    </div>
                    <div class="field">
                        <label class="field__label">E-mail</label>
                        <input class="field__input" type="text"> 
                    </div>

                </div>
            </div>

            <div class="box-form">
                <h2 class="box-form__title">Informções extra</h2>
                <div class="box-field">
                    <div class="field">
                        <label>Observação</label>
                            <textarea cols="30" rows="3"></textarea>
                    </div>
                    
                </div>
            </div>

            <div class="box-button">
                <button class="but secundary">Cancelar</button>
                <button class="but primary">Salvar</button>
            </div>

        </form>
        
        
    </div> -->

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
					<input type="text" v-model="provider.nome" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" placeholder="Nome Completo">
					
				</div>

				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						CPF *
					</label>
					<input v-model="provider.cpf" v-mask="'###.###.###-##'" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="CPF">
					
				</div>

				<div class="md:w-1/4 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						RG
					</label>
					<input v-model="provider.rg" v-mask="'###.###-##'" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="RG">
					
				</div>

				<div class="md:w-1/3 px-3">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						SEXO
					</label>
					<div class="relative">
						<select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
							<option>Masculino</option>
							<option>Feminino</option>
						</select>
						<div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
							<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						</div>
					</div>
				</div>
				
			</div>

			<div class="-mx-3 md:flex mb-10">
				<div class="md:w-1/6 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						ESTADO *
					</label>
					<input v-model="provider.estado" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Codigo">
					
				</div>
				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						CNPJ
					</label>
					<input v-model="provider.cnpj" v-mask="'##.###.###/####-##'" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="CNPJ">
					
				</div>
				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Insc. Estadual
					</label>
					<input v-model="provider.inscricao_estadual" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Inscrição Estadual">
					
				</div>
				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Atuação
					</label>
					<input  v-model="provider.atuacao" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Atuação">
					
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
					<input v-model="provider.cidade" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Cidade">
					
				</div>
				<div class="md:w-2/5 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Endereço *
					</label>
					<input v-model="provider.endereco" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Endereço">
					
				</div>
				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						E-email
					</label>
					<input v-model="provider.email" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="E-mail">
					
				</div>
				<div class="md:w-1/4 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						TELEFONE *
					</label>
					<input v-model="provider.telefone" v-mask="'(##) #####-####'" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Telefone">
					
				</div>
			</div>
			

			<div class="-mx-3 md:flex mb-6">
				<div class="md:w-full px-3">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Observação
					</label>
					<textarea v-model="provider.observacao" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="Anotar uma observação"></textarea>
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
                    .catch( ()=> {
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
