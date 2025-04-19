//Template Literals

let pencilPrice = 10;
let scalePrice = 15;
// let output = "The total price is : " +(pencilPrice + scalePrice) + " Rupees.";
// let output = `The total price is : ${pencilPrice + scalePrice} Rupees.`;
// console.log(output);
console.log(`The total price is : ${pencilPrice + scalePrice} Rupees.`);

//Arithmetic Operators
let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//Assignment Op
b = a;
console.log(b);

//Unary Op
console.log(a++);
console.log(++a);

//Comparison Op
let age = 18;
console.log(age >= 18);


//....Conditional Statements....

//if Statements
console.log("before my if Statements");
let age1 = 23;
if(age1>=18) {
    console.log("You can vote");
    console.log("You can drive");
}
console.log("after my if Statements");

if(age1 > 20) {
    console.log("You are in your 20s");
}

let firstName = "jeethu";
if(firstName == "jeethu") {
    console.log(`Welcome ${firstName}`);
}

//Practice Qs

let color = "blue";
//Traffic Light System
if(color == "red") {
    console.log("Stop!. light color is red");
}
else if(color == "yellow") {
    console.log("Slow down. light color is yellow");
}
else if(color == "green") {
    console.log("Go!. light color is green");
}
else {
    console.log("trafic lights is broken");
}


//else if Statements
let marks1 = 110;
if(marks1 >= 80) {
    console.log("A+")
}
else if(marks1 >= 70) {
    console.log("A")
}
else if(marks1 >= 60) {
    console.log("B+")
}
else if(marks1 >= 50) {
    console.log("B")
}
else if(marks1 >= 40) {
    console.log("C+")
}
else if(marks1 >= 35) {
    console.log("C")
}
else if(marks1 < 35) {
    console.log("Fail")
}


//else if example
let month = "july";

if(month === "january") {
    console.log("Winter is here")
}
else if(month === "march") {
    console.log("Summer is here")
}
else if(month === "june") {
    console.log("Rainy is here")
}
else if(month === "octobar") {
    console.log("Spring is here")
}
else if(month == "july") {
    console.log("you entered correctly"); 
}


let mon = 77;
if(mon == 77) {
    console.log("num")
}

if(mon === 77) {
    console.log("String")
}

//Practice Qs

let size = "s";

if(size == "XL") {
    console.log("Price: Rs.250;")
}

else if(size == "XL") {
    console.log("Price: Rs.250;")
}

else if(size == "L") {
    console.log("Price: Rs.200;")
}

else if(size == "M") {
    console.log("Price: Rs.100;")
}

else {
    console.log("Price: Rs.50;")
}

//Nested if else Statement

let marks = 99;

if(marks >= 35) {
    console.log("PASS")
    if(marks >= 90) {
        console.log("O")
    } else {
        console.log("A")
    }
} 
else {
    console.log("Better luck next time!")
}

//Logical Operators  AND, OR, NOT.

let marks2 = 88;

if(marks2 >= 90 && marks2 <= 100) {
    console.log("Result: pass")
    console.log("Grade: O")
}
else if(marks2 >= 80 && marks2 <= 89) {
    console.log("Result: pass")
    console.log("Grade: A+")
}
else if(marks2 >= 70 && marks2 <= 79) {
    console.log("Result: pass")
    console.log("Grade: A")
}
else if(marks2 >= 60 && marks2 <= 69) {
    console.log("Result: pass")
    console.log("Grade: B+")
}
else if(marks2 >= 50 && marks2 <= 59) {
    console.log("Result: pass")
    console.log("Grade: B")
}
else if(marks2 >= 35 && marks2 <= 49) {
    console.log("Result: pass")
    console.log("Grade: C")
}
else  {
    console.log("Result: fail")
    console.log("Grade: --")
}
  
//OR Operators
let marks3 = 33;

if(marks3 >= 50 || marks3 <= 55) {
    console.log("Result: pass")
    console.log("Grade: O")
}

//NOT Operators
let marks4 = 66;
if (!(marks < 35)) {
    console.log("true")
    console.log("true")
}