<template>
    <div class="box-form">
        <h2 class="box-form__title">Pagamento</h2>

        <div class="box-table">
            <table class="field-table">
                <thead>
                    <tr>
                        <!-- <th>&nbsp;</th> -->
                        <th>Parcela</th>
                        <th>Vencimento</th>
                        <th>Valor (R$)</th>
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
                                <!-- <money type="text" name="name" class="field__input" v-model="item.valor" disabled /> -->
                                <p class="field__text">R$ {{ item.valor }} </p>
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