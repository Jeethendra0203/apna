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

let cars = ["audi","bmw","gtr","kia"];
console.log(cars);
console.log(cars.push("toyota"));      // add to end 
console.log(cars);
console.log(cars.pop());               // Delete from end & return it 
console.log(cars);
console.log(cars.unshift("ferrai"));   // add to start  
console.log(cars);
console.log(cars.shift());             // Delete from start & return it 
console.log(cars);

