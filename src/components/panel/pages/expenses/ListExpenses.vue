<template>

  <div class="mx-auto px-8 py-2">

    <!-- bredcrumb -->
    <nav class="text-black font-bold my-1">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center">
          <router-link :to="{name: 'painel.dashboard'}">Home</router-link>
          <svg
            class="fill-current w-3 h-3 mx-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </li>

        <li>
          <a
            href="#"
            class="text-gray-500"
            aria-current="page"
          >Despesas
          </a>
        </li>
      </ol>
    </nav>

    <div class="">
      <div class="flex justify-between">
        <!-- pesquisa -->
        <search
          @search="searchForm"
        >
        </search>

        <!-- botao -->
        <div class="mt-3">
          <button class=" bg-pink-600 text-pink-100 rounded transition duration-300 hover:bg-pink-500 hover:text-white focus:outline-none">
            <router-link
              class="inline-block px-4 py-2"
              :to="{name: 'painel.despesas.adicionar'}"
            >Adicionar
            </router-link>
          </button>

        </div>
      </div>

      <div class="flex flex-col mt-6">
        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div class="align-middle inline-block min-w-full overflow-hidden sm:rounded border border-gray-400">

            <table class="min-w-full">
              <thead>
                <tr>
                  <th class="px-6 py-3 border-b border-gray-400 bg-gray-100"></th>
                  <th class="px-4 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
                    #Código
                  </th>
                  <th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
                    Numero
                  </th>
                  <th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
                    Fornecedor
                  </th>
                  <th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
                    Data
                  </th>
                  <th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
                    Vencimento
                  </th>
                  <th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
                    status
                  </th>
                  <th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-right text-xs leading-4 ffont-semi-bold text-gray-700 uppercase tracking-wider">
                    Valor
                  </th>
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr
                  class="dotted cursor-pointer hover:bg-orange-200"
                  :class="{focused: focused === expense.id }"
                  v-for="expense in expenses.data"
                  :key="expense.id"
                  @click.stop="focus(expense.id)"
                  @dblclick="edit(expense.id)"
                >
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <input
                      type="checkbox"
                      class="form-checkbox h-5 w-5 text-gray-600"
                      @click.stop="select(expense.id, $event.target.checked)"
                      :checked="selected.includes(expense.id)"
                    >
                  </td>
				  

                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div class="text-sm leading-5 text-gray-900">{{ expense.id }}</div>
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div class="text-sm leading-5 text-gray-900">{{ expense.numero }}</div>
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>

                      <div class="ml-4">
                        <div class="text-sm leading-5 font-medium text-gray-900">{{ expense.provider.nome }}</div>
                        <!-- <div class="text-sm leading-5 text-gray-500">(63) 992099291</div> -->
                      </div>
                    </div>
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    19/03/2020
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    19/03/2020
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    <AppStatus :status="expense.status" />
                  </td>

                  <td class="px-6 py-4 text-right whitespace-no-wrap border-b border-gray-200">
                    <div class="text-sm leading-5 text-gray-900">
                      <AppMoney
                        :value="expense.valor"
                        readonly
                      />
                    </div>

                  </td>
                </tr>

              </tbody>
            </table>

          </div>


        </div>

        <div class="flex justify-center">
          <paginate
            :pagination="expenses"
            :offset="5"
            @paginate="loadExpenses"
          >
          </paginate>
        </div>

      </div>

      <img
        src=""
        alt=""
      >

    </div>

  </div>

</template>

<script>
import PaginationGeneral from '../../../share/PaginationGeneral'
import SearchPanel from '../../share/SearchPanel'
import AppStatus from '@/components/share/AppStatus'
import AppMoney from '@/components/share/Form/AppMoney'

export default {
  created () {
    this.loadExpenses(1)
    this.$store.dispatch('loadCompanies')
  },

  data () {
    return {
      search: '',
      selected: [],
      focused: '',
      year: 2020,
      month: 8,
    }
  },

  filters: {
    monthString (value) {
      const months = {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
        8: 'Agosto',
        9: 'Setembro',
        10: 'Outubro',
        11: 'Novembro',
        12: 'Dezembro'
      }
      return months[value]
    }
  },

  computed: {
    expenses () {
      return this.$store.state.expenses.items
    },

    params () {
      return {
        page: this.expenses.current_page,
        filter: this.search
      }
    },
  },

  methods: {
    loadExpenses (page) {
      const ano = this.year
      const mes = this.month

      this.$store.dispatch('loadExpenses', { ...this.params, page })
    },

    searchForm (filter) {
      this.search = filter,
        this.loadExpenses(1)
    },

    edit (id) {
      this.$store.dispatch('loadExpense', id)
        .then(reponse => {
          this.$router.push({ name: 'painel.despesas.visualizar', params: { id: id } })
        })
        .catch(error => {
          this.$snotify.error('Algo errado ao visualizar', 'Erro')
        })
    },

    select (id, checked) {
      if (checked) {
        this.selected.push(id)
        return
      }
      const index = this.selected.findIndex((element) => id === element)
      //Early return tecnica
      if (index < 0) {
        return
      }
      this.selected.splice(index, 1)
    },

    selectAll ($event) {
      if ($event.target.checked) {
        this.selected = this.expenses.data.map((expense) => expense.id)

        return
      }
      this.selected = []
    },

    focus (id) {
      this.focused = id
    },

    onPress ($event) {
      // console.log($event.keyCode)
      if (!this.focused) {

        return
      }

      if ($event.keyCode === 32) {
        this.select(this.focused, !this.selected.includes(this.focused))

        return
      }

      let index = this.expenses.data.findIndex((element) => this.focused === element.id)

      if ($event.keyCode === 38) {
        index--
      } else if ($event.keyCode === 40) {
        index++
      }

      if (!this.expenses.data[index]) {

        return
      }
      this.focused = this.expenses.data[index].id
    },

    prevMonth () {
      let month = this.month - 1

      if (month <= 0) {
        month = 12
        this.year = this.year - 1
      }
      this.month = month
      this.loadExpenses(1)
    },

    nextMonth () {
      let month = this.month + 1

      if (month >= 13) {
        month = 1
        this.year = this.year + 1
      }
      this.month = month
      this.loadExpenses(1)
    },
  },

  components: {
    AppMoney,
    AppStatus,
    paginate: PaginationGeneral,
    search: SearchPanel
  },

  mounted () {
    document.addEventListener('keyup', this.onPress)
  },

  destroyed () {
    document.removeEventListener('keyup', this.onPress)
  }

}
</script>
