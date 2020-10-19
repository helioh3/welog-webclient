<template>
  <div
    v-if="readonly"
    :class="classNames"
  >
    {{ formatValue(value) }}
  </div>
  <v-date-picker
    v-else
    ref="input"
    :value="receivedValue"
    @input="emitValue"
    locale="pt"
    :input-props="{
      placeholder: 'dd/mm/AAAA',
      class:'appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4',
    }"
  />
</template>

<script>
import { formatDate } from '@/helpers/formatters'

export default {
  /**
   */
  name: 'AppDate',
  /**
   */
  props: {
    value: {
      default: undefined,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    classNames: {
      type: [Array, Object, String],
      default: 'text-sm leading-5 text-blue-900'
    },
  },
  /**
   */
  computed: {
    /**
     * @return {Date}
     */
    receivedValue () {
      if (!this.value) {
        return undefined
      }

      if (typeof this.value === 'string') {
        return new Date(this.value)
      }

      if (this.value instanceof Date) {
        return this.value
      }

      return undefined
    },
  },
  /**
   */
  methods: {
    /**
     * @param {Date|string} $event
     */
    emitValue ($event) {
      this.$emit('input', $event)
    },
    /**
     * @param {Date|string} value
     */
    formatValue (value) {
      if (!value) {
        return undefined
      }

      if (value instanceof Date) {
        return formatDate(value.toString())
      }

      return formatDate(value)
    },
    /**
     */
    focus () {
      const input = this.$refs.input.$el.querySelector('input')
      if (input && typeof input.focus === 'function') {
        input.focus()
      }
    },
  },
}
</script>

<style scoped>
</style>
