import { SET_PRINTABLE } from './mutations'

/**
 */
export default {
  print (context, html) {
    context.commit(SET_PRINTABLE, html)
  },
}
