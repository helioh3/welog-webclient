<template>

    <!-- <div class="wrapper">
        <h2 class="wrapper__title" style="text-align: center">Despesa #</h2>
        <form @submit.prevent="onSubmit">
            <div class="box-form-left">
                <div class="field-file">
                    <div v-if="imagePreview">
                        <img :src="imagePreview" alt="" class="image-preview">
                        
                    </div>
                    <div v-else>
                        <label class="field-file__label">Anexar documentos</label>
                        <input type="file" class="field-file__input--file" @change="onFileChange" />
                    </div>
                </div>
            </div>
            
            <div class="box-form-right">
                <div class="field">
                    <label class="field__label">N. Nota Fiscal</label>
                    <input type="text" name="numero" class="field__input" v-model="expense.numero" :class="['field__input', {'has-error': errors.numero}]">
                     <div v-if="errors.numero">{{errors.numero[0]}}</div>
                </div>

                <div class="field">
                    <label class="field__label">Fornecedor</label>
                    <div class="field__select">
                        <v-select :options="fornecedores" ></v-select>

                    </div>
                </div>

                <div class="field">
                    <label class="field__label">Categoria</label>
                    <div :class="['field__select', {'has-error': errors.category_id}]">
                        <select v-model="expense.category_id"  >
                            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.nome }}</option>
                        </select>

                        <v-select :options="categories" label="nome" v-model="expense.category_id" :reduce="category => category.id"></v-select>


                    </div>
                </div>

                <div class="field" style="none;">
                    <label class="field__label">Empresa de Origem</label>
                    <div class="field__select">
                        <v-select :options="empresas" ></v-select>
                    </div>
                </div>
               
                <div class="field">
                    <label class="field__label">Data de cadastro</label>
                    <input  type="text" v-mask="'##/##/####'" class="field__input">
                </div>

                <div class="field">
                    <label class="field__label">Conta Bancária</label>
                    <div class="field__select">
                        <v-select :options="despesas" ></v-select>
                    </div>
                </div>

                <div class="box-table">
                    <table class="field-table">
                        <thead>
                            <tr>
                                
                                <th>Parcela</th>
                                <th>Vencimento</th>
                                <th>Valor (R$)</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr
                                v-for="(item, index) in expense.installments"
                                :key="index"
                            >
                                <td>{{ index + 1 }}/{{ expense.installments.length }}</td>

                                <td>
                                    <div class="field">
                                        <input type="text" v-mask="'##/##/####'" placeholder="dd/mm/ano" class="field__input" v-model="item.data_vencimento">
                                    </div>
                                </td>
                                <td>
                                    <money type="text" name="valor" class="field__input"  v-model="item.valor"/>
                                </td>

                                <td>
                                   <svg class="feather"  >
                                        <a href="#" @click.prevent="removeItem(index)">
                                            <use xlink:href="@/assets/svg/feather-sprite.svg#trash"></use>
                                        </a>
                                    </svg>
                                </td>
                            </tr>
                        
                            <tr>
                               <td>
                                   <a href="" @click.prevent="addItem">Adicionar</a>
                               </td>
                               <td></td>
                               <td>Total</td>
                               <td>R$ 0,00</td>
                            </tr>

                        </tbody>

                    </table>

                </div>
                <div class="box-field">
                    <div class="field">
                        <label>Observação</label>
                        <textarea cols="30" rows="3" placeholder="adicionar um texto"></textarea>
                    </div>
                </div>

                <div class="box-buttom">
                    <button type="submit" class="but primary">Salvar</button>
                </div>

            </div>
                 
        </form>
    </div> -->

	<!-- component -->
	<div class="bg-white border rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
		<form action="" @submit.prevent="onSubmit">

		
			<div class="-mx-3 md:flex mb-6">
				<div class="md:w-1/4 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
						Anexo
					</label>
					<input type="file" class="py-3 pr-0 mb-3 appearance-none focus:outline-none" @change="onFileChange" />
					<p class="text-red text-xs italic">Please fill out this field.</p>
				</div>
				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
						Numero
					</label>
					<input v-model="expense.numero" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Codigo">
					<p class="text-red text-xs italic">Please fill out this field.</p>
				</div>

				<div class="md:w-1/2 px-3">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
						Empresa
					</label>
					<div class="relative">
						<select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
							<option>New Mexico</option>
							<option>Missouri</option>
							<option>Texas</option>
						</select>
						<div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
							<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						</div>
					</div>
				</div>
				
				<div class="md:w-2/3 px-3">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
						Fornecedor
					</label>
					<div class="relative">
						<select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
							<option>New Mexico</option>
							<option>Missouri</option>
							<option>Texas</option>
						</select>
						<div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
							<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						</div>
					</div>
				</div>

				

			</div>

			<div class="-mx-3 md:flex mb-10">
				<div class="md:w-1/3 px-3">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
						Categoria
					</label>
					<div class="relative">
						<select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
							<option>New Mexico</option>
							<option>Missouri</option>
							<option>Texas</option>
						</select>
						<div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
							<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						</div>
					</div>
				</div>

				<div class="md:w-1/4 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
						Data
					</label>
					<input type="text" v-mask="'##/##/####'" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" placeholder="dd/mm/YYYY">
				</div>
				<div class="md:w-1/2 px-3">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
						Conta Bancaria
					</label>
				<div class="relative">
					<select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
						<option>New Mexico</option>
						<option>Missouri</option>
						<option>Texas</option>
					</select>
					<div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
						<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
					</div>
				</div>
				</div>
				
				<div class="md:w-1/2 px-3">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
						Zip
					</label>
					<input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="90210">
				</div>
			</div>

			<div class="-mx-3 md:flex mb-12">
				<div class="md:w-full px-3">
					<table class="md:w-full">
						<thead>
							<tr>
								<th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Parcela</th>
								<th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Vencimento</th>
								<th class="px-6 py-3 border-b-2 border-gray-300 text-right text-sm leading-4 text-blue-500 tracking-wider">Valor(R$)</th>

								<th class="px-6 py-3 border-b-2 border-gray-300 text-right text-sm leading-4 text-blue-500 tracking-wider">Ações</th>
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
										<div class="text-sm leading-5 text-gray-800">{{ index + 1 }} - {{ expense.installments.length }}</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
								<div class="md:w-1/2">
									<input type="text" v-model="item.data_vencimento" v-mask="'##/##/####'" class="text-left appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4" placeholder="dd-mm-YYYY">
								</div>
								
							</td>
							<td class="md:w-1/5 px-6 py-3 whitespace-no-wrap border-b text-right text-blue-900 border-gray-500 text-sm leading-5">
								<money type="text" v-model="item.valor" class="text-right appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4"  placeholder="Valor"/>
							</td>
							
							<td class="px-6 py-3 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
								<button @click.prevent="removeItem(index)" class="px-5 py-2  border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">X</button>
							</td>
						</tr>

						<tr>
							<td></td>
							<td></td>
							<td class="md:w-1/5 px-6 py-3 whitespace-no-wrap border-b text-right text-blue-900 border-gray-500 text-sm leading-5">
								<div class="text-sm font-semibold leading-5 text-blue-900">Total</div>
							</td>
							<td class="md:w-1/5 px-6 py-5 whitespace-no-wrap border-b text-right text-blue-900 border-gray-500 text-sm leading-5">
								<div class="text-sm font-semibold leading-5 text-blue-600">R$ 0,0</div>
							</td>
							
							
						</tr>
											
					</tbody>
				</table>
				
				<button @click.prevent="addItem" class="my-3 px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">+</button>
								
				</div>
			</div>

			<div class="-mx-3 md:flex mb-6">
				<div class="md:w-full px-3">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Observação
					</label>
					<textarea class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="Anotar uma observação"></textarea>
				</div> 
			</div>
			
			<div class="mt-4">
				<button type="submit" class="mr-4 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none inline-block  px-5 py-2">
					salvar
				</button>
				<button class=" border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
					<router-link class="inline-block  px-5 py-2" :to="{name: 'painel.despesas'}">Cancelar</router-link>
				</button>
			</div>
		</form>
		
	</div>

</template>

<script>
    import { objectToFormData} from '../../../../../helpers/will'
    export default {
        props: {
            value: {
                require: false,
                type: Object,
                default: () => {
                    return {
                        id: '',
                        category_id: '',
                        numero: '',                    
                        installments: [
                            {
                                data_vencimento: '',
                                valor: 0
                            }
                        ]
                    }
                }
            },
            update: {
                require: false,
                type: Boolean,
                default: false
            },
        },
        data () {
           return {
               errors: {},
               expense: {},
            //    uploadExpense: null,
               imagePreview: null
           }
        },
        computed: {
            categories() {
                return this.$store.state.categories.items.data
            }
        },
        methods: {
            onSubmit () {
                let action = this.update ? 'updateExpense' : 'storeExpenses'
                
                //upload de arquivos
                const formData = objectToFormData(this.expense)
                formData.id = this.expense.id
                
                this.$store.dispatch(action, formData)
                    .then( ()=> {
                        this.$snotify.success('Salvo com sucesso')
                        this.$router.push({name: 'painel.despesas'})
                    })
                    .catch(error => {
                        this.$snotify.error('Não foi possível salvar', 'Erro')                        
                        this.errors = error.response.data.errors
                    })
            },
            addItem () {
                this.expense.installments.push({
                    data_vencimento: '',
                    valor: 0
                })
            },
            
            removeItem (index) {
                this.expense.installments.splice(index, 1)
            },
            onFileChange (e){
                let files = e.target.files ||  e.dataTransfer.files
                if(!files.length)
                    return
                
                this.expense.anexo = files[0];
                this.previewImage(files[0]);
            },
            previewImage(file){
                let reader = new FileReader()
                reader.onload = (e) =>{
                    this.imagePreview =  e.target.result
                }
                reader.readAsDataURL(file)
            },
            buttonBack(){
                this.$router.push({name: 'painel.despesas'})
            },
        },
        watch: {
            value: {
                immediate: true,
                handler (value) {
                    this.expense = { ...value }
                }
            }
        }
    }
</script>

<style scoped>
    .has-error{
        border: 2px solid red;
    }
</style>
