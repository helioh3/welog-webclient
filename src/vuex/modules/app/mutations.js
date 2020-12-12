/**
 * @type {string}
 */
export const SET_PRINTABLE = 'SET_PRINTABLE'

/**
 */
export default {
  [SET_PRINTABLE] (state, html) {
    state.printable = html
  }
}
