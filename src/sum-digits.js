const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = '101';
  let arr = String(n).split('');
  if (arr.length === 2) {
    while (sum.length > 1) {
      sum = parseInt(arr[0]) + parseInt(arr[1]);
      sum = String(sum).split('');
      arr[0] = sum[0];
      arr[1] = sum[1];
    }
  }
  if (arr.length === 3) {
    while (sum.length > 1) {
      sum = parseInt(arr[0]) + parseInt(arr[1]) + parseInt(arr[2]);
      sum = String(sum).split('');
      arr[0] = sum[0];
      arr[1] = sum[1];
      arr[2] = sum[2];
    }
  }
  return Number(sum[0]);
}

module.exports = {
  getSumOfDigits
};
