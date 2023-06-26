//? IIFE : Immediately Invoked Function Expression

// (function chai() {
//   console.log(`DB CONNECTED`);
// })();

//* Syntax :- (function_defination)(function_call)

//! Why need IIFE?
//  => Global scope ki pollution se problem hoti he kahi bar. Ohi global scope ki jo variable hai or
//     jo vi declearation hai uski pollution ko hatane ke liye hum IIFE ka use karte hai.

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})(); //* here semicolon(;) is must for termination the execution of IIFE

// If we do not add semicolon(;) we can not execute two IIFE back to back

((name) => {
  // unnamed IIFE or simple IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})("firoz");
