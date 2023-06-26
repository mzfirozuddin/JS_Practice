//? filter :- Filter method filter out the value based on some condition (if given condition satisfied) and return a new array

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

const newNums = myNums.filter((num) => {
  //* If you use {} then you have to write return keyword
  return num > 4;
});
// console.log(newNums);

//! can we do same thing using forEach. Lets see

// const newNumbers = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNumbers.push(num);
//   }
// });

// console.log(newNumbers);
//! Yes, we can do same thing using forEach also

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// console.log(books);

//! Find those books which genre is History

const userBooks = books.filter((bk) => bk.genre === "History");
// console.log(userBooks);

//! Find those books which is publish after 2000

// const userBooks2 = books.filter((bk) => {
//   return bk.publish >= 2000;
// });
// console.log(userBooks2);

//! Find those books which is publish after 1995 and genre is History

const userBooks2 = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks2);
