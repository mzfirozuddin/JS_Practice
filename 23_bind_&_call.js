// Topic:- bind() and call() method in prototype
// Borrow a method using bind

const firoz = {
    firstName : "Mirza",
    lastName : "Firozuddin",
    role : "Admin",
    courseCount : 3,
    getInfo : function() {
        console.log(`
        First Name is ${this.firstName}
        Last Name is ${this.lastName}
        His role is ${this.role}
        and he is studing ${this.courseCount} courses
        `);
    },
}

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    Role : "Sub-Admin",
    courseCount : 4,
}
// all properties of above object is present here, only difference is getInfo() function not define here


// firoz.getInfo();
// dj.getInfo();    // this throws an error (TypeError: dj.getInfo is not a function)


// bind()
// bind() is use for binding the object
let djInfo = firoz.getInfo.bind(dj);     // bind() always gives you a reference back and you have to run this reference
djInfo();
  // OR
// firoz.getInfo.bind(dj)();     //sort form for bind and call


// call()
firoz.getInfo.call(dj);




// Note:-
// Remember two different things:-
// 1. Some properties (prototype) are attached to entire object. (Here "firoz")
// 2. Some properties (prototype) are attached towords the method which are inside the object. (Here "getInfo")
//    (here we see 2nd one)


// getInfo  VS  getInfo()
// getInfo => It means reference to that method or function
// getInfo() => It means calling the function or method