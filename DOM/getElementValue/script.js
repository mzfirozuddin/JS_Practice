function getValue() {
  const firstName = document.getElementsByClassName("fName")[0].value;
  console.log(firstName);
}

function getName() {
  const ele = document.querySelector(".fName");
  console.log(ele.value);
}

/*

const num = [10, 20, 30, 40, 50];

num.forEach((element) => {
  console.log(element);
});

num.forEach(function (element) {
  console.log(element);
});

const arr = function (element) {
  console.log(element);
};
num.forEach(arr);

*/
