<template>
  <div class="printable bg-white border rounded mt-2 px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
    <h1>Eta lasqueira!</h1>
    <table class="min-w-full">
      <tbody class="bg-white">
        <tr>
          <td class="px-6 py-4 whitespace-no-wrap">
            <div class="text-sm leading-3 text-gray-900">Empresa</div>
            <div class="text-sm leading-5 text-gray-900">{{ company.empresa }}</div>
          </td>

          <td class="px-6 py-4 whitespace-no-wrap">
            <div class="text-sm leading-5 text-gray-900">Cidade</div>
            <div class="text-sm leading-5 text-gray-900">{{ company.cidade }}</div>
          </td>

          <td class="px-6 py-4 whitespace-no-wrap">
            <div class="text-sm leading-5 text-gray-900">Data de Registro</div>
            <div class="text-sm leading-5 text-gray-900">
              <AppDate
                :value="company.data_registro"
                readonly
              />
            </div>
          </td>

          <td class="px-6 py-4 whitespace-no-wrap">
            <div class="text-sm leading-5 text-gray-900">Inscricão Estadual</div>
            <div class="text-sm leading-5 text-gray-900">
              {{ company.inscricao_estadual }}
            </div>
          </td>

        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-no-wrap">
            <div class="text-sm leading-5 text-gray-900">E-mail</div>
            <div class="text-sm leading-5 text-gray-900">
              {{ company.email }}
            </div>
          </td>

          <td class="px-6 py-4 whitespace-no-wrap">
            <div class="text-sm leading-5 text-gray-900">CNPJ</div>
            <div class="text-sm leading-5 text-gray-900">
              {{ company.cnpj }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="-mx-3 md:flex mb-6 text-left">
      <table class="md:w-full">
        <thead>
          <tr>
            <th class="px-6 py-3  border-gray-300 text-left leading-4 tracking-wider">
              Socio
            </th>
            <th class="px-6 py-3  border-gray-300 text-left text-sm leading-4 tracking-wider">
              Nome
            </th>
            <th class="px-6 py-3  border-gray-300 text-left text-sm leading-4 tracking-wider">
              Nascimento
            </th>
            <th class="px-6 py-3  border-gray-300 text-left text-sm leading-4 tracking-wider">
              CPF
            </th>
            <th class="px-6 py-3  border-gray-300 text-left text-sm leading-4 tracking-wider">
              RG
            </th>
            <th class="px-6 py-3  border-gray-300 text-left text-sm leading-4 tracking-wider">
              Participacao
            </th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr
            v-for="(item, index) in company.partners"
            :key="index"
          >
            <td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
              <div class="flex items-center">
                <div class="text-sm leading-5 text-gray-800">
                  {{ index + 1 }}
                </div>
              </div>
            </td>
            <td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
              <div class="md:w-1/3">{{ item.nome }}</div>
            </td>

            <td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
              <div class="md:w-1/3">
                <AppDate
                  :value="item.data_nascimento"
                  readonly
                />
              </div>

            </td>
            <td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
              <div class="md:w-1/3">
                {{ item.cpf }}
              </div>
            </td>

            <td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
              <div class="md:w-1/3">
                {{ item.rg }}
              </div>
            </td>

            <td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
              <div class="md:w-1/3">
                {{ item.participacao }}%
              </div>
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
  name: 'PrintCompany',
  /**
   */
  props: {
    company: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
