//---- Selecting Elements by Class Name

// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++) {
//     smallImages[i].src = "assets/spy.jpeg";
//     console.log(`value of image no. ${i} is changed.`);
// }

//Query Selectors

// console.log(document.querySelectorAll("p"));

// console.log(document.querySelector("#description"));

// console.log(document.querySelector(".oldImg"));

// console.dir(document.querySelectorAll("div a"));



// Manipulating Style (with style attribute)

// let links = document.querySelectorAll(".box a");

// for(links of links) {
//     links.style.color = "red";  // inline style 
// }

// for(let i=0; i<links.length; i++) {
//     links[i].style.color = "red";
// }


// Practice Qs 

// Add the following element to the container using only JavaScript and the DOM methods.
// 1. a <p> with red text that says "Hey I'm red!"
// 2. an <h3> with blue text that says "Hey I'm blue h3!"
// 3. a <div> with black border and pink background color with the following elements inside of it:
// . another <h1> that says "I'm in a div"
// . a <p> that says "ME TOO!"


let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector('body').prepend(para1);

para1.classList.add("red");


let h3 = document.createElement('h3');
h3.innerText = "Hey I'm blue h3!";
document.querySelector('body').prepend(h3);

h3.classList.add("blue");

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('para2');


h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector('body').prepend(div);
