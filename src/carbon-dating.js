const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  if (!sampleActivity || typeof sampleActivity !== 'string') {
    return false;
  }

  if (isNaN(Number(sampleActivity)) === true || Number(sampleActivity) === Infinity) {
    return false;
  }

  if (typeof Number(sampleActivity) !== 'number') {
    return false;
  }

  if (Number(sampleActivity) > 15 || Number(sampleActivity) <= 0) {
    return false;
  }


  const time = (HALF_LIFE_PERIOD / 0.693) * Math.log(MODERN_ACTIVITY / sampleActivity);


  return Math.ceil(time);
}

module.exports = {
  dateSample
};
