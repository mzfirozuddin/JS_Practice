//? "Math" object in Javascript

console.log(Math);
console.log(Math.abs(-5)); //* It returns the absolute value
//* round():- It round up the value, if after decimal less than 5 it choose floor value, and if after decimal greater than 5 it choose ceil value,
console.log(Math.round(4.4));
console.log(Math.round(4.6));

console.log(Math.ceil(4.2)); //* It returns ceil value
console.log(Math.floor(4.9)); //* It returns floor value

//* min(), max()
console.log(Math.max(3, 8, 4, 12, 2)); //* find max value
console.log(Math.min(3, 8, 4, 12, 2)); //* find max value

//! random():- always generate a random number between 0 and 1
console.log(Math.random()); //* It generate a random number between 0 and 1

console.log(Math.random() * 10); //* It generate a random number between 0 and 10

console.log(Math.random() * 10 + 1); //* It generate a random number between 1 and 10

console.log(Math.floor(Math.random() * 10 + 1)); //* It generate a random number between 1 and 10
//* Above statement we add 1 to generated number for elemenate the possibility of 0

//! If we want to generate a random number between 10 and 20, then formulla is:

const min = 10;
const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)));
const num = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(num);
