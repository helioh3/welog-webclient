<template>

  <!-- component -->
  <div class="bg-white border rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">

    <form @submit.prevent="onSubmit">
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Anexo
          </label>
          <input
            type="file"
            class="py-3 pr-0 mb-3 appearance-none focus:outline-none"
            @change="onFileChange"
          />
          <!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
        </div>
        <div class="md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Numero (NFe / Boleto)
          </label>
          <input
            v-model="expense.numero"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            
            type="text"
            placeholder="Codigo"
          >
          <!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
        </div>

        <div class="md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Empresa
          </label>
          <div class="relative">
            <v-select
              ref="empresa"
              class="style-chooser"
              :options="companies"
              label="empresa"
              v-model="expense.company_id"
              @input="focusTo('fornecedor', $event)"
              :reduce="company => company.id"
            />
          </div>
        </div>

      </div>

      <div class="-mx-3 md:flex mb-10">
        <div class="md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Fornecedor
          </label>
          <div class="relative">
            <v-select
              ref="fornecedor"
              class="style-chooser"
              :options="providers"
              label="nome"
              v-model="expense.provider_id"
              @input="focusTo('categoria', $event)"
              :reduce="provider => provider.id"
            />
          </div>
        </div>

        <div class="md:w-1/3 px-3">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Categoria
          </label>
          <div class="relative">
            <!-- <select v-model="expense.category_id" class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
              <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.nome }}</option>
            </select> -->

            <v-select
              ref="categoria"
              class="style-chooser"
              :options="categories"
              label="nome"
              v-model="expense.category_id"
              @input="focusTo('data', $event)"
              :reduce="category => category.id"
            />

          </div>
        </div>

        <div class="md:w-1/4 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Data / Cadastro
          </label>
          <AppDate
            ref="data"
            v-model="expense.data"
          />
        </div>
      </div>

      <div class="-mx-3 md:flex mb-12">
        <div class="md:w-full px-3">
          <table class="md:w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  Parcela
                </th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Vencimento
                </th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-right text-sm leading-4 text-blue-500 tracking-wider">
                  Valor(R$)
                </th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-right text-sm leading-4 text-blue-500 tracking-wider">
                  Ações
                </th>
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
                      <div class="text-sm leading-5 text-gray-800">
                        {{ index + 1 }} / {{ expense.installments.length }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
                  <div class="md:w-1/3">
                    <AppDate v-model="item.data_vencimento" />
                    <!--
                    <AppDate
                      v-model="item.data_vencimento"
                      @input="focusTo(`valor-${index}`, $event)"
                    />
                    -->
                  </div>

                </td>
                <td class="md:w-1/5 px-6 py-3 whitespace-no-wrap border-b text-right text-blue-900 border-gray-500 text-sm leading-5">
                  <AppMoney
                    :ref="`valor-${index}`"
                    v-model="item.valor"
                  />
                </td>

                <td class="px-6 py-3 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <button
                    @click.prevent="removeItem(index)"
                    class="px-5 py-2  border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none"
                  >X
                  </button>
                </td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td class="md:w-1/5 px-6 py-3 whitespace-no-wrap border-b text-right text-blue-900 border-gray-500 text-sm leading-5">
                  <div class="text-sm font-semibold leading-5 text-blue-900">Total</div>
                </td>
                <td class="md:w-1/5 px-6 py-5 whitespace-no-wrap border-b text-right text-blue-900 border-gray-500 text-sm leading-5">
                  <div class="text-sm font-semibold leading-5 text-blue-600">
                    <AppMoney
                      v-model="total"
                      :class-names="['text-blue-600', 'font-semibold']"
                      readonly
                    />
                  </div>
                </td>
              </tr>

            </tbody>
          </table>

          <button
            @click.prevent="addItem"
            class="my-3 px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
          >+
          </button>

        </div>
      </div>

      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-full px-3">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Observação
          </label>
          <textarea
            v-model="expense.observacao"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-zip"
            type="text"
            placeholder="Anotar uma observação"
          ></textarea>
        </div>
      </div>

      <div class="mt-4">
        <button
          type="submit"
          class="mr-4 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none inline-block  px-5 py-2"
        >
          salvar
        </button>
        <button class=" border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
          <router-link
            class="inline-block  px-5 py-2"
            :to="{name: 'painel.despesas'}"
          >Cancelar
          </router-link>
        </button>
      </div>
    </form>

  </div>

</template>

<script>
import { objectToFormData } from '../../../../../helpers/will'
import MixinFocus from '@/components/share/Mixins/Focus'

export default {
  mixins: [MixinFocus],
  props: {
    value: {
      require: false,
      type: Object,
      default: () => {
        return {
          id: '',
          company_id: '',
          provider_id: '',
          category_id: '',
          numero: '',
          data: new Date(),
          observacao: '',
          installments: [
            {
              data_vencimento: new Date(),
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
  created () {
    this.$store.dispatch('loadCompanies')
    this.$store.dispatch('loadProviders')
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
    companies () {
      return this.$store.state.companies.items.data
    },
    providers () {
      return this.$store.state.providers.items.data
    },
    categories () {
      return this.$store.state.categories.items.data
    },
    total () {
      if (!Array.isArray(this.expense?.installments)) {
        return 0
      }
      return this.expense.installments.reduce((accumulator, installment) => accumulator + installment?.valor, 0)
    }
  },
  methods: {
    onSubmit () {
      let action = this.update ? 'updateExpense' : 'storeExpenses'

      //upload de arquivos
      const formData = objectToFormData(this.expense)
      formData.id = this.expense.id

      this.$store.dispatch(action, formData)
        .then(() => {
          this.$snotify.success('Salvo com sucesso')
          this.$router.push({ name: 'painel.despesas' })
        })
        .catch(error => {
          this.$snotify.error('Não foi possível salvar', 'Erro')
          this.errors = error.response.data.errors
        })
    },
    addItem () {
      let dataVencimento = new Date()

      if (this.expense.installments.length > 0) {
        const tamanho = this.expense.installments.length
        const ultimo = this.expense.installments[tamanho - 1]
        let anterior = ultimo.data_vencimento
        if (!(anterior instanceof Date)) {
          anterior = new Date(anterior)
        }
        dataVencimento.setTime(anterior.getTime())
        dataVencimento.addMonths(1, true)
      }

      this.expense.installments.push({
        data_vencimento: dataVencimento,
        valor: 0
      })
    },

    removeItem (index) {
      this.expense.installments.splice(index, 1)
    },
    onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length)
        return

      this.expense.anexo = files[0]
      this.previewImage(files[0])
    },
    previewImage (file) {
      let reader = new FileReader()
      reader.onload = (e) => {
        this.imagePreview = e.target.result
      }
      reader.readAsDataURL(file)
    },
    buttonBack () {
      this.$router.push({ name: 'painel.despesas' })
    },
  },
  watch: {
    value: {
      immediate: true,
      handler (value) {
        this.expense = { ...value }
      }
    },
    total (total) {
      this.expense.valor = total
    }
  }
}
</script>

<style scoped>
.has-error {
  border: 2px solid red;
}
</style>
