<template>
  <money
    v-if="readonly"
    :value="receivedValue"
    disabled
    class="text-sm text-right leading-5 bg-transparent"
    :class="classNames"
  />
  <money
    v-else
    type="text"
    class="text-right appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4"
    :value="receivedValue"
    @input="emitValue"
  />
</template>

<script>
export default {
  /**
   */
  name: 'AppMoney',
  /**
   */
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    readonly: {
      type: Boolean,
      default: false
    },
    classNames: {
      type: [Object, Array],
      default: undefined
    }
  },
  /**
   */
  computed: {
    /**
     * @return {number}
     */
    receivedValue () {
      if (typeof this.value !== 'number') {
        return 0
      }
      return this.value
    }
  },
  /**
   */
  methods: {
    /**
     * @param {number|string} $event
     */
    emitValue ($event) {
      this.$emit('input', $event)
    }
  }
}
</script>
