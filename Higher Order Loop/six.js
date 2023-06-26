//? map :-

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//* Array.map( callback_function(value, index, array))

const newNums = myNums.map((num) => {
  return num + 10;
});
// const newNums = myNums.map((num) => num + 10);
// console.log(newNums);

//! Method chaining

// const newNumsTwo = myNums.map((num) => num * 10).map((num) => num + 1);
// console.log(newNumsTwo);

const newNumsTwo = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNumsTwo);

//! You can add Method as much as you want to add
