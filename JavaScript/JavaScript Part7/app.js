//---- this Keyword
console.log("----this Keyword");

const student = {
    name: "Jeethu",
    age: 22,
    eng: 88,
    math: 77,
    phy: 87,
    getAvg() {
        console.log(this);
        let avg =  (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got marks = ${avg}`);
    }
};
console.log(student.getAvg());


//---- try & catch
console.log("----try & catch");


console.log("hi");
console.log("hi");

let a = 5;
try {
    console.log(a);
} catch(error) {
    console.log("caught an error a is not defined");
    console.log(error);
}

console.log("hi");
console.log("hi");


//---- Miscellaneous Topics
console.log("----Miscellaneous Topics");

//---- Arrow Functions
console.log("----Arrow Functions");

const sum = (a, b) => {
    console.log(a + b)
};
sum(2, 2);

const cube = n => {
    return n*n*n;
}
console.log(cube(2));

const pow = (a, b) => {
    return a**b;
};

const hello = () => {
    console.log("hello")
}

//---- Arrow Functions (Implicit return)
console.log("----Arrow Functions (Implicit return)");

const mul = (a, b) => (a * b);  // single line code
console.log(mul(2,4));

//---- set interval Function
console.log("----set interval");

let id = setInterval( () => {
    console.log("how you doin");
}, 2000);
console.log(id);
clearInterval(id);

let id1 = setInterval( () => {
    console.log("hello wrold");
}, 3000);
console.log(id1);
clearInterval(id1);


//---- this with Arrow Function

const student1 = {
    name: "Jeethu",
    marks: 88,
    prop: this,  // global scope
    getName: function () {
        console.log("----this with Arrow Function");
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);  // parent's scope -> window
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);  // student
        }, 5000);
    },
    getInfo2: function () {
        setTimeout( function () {
            console.log(this);  // window
        }, 5000);
    },
};
    setTimeout(() => {
    console.log(student1.getName());
    console.log(student1.getMarks());
    }, 5000);   
    console.log(student1.getInfo1());
    console.log(student1.getInfo2());

//---- Practice Qs

// 1. Write an arrow function that returns the square of a number 'n'.
console.log("----Practice Qs1");

const square = n =>  (n*n);
console.log(square(4));

// 2. Write a function that prints "Hello world" 5 times at interval of 2s each.
console.log("----Practice Qs2");

    // let id2 = setInterval(() => {
    // console.log("Hello world");
    // }, 2000);

    // setTimeout(() => {
    // clearInterval(id2);
    //  console.log("clear interval ran");
    // }, 10000);


//---- Assignment Qs

// 1. Write an arrow function named arrayAverage that accepts an array of numbers and retuens the average of those numbers.
console.log("----Assignment Qs1");

const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr) {
        total += number;
    } 
    return total / arr.length;
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));


// 2. Write an arrow function named isEven() that takes a single numbers as arguments and returns if it is even or not.
console.log("----Assignment Qs2");

let num = 4;
const isEven = (num) => num % 2 == 0; 
console.log(isEven(8));

// 3. What is the output of the following code:
console.log("----Assignment Qs3");

    // const object = {
    //     message: 'Hello world',

    //     logMessage() {
    //  console.log(this.message);
    //     }
    // };

    // setTimeout(object.logMessage, 1000);


// 4. What is the output of the following code:
console.log("----Assignment Qs4");

let length = 4;

function callBack() {
    console.log(this.length);
}

const object1 = {
    length: 5,
    method(callBack) {
        callBack();
    },
};

object1.method(callBack, 1, 2); 


//---- SetTimeout Function
console.log("----SetTimeout Function");

console.log("hi there!");

setTimeout( () => {
    console.log("apna college");
}, 4000);
console.log("Welcome to");
