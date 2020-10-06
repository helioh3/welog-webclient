import { format as dateFormatter } from 'date-fns'

/**
 * @param {string} date
 * @return {string}
 */
export function formatDate (date) {
  return dateFormatter(new Date(date), 'dd/MM/yyyy')
}
