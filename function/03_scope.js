// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

var c = 300; //* This is global scope  // These values are accessable from any where

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;

  //* This is block scope
  // These values are not accessable from outside of this block
}

// console.log(a);
// console.log(b);
console.log(c);

let a = 250;

if (true) {
  let a = 10;
  const b = 20;

  console.log("INNER A : ", a);
}

console.log("OUTER A : ", a);

//! Global Scope under Node and Global Scope under Windows are two different things
