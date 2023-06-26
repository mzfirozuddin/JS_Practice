function init(){
    let firstName = "Firoz"; // this variable scope is local

    function sayFirstName(){
        console.log(firstName);
    }

    sayFirstName();
}

init();

// console.log(firstName); // throws an error:- firstName is not defined

// Note:-
// When "init()" is finished up then the context of init() is removed from global context