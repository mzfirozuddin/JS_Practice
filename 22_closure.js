function init(){
    let firstName = "Firoz";
    console.log("I am Init");
    
    function sayFirstName(){
        console.log(firstName);
    }

    return sayFirstName;
}

let value = init();    // Here reference of init() is stored, not over
value();             // This is Closure


// Another Enample
function doAddition(x) {
    return function(y){
        return x + y;
    };
}

let add = doAddition(4);
console.log( add(5) );   // 4 + 5 = 9
// let ans = add(5);
// console.log(ans);

console.log( doAddition(5)(6) );  // 5 + 6 = 11  // curring

