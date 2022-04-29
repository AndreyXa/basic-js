const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = [];
   let count = 0;
   while (n) {
      array.push(n % 10);
      n = Math.floor(n / 10);
   }
   for (let j = 0; j < array.length; j++) {
      let num = 0;
      for (let i = array.length - 1; i >= 0; i--) {
         if (i !== j) {
            num = num * 10 + array[i];
         }
      }
      count = Math.max(num, count);
   }
   return count;
}

module.exports = {
  deleteDigit
};
