let score = "33";
// let score = "33abc";
// let score = true;

console.log(typeof score);    // to check the data type we use "typeof"
console.log(typeof(score));

// type conversion
let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

        //Short Note 
// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0


let isLoggedIn = 1;
// let isLoggedIn = "firoz";
// let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

       // short note
// 1 => true ; 0 => false
// "" => false
// "firoz" => true



let num = 15;
let stringNum = String(num);
console.log(stringNum);
console.log(typeof stringNum);