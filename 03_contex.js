sayMe("100");

function sayMe(a) {
  var bill = parseInt(a); // convert string to integer
  // var bill = a;
  console.log(bill + 10);
}

// payBill("100"); // It throws an error

var payBill = function (a) {
  // because it is a variable function, when global contex scan variable then it set undefined
  var bill = parseInt(a);
  console.log(bill + 10);
};

payBill("100");

var myName = "firoz";
console.log(myName); // It is ok, no error

console.log(hisName); // Output is undefined
var hisName = "firoz"; // when global contex scan variable then it set undefined

console.log(herName); // It throws an error, herName is not defined
// var herName = "Neha";
