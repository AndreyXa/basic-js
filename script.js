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

deleteDigit(152)