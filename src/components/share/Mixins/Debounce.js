/**
 * @mixin Debounce
 */
export default {
  /**
   */
  data: () => ({
    debounceTimerId: null
  }),
  /**
   */
  created () {
    /**
     * @param {function} executor
     * @param {number} delay
     */
    this.$debounce = (executor, delay = 800) => {
      // caveat: only 1 timeout at a time because of the debounceTimerId
      // that's why we leave this inside the component scope
      // and not as a global utility
      const run = (...args) => {
        // clear previous action
        window.clearTimeout(this.debounceTimerId)

        // define the handler
        const handler = () => {
          this.debounceTimerId = null
          executor(...args)
        }

        // capture the timerId
        this.debounceTimerId = window.setTimeout(handler, delay)
      }
      return run()
    }
  },
}
