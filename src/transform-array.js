const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {


  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!")
  }

  if (arr.length === 0) {
    return [];
  }

  const newArr = [];
  const sourceArr = arr.slice(0, arr.length);

  for (let i = 0; i < sourceArr.length; i += 1) {


    if (sourceArr[i] === '--double-prev') {
      if (sourceArr[i - 1]) {
        newArr.push(sourceArr[i - 1]);
      }
    }

    if (sourceArr[i] === '--discard-prev') {
      if (newArr.length > 0) {
        newArr.pop();
      }
    }

    if (sourceArr[i] === '--double-next') {
      if (sourceArr[i + 1]) {
        newArr.push(sourceArr[i + 1]);
      }
    }

      if (sourceArr[i - 1] === '--discard-next') {
        sourceArr[i] = 'x'
        console.log(sourceArr)
      }

    newArr.push(sourceArr[i]);
  }


  const result = [];

  for (let j = 0; j < newArr.length; j += 1) {
    if (newArr[j] === '--discard-next') {
      continue;
    }
    if (newArr[j] === '--discard-prev') {
      continue;
    }
    if (newArr[j] === '--double-next') {
      continue;
    }
    if (newArr[j] === '--double-prev') {
      continue;
    }
    if (newArr[j] === 'x') {
      continue;
    }
    result.push(newArr[j]);
  }


  return result;
}

module.exports = {
  transform
};
