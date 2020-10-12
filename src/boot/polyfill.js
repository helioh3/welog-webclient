/**
 */
export default function () {
  Date.isLeapYear = function (year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
  }

  Date.getDaysInMonth = function (year, month) {
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
  }

  Date.prototype.isLeapYear = function () {
    return Date.isLeapYear(this.getFullYear())
  }

  Date.prototype.getDaysInMonth = function () {
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth())
  }

  Date.prototype.addMonths = function (value, followLast) {
    const current = this.getDate()
    this.setDate(1)
    const wasLast = current === this.getDaysInMonth()
    this.setMonth(this.getMonth() + value)
    if (followLast && wasLast) {
      this.setDate(this.getDaysInMonth())
      return this
    }
    this.setDate(Math.min(current, this.getDaysInMonth()))
    return this
  }
}
