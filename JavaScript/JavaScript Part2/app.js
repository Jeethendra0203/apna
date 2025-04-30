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

let marks4 = 22;

if ((marks4 > 35 && marks4<=80) ||  !false) {
    console.log("pass")
} else {
    console.log("fail")
}


//Practice Qs

let str1 = "apple";
console.log(str1[0])
console.log(str1.length)

if ((str1[0] === "a") && (str1.length > 3)) {
    console.log("Good String")
}
else {
    console.log("Not a good String")
}


let numq = 12;

if ((numq%3 === 0) && ( (numq+1 == 15) || (numq-1 == 11))) {
    console.log("Safe")
} else {
    console.log("Unsafe")
}

var age8 = 75
age8 > 24 ? console.log("yes") : console.log("no");

//truthy and falsy

let string = " ";

if(string) {
    console.log("string is not empty")
} else {
    console.log("string is empty")
}


let num = 0;

if(num){
    console.log("num is not equal to 0")
} else {
    console.log("num is equal to 0")
}

//Switch statment

let color1 = "green"

switch(color1) {
    case "red" :
        console.log("stop")
        break;
    case "yellow" :
        console.log("slow down")
        break;
    case "green" :
        console.log("Go")
        break;
    default :
        console.log("Broken Ligths")
}

console.log("after switch")

//Practice Qs

let day = 8;

switch(day) {
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tusday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;        
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Satarday");
        break; 
    case 7 :
        console.log("Sunday");
        break;   
    default:
        console.log("wrong day")    
}

// alert("Something is wrong!")
console.log("This is a simple log")
console.error("This is a simple error")
console.warn("This is a warn error")

// let firstName1 = prompt("enter your name :")
// console.log(firstName1)

// let firstName2 = prompt("enter first name");
// let lastName2 = prompt("enter last name");
// let msg = "welcome" +" "+ firstName2 +" "+ lastName2;
// alert(msg);


//Practice Qs 1

let num1 = 80;

if(num1 %10 === 0) {
    console.log("good");
} else {
    console.log("bad")
}

//Practice Qs 2

// let name1 = prompt("enter your name");
// let age2 = prompt("enter your age");

// alert(`${name1} is ${age2} years old`)


//Practice Qs 3

let Quarter = 1;

switch(Quarter) {
    case 1:
        console.log("Months in Quarter 1: January,February,March");
        break;
    case 2:
        console.log("Months in Quarter 2: April,May,June");
        break;
    case 3:
        console.log("Months in Quarter 3: July,August,September");
        break;
    case 4:
        console.log("Months in Quarter 4: October,November,December");
        break;
    default: console.log("Not a Quarter")    
}

//Practice Qs 4

let str2 = "Anaconda";

if( (str2[0] == "A") || (str2[0] == "a") && (str2.length > 5) ) {
    console.log("Golden String")
} else {
    console.log("Not a golden string")
}

//Practice Qs 5

let x = 3;
let y = 33;
let z = 333;

if(x > y) {
    if(x > z){
    console.log("x, is the Largest")
    } else {
        console.log("z, is the Largest")
    }  
} else {
    if(y > z) {
        console.log("y, is the Largest") 
    }
    else {
        console.log("z, is the Largest") 
    }
}

//Practice Qs 6

let dom1 = 23358;
let dom2 = 200558;

if((dom1%10)==(dom2%10)) {
    console.log("numbers have same last digit which is", dom1%10);
} else {
    console.log("numbers don't have same last digit");
}