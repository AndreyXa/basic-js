const cats = [
   ["^^", ".", null, 0, false, "", NaN, 2, true, "dasdas", 1],
   [2, NaN, "", false, "^^", "^^"],
   [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
   ["."],
   [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
   [false, NaN, 1, 0, ".", "^^"],
   [null, 1, NaN],
   [],
]

countCats(cats);

function countCats(array) {
   let count = 0;
   let newArray = array.flat();

   for (let i = 0; i < newArray.length; i++) {
      const element = newArray[i];
      if (element === "^^") {
         count++;
      }
   }
   console.log(count);

}