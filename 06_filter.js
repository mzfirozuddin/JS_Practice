const myNumber = [20,24,35,45,55,89,44,88];
const result = myNumber.filter((num) => num != 55); // it create a new array based on this callback function
console.log(result);  // here all the number is present except 55


// if we want to take only even number

const number = [20,24,35,45,55,89,44,88];
const ans = number.filter((num) => num % 2 === 0); // it create a new array and takes only the even element
console.log(ans); 
