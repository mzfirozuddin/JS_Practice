function sayMyName() {
  console.log("Firoz");
}
// sayMyName();

// function addTwoNumbers(num1, num2) {
//   //* Here "num1" and "num2" are parameters
//   console.log(num1 + num2);
// }

// addTwoNumbers(3, 4);  //* Here "3" and "4" are arguments
// addTwoNumbers(3, "4");
// addTwoNumbers(3, "a");
// addTwoNumbers(3, null);

// const result = addTwoNumbers(2, 8);
// console.log("Result :", result);

//? Function with return
function addTwoNumbers(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  //   console.log("Firoz");  // This line will never execute(Because "return" before this line )

  return num1 + num2;
}

const result = addTwoNumbers(2, 8);
// console.log("Result :", result);

function loginUserMessage(username) {
  //   if (username === undefined) {
  //     console.log("Please enter a username");
  //     return;
  //   }

  if (!username) {
    console.log("Please enter a username");
    return;
  }

  return `${username} just logged in`;
}

// loginUserMessage("firoz");
// console.log(loginUserMessage("firoz"));
console.log(loginUserMessage());

//? Default parameter
function loginUser(username = "Sam") {
  return `${username} just logged in`;
}

console.log(loginUser());
