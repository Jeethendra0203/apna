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


// Assignment Qs

let h2 = document.createElement("h2");
h2.innerHTML = "<b>Assignment Qs</b>";
document.querySelector("body").append(h2);

// 1. Create a new input and output element on the page using javascript only. set the text of button to "click me"

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// 2. Add following attributes to the element: 
 // - Change placeholder value of input to "username"
 // - Change the id button to "btn"

 button.setAttribute("id", "btn");
 input.setAttribute("placeholder", "username");

// 3. Access the btn using the querySelector and button id. change the button background color to blue and text color to white.

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// 4. Create an h1 element on the page and set its text to "DOM Practice" underlined, Change its color to purple.

let h4 = document.createElement("h4");
h4.innerHTML = "<ul>DOM Practice</ul>";
document.querySelector("body").append(h4);

// 5. Create a p tag on the page and set its text to "Apna college Delta Practice", where Delta is bold. 

let p = document.createElement("p");
p.innerHTML = "Apna college <b> Delta </b> Practice";
document.querySelector("body").append(p);