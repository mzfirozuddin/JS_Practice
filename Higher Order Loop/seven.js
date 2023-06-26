//? reduce :- The reduce method executes a user-supplied "reducer" callback function on each element of the array

//* Array.reduce( callback_function(accumulator, currentValue), 0);

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currVal) {
//   console.log(`acc: ${acc} and currVal: ${currVal}`);
//   return acc + currVal;
// }, 0);

// const myTotal = myNums.reduce((acc, currVal) => {
//   return acc + currVal;
// }, 0);

const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0);
console.log(myTotal);

const shoppingCart = [
  {
    courseName: "Js Course",
    price: 2999,
  },
  {
    courseName: "Python Course",
    price: 999,
  },
  {
    courseName: "Mobile Dev Course",
    price: 5999,
  },
  {
    courseName: "Data Science Course",
    price: 12999,
  },
];

const totalPrice = shoppingCart.reduce((acc, currItem) => {
  return acc + currItem.price;
}, 0);

console.log(totalPrice);
