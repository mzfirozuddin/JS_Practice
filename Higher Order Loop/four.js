//? If we want to return some value using forEach loop what will happen. Lets see

const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//   console.log(item);
// });
// console.log(values); //* undefined

const values = coding.forEach((item) => {
  return item;
});
console.log(values); //* undefined

//! Note :- forEach do not return any value
