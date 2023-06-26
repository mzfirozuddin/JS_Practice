// slice() method is used to slice the array
// slice() has two parameter
// arrayName.slice(start_index, end_index) // strat_index is inclusive and end_index is exclusive

var user = ["Neha","Tom","Bill","Harry","Rahul","Rajes","Cate","Elizabeth"];
console.log(user.slice(1,3));    // start from 1st index and end in 2nd index
console.log(user.slice(1,5));   // start from 1st index and end in 4th index
console.log(user.slice(1));     // start from 1st index and it takes all after 1st index




// splice() method is used to remove and add some element in the array
// arrayName.splice(start_index, count_element, new_value);
// count_element => It count given element from start_index and delete those element,
// new_value => After delete, new_value is add in this position
// you can pass as many value as you like

var newUser = ["Neha","Tom","Bill","Harry","Rahul","Rajes","Cate","Elizabeth"];
// newUser.splice(1,3); // it counting start from 1st element and count 3 element and delete them 
// console.log(newUser);


// newUser.splice(1,3, "Hi"); 
// console.log(newUser);

newUser.splice(1,3, "Hi", "Hello"); 
console.log(newUser);