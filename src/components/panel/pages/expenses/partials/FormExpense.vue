<template>
    <form @submit.prevent="onSubmit">
        <pre id="pre"></pre>

        <div class="box-form">
            <h2 class="box-form__title">Dados da despesa</h2>
            <div class="box-field">
                <div class="field">
                    <label class="field__label">Anexo</label>
                    <input type="file" class="field__input--file" @change="onFileChange" />
                </div>

                <div class="field">
                    <label class="field__label">N. Nota Fiscal</label>
                    <input type="text" name="numero" class="field__input" v-model="expense.numero" :class="['field__input', {'has-error': errors.numero}]">
                     <!-- <div v-if="errors.numero">{{errors.numero[0]}}</div> -->
                </div>

                <div class="field">
                    <label class="field__label">Fornecedor</label>
                    <div class="field__select">
                        <select>
                            <option value="">Selecione</option>
                            <option value="">Selecione</option>
                            <option value="">Selecione</option>
                        </select>
                    </div>
                </div>

                <div class="field">
                    <label class="field__label">Categoria</label>
                    <div :class="['field__select', {'has-error': errors.category_id}]">
                        <select v-model="expense.category_id"  >
                            <!-- <option value=""></option> -->
                            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.nome }}</option>

                        </select>
                    </div>
                </div>
                
            </div>

            <div class="box-field">
                <div class="field">
                    <label class="field__label">Empresa de Origem</label>
                    <div class="field__select">
                        <select>
                            <option value="">Selecione</option>
                            <option value="">testestestestestestestestest</option>
                            <option value="">Selecione</option>
                        </select>
                    </div>
                </div>
               
                <div class="field">
                    <label class="field__label">Data de cadastro</label>
                    <input  type="text" v-mask="'##/##/####'" class="field__input w-mini-small">
                </div>

                <div class="field">
                    <label class="field__label">Conta Bancária</label>
                    <div class="field__select">
                        <select>
                            <option value="">Selecione</option>
                            <option value="">Banco do Brasil</option>
                            <option value="">Sicredi</option>
                        </select>
                    </div>
                </div>
                 <div class="field">
                    <label class="field__label">Valor (R$)</label>
                    <money class="field__input w-mini-small" type="text" name="valor" v-model="expense.valor" :class="['field_input', {'has-error': errors.valor}]"/>
                </div>
            </div>
        </div>

        <div class="box-form">
            <h2 class="box-form__title">Parcelamento</h2>
            <div class="box-table">
                <table class="field-table">
                    <thead>
                        <tr>
                            <!-- <th>&nbsp;</th> -->
                            <th>Parcela</th>
                            <th>Vencimento</th>
                            <th>Valor (R$)</th>
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
                                    <input type="text" v-mask="'##/##/####'" class="field__input" v-model="item.data_vencimento">
                                </div>
                            </td>
                            <td>
                                <money type="text" name="valor" class="field__input"  v-model="item.valor"/>
                            </td>

                             <td>
                                <!-- <button type="button" class="but" @click="removeItem(index)">- </button> -->
                                 <svg class="feather" @click="removeItem(index)" >
                                    <use xlink:href="@/assets/svg/feather-sprite.svg#minus-circle"></use>
                                </svg>
                            </td>
                        </tr>

                    </tbody>

                </table>

                <button class="but printer"  @click.prevent="addItem">
                    <svg class="feather">
                        <use xlink:href="@/assets/svg/feather-sprite.svg#plus-circle"></use>
                    </svg>
                </button>
                
            </div>

        </div>

        <div class="box-form">
            <h2 class="box-form__title">Informações extra</h2>
            <div class="box-field">
                <div class="field">
                    <label>Observação</label>
                        <textarea cols="30" rows="3"></textarea>
                </div>

            </div>
        </div>

        <div class="box-button">
            <button class="but secundary">Cancelar</button>
            <button type="submit" class="but primary">Salvar</button>
        </div>
    </form>
</template>
<script>

    export default {

        props: {
            value: {
                require: false,
                type: Object,
                default: () => {
                    return {
                        id: '',
                        category_id: '',
                        // anexo: '',
                        numero: '',
                        valor: '',
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
               uploadExpense: null
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
                const formData = new FormData()
                if(this.uploadExpense != null)
                    formData.append('anexo', this.uploadExpense)

                formData.append('id', this.expense.id)
                formData.append('category_id', this.expense.category_id)
                formData.append('numero', this.expense.numero)
                formData.append('valor', this.expense.valor)
                formData.append({data_vencimento: '', valor: 0}, this.expense.installments)
                
          
                this.$store.dispatch(action, formData)
                    .then( ()=> {
                        this.$snotify.success('Salvo com sucesso')
                        this.$router.push({name: 'painel.despesas'})
                    })
                    .catch(error => {
                        this.$snotify.error('Não foi possível salvar', 'Erro')

                        console.log(error.response.data.errors)
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
                
                this.uploadExpense = files[0];
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

<style scoped>
    .has-error{

        border: 2px solid red;

    }
</style>
