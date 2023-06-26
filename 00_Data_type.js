"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3); // code readability should be high

console.log("Firoz");

let name = "firoz";
let age = 22;
let isLoggedIn = false;
let state; // this is undefined

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => which variable value is not defined
// symbol => unique

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

//Todo: Data Types

//* Primitive Type => This is always call by value (Here, when we pass value it send copy of this value)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId); // Here id and anotherId are two different type, Symbol is used for uniquely identify the value

const bigInt = 854579254636446548n; // we have to write "n" at the end to represent BigInt
console.log(typeof bigInt);

//* Non-Primitive (Reference)
// 3 types: Array, Object, Function
