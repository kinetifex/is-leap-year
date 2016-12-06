'use strict';

/**
 * Check if a given year is leap year or not
 * @param {number|Date} year - The year number or date to check
 * @returns {boolean} True if leap year, false if not
 */
var isLeapYear = function (year) {
  var _year = year;

  if (typeof year.getFullYear === 'function') {
    _year = year.getFullYear();
  }
  if (typeof _year !== 'number' || isNaN(_year)) {
    throw Error('year must be a number or date object.');
  }

  if (_year % 4 === 0) {
    if (_year % 100 === 0) {
      return _year % 400 === 0;
    }
    return true;
  }
  return false;
};

module.exports = isLeapYear;
