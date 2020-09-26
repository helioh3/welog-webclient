<template>
    <!-- <div class="box-form">
        <h2 class="box-form__title">Pagamento</h2>

        <div class="box-table">
            <table class="field-table">
                <thead>
                    <tr>
                        
                        <th>Parcela</th>
                        <th>Vencimento</th>
                        <th>Valor (R$)</th>
                        <th>Conta Bancária</th>
                        <th>Anexar comprovante</th>
                        <th>Data de pagamento</th>
                        <th></th>
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
                                <p class="field__text">{{ item.data_vencimento }}</p>
                            </div>
                            
                        </td>
                        
                        <td>
                            <div class="field">
                                
                                <p class="field__text">R$ {{ item.valor }} </p>
                            </div>
                        </td>

                        <td>
                            <div class="field">
                               
                                <div>
                                    <select class="field__input">
                                        <option value=""></option>
                                        <option value="">Banco do Brasil</option>
                                        <option value="">Sicredi</option>
                                    </select>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div class="field">
                                <input type="file" name="comprovate" class="field__input" @change="onFileInstallment($event, item)">
                            </div>
                        </td>

                        <td>
                            <div class="field">
                                <input type="text" name="name" class="field__input" v-model="item.data_pagamento">
                            </div>
                        </td>

                        <td>
                            <button @click.prevent="save(item)">pagar</button>
                        </td>
                    
                    </tr>

                </tbody>

            </table>
      
        </div>

    </div> -->
	<div class="md:w-full px-3">
		<table class="md:w-full">
			<thead>
				<tr>
					<th class="uppercase px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Parcela</th>
					<th class="uppercase px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Vencimento</th>
					<th class="uppercase px-6 py-3 border-b-2 border-gray-300 text-right text-sm leading-4 text-blue-500 tracking-wider">Valor (R$)</th>
					<th class="uppercase px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">Anexar Comprovante</th>
					<th class="uppercase px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Data / Pagamento</th>
					<th class="uppercase px-6 py-3 border-b-2 border-gray-300"></th>
					
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
								<div class="text-sm leading-5 text-gray-800">{{ index + 1 }}/{{ expense.installments.length }}</div>
							</div>
						</div>
					</td>
					<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
						<div class="text-sm leading-5 text-blue-900">{{ item.data_vencimento }}</div>
					</td>
					<td class="px-6 py-3 whitespace-no-wrap border-b text-right text-blue-900 border-gray-500 text-sm leading-5">R$ {{ item.valor }}</td>

					<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
						<div class="text-sm text-center leading-5 text-blue-900 w-12">
							<input type="file" name="comprovate" class="field__input text-center" @change="onFileInstallment($event, item)">
						</div>
					</td>

					<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
						<!-- <input class="appearance-none block w-2/3 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4" id="grid-city" type="text" placeholder="data"> -->
						<v-date-picker v-model="data_cadastro" locale="pt-PT" :input-props='{ placeholder: "dd/mm/AAAA", class: "appearance-none block w-2/3 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4"}'/>
					</td>
				
					<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
						<button class="mr-1 px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
							<svg class="feather">
								<use xlink:href="@/assets/svg/feather-sprite.svg#check-square"></use>
							</svg>
						</button>
					</td>
					
				</tr>
			</tbody>
		</table>

	</div>

</template>

<script>

import { objectToFormData} from '../../../../../helpers/will'

export default {
    props: {
        value: {
            require: false,
            type: Object,
            default: () =>{
                return{
                    installments: [
                        {
                            data_vencimento: '',
                            data_pagamento: '',
                            valor: 0
                        }
                    ]
                }
            }
        }
    },

    data() {
        return {
            errors: {},
            expense: {}
        }
    },
    methods: {
        save (installment) {
            
            //upload de arquivos
            const formData = objectToFormData(installment)

            this.$store.dispatch('updateInstallment', formData)
                .then( ()=> {
                    this.$snotify.success('Pagamento efetuado com sucesso')
                    this.$router.push({name: 'painel.despesas'})
                })
                .catch(error => {
                    this.$snotify.error('Não foi possivel efetuar pagamento', 'Erro')
                    // console.log(error.response.data.errors)
                    this.errors = error.response.data.errors
                })
        },

        onFileInstallment (e, item){
            let files = e.target.files ||  e.dataTransfer.files
            if(!files.length)
                return
            
            item.comprovante = files[0];
                
        }
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
<style lang="">
    
</style>
