const myStates = [      // This is an array
    "West Bengal",
    "Rajasthan",
    "Tamil Nadu",
    1947,
    "Maharashtra",
    "Assam"
];

// for (let i = 0; i < myStates.length; i++) {
//      console.log(myStates[i]);
    
// }

for (let i = 0; i < myStates.length; i++) {
    if(typeof myStates[i] !== "string") continue;

     console.log(myStates[i]);   
}

// for (let i = 0; i < myStates.length; i++) {
//     if(typeof myStates[i] === "string") continue;

//      console.log(myStates[i]);   
// }