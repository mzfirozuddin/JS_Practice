//for-of loop 
const names = ["Youtube","Facebook","Instagram","Netflix","Amazon"];

//for-of loop is use for print the array 

for(const n of names){
    console.log(n);
}

console.log("===========================");


//for-in loop 
const symbols = {
    yt : "Youtube",
    ig : "Instagram",
    fb : "Facebook",
    az : "Amazon",
    nf : "Netflix"
}

//for-in loop is use for print the object

for(const n in symbols){
    console.log(n);  // it print only the key
}

console.log("===========================");

for(const n in symbols){
    console.log(symbols[n]);  // it print only the value
}

console.log("===========================");

for(const n in symbols){
    console.log(`key is: ${n} and value is: ${symbols[n]}`);  // it print only the value
}