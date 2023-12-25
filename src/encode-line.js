const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  if (str === '') {
    return '';
  }

  const arr = str.split('');
  const innerArr = [];
  // for (let item of arr) {
  //   if (!innerArr.includes(item)) {
  //     innerArr.push(item);
  //   }
  // }
  // const count = [];
  for (let f = 0; f < arr.length; f += 1) {
    if (!innerArr.includes(arr[f]) || (arr[f] != arr[f + 1] && arr[f] != arr[f - 1])) {
        innerArr.push(arr[f]);
    }
  }
  
  
  const result = [];

  for (let i = 0; i < innerArr.length; i += 1) {
    let count = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j] === innerArr[i] && arr[j] === arr[j + 1]) {
        count += 1;
      } else if (arr[j] === innerArr[i] && arr[j] === arr[j - 1]) {
        count += 1;
      }
    }
    if (count === 0) {
      count = '';
    }
    result[i] = `${count}${innerArr[i]}`;
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
