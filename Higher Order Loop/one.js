//? for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  //   console.log(greet);
}

//? Maps  => It holds the key value pair ( and key must be unique because it hold unique value)

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");
map.set("INa", "India");

// console.log(map);

// for (const key of map) {
//   console.log(key);
// }

for (const [key, value] of map) {
  //* here happend array destructuring
  //   console.log(key, ":", value);
}

//! can we iterate object using "for of" loop. Let see
const myObj = {
  game1: "NFC",
  game2: "Spiderman",
  game3: "Arkham Knight",
};

// for (const [key, value] of myObj) { //* error : myObj is not iterable
//   console.log(key, ":", value);
// }

//! So, we can not iterate object using "for of" loop (for object we use other loop)
