// singleton
// Object.create

// Object literal
//* Interview Question:- Lets create a symbol and use as a key in object
const mySym = Symbol("key1");

// Declear an Object
const JsUser = {
  name: "Firoz", //! Here key(name) internally treated as String(like "name")
  "Full Name": "Mirza Firoz Uddin",
  [mySym]: "myKey1", //! Here we use Symbol as key ([mySym is a Symbol])
  age: 22,
  location: "Kolkata",
  email: "firoz@yahoo.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.name); // Accessing the object value
console.log(JsUser["name"]); // Another Way to accessing the value

// console.log(JsUser.Full Name);   //* Throws an error
console.log(JsUser["Full Name"]); // In this case We have to access this way

console.log(JsUser[mySym]); //* This way we access symbol

JsUser.email = "firoz@gmail.com"; // updateing the object value
// console.log(JsUser);

//* We can lock the object using "freeze" method, so that no one can change the object value
//* Object.freeze(object_name)

// Object.freeze(JsUser);

// JsUser.email = "hello@google.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greeting); // It returns an function reference
JsUser.greeting(); // Function call
JsUser.greetingTwo(); // Function call
