// function isEven(element) {
//   return element % 2 === 0;
// }
// console.log(isEven(6));

//* every() method => It check all the element present in array and if all element pass the test then it gives true.

// var result = [2, 4, 6, 8].every(isEven); // callback function
// console.log(result);

// var result = [2, 4, 6, 8].every((e) => {
//   return e % 2 === 0;
// });
// console.log(result);

// let arr = [10, 25, 30];
// let result1 = arr.every((ele) => {
//   return ele % 2 === 0;
// });
// console.log(result1);

// var result = [2,4,6,8].every((e) => e%2 === 0);
// console.log(result);

var result = [2, 4, 6, 8].every((e) => e % 2 === 0);
console.log(result);
