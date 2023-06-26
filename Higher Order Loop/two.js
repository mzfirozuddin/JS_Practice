//? for in

const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  py: "Python",
};

for (const key in myObject) {
  //   console.log(key);   //* It print only key
}

for (const key in myObject) {
  //   console.log(myObject[key]); //* process to print value of object
}

//* If we want to print key value both
for (const key in myObject) {
  //   console.log(`${key} : ${myObject[key]}`);
}

//! can we use "for in" loop for print any array. lets see

const programming = ["js", "py", "c", "c++", "java"];

for (const key in programming) {
  //   console.log(key); //* It print only index for array
}

for (const key in programming) {
  //   console.log(programming[key]); //* process to print value of array
}

//* If we want to print index and value both
for (const key in programming) {
  //   console.log(`${key} : ${programming[key]}`);
}

//! can we use "for in" loop on Map. lets see

// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("Fr", "France");

// for (const key in map) {
//   console.log(key); //* It prints nothing because map is not iterable
// }
//! we can not use 'for in' loop on map

//? summery : "for of" vs "for in"
// for array we mostly use "for of" loop
// for object we mostly use "for in" loop
