// Normal programming
let score = 456;

function addBonus() {        // here it is depend on "score" variable
    score = score + 45;
    return score;
}

// Functional programming

function addBonus (score) {     // here does't depend on any thing, here we pass any parameter
    return score + 45;

}

// State Change 

// This is not the write way (here variable state change many time, this is not good)
var firoz = "hey"
firoz = "hey there"
firoz = "hey there, everyone"

// This is the write way for functional programming (here variable state does't change)
var firoz = "hey"
var firozWed = "hey there"
var firozSat = "hey there, everyone"    // here we create new variable also


// In functional programming functions are treated as first class
const age = 22;
const name = "firoz";

const addScore = function() {

}

// also we can pass function as an argument
/* 
sayHello( function(){...} ){

    return function(){...}
} 
*/