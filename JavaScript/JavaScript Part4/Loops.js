//---- LOOPS

for(let i=1; i<=5;i++) {
    console.log(i)
}

//---- Printing odd numbers

console.log("Printing odd numbers")

for(let i=1; i<=10; i = i+2) {
    console.log(i)
}

console.log("backwords")

for(let i=9; i>=0; i = i-2) {
    console.log(i)
}


//---- Printing even numbers 

console.log("Printing even numbers")

for(let i=2; i<=10; i = i+2) {
    console.log(i)
}

console.log("backwords")

for(let i=10; i>=2; i=i-2) {
    console.log(i)
}

//---- Infinite Loops

// for(i=1; i>=0; i++) {
//     console.log(i)
// }

// for(i=1; ; i++) {
//     console.log(i)
// }


//---- Printing Multiplication Table for 5

console.log("Multiplication Table for 5")

for(let i=5; i<=50; i=i+5) {
    console.log(i);
}

// let n = prompt("Write your number");   //---- using prompt to print Multiplication Table.
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n) {
//     console.log(i);
// }

//---- Nested for Loop

for(let i=1; i<=3; i++) {
    console.log(`outerloop ${i}`)
    for(let j=1; j<=3; j++) {
        console.log(j)
    }
}

//---- While Loops

let i = 1;
console.log("While loops")
while (i<=5) {
    console.log(i);
    i++;
}

let n = 2;
console.log("even numbers using while loops")
while(n<=10){
    console.log(n);
    n=n+2;
}

//---- Break Keyword

let j = 1;
console.log("Break Keyword")
while(j<=5) {
    if(j == 3){
        break;
    }
    console.log(j);
    j++;
}

console.log("We used break at 3.");


//---- Loops with Arrays

let fruits = ["mango","apple","banana","litchi","orange","berry"];
console.log("Loops with array")
for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

//backwords

// for(let i=fruits.length-1; i>=0; i--) {
//     console.log(i, fruits[i]);
// }


//---- Nested loops with Nested arrays

let heroes = [["ironman","spiderman","thor"], ["superman","batman","flash"]];
console.log("Nested loops with Nested arrays");
console.log("Ex:1");
for(let i=0; i<heroes.length; i++){
    console.log(i, heroes[i], heroes[i].length);
    for(let j=0; j<heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}

let student = [["charn", 96], ["abhi",95], ["raghu", 97]];
console.log("Ex:2");
for(let i=0; i<student.length; i++) {
    console.log(`info of student #${i+1}`);
    for(let j=0; j<student[i].length; j++) {
        console.log(student[i][j]);
    }
}


//---- for of loop

let fruits1 = ["mango","apple","banana","litchi","orange","berry"];

for(fruit of fruits1) {
    console.log(fruit)
}


for(char of "apnacollege") {
    console.log(char)
}


//---- Nested for of loop

let heroes1 = [["ironman","spiderman","thor"], ["superman","batman","flash"]];

for(list of heroes1) {
    for(hero of list) {
        console.log(hero)
    }
}


//---- Practice Qs

// 1. Write a JS program to delete all occcurences of element "num" in the given array.
// Ex: if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num=2.     result should be arr=[1, 3, 4, 5, 6, 3]

console.log("Practice Qs 1");
 
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for(let i=0; i<arr.length; i++) {
    if(arr[i] == num ) {
        arr.splice(i, 1);
    }
}

console.log(arr);

// 2. Write s JS program to find the no of digits in a number.
// Ex: if number = 287152, count = 6 

console.log("Practice Qs 2");

let number = 287152;
let count = 0;

let copy = number;

while(copy > 0) {
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

// 3. Write s JS program to find the sum of digits in a number.
// Ex: if number = 287152, sum = 25 

console.log("Practice Qs 3");

let number1 = 287152;
let sum = 0;

let copy1 = number1;

while(copy1 > 0) {
    digit = copy1 % 10;
    sum+= digit;
    copy1 = Math.floor(copy1/10);
}
console.log(sum);
    
// 4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by the integer.]
// Ex: 7!(factorial of 7) = 1*2*3*4*5*6*7 = 5040
//     5!(factorial of 5) = 1*2*3*4*5 = 120
//     3!(factorial of 3) = 1*2*3 = 6
//     0! is always 1

console.log("Practice Qs 4");


let no =3;
let factorial = 1;

for(let i=1; i<=no; i++) {
    factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`);

// 5. Find the largest number in an array with only positive numbers.

console.log("Practice Qs 5");


let ar = [2, 5, 10, 4, 2, 7, 1, 9];
let largest =0;

for(let i=0; i<ar.length; i++) {
    if(largest < ar[i]) {
        largest = ar[i];
    }
}
console.log(largest);
