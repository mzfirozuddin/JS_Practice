// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

//? Object Nesting
const regularUser = {
  email: "firoz@google.com",
  fullName: {
    userFulName: {
      firstName: "Firoz",
      lastName: "Uddin",
    },
  },
};

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFulName);
// console.log(regularUser.fullName.userFulName.firstName);
//!console.log(regularUser.fullName?.userFulName.firstName);  // Here "?" means fullName present or not

//? Object Mearge
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };  //* Here it does not mearge the objects rather it nesting the objects
// console.log(obj3);

//! const newObj = Object.assign(target, source)

// const obj4 = Object.assign(obj1, obj2); //* Now it mearge the objects ("obj1" is target and "obj2" source)
// const obj4 = Object.assign({}, obj1, obj2); //* Here "{}" it is target and rest all are source

//! Using spread operator
const obj4 = { ...obj1, ...obj2 }; //* This syntax we use mostly
console.log(obj4);

//? Array of an Object
const users = [
  {
    name: "Firoz",
    email: "firoz@yahoo.com",
  },
  {
    name: "Mirza",
    email: "mirza@yahoo.com",
  },
  {
    name: "Uddin",
    email: "uddin@yahoo.com",
  },
];

// If we want to access 2nd element
console.log(users[1].email); //* as we know "users" is array of an object so we use [] bracket
//* When we fetch data from database then we get data as an array of object form

//? How to get key and value from any object

console.log(tinderUser);
//! Object.keys(object_name)
//! Object.values(object_name)
console.log(Object.keys(tinderUser)); // Here we get keys as an array
console.log(Object.values(tinderUser)); // Here we get values as an array
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // It checks whether any proprty present or not
console.log(tinderUser.hasOwnProperty("isLogged"));
