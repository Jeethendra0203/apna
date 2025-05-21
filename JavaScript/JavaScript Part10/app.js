// let btns = document.querySelectorAll("button");

// for(btns of btns) {
//     // btns.onclick = sayHello;
//     // btns.onclick = sayName;

//     // btns.addEventListener("click", sayHello);
//     // btns.addEventListener("click", sayName);
//     btns.addEventListener("dblclick", function () {
//         console.log("you double clicked")
//     });
// };


function sayHello() {
    alert("Hello");
};

function sayName() {
    alert("Apna college");
};


//-------- Event Listeners for Elements

// let p = document.querySelector("p");

// p,addEventListener("click", function() {
//     console.log("para was clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function() {
//     console.log("mouse inside box");
// });


//-------- this in Event Listeners

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
};

btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);


