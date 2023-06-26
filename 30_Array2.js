const marvel_heros = ["Ironman", "Thor", "Hulk"];
const dc_heros = ["Superman", "Batman", "Flash"];

// marvel_heros.push(dc_heros);
//* Here it does not mearge the array rather it push the "dc_heros" array as 4th element at marvel_heros array

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

//? concat() method
const all_heros = marvel_heros.concat(dc_heros); //* concat() always returns a new array
//* concat() is used to mearge two array
console.log(all_heros);

//? spread operator
//! Another way to mearge two or more array that is spread operator. It is easy and more convenient method
//* Here we use three dot(...) And here we mearge array as much as we want, and also add single value
//* const newArray = [...arr1, ...arr2, ...arr3, value1]

const all_new_heros = [...marvel_heros, ...dc_heros];
// const all_new_heros = [...marvel_heros, ...dc_heros, "firoz"];

console.log(all_new_heros);

//? flat() method
//* The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
/* 
The flat() method takes an optional parameter "depth", which specifies the depth level specifying how
deep a nested array structure should be flattened. By default, depth is set to 1, which means it
flattens only one level of nested arrays. If you want to flatten nested arrays recursively, you can
pass a higher value for depth or use "Infinity". 
*/

const another_arry = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const usable_another_array = another_arry.flat(1);
// const usable_another_array = another_arry.flat(Infinity)

console.log(usable_another_array);

//? Array.isArray() & Array.from()
//* The Array.isArray() static method determines whether the passed value is an Array or not.
//* The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

console.log(Array.isArray("Firoz"));
console.log(Array.from("Firoz"));
console.log(Array.from({ name: "Firoz" })); // Interesting case

//? Array.of()
//* The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
