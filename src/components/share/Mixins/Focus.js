/**
 * @mixin Focus
 */
export default {
  /**
   */
  methods: {
    /**
     * @param {string} ref
     * @param {Record<string, unknown>|null|undefined} $event
     */
    focusTo (ref, $event) {
      if (!$event) {
        return
      }

      const handler = () => {
        let component = this.$refs[ref]
        if (Array.isArray(component)) {
          component = component[0]
        }

        if (typeof component.focus === 'function') {
          component.focus()
          return
        }

        const input = component.$el.querySelector('input')
        if (input && typeof input.focus === 'function') {
          input.focus()
        }
      }
      window.setTimeout(handler, 200)
    }
  }
}
