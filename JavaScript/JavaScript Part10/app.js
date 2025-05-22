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


// function sayHello() {
//     alert("Hello");
// };

// function sayName() {
//     alert("Apna college");
// };


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

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// };

// btn.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);

//--------- Keyboard Events

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//     console.log("code = ", event.code);  // ArrowUp(U), ArrowLeft(L), ArrowDown(D), AltRight(R)
//     if(event.code == "KeyU") {
//         console.log("character moves Up");
//     } else if(event.code == "KeyD") {
//         console.log("character moves down");
//     } else if(event.code == "KeyL") {
//         console.log("character moves left");
//     } else if(event.code == "KeyR") {
//         console.log("character moves right");
//     }
// });


//------- From Events 


// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log(form)

//     let user = this.elements[0]; // form.elements[0]
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });


//------- More Events 

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function () {
//     console.log("change event");
//     console.log("final value =", this.value)
// });

// user.addEventListener("input", function () {
//     console.log("input event");
//     console.log("final value =", this.value)
// });

let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText = inp.value;
});


