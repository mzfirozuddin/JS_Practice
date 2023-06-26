//? if

//! syntax
/* 
if (condition) {
  //* if condition is true then only block of code will execute
} 
*/

//* <, >, <=, >=, ==, !=, ===, !==

//? if-else
/* 
const temp = 40;

if (temp < 50) {
  console.log("Temperature is less than 50");
} else {
  console.log("Temperature is greater than 50");
}
*/

/* 
const score = 200;
if (score > 100) {
  const power = "Fly";
  //   let power = "Fly";
  //   var power = "Fly";
  console.log(`User Power: ${power}`);
}

// console.log(`User Power: ${power}`); //* error : power is not defined (error for const and let)

*/

//! short format of if() statement
// const balence = 1000;
// if (balence > 500) console.log("test"); //* for single line do not need {} bresses

// if (balence > 500) console.log("test"), console.log("test2"); //* you can write multiple line with comma(,) separet
//* But this is an unreadable code, immature code (don't do this)

//? if-else-if
/* 
if (condition1) {
  // code
} else if (condition1) {
  // code
} else if (condition1) {
  // code
} else {
  // code
} 
*/

//? && , ||, !

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  // both condition should be true
  console.log("Allow to buy course");
}

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

const loggedInFromGoogle = true;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
  // minimum one condition should be true
  console.log("User logged in");
}

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
