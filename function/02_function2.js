//Todo: Function with different parameters

function calculateCartPrice(num1) {
  return num1;
}
// console.log(calculateCartPrice(100, 200, 300));

//? Rest Operator
function calculateCartPrice2(...num1) {
  return num1;
}

// console.log(calculateCartPrice2(200, 300, 400));

function calculateCartPrice3(val1, val2, ...num1) {
  console.log(`val1 = ${val1} & val2 = ${val2}`);
  return num1;
}

console.log(calculateCartPrice3(200, 300, 400, 500, 800));

//? pass object as an argument
const user = {
  username: "firoz",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "sam",
  price: 399,
});

//? pass array as an argument
const myNewArray = [200, 400, 600, 2000];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 150, 200, 250]));
