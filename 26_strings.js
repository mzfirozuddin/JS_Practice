const name = "Firoz";
const repoCount = 20;

// console.log(name + repoCount + " value");

//* String Literel or String Interpolation
console.log(`Helo my name is ${name} and my repo count is ${repoCount}`);

//* Another way to declear a string
const gameName = new String("mirza-firoz-uddin");

//* Accessing the string character
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); //* length of string

console.log(gameName.toUpperCase()); //* convert the string to upper case

console.log(gameName.charAt(2)); //* return the 2nd index character

console.log(gameName.indexOf("r")); //* return the index of first occurence of 'r'

//* substring() method in string
// string_name.substring(start_index, end_index); -> start_index is include & end_index is exclude
const newString = gameName.substring(0, 4);
// const newString = gameName.substring(-17, 4);
//* In substring if we pass negative index, then compiler ignore this and set value as 0
console.log(newString);

//* slice(start_idx, end_idx) method in string; end_idx is optional
const anotherString = gameName.slice(-15);
// const anotherString2 = gameName.slice(-17, -5);
const anotherString2 = gameName.slice(-15, 6);
console.log(anotherString);
console.log(anotherString2);

//* trim() method in String
const newStringOne = "     Firoz      ";
console.log(newStringOne);
console.log(newStringOne.trim()); //* trim() removes the white space from both the side of a string
//! trimStart() & trimEnd() also same as trim()

//* replace("old_value", "new_value") method in string
const url = "https://firozuddin.com/firoz%20uddin";
console.log(url.replace("%20", "-"));

//* indludes() method in string
console.log(url.includes("firoz"));
console.log(url.includes("mirza"));

//* if we want to convert string to array based on some criteria
console.log(gameName.split("-"));
