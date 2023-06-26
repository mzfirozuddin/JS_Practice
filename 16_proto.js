const User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};

// Here we inject something from outside the "User"  
//here we inject a new method called "getFirstName()" to "User", we can also inject properties also
User.prototype.getFirstName = function(){
    console.log(`Your First Name is: ${this.firstName}`);
};

const firoz = new User("Firoz", 2);    
// console.log(firoz);

// Now firoz can get access all the property and method
// console.log(firoz.firstName);
firoz.getCourseCount();
firoz.getFirstName(); 


const sam = new User("Sam", 3);        
// console.log(sam);
sam.getCourseCount();
sam.getFirstName();


// Note:- Here "new" keyword also find all the new prototype that is inject from outside