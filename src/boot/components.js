import AppDate from '@/components/share/Form/AppDate'
import AppMoney from '@/components/share/Form/AppMoney'

/**
 * @param {Vue} Vue
 */
export default function ({ Vue }) {
  Vue.component('AppDate', AppDate)
  Vue.component('AppMoney', AppMoney)
}
