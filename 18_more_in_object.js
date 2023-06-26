const User = {
    name : "",
    getUserName : function() {
        console.log(`User name is: ${this.name}`);
    }
};

// This is one way to create and initialized value
const firoz = Object.create(User);
console.log(firoz);
firoz.name = "Mirza Firoz Uddin";
firoz.getUserName();

// Here we use constructor, that's why here we pass an object
const sam = Object.create(User, {
    name : {value : "Sammy"},
    courseCount : {value : 3},
});

sam.getUserName();


