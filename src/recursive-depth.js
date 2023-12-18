const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/* arr*/) {
    throw new NotImplementedError('Not implemented');
//     if (arr) {
//       return 1;
//     }

//     let count = 1;
  
//     function recurs (item, count) {
//       if (Array.isArray(item)) {
//         count += 1;
//         for (let item2 of item) {
//           count = Math.max(count, recurs(item2, count));
//         }
//       }
//       return count;
//     }

//     for (let item of arr) {
//        count = Math.max(count, recurs(item, 1));
//     }

  
//     return count;
  }
}

module.exports = {
  DepthCalculator
};
