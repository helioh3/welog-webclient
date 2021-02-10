<template>

  <div class="md:w-full px-3">


    <table class="md:w-full">
      <thead>
        <tr>
          <th class="px-3 py-3 border-b border-gray-400 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
            No.
          </th>
          <th class="px-3 py-3 border-b border-gray-400 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
            Valor
          </th>
          <!-- <th class="px-3 py-3 border-b border-gray-400 text-center text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
            Venc.
          </th> -->
          <th class="px-3 py-3 border-b border-gray-400 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
            Banco
          </th>
          <th class="px-3 py-3 border-b border-gray-400 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
            Conta
          </th>
          <th class="px-3 py-3 border-b border-gray-400 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
            Comprovante
          </th>
          <th class="px-3 py-3 border-b border-gray-400 text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
            Data (PGTO)
          </th>
          <th class="px-3 py-3 border-b border-gray-400 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider"></th>

        </tr>
      </thead>
      <tbody class="bg-white">
        <tr
          v-for="(item, index) in expense.installments"
          :key="index"
        >
          <td class="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 text-gray-900">
              <div class="text-sm leading-5 text-gray-800">
                {{ index + 1 }}/{{ expense.installments.length }}
              </div>
            </div>
          </td>

          <td class="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 text-gray-900">
              <AppMoney
                :value="item.valor"
                class-names="w-20"
                readonly
              />
            </div>
          </td>

          <!-- <td class="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 text-gray-900">
              <AppDate
                :value="item.data_vencimento"
                readonly
              />
            </div>
          </td> -->

          <td class="w-2/6 px-2 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-xs leading-5 text-gray-900">
              <div class=" text-xs leading-5 text-gray-900">
                <v-select
                  ref="banco"
                  class="style-chooser"
                  label="Name"
                  :options="banks"
                  v-model="item.banco"
                  :reduce="bank => String(bank.id)"
                />
              </div>
            </div>
          </td>
          <td class="w-1/5 px-2 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-xs leading-5 text-gray-900">
              <div class="relative">
                <v-select
                  ref="conta"
                  class="style-chooser"
                  :options="getBankAccountOptions(item)"
                  label="conta"
                  v-model="item.bankaccount_id"
                  :reduce="bankaccount => bankaccount.id"
                />
              </div>
            </div>
          </td>

          <td class="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 text-gray-900">
              <input
                type="file"
                name="comprovate"
                class="w-3/4  field__input text-center appearance-none focus:outline-none"
                @change="onFileInstallment($event, item)"
	
              >
            </div>
          </td>
          <td class="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class=" text-sm text-center leading-5 text-gray-900">
              <AppDate v-model="item.data_pagamento" />
            </div>
          </td>

          <td class="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 text-gray-900">
              <button
                @click.prevent="pagar(item)"
                class="mr-1 px-2 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
              >
                <svg class="feather">
                  <use xlink:href="@/assets/svg/feather-sprite.svg#check-square"></use>
                </svg>
              </button>
            </div>
          </td>


        </tr>


      </tbody>
    </table>

  </div>

</template>

<script>

import { objectToFormData } from '../../../../../helpers/will'
import AppMoney from '@/components/share/Form/AppMoney'

export default {
  components: { AppMoney },
  props: {
    value: {
      require: false,
      type: Object,
      default: () => {
        return {

          installments: [
            {
              bankaccount_id: '',
              contabancaria: '',
              data_vencimento: '',
              data_pagamento: new Date(),
              valor: 0,
              banco: ''

            }
          ]
        }
      }
    }
  },

  created () {
    this.$store.dispatch('loadBankaccounts')
    this.$store.dispatch('loadBanks')
  },

  data () {
    return {
      errors: {},
      expense: {}
    }
  },

  computed: {
    bankaccounts () {
      return this.$store.state.bankaccounts.items.data
    },
    banks () {
      return this.$store.state.banks.items
    }
  },

  methods: {
    pagar (installment) {

      // upload de arquivos
      const formData = objectToFormData({ ...installment, status: 'pago' })

      this.$store.dispatch('updateInstallment', formData)
        .then(() => {
          this.$snotify.success('Pagamento efetuado com sucesso')
          this.$router.push({ name: 'painel.despesas' })
        })
        .catch(error => {
          this.$snotify.error('Não foi possivel efetuar pagamento', 'Erro')
          // console.log(error.response.data.errors)
          this.errors = error.response.data.errors
        })
    },

    onFileInstallment (e, item) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length)
        return

      item.comprovante = files[0]

    },

    /**
     * @param {Record<string,unknown>} item
     */
    getBankAccountOptions (item) {
      // quando o item não possui um banco selecionado...
      if (!item.banco) {
        // ... retornar um array vazio
        return []
      }
      // quando a lista de contas não é um array válido...
      if (!Array.isArray(this.bankaccounts)) {
        // ... retornar um array vazio
        return []
      }
      // ... retornar uma lista de contas filtradas pelo banco selecionado
      return this.bankaccounts.filter((bankAccount) => Number(bankAccount.banco) === Number(item.banco))
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
