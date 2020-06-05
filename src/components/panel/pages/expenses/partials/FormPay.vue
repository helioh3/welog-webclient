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
                                <input type="text" name="name" class="field__input" v-model="item.data_vencimento" disabled>
                            </div>
                        </td>
                        
                        <td>
                            <div class="field">
                                <input type="text" name="name" class="field__input" v-model="item.valor" disabled>
                            </div>
                        </td>

                        <td>
                            <div class="field">
                                <input type="file" name="comprovate" class="field__input">
                            </div>
                        </td>

                        <td>
                            but de pagto
                        </td>
                    
                    </tr>

                </tbody>

            </table>
      
        </div>

    </div>
</template>
<script>
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