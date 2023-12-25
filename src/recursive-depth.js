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
  calculateDepth(arr, count = 0) {
    if ( !arr ) {
      return 0;
    }

    if ( Array.isArray(arr) ) {
      count = count + 1;
      let floor = count;

      for(let i = 0; i < arr.length; i += 1){
        let item = arr[i];
        let deep = this.calculateDepth(item, count);
        floor = Math.max(floor, deep);
      }

      return floor;

    } else { 

      return count;
  }
}
  }

module.exports = {
  DepthCalculator
};
