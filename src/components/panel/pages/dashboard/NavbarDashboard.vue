<template>

  <header class="flex justify-between items-center py-2 px-6 bg-gray-800">
    <div class="flex items-center">
      <button class="text-gray-100 focus:outline-none lg:hidden">
        <svg
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class=" text-white "
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"

          />
        </svg>
      </button>

      <div class="relative mx-4 lg:mx-0">


      </div>
      <div class="relative mx-4  lg:mx-0">
        <div class="brand">
          <a href="#">
            <img
              src="@/assets/images/logo.png"
              class="brand__logo h-6"
              alt="Welog Logo"
            />
          </a>
        </div>
      </div>

      <nav class="ml-4">
        <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
          <li>
            <!-- <a class="block px-4 py-1 md:p-2 lg:px-4 font-semibold" href="#" title="Inicio">Inicio</a> -->
            <router-link
              exact
              class="block px-4 py-1 md:p-2 lg:px-4 text-gray-100"
              :to="{name: 'painel.dashboard'}"
            >Inicio
            </router-link>
          </li>
          <li>
            <router-link
              class="block px-4 py-1 md:p-2 lg:px-4  text-gray-100"
              :to="{name: 'painel.despesas'}"
            >Despesas
            </router-link>
          </li>
          <li>
            <router-link
              class="block px-4 py-1 md:p-2 lg:px-4 text-gray-100"
              :to="{name: 'painel.cadastros'}"
            >Cadastros
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="flex items-center">
      <button class="flex mx-4 text-gray-600 focus:outline-none">
        <svg
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="relative">
        <DropDown>
          <div class="border-t border-color-gray-200"></div>
          <DropDownItem>Meu perfil</DropDownItem>
          <DropDownItem :to="{name: 'painel.usuarios'}">Configurações</DropDownItem>
          <DropDownItem :to="{name: 'painel.usuarios'}">Ajuda</DropDownItem>
          <div class="border-t border-color-gray-200"></div>
          <DropDownItem @click="exit">Sair</DropDownItem>
        </DropDown>
      </div>
    </div>

  </header>
</template>

<script>
import logout from '@/helpers/logout'
import DropDown from './partials/DropDown'
import DropDownItem from './partials/DropDownItem'
import DropDownDivider from './partials/DropDownDivider'

export default {

  created () {
    this.loadUsers()
  },

  data () {
    return {}
  },

  computed: {
    me () {
      return this.$store.state.auth.me
    }
  },

  methods: {
    exit () {
      logout()
    },

    loadUsers () {
      this.$store.dispatch('loadUsers')
    },
  },

  components: {
    DropDown, DropDownItem, DropDownDivider
  }
}
</script>

<style scoped>

.router-link-active {
  color: #FE49A0;
}
</style>
