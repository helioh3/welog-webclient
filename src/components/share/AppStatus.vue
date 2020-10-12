<template>
  <span
    v-if="status === positive"
    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
  >
    Pago
  </span>
  <span
    v-else
    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
  >
    Aberto
  </span>
</template>

<script>
export default {
  /**
   */
  name: 'AppStatus',
  /**
   */
  props: {
    status: {
      type: [String, undefined],
      required: true
    },
    positive: {
      type: String,
      default: 'pago'
    }
  }
}
</script>

<style scoped>

</style>
