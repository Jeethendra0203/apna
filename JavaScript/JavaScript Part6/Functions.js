//---- Functions 

console.log("----Functions")

function hello() {
    console.log("hello");
}
hello();

function printName() {
    console.log("Jeethu");

}
printName();

function print1to5() {
    for(let i=1; i<=5; i++) {
        console.log(i)
    }
}
print1to5();


function isAdult() {
    let age = 19;
    if(age>=18) {
        console.log("adult");
    } else {
        console.log("not adult")
    }
}
isAdult();

//---- Practice Qs1
console.log("----Practice Qs1")

function printPoem() {
    console.log("Twinkle Twinkle, little Star:");
    console.log("how i wonder what you are");
}

printPoem();


//---- Practice Qs2
console.log("----Practice Qs2");

function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice();

//---- Functions with Arguments

console.log("----Functions with Arguments");

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}
printInfo("Jeethu",22);
printInfo("raghu", 21)

function sum(a, b) {
    console.log(a+b);
}
sum(1, 9);
sum(1, 7);


//---- Practice Qs3 / Create a Function that gives us the avarage of 3 numbers.
console.log("----Practice Qs3");

function calAvg(a, b, c) {
    let avg = (a+b+c) / 3;
    console.log(avg)
}
calAvg(2, 4, 6);


//---- Practice Qs4 / Create a Function that prints the multiplication table of a number.
console.log("----Practice Qs4");

function printTable(n) {
    for(let i=n; i<=n*10; i+=n) {
        console.log(i);
    }
}
printTable(8);

//---- Return Function
console.log("----Return Function");


function sum1(a, b) {
    return a+b;
}
console.log(sum1(sum1(4, 4), 2));
console.log(sum1(4, 4));


//---- Practice Qs5 / Create a Function that returns the sum of numbers from 1 to n.
console.log("----Practice Qs5");


function getSum(n) {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(5));


//---- Practice Qs6 / Create a Function that returns the concatination of all strings in an array.
console.log("----Practice Qs6");

let str = ["hi","hello","bye","!"];

function cancat(str) {
    let result = "";
    
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}
console.log(cancat(str));


//---- Scope
console.log("----Scope");

// Function Scope
console.log("----Function Scope");

let sum3 = 56; // Global Scope 

function calSum1(a, b) {
    let sum = a+b;  // Function Scope
    console.log(sum);
}
calSum1(2, 6);
console.log(sum3);

// Block Scope 
console.log("----Block Scope");

for(let i=1; i<=5; i++) {
    console.log(i);        // inside / Block Scope
}
 // console.log(i);        // outside / Block Scope
    
// Lexical Scope
console.log("----Lexical Scope");

function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() { // Function Scope
        console.log(x);
        console.log(y);

    }
        innerFunc();
}   
console.log(outerFunc());


//---- Practice Qs7 / What will be the output?
console.log("----Practice Qs7");

let greet = "hello";          // Global Scope 

function changeGreet() {
    let greet = "namaste";    // Function Scope
    console.log(greet);
    function innerGreet() {
        console.log(greet);   // Lexical Scope
    }
}
console.log(greet);
changeGreet();


//---- Functions Expressions
console.log("----Functions Expressions");

let name = "Jeethu";

let sum4 = function(a, b) {
    return a+b;
}
console.log(sum4(5, 5)); 

let hlo = function() {    
    console.log("Hi");
}

hlo = function() {              // changing the variable value / final output will be "namaste",
    console.log("namaste");
};


//---- Higher Order Functions 

function multipleGreet(func, count) {      // higher order functions 
    for(let i=1; i<=count; i++) {
        func();
    }
}
let greet1 = function() {
    console.log("hello");
}
multipleGreet(greet1, 8); 


//---- Higher Order Functions (returns)

function oddOrEvenFactory(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }
    } else if(request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    } else {
        console.log("wrong request");
    }
}
let request = "even"; // odd