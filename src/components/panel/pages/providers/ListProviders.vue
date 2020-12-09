<template>

  <div>
    <!-- BRANDCRUBS -->
    <div class="mx-auto px-8 py-2">
      <nav
        class="text-black font-bold my-1"
        aria-label="Breadcrumb"
      >
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
            >Fornecedores
            </a>
          </li>
        </ol>
      </nav>
    </div>

    <!-- TABS -->
    <div class="py-1">
      <TabsCadastro />
    </div>

    <div class="mx-auto px-8 py-2">
      <div class="flex justify-between">

        <!-- pesquisa -->
        <search
          @search="searchForm"
        >
        </search>

        <!-- botao -->
        <div class="mt-4">
          <button class=" bg-pink-600 text-pink-100 rounded transition duration-300 hover:bg-pink-500 hover:text-white focus:outline-none">
            <router-link
              class="inline-block px-4 py-2"
              :to="{name: 'painel.fornecedores.adicionar'}"
            >Adicionar
            </router-link>
          </button>

        </div>

      </div>
      <div class="flex flex-col mt-3">
        <div class="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div class="align-middle inline-block min-w-full overflow-hidden sm:rounded border border-gray-400">
            <table class="min-w-full">
              <thead>
                <tr>
                  <th class="px-6 py-3 border-b border-gray-400 bg-gray-100"></th>
                  <th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
                    Razão Social
                  </th>

				  <th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
                    Fantasia
                  </th>
                  <th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
                    CNPJ / CPF
                  </th>
                  <th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
                    Telefone
                  </th>
                  <th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
                    E-mail
                  </th>
                  <!-- <th class="px-6 py-3 border-b border-gray-400 bg-gray-100 text-left text-xs leading-4 font-semi-bold text-gray-700 uppercase tracking-wider">
                    Observação
                  </th> -->
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr
                  class="dotted cursor-pointer hover:bg-orange-200"
                  v-for="provider in providers.data"
                  :key="provider.id"
                  @dblclick.prevent="view(provider.id)"
                >
                  <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                    <input
                      type="checkbox"
                      class="form-checkbox h-5 w-5 text-gray-600"
                    >
                  </td>
                  <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-6 w-6">
                        <img
                          class="h-6 w-6 rounded-full"
                          src="@/assets/images/provider.png"
                          alt=""
                        />
                      </div>

                      <div class="ml-4">
                        <div class="overflow-hidden truncate w-48 text-sm leading-5 font-medium text-gray-900">
                          {{ provider.nome }}
                        </div>
                        <div class="text-sm leading-5 text-gray-500">{{ provider.cidade }}</div>
                      </div>
                    </div>
                  </td>
				  <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div class="overflow-hidden truncate w-48 text-sm leading-5 text-gray-900">{{ provider.fantasia }}</div>
                  </td>

                  <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div class="text-sm leading-5 text-gray-900">{{ provider.cnpj }}</div>
                  </td>

                  <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div class="text-sm leading-5 text-gray-900">{{ provider.telefone }}</div>
                  </td>

                  <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div class="text-sm leading-5 text-gray-900">{{ provider.email }}</div>
                  </td>

                  <!-- <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div class="text-sm leading-5 text-gray-900">{{ provider.observacao }}</div>
                  </td> -->

                </tr>

              </tbody>
            </table>

          </div>
        </div>

        <div class="flex justify-center">
          <pagination
            :pagination="providers"
            :offset="7"
            @paginate="loadProviders"
          >
          </pagination>

        </div>
      </div>
    </div>
  </div>

</template>
<script>
import Middle from './../../share/Middle'
import PaginationGeneral from '../../../share/PaginationGeneral'
import SearchPanel from '../../share/SearchPanel'
import TabsCadastro from '@/components/panel/share/TabsCadastro'
import { TABLE_HEIGHT_CELL, TABLE_HEIGHT_DOWN, TABLE_HEIGHT_UP } from '@/setting/layout'

export default {

  created () {
    this.loadProviders(1)
  },

  data () {
    return {
      search: ''
    }
  },

  computed: {
    providers () {
      return this.$store.state.providers.items
    },

    params () {
      return {
        page: this.providers.current_page,
        filter: this.search
      }
    }
  },

  methods: {
    loadProviders (page) {
      let size = Math.floor((window.innerHeight - TABLE_HEIGHT_UP - TABLE_HEIGHT_DOWN) / TABLE_HEIGHT_CELL)
      if (size < 5) {
        size = 5
	  }
	  
      this.$store.dispatch('loadProviders', { ...this.params, page, size })

    },

    view (id) {
      this.$store.dispatch('loadProvider', id)
        .then(response => {
          this.$router.push({ name: 'painel.fornecedores.visualizar', params: { id: id } })
        })
        .catch()
    },

    searchForm (filter) {
      this.search = filter
      this.loadProviders(1)
    },

  },

  components: {
    TabsCadastro, search: SearchPanel, pagination: PaginationGeneral, Middle
  }
}
</script>
