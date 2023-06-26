//* Note : A child can ask for icecream to a man but a man can not ask for icecream to a child
//* child can access parent property but parent can not access child property

function one() {
  // parent
  const username = "firozuddin";

  function two() {
    // child
    const website = "youtube.com";
    console.log(username);
  }

  //   console.log(website); //* Throws an error because "website" is child's property parent can't access it
  //* code run line by line that's why two() does not execute

  two();
}

// one();

if (true) {
  const username = "firoz";

  if (username === "firoz") {
    const website = " youtube";
    console.log(username + website);
  }

  //   console.log(website); //* error : website is not defined
}

// console.log(username); //* error : username is not defined

//! ++++++++++++++++++++  interesting +++++++++++++++++++++++

function addone(num) {
  return num + 1;
}

console.log(addone(5));

const addtwo = function (num) {
  return num + 2;
};

console.log(addtwo(5));

/* 

console.log(addone(5));

function addone(num) {
  return num + 1;
}

console.log(addtwo(5)); //* error : Cannot access 'addtwo' before initialization

const addtwo = function (num) {
  return num + 2;
}; 

*/
