//---- Array Methods

//---- forEach
console.log("----forEach");

let arr = [1, 2, 3, 4, 5];

arr.forEach((el) => {
    console.log(el);
});

arr.forEach(function (el) {
    // console.log(el);
});

let print = function (el) {
    console.log(el);
};
//---- arr.forEach(print);

//---- Map
console.log("----Map");

let num = [1, 2, 3, 4,];

let double = num.map( (el) => {
    return el*el;
});
console.log("mul",double);

let students = [{
    name: "jeethu",
    marks: 85,
 }, 
  {
    name: "manoj",
    marks: 89,
 },
   {
    name: "jeethu",
    marks: 90,
 },
];

let gpa = students.map((el) => {
    return el.marks / 10;
},)
console.log(students);
console.log("gpa",gpa);

//---- filter
console.log("----filter");

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9, 10, 11, 12];

let ans = nums.filter((el) => {
    return el % 2 == 0;   // even -> true, odd -> false
} );
console.log("even numbers",ans);

//---- every
console.log("----every");

let even = [2, 4, 6].every((el) => (el% 2 == 0)); //even / true
let even1 = [2, 4, 6, 9,].every((el) => (el% 2 == 0));            // false
let odd = [1, 3, 5].every((el) => (el% 2 != 0));  // odd / true
let odd1 =[1, 2, 3, 5, 6].every((el) => (el% 2 != 0));            //false
console.log(even);
console.log(even1);
console.log(odd);
console.log(odd1);


//---- reduce
console.log("----reduce");

let numm = [1, 2, 3, 4];
let finalVal = numm.reduce((res, el) => {
console.log(res);
  return  res + el;
});  
console.log(finalVal);

// Maximum in Array using reduce method
console.log("----Maximum in Array using reduce method");

// let array = [1, 3, 2, 4, 22, 5, 6, 7, 5, 9, 10];

// let max = -1;
// for(let i=0; i<array.length; i++) {
//     if(max < array[i]) {
//         max =array[i];
//     }
// };
// console.log(max);

let array = [1, 3, 2, 4, 22, 5, 6, 7, 5, 9, 10];

let max = array.reduce((max, el) => {       // reduce method
    if(max < el) {
        return el;
    } else {
        return max;
    }
});
console.log(max);

//---- Practice Qs
console.log("----Practice Qs");

// 1. cheack if all numbers in our array are multiples of 10 or not.
console.log("----Practice Qs1");

let numms = [10, 20, 30, 40, 50, 60];

let anss = numms.every((el) => el % 10 == 0);
console.log(anss)

// 2. cheack a function to find the min number in an array.
console.log("----Practice Qs2");

let ary = [1, 3, 2, 4, 2, 5, 6, 7, 9];

let min = ary.reduce((min, el) => {
    if(min < el) {
        return min;
    } else {
        return el;
    }
});
console.log(min);

// using functions

function getMin(ary) {
    let min = ary.reduce((min, el) => {
    if(min < el) {
        return min;
    } else {
        return el;
    }
});
    return min;
}
// console.log(getMin(ary));

//---- Default Parameters
console.log("----Default Parameters");

function sum(a, b = 3) {
    return a + b;
};
console.log(sum(5));

//---- Spread  3 dots(...)
console.log("----Spread");

let arr1 = [1,2,3,4,5,6,7,8,9];
console.log(Math.min(...arr1));
console.log(Math.max(...arr1));
console.log(...arr1)
console.log(..."Jeethu");

//---- Spread with (Array Literals)
console.log("----Spread with (Array Literals)");

let ar = [1,2,3,4,5];
let newArr = [...ar];
let chars = [..."hello"];
console.log(chars);
let odd2 = [1, 3, 5, 7, 9];
let even2 = [2, 4, 6, 8, 10];
let numss = [...odd2, ...even2];
console.log(odd2)
console.log(even2)
console.log(numss)

//---- Spread with (object Literals)
console.log("----Spread with (object Literals)");

const data = {
    email: "jeethu@gamil.com",
    password: "abcd",
};
const dataCopy = {...data, id: 123, country: "India"};
console.log(dataCopy);

let aar = [1, 2, 3, 4, 5]; // value
let obj1 = {...aar};  // obj -> key:val / index will be the key.
let obj2 = {..."hello"};
console.log(obj1,obj2);


//---- Rest     / opposite to spread.
console.log("----Rest");

function summ(...args) {
    return args.reduce((summ, el) => summ + el);
};
console.log(summ(1, 2, 3, 4, 12));


function min2(msg, ...args) {
    console.log(msg);
    return args.reduce((min2, el) => {
      if(min > el) {
        return el;
      } else {
        return min2;
      }
    })
};
console.log(min2("hello",1, 2, 3, 43, 35, 3564, 0, -2));

//---- Destructuring 
console.log("----Destructuring");

let  names = ["Tony","bob","steve","tom","jerry"];
// let winner = names[0];
// let runnerup = names[3];
// let secondRunnerup = names[2];

let [winner, runnerup, ...others] = names;
console.log(`winner ${winner}`);
console.log(`runnerup ${runnerup}`);
console.log(`others ${others}`);

//---- Destructuring (objects)
console.log("----Destructuring (objects)");

const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["english","kannada","math","science","social"],
    username: "karan123",
    password: "kar@n",
    
};
let {username: user, password: secret, city: place = "Bangloer", age} = student;
console.log(user);
console.log(age);
console.log(place);


// Assignment Qs

// Qs1.Square and sum the array elements using the arrow function and then find the average of the array.
console.log("Assignment Qs1");

let nuum = [1, 2, 3, 4, 5];

const square = nuum.map((nuum) => nuum * nuum);
console.log(square);

let suum = square.reduce((acc, cur) => acc + cur, 0);

let avg = suum / nuum.length;
console.log(avg);

// Qs2.Create a new array using the map function whose each element is equal to the original element plus 5.
console.log("Assignment Qs2");

let numberss = [2, 4, 6, 8, -2, -4];

console.log(numberss.map((numberss) => numberss + 5));

// Qs3.Create a new array whose elements are inuppercase of words present in the original array.
console.log("Assignment Qs3");

let str = ["adam","bob","tony","tom","eva"];
console.log(str.map((str) => str.toUpperCase()));

// Qs4.Write a function called double And Return Args which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of the additional arguments doubled.
console.log("Assignment Qs4");

const doubleAndReturnArgus = (arr2, ...args) => [
    ...arr2,
    ...args.map((v) => v * 2),
];

console.log(doubleAndReturnArgus([1, 2, 3], 4, 4));  // [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgus([2], 10, 4));  // [2, 20, 8]


// Qs5.Write a function called merge Objects that accepts two objects and returns a new Object which contains all the keys and valuse of the first object and second Object.
console.log("Assignment Qs5");

const mergeObjects = (obj3, obj4) => ({...obj3, ...obj4});
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d:4 })); // {a: 1, b: 2, c: 3, d:4 }