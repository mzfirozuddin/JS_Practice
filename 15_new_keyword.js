// This is a prototype or blueprint
// This is the another way to defining objects
// This is the functional approch to define a object
const User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};

const ram = User("Ram", 2);  
console.log(ram); 
// This is a regular call of a function, that's why it does not create any object of "User" 
// since it is a regular function call, here "this" keyword pointing the window object or global object,
// And here global object is empty that's why it shows "undefined"


// If we want to create any object then we need "new" keyword
const firoz = new User("Firoz", 2);    // This is created a new user for "User" prototype named "firoz"
console.log(firoz);

const sam = new User("Sam", 3);        // This is created another new user for "User" prototype named "sam"
console.log(sam);
// It is not a regular function call, here "this" keyword pointing the inside of "User" object


// 1. "new" keyword is responsible for access the "User" syntax
// 2. "new" keyword is responsible for invokeing the constructor and creating a unic instance every single time
// 3. "new" keyword is also take care of "this" keyword