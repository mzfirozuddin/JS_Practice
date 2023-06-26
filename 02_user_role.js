/* 
function getUserRole(name, role){

    switch (role) {
        case "admin":
            return (`${name} is admin with all access.`);
            // break; // when we use "return" then "break" keyword is not necessary

        case "subadmin":
            return (`${name} is sub-admin with access to create and delete the courses.`);
            // break; // when we use "return" then "break" keyword is not necessary

        case "testprep":
            return (`${name} is test prep with access to create and delete test.`);
            // break; // when we use "return" then "break" keyword is not necessary

        case "user":
            return (`${name} is user to consume content.`);
            // break; // when we use "return" then "break" keyword is not necessary
    
        default:
            return (`${name} is a trial user.`);
            // break; // when we use "return" then "break" keyword is not necessary
    }
} 
*/

// anather way to define function
var getUserRole = function (name, role){

    switch (role) {
        case "admin":
            return (`${name} is admin with all access.`);

        case "subadmin":
            return (`${name} is sub-admin with access to create and delete the courses.`);

        case "testprep":
            return (`${name} is test prep with access to create and delete test.`);

        case "user":
            return (`${name} is user to consume content.`);
    
        default:
            return (`${name} is a trial user.`);
    }
}

let ans = getUserRole("Firoz", "testprep");
console.log(ans);