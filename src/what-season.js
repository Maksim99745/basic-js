const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
  if (!date) {
    return 'Unable to determine the time of year!';
  }

   try {
     let time = date.getUTCDay();
   } catch (e) {
    throw new Error("Invalid date!");
    }

  if (Object.keys(date).length === 1) {
    throw new Error("Invalid date!");
  }

  let time = (date).getMonth() + 1;
  const season = ['winter', 'spring', 'summer', 'autumn'];
  if (time < 3 || time === 12) {
    return season[0];
  }

  if (time < 6) {
    return season[1];
  }

  if (time < 9) {
    return season[2];
  }

  if (time < 12) {
    return season[3];
  }

}

module.exports = {
  getSeason
};
