const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const green = document.querySelector(".green");
const orange = document.querySelector(".orange");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");
// console.log(blue);

const colorBox = document.querySelector(".color-box");

const center = document.querySelector(".center");

// Here we going to use a window object property that is getComputedStyle(element)
// here we have to pass a html element

// console.log(window.getComputedStyle(red));
// console.log(window.getComputedStyle(red).background);
// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

const magicColorChanger = (element, Color) => {
  element.addEventListener("mouseenter", () => {
    center.style.background = Color;
  });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(green, getBGColor(green));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(yellow, getBGColor(yellow));
magicColorChanger(blue, getBGColor(blue));

// ========================  From here Main code start (this is another way to do same thing) =====================================

// const getBGColor = (selectedElement) => {
//     return window.getComputedStyle(selectedElement).backgroundColor;

//     // const bgColor = window.getComputedStyle(selectedElement).backgroundColor;
//     // console.log(bgColor);

// }

// console.log(getBGColor(blue));
// console.log(getBGColor(orange));

// Here we use "click" event

/*
colorBox.addEventListener("click", (e)=>{
    
    // no need this code
    // const element = e.target.className;   // here we got all the class name in string format
    // const element = e.target.classList;  // Here we get a DOM Token List array, here class present in array format
    // const classElement = e.target.classList[1];
    // console.log(classElement); 
    

    const bgColor = getBGColor(e.target);    // Because here we have to pass the html element (not scring or array)
    // console.log(bgColor);

    center.style.backgroundColor = bgColor;
    
});

*/

// ========================  Here End ================================

// Or we can do same thing in one function. This is the example of this

// Here we use "mouseover" event
/* 
colorBox.addEventListener("mouseover", (e)=>{
    
    const bgColor = window.getComputedStyle(e.target).backgroundColor;
    // console.log(bgColor);

    center.style.backgroundColor = bgColor;
}); 
*/
