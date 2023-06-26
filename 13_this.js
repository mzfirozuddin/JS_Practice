// "this" keyword
// Note :- For all regular function calls, "this" points to window object

console.log(this);

// var user = {
//     firstName : "Firoz",
//     courseCount : 4,
//     getCourseCount : function() {
//         console.log("LINE 10", this); // Here "this" point the "user" object  
//     }
// }

// user.getCourseCount()  // This is not a regular function call // This function is called by object


// function sayHello(){        // This is a regular function
//     console.log("Hello");
// }

// sayHello();  // This is a regular function call

var user = {
    firstName : "Firoz",
    courseCount : 4,
    getCourseCount : function() {
        console.log("LINE 10", this); // Here "this" point the "user" object   
        function sayHello(){
            console.log("Hello");
            console.log("LINE 30", this); // Here "this" point the "window" object because "sayHello()" is a regular function 
        }
        sayHello(); // This is a regular function call
    }
}

user.getCourseCount()  // This is not a regular function call // This function is called by object
