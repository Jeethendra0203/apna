//---- Array (Data Structure)

//---- Creating an Array

let students = ["Bob","Tony","Robert"];
console.log(students)

let info = ["jeethu", 43, 5.6]; // Mixed Array

console.log(info.length);       // Length of the Array
console.log(info[0].length);    // length of the String
console.log(info[0][0]);        // accessing the String 0th index\

let fruits = ["mango","apple","litchi"];
console.log(fruits);
console.log(fruits[0] = "Banana");
console.log(fruits);
console.log(fruits[2] = "Orange");
console.log(fruits);
console.log(fruits[10] = "Berry");  // creates 7 empty arrays in middle, Total length of the array wiil be 11
console.log(fruits);            

//---- Array Methods

let cars = ["audi","bmw","gtr","kia","rr"];
console.log(cars);
console.log(cars.push("toyota"));      // add to end 
console.log(cars);
console.log(cars.pop());               // Delete from end & return it 
console.log(cars);
console.log(cars.unshift("ferrai"));   // add to start  
console.log(cars);
console.log(cars.shift());             // Delete from start & return it 
console.log(cars);


//---- Practice Qs

// 1  For the given start state of an array, change it to final form using array methods. -- start = ["january","july","march","august"]; final = ["july","june","march","august"];

let months = ["january","july","march","august"];
console.log(months);
console.log(months.shift());
console.log(months);
console.log(months.shift());
console.log(months);
console.log(months.unshift("june"));
console.log(months);
console.log(months.unshift("july"));
console.log(months);


//---- indexOf and includes

let primary = ["red","yellow","blue"];
console.log(primary);
console.log(primary.indexOf("yellow"));  // 1
console.log(primary);

// includes  true OR false

console.log(primary.includes("yellow")); // true 
console.log(primary);
console.log("green",primary.includes("green"));  // false

//---- concat in arrays

let primary1 = ["red","yellow","blue"];
let secondary1 = ["orange","green","violet"];
console.log(primary1,secondary1);
console.log("concat",primary1.concat(secondary1));  // concat promary1 + secondary1;

// reverse an array

primary1.reverse(primary1);
console.log("reverse an array",primary1);

//---- slice in arrays

console.log("Slice",cars.slice());
console.log(cars.slice(2));
console.log(cars.slice(2,4));
console.log(cars.slice(-2));

//---- splice in arrays

console.log("Splice",cars.splice(3));
console.log(cars.splice(0,1));
console.log(cars.push("kia"));
console.log(cars);
console.log(cars.push("rr"));
console.log(cars);
console.log(cars.splice(1,2));
console.log(cars);
console.log(cars.splice(0, 0, "ferrari","kia","toyota"));
console.log(cars);
console.log(cars.splice(1,0,"gtr"));
console.log(cars);
console.log(cars.splice(1,1,"neno"));
console.log(cars);


//---- Sort 

let char = ["b","a","d","c","f","g","e"]
console.log("Sort",char)
console.log(char.sort());


//---- Practice Qs

// 1  For the given start state of an array, change it to final form using Splice method. -- start = ["january","july","march","august"]; final = ["july","june","march","august"];

let prac = ["january","july","march","august"];
console.log("Practice Qs 1",prac);
console.log(prac.splice(0,2,"july","june"));
console.log(prac)

// 2 Return the index of the "JavaScript" from the given array, if it was reversed, Given = ["c","c++","html","javascript","python","java","c#","sql"]

let lang = ["c","c++","html","javascript","python","java","c#","sql"];
console.log("Practice Qs 2",lang);
console.log(lang.reverse());
console.log(lang.indexOf("javascript"));
// console.log(lang.reverse().indexOf("javascript")); // single line code


//---- Array References

let arr = ["a","b"];
let arrCopy = arr;
console.log("Array References",arrCopy)
console.log(arrCopy.push("c"));
console.log(arr);

//---- Constant Array

const arrr = [1, 2, 3];
console.log(arrr)
console.log(arrr.push(4));
console.log(arrr)
console.log(arrr.pop());
console.log(arrr)


//---- Nested Array

let nums = [[2,4],[3, 6],[4, 8]];
console.log("Nested Array",nums);
console.log(nums[0][0]);
console.log(nums[0][1]);
console.log(nums[1][0]);
console.log(nums[1][1]);
console.log(nums[2][0]);
console.log(nums[2][1]);


//---- Practice Qs

// 1 Create a nested array to show the following tic-tac-toe game state.  

// ['X',null,'0']
// [null,'X',null]
// ['0',null,'X']

let game = [ ['X',null,'0'], [null,'X',null], ['0',null,'X'] ];
console.log("Practice Qs","tic-tac-toe game",game);

//---- Practice Qs

// 1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
//    For example: for array[7, 9, 0, -2] and n = 3   print[7, 9, 0]

let array = [7, 9, 0, -2];
let n = 3;
let ans = array.slice(0, n);
console.log("Practice Qs 1",ans);


// 2. Write a JavaScript program to get the last  n elements of an array. [n can be any positive number].
//    For example: for array[7, 9, 0, -2] and n = 3   print[9, 0, -2]

let ary =  [7, 9, 0, -2];
let num = 3;
let anss = ary.slice(ary.length-3);
console.log("Practice Qs 2",anss);


// 3. Write a JavaScript program to check whether a string is back or not.

let str = prompt("please enter a srting")                     //---- prompt

if(str.length == 0) {
    console.log("Practice Qs 3","String is empty");
} else {
    console.log("Practice Qs 3","String is not empty")
}   
    console.log(str)


// 4. Write a JavaScript program to test whether the character at the given (character) index is lower case.

let strr = "ApNaCoLlEgE"
let idx = 3;

if(strr[idx] == strr[idx].toLowerCase()) {
    console.log("Practice Qs 4","character is lowercase");
} else {
    console.log("character is not lowercase");
}


// 5. Write a JavaScript program to strip leading and trailing spaces from a string.

let sttr = prompt("please enter a string");                    //---- prompt
console.log("Practice Qs 5",`original string = ${sttr}`);
console.log(`string without spaces = ${sttr.trim()}`);  


// 6. Write a JavaScript program to check if element exists in an array OR not.

let ele = ["jeethu","S", 22, 27];
let item = 22;

if(ele.indexOf(item) != -1) {
    console.log("Practice Qs 6","element exists in array")
} else {
    console.log("element doesn't exists in array")
}