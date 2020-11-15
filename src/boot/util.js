import { get } from 'lodash'

/**
 * @param {Vue} Vue
 */
export default function ({ Vue }) {
  /**
   */
  Object.defineProperty(Vue.prototype, '$get', {
    get () {
      return get
    }
  })
}
