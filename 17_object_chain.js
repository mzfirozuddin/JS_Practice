const User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};


User.prototype.getFirstName = function(){
    console.log(`Your First Name is: ${this.firstName}`);
};

const firoz = new User("Firoz", 2);    
firoz.getCourseCount();

// This is a better way to write this code
if (firoz.hasOwnProperty("firstName")) { 

    firoz.getFirstName(); 

}



const sam = new User("Sam", 3);        
sam.getCourseCount();
sam.getFirstName(); 


