//? forEach loop

//! syntax:-
// array.forEach( callback function );  //* Note : callback function has no name

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (val) {
//   console.log(val);
// });

//* here we use arrow function
// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe); //* Here we have to pass function reference (do not call the function)

//* Here we actually get 3 parameter (current_Item, index, actual_Array)
// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoading = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoading.forEach((item) => {
  //   console.log(item);
  console.log(item.languageName);
  //   console.log(item.languageFileName);
});
