const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
  }
  const repeatTimes = options.repeatTimes || 1;
  let separator = String(options.separator) || '+';
  let addition  =  String(options.addition) || '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = String(options.additionSeparator) || '|';

  if (separator === 'undefined') {
    separator = '+';
  }

  if (addition === 'undefined') {
    addition = '';
  }

  if (additionSeparator === 'undefined') {
    additionSeparator = '|';
  }

  let add = '';

  for (let i = 0; i < additionRepeatTimes; i+= 1) {
    if (i + 1 === additionRepeatTimes) {
      add += addition;
      break;
    }
    add += addition;
    add += additionSeparator;
  }
  
  let repeted = '';

  for (let j = 0; j < repeatTimes; j += 1) {
    if (j + 1 === repeatTimes) {
      repeted += str;
      repeted += add;
      break;
    }
    repeted += str;
    repeted += add;
    repeted += separator;
  }


  return repeted;
}

module.exports = {
  repeater
};
