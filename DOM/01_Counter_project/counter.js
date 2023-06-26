let counter = document.querySelector(".counter");
let followers = document.querySelector(".followers");

var count = 0;
setInterval( ()=>{
    if (count < 1000) {
        count++;
        counter.innerText = count; 
    }
    
},1)


setTimeout( ()=>{
    followers.innerText = "Followers on Instagram";
},4000)