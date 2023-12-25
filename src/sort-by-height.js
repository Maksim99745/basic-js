const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = [];
  const innerArr = arr;
  for (let i = 0; i < arr.length; i+= 1) {
    if (arr[i] === -1) {
      indexes.push(arr.indexOf(arr[i]));
      arr[i] = 0;
    }
  }

  const preparedArr = innerArr.sort((a, b) => a - b).slice(indexes.length, innerArr.length);
  
  for(let i = 0; i < indexes.length; i+= 1) {
    preparedArr.splice(indexes[i], 0, -1);
  }
  return preparedArr;
}

module.exports = {
  sortByHeight
};
