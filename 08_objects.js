var iPhone = {
  model: "iPhone 14 pro max", // this is key value pair
  price: 99000, // key : value
  storage: 256,
  camera: "12 pixel",
  launchDate: "15 Aug 2022",
  network: "5G",
  noOfBands: 12,
};

console.log(iPhone.model); // dot(.) operator is used for access the object
console.log(iPhone.camera);
// console.log(iPhone[price]); // throws an error : price is not defined
console.log(iPhone["price"]); // Now,this is perfect. when we use square brackets then key name should be in double cuotes("")

// we can also change the value
console.log(iPhone.noOfBands); // before change the value
iPhone.noOfBands = 15;
console.log(iPhone.noOfBands); // after changed the value
console.log(iPhone); // here we print the whole object
console.table(iPhone); // here we print the whole object in a table
