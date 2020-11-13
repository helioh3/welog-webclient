<template>
  <!-- component -->
  <div class="bg-white border rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
    <form
      action=""
      @submit.prevent="onSubmit"
    >
      <div class="-mx-3 md:flex mb-6">

        <div class="md:w-2/4 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Nome da Conta *
          </label>
          <input
            type="text"
            v-model="bankaccount.nome"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            placeholder="Nome para a conta"
			oninput="this.value = this.value.toUpperCase()"	
          >
        </div>

        <div class="md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Banco *
          </label>
          <div class="relative">
            <v-select
              ref="banco"
              class="style-chooser"
              label="Name"
              :options="banks"
              v-model="bankaccount.banco"
              :reduce="bank => bank.id"
            />
          </div>
        </div>

        <div class="md:w-1/4 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            AGENCIA *
          </label>
          <input
            v-model="bankaccount.agencia"
            v-mask="['###', '####-#', '###-##']"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            type="text"
            placeholder="Agencia"
          >

        </div>

        <div class="md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            CONTA *
          </label>
          <input
            v-model="bankaccount.conta"
            v-mask="['###-#', '####-#', '#####-#', '######-#']"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            type="text"
            placeholder="Conta"
          >

        </div>
      </div>


      <div class="mt-4">
        <button class="mr-4 px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
          Salvar
        </button>
        <button class=" border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
          <router-link
            class="inline-block  px-5 py-2"
            :to="{name: 'painel.contasbancarias'}"
          >Cancelar
          </router-link>
        </button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'FormBankAccount',

  props: {
    value: {
      require: false,
      type: Object,
      default: () => {
        return {
          id: '',
          nome: '',
          agencia: '',
          conta: '',
          banco: 0
        }
      }
    },

    update: {
      require: false,
      type: Boolean,
      default: false
    }

  },

  computed: {
    banks () {
      return this.$store.state.banks.items
    }
  },

  data () {
    return {
      bankaccount: {},
      errors: {}
    }
  },

  methods: {
    onSubmit () {
      let action = this.update ? 'updateBankaccount' : 'storeBankaccounts'

      this.$store.dispatch(action, this.bankaccount)
        .then(() => {
          this.$snotify.success('Salvo com sucesso')
          this.$router.push({ name: 'painel.contasbancarias' })
        })
        .catch(() => {
          this.$snotify.error('Não foi possivel salvar', 'Erro')
        })
    },
  },

  watch: {
    value: {
      imediate: true,
      handler (value) {
        if (typeof value?.banco === 'string') {
          value.banco = Number(value.banco)
        }
        this.bankaccount = { ...value }
      }
    }
  },

  created () {
    this.$store.dispatch('loadBanks')
  }
}
</script>
