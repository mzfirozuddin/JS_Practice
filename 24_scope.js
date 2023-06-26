//? TOPIC:- scope( let VS const VS Var )

console.log(name); // undefined
var name = "firoz";

/* 
console.log(name);   //* throws an error: Cannot access 'name' before initialization
let name = "firoz";
*/

if (true) {
  var firstName = "Firoz";
}

console.log(firstName); // Firoz

/* 
if (true) {
  let firstName = "Firoz";
}

console.log(firstName); //* throws an error: Cannot access 'name' before initialization
*/
