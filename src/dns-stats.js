const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) {
    return {};
  }

  if (domains.length === 1) {
    const arr = [];
    for (let i = 0; i < domains.length; i += 1) {
      arr.push(domains[i].split('.'));
    }

    const obj = {};
    obj[String('.' + arr[0][arr.length])] = arr.length;

    const arr2 = [];

    for (let j = 0; j < arr.length; j += 1) {
      let add = '';
      for (let q = arr[j].length - 1; q >= 0; q -= 1) {
        add += ('.' + arr[j][q]);
      }
      arr2.push(add);
    }

    for (let k = arr2.length - 1; k >= 0 ; k -= 1) {
      let count = 0;
      for (let item of arr2) {
        let num = arr2[k].length;

        if (arr2[k] === item || arr2[k] === item.slice(0, num)) {
          count += 1;
        }
      }
      obj[arr2[k]] = count;
    }

    return obj;
  }

  const arr = [];
  for (let i = 0; i < domains.length; i += 1) {
    arr.push(domains[i].split('.'));
  }

  const obj = {};
  obj[String('.' + arr[0][arr.length - 1])] = arr.length;

  const arr2 = [];

  for (let j = 0; j < arr.length; j += 1) {
    let add = '';
    for (let q = arr[j].length - 1; q >= 0; q -= 1) {
      add += ('.' + arr[j][q]);
    }
    arr2.push(add);
  }

  for (let k = 0; k < arr2.length; k += 1) {
    let count = 0;
    for (let item of arr2) {
      let num = arr2[k].length;
      
      if (arr2[k] === item || arr2[k] === item.slice(0, num)) {
        count += 1;
      }
    }
    obj[arr2[k]] = count;
  }

  return obj;
}

module.exports = {
  getDNSStats
};
