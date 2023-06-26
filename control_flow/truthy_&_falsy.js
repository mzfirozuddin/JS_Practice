// const userEmail = "firoz@gmail.com";  //* string consider as truthy value
// const userEmail = "";  //* empty string consider as falsy value
const userEmail = []; //* empty array consider as truthy value

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//! falsy and truthy value
// falsy value => false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy value => (Rest of all are truthy value) "0", "false", " ", [], {}, function(){}

// How to check empty array?
if (userEmail.length === 0) {
  console.log("Array is empty");
}

// How to check empty object?
const emptyObj = {};
// console.log(Object.keys(emptyObj));
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//! some importent notes
// (false == 0)  => true
// (false == '')  => true
// (0 == '' )   => true

//! Nullish Coalsecing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;

console.log(val1);

//! Terniary Operator
// condition ? true : false
const tea = 100;
tea >= 80 ? console.log("More than 80") : console.log("Less than 80");
