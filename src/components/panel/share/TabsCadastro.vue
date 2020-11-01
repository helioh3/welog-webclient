<template>
  <ul class="list-reset flex border-b border-gray-400">
    <li class="mr-1">
      <a
        class="inline-block px-3"
        href="#"
      ></a>
    </li>
    <li class="mr-1">
      <router-link
        exact
        class="bg-gray-200 inline-block py-4 px-6 text-blue hover:text-blue-darker"
        :to="{name: 'painel.fornecedores'}"
      >
        Fornecedores
      </router-link>
    </li>

    <li class="-mb-px mr-1">
      <router-link
        exact
        class="bg-gray-200 inline-block py-4 px-6 text-blue hover:text-blue-darker"
        :to="{name: 'painel.empresas'}"
      >
        Empresas
      </router-link>
    </li>

    <li class="mr-1">
      <router-link
        exact
        class="bg-gray-200 inline-block py-4 px-6 text-blue hover:text-blue-darker"
        :to="{name: 'painel.categorias'}"
      >
        Categorias
      </router-link>
    </li>

    <li class="mr-1">
      <router-link
        exact
        class="bg-gray-200 inline-block py-4 px-6 text-blue hover:text-blue-darker"
        :to="{name: 'painel.contasbancarias'}"
      >
        Contas bancárias
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TabsCadastro'
}
</script>

<style scoped>
/* class="bg-white inline-block border-gray-400 border-l border-t border-r rounded-t py-4 px-6 text-blue-dark" */

.router-link-exact-active.router-link-active {
  background: #ffffff;
  border-width: 1px 1px 0 1px;
  border-color: #cbd5e0;
  border-radius: 4px 4px 0 0;
  margin-bottom: -1px;
}
</style>
