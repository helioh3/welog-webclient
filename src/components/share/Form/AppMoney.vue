<template>
  <money
    v-if="readonly"
    :value="receivedValue"
    disabled
    class="text-sm bg-transparent"
    :class="classNames"
  />
  <money
    v-else
    ref="input"
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
      type: [Object, Array, String],
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
    },
    /**
     */
    focus () {
      if (typeof this.$refs.input.$el.focus === 'function') {
        this.$refs.input.$el.focus()
      }
    },
  }
}
</script>
