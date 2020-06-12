/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject (item) {
    return (item && typeof item === 'object' && !Array.isArray(item))
  }
/**
 * @param {*} value
 * @returns {boolean}
 */
export const isUndefined = value => value === undefined

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isNull = value => value === null

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isBoolean = value => typeof value === 'boolean'

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isArray = value => Array.isArray(value)

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isDate = value => value instanceof Date

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isBlob = value =>
  value &&
  typeof value.size === 'number' &&
  typeof value.type === 'string' &&
  typeof value.slice === 'function'

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isFile = value =>
  isBlob(value) &&
  typeof value.name === 'string' &&
  (typeof value.lastModifiedDate === 'object' ||
    typeof value.lastModified === 'number')

/**
 * @param {Object} object
 * @param {FormData} [formData]
 * @param {string} [prefix]
 * @param {Object} [options]
 * @returns {FormData}
 */

export const objectToFormData = (object, formData = undefined, prefix = '', options = {}) => {
    options = options || {}
  
    options.indices = isUndefined(options.indices) ? true : options.indices
    options.nullsAsUndefineds = isUndefined(options.nullsAsUndefineds)
      ? false
      : options.nullsAsUndefineds
    options.booleansAsIntegers = isUndefined(options.booleansAsIntegers)
      ? false
      : options.booleansAsIntegers
  
    formData = formData || new FormData()
  
    if (isUndefined(object)) {
      return formData
    }
  
    if (isNull(object)) {
      if (!options.nullsAsUndefineds) {
        formData.append(prefix, '')
      }
      return formData
    }
  
    if (isBoolean(object)) {
      let value = object
      if (options.booleansAsIntegers) {
        value = object ? 1 : 0
      }
      formData.append(prefix, value)
      return formData
    }
  
    if (isDate(object)) {
      formData.append(prefix, object.toISOString())
      return formData
    }
  
    if (isArray(object)) {
      if (!object.length) {
        return formData
      }
      object.forEach((value, index) => {
        const key = prefix + '[' + (options.indices ? index : '') + ']'
        objectToFormData(value, formData, key, options)
      })
      return formData
    }
  
    if (isObject(object) && !isFile(object) && !isBlob(object)) {
      Object.keys(object).forEach(prop => {
        const value = object[prop]
        if (isArray(value)) {
          while (prop.length > 2 && prop.endsWith('[]')) {
            prop = prop.substring(0, prop.length - 2)
          }
        }
        const key = prefix ? prefix + '[' + prop + ']' : prop
        objectToFormData(value, formData, key, options)
      })
      return formData
    }
  
    formData.append(prefix, object)
    return formData
  }
  