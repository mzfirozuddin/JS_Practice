// setInterval(function, millisecond) 
// how much time it run (ex- Cricket match running time)
let a = 1;
setInterval(()=>{   
    if(a < 10){
        a++;
        console.log(a);
    }
    
},100)




// setTimeout(function, millisecond) 
// after time out this will excute (Ex- Cricket match)
// when time out declear then do nothing, when time out over then match resume
let b = 1;
setTimeout(()=>{
    b++;
    console.log(b);
},2000)