//! Memory
// Stack Memory (primitive type stored)
// Heap Memory (non-primitive type stored)

//? ================ Stack Memory ======================

let user1 = "John Doe";
let user2 = user1; // Here we get copy of user1 not reference

user2 = "Bob";

console.log(user1);
console.log(user2);

//? =================== Heap Memory ==========================

let userOne = {
  email: "john@google.com",
  upi: "userone@ybl",
};

let userTwo = userOne; // Here we get reference of userOne not copy

userTwo.email = "bob@yahoo.com";

console.log(userOne.email);
console.log(userTwo.email);
