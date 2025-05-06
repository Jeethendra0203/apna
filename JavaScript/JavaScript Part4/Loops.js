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