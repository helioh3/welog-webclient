<template>

    <div class="wrapper">
        <h2 class="wrapper__title" style="text-align: center">Despesa #0001</h2>
        <form @submit.prevent="onSubmit">
            <div class="box-form-left">
                <div class="field-file">
                    <!-- preview image -->
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
                     <!-- <div v-if="errors.numero">{{errors.numero[0]}}</div> -->
                </div>

                <div class="field">
                    <label class="field__label">Fornecedor</label>
                    <div class="field__select">
                        <select>
                            <option value=""></option>
                            <option value="">Selecione</option>
                            <option value="">Selecione</option>
                        </select>
                    </div>
                </div>

                <div class="field">
                    <label class="field__label">Categoria</label>
                    <div :class="['field__select', {'has-error': errors.category_id}]">
                        <select v-model="expense.category_id"  >
                            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.nome }}</option>
                        </select>
                    </div>
                </div>

                <div class="field" style="none;">
                    <label class="field__label">Empresa de Origem</label>
                    <div class="field__select">
                        <select>
                            <option value=""></option>
                            <option value="">testestestestestestestestest</option>
                            <option value="">Selecione</option>
                        </select>
                    </div>
                </div>
               
                <div class="field">
                    <label class="field__label">Data de cadastro</label>
                    <input  type="text" v-mask="'##/##/####'" class="field__input">
                </div>

                <div class="field">
                    <label class="field__label">Conta Bancária</label>
                    <div class="field__select">
                        <select>
                            <option value=""></option>
                            <option value="">Banco do Brasil</option>
                            <option value="">Sicredi</option>
                        </select>
                    </div>
                </div>

                <div class="box-table">
                    <table class="field-table">
                        <thead>
                            <tr>
                                <!-- <th>&nbsp;</th> -->
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
                                    <!-- <button type="button" class="but" @click="removeItem(index)">- </button> -->
                                    <svg class="feather" @click="removeItem(index)" >
                                        <use xlink:href="@/assets/svg/feather-sprite.svg#trash"></use>
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
               uploadExpense: null,
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
