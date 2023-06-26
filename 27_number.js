const score = 400;
console.log(score);

const balence = new Number(100);
console.log(balence);

// console.log(balence.toString());
console.log(balence.toString().length);
console.log(balence.toFixed(2)); // it fixed 2 Precision value after decimal

const otherNumber = 23.8966;
// const otherNumber = 123.8966;
// const otherNumber = 1123.8966;
console.log(otherNumber.toPrecision(3)); // when use toPrecision() method then be careful

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //* By default it returns us standred value
console.log(hundreds.toLocaleString("en-IN")); //* It returns indian standred value
console.log(hundreds.toLocaleString("en-US")); //* Now it returns indian standred value

//* MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER in Number
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
