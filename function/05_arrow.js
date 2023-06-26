//? THIS and Arrow function

const user = {
  username: "firoz",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this); //* Here "this" talk about current context
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

console.log(this);
//* Here "this" talk about global context but it is a node environment so it return a emply object
//! run same line on browser inspect to understand more

/*

function chai() {
  //*   console.log(this);
  const username = "firoz";
  console.log(this.username); // undefined
  //* so we can not use "this" without object
}

chai();

*/

/*

const chai = function () {
  const username = "firoz";
  console.log(this.username); // undefined
};

chai();

*/

//! Arrow function

const chai = () => {
  const name = "firoz";
  console.log(this.name); // undefined
};

chai();

// syntax of arrow function
//* () => {}
//* const func = () => {}

/*
const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(3, 7));
*/

//* another method of arrow function called implicit return (Here do not need to write return keyword)
const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);  //* () => ()

console.log(addTwo(3, 7));

//! Return an object as answer

// const getObject = () => {
//   username: "firozmirza";
// };
// console.log(getObject());  // undefined

//* When we want to return object then we have to wrap this object in ()[parentesis]
const getObject = () => ({ username: "firozmirza" }); //* Just like that

console.log(getObject());
