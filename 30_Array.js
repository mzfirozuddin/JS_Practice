const myArr = [1, 2, 3, 4, 5];
const heros = ["Iron Man", "Thor", "Batman", "Superman"];

const myArr2 = new Array(0, 1, 2, 3); // Another way to create an array

// Methods in Array

console.log(myArr);
myArr.push(6); //* Add new element at the end of the array
// console.log(myArr);
myArr.push(7);
// console.log(myArr);
myArr.pop(); //* Remove the last element from the array
console.log(myArr);

myArr.unshift(9); //* Add new element at the starting of array
myArr.unshift(15);
console.log(myArr);

myArr.shift(); //* Remove the first element from the array
console.log(myArr);

console.log(myArr.includes(9)); //* It returns given element present or not in array
console.log(myArr.includes(15));

console.log(myArr.indexOf(2)); //* It returns the index of "2"
console.log(myArr.indexOf(20)); // -1

const newArr = myArr.join(); //* It joins all element to a String
console.log(newArr);
console.log(typeof newArr);

myArr.shift();
console.log("==========================");

//! slice() & splice() in array
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); //* slice() method extract the element from array but doesn't changed the Original array
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); //* splice() method extract the element from array and also changed the Original array
console.log(myn2);
console.log("C ", myArr);
