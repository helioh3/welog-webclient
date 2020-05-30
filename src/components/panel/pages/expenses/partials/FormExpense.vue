<template>
    <form action="" @submit.prevent="onSubmit">
        <pre id="pre"></pre>

        <div class="box-form">
            <h2 class="box-form__title">Dados da despesa</h2>
            <div class="box-field">
                <div class="field">
                    <label class="field__label">Anexar NFe</label>
                    <input class="field__input--file" type="file">
                </div>

                <div class="field">
                    <label class="field__label">N. Nota Fiscal</label>
                    <input type="text" class="field__input" v-model="expense.codigo" :class="['field__input', {'has-error': errors.codigo}]">
                     <!-- <div v-if="errors.codigo">{{errors.codigo[0]}}</div> -->
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
            </div>
        </div>

        <div class="box-form">
            <h2 class="box-form__title">Dados da despesa</h2>

            <div class="box-field">
                <div class="field">
                    <label class="field__label">Valor Total(R$)</label>
                    <input class="field__input" type="number" v-model="expense.valor" :class="['field_input', {'has-error': errors.valor}]" >
                </div>

                <div class="field">
                    <label class="field__label">Data de Competência</label>
                    <input class="field__input" type="date">
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
            </div>

            <div class="box-table">
                <table class="field-table">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Parcela</th>
                            <th>Vencimento</th>
                            <th>Valor(R$)</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                          v-for="(item, index) in expense.items"
                          :key="index"
                        >
                            <td>
                                <button type="button" class="but" @click="removeItem(index)">-</button>
                            </td>
                            <td>{{ index + 1 }}/{{ expense.items.length }}</td>
                            <td>
                                <div class="field">
                                    <input type="date" class="field__input" v-model="item.data">
                                </div>
                            </td>
                            <td>
                                <input class="field__input" type="number" v-model="item.valor"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" class="but" @click="addItem">+</button>
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
                        codigo: '',
                        category_id: '',
                        valor: '',
                        items: [
                            {
                                data: '',
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
               expense: {}
           }
        },

        computed: {
            categories() {
                return this.$store.state.categories.items.data
            }
        },

        methods: {
            onSubmit () {
                this.$store.dispatch('storeExpenses', this.expense)
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
                this.expense.items.push({
                    data: '',
                    valor: 0
                })
            },
            removeItem (index) {
                this.expense.items.splice(index, 1)
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
