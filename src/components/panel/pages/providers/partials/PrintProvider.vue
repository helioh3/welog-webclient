<template>
  <div class="printable bg-white border rounded mt-2 px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
    <h1>Vida Loka</h1>

    <div class="-mx-3 md:flex mb-6 text-left">
      <table class="min-w-full">
        <tbody class="bg-white">
          <tr>
            <td class="px-6 py-4 wwhite-space: nowrap">
              <div class="text-sm leading-5 text-gray-900">Razão Social</div>
              <div class="text-sm leading-5 text-gray-500">{{ provider.nome }}</div>
            </td>

            <td class="px-6 py-4 whitespace-no-wrap">
              <div class="text-sm leading-5 text-gray-900">Fantasia</div>
              <div class="text-sm leading-5 text-gray-500">{{ provider.fantasia }}</div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap">
              <div class="text-sm leading-5 text-gray-900">Estado</div>
              <div class="text-sm leading-5 text-gray-500">{{ provider.estado }}</div>
            </td>

            <td class="px-6 py-4 whitespace-no-wrap">
              <div class="text-sm leading-5 text-gray-900">CNPJ</div>
              <div class="text-sm leading-5 text-gray-500">{{ provider.cnpj }}</div>
            </td>

          </tr>

          <tr>
            <td class="px-6 py-4 whitespace-no-wrap">
              <div class="text-sm leading-5 text-gray-900">CEP</div>
              <div class="text-sm leading-5 text-gray-500">{{ provider.cep }}</div>
            </td>

            <td class="px-6 py-4 whitespace-no-wrap">
              <div class="text-sm leading-5 text-gray-900">Insc. Estadual</div>
              <div class="text-sm leading-5 text-gray-500">{{ provider.inscricao_estadual }}</div>
            </td>

            <td class="px-6 py-4 whitespace-no-wrap">
              <div class="text-sm leading-5 text-gray-900">Telefone</div>
              <div class="text-sm leading-5 text-gray-500">{{ provider.telefone }}</div>
            </td>
          </tr>

          <tr>
            <td class="px-6 py-4 wwhite-space: nowrap overflow: hidden">
              <div class="text-sm leading-5 text-gray-900">CIDADE</div>
              <div class="text-sm leading-5 text-gray-500">{{ provider.cidade }}</div>
            </td>

            <td class="px-6 py-4 whitespace-no-wrap ">
              <div class="text-sm leading-5 text-gray-900">Endereço</div>
              <div class="text-sm leading-5 text-gray-500">{{ provider.endereco }}</div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap">
              <div class="text-sm leading-5 text-gray-900">E-email</div>
              <div class="text-sm leading-5 text-gray-500">{{ provider.email }}</div>
            </td>
          </tr>

          <tr>

            <td class="px-6 py-4 whitespace-no-wrap">
              <div class=" text-sm leading-5 text-gray-900">Atuação</div>
              <div class="uppercase w-12 text-sm leading-5 text-gray-500">{{ provider.atuacao }}</div>
            </td>
          </tr>
        </tbody>
      </table>

    </div>

    <div class="-mx-3 md:flex mb-6">
      <table>
        <tbody>
          <tr>
            <td class="px-6 py-4 whitespace-no-wrap">
              <div class="text-sm leading-5 text-gray-900">Observação</div>
              <div class="text-sm leading-5 text-gray-500">{{ provider.observacao }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
/**
 */
export default {
  /**
   */
  name: 'PrintProvider',
  /**
   */
  props: {
    provider: {
      type: Object,
      required: true
    }
  }
}
</script>
