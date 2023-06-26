//! array fill() method

var testArray = [2, 4, 8, 10, 5, 6, 0, 3];
// console.log(testArray.fill(0)); //* here all array element filling with 0

//* fill() method has three parameter
//* arrayName.fill(filling_value, start_index, end_index);
//* start_index is inclusive and end_index is exclusive

// console.log(testArray.fill("h")); //* all element fill with "h"
// console.log(testArray.fill("h", 2)); //* filling start from 2nd index

console.log(testArray.fill("h", 2, 5)); //* filling start from 2nd index and end in 4th index
