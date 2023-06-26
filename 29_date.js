//? "Date" Object in javascript

let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

//* 1st way to create date
// let myCreatedDate = new Date(2023, 0, 21);
// console.log(myCreatedDate.toDateString());

//* 2nd way to create date
// let myCreatedDate = new Date(2023, 0, 21, 5, 3);
// console.log(myCreatedDate.toLocaleString());

//* 3rd way to create date
// let myCreatedDate = new Date("2023-01-18");
// console.log(myCreatedDate.toLocaleString());

//* 4th way to create date
let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime()); //* It returns time in mili second

const myTimeStamp = Date.now();
console.log(myTimeStamp); //* It returns time in milisecond
console.log(Math.floor(myTimeStamp / 1000)); //* convert milisecond to second

//* getFullYear(), getMonth(), getDay() in Date Object
let newDate = new Date();
console.log(newDate.getFullYear()); //* get the year
console.log(newDate.getMonth()); //* get the month ( Month's starting index is 0)
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); //* get the day ( Day start from Monday )

const date = newDate.toLocaleString("default", {
  //   weekday: "long",
  weekday: "short",
  //   weekday: "narrow",
});

console.log(date);
