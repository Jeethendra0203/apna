//---- Trim Methods

// let msg = "    hello     ";

// let pass = prompt("set your password");
// let newPass = pass.trim()
// console.log(pass)


//---- ToUpperCase and ToLowerCase 

let name = "Jeethu";
let msg = "error";
console.log(msg.toUpperCase());


//---- Methods with Arguments - indexOf

let msg1= "ILoveCoding";
let newMsg1 = msg1.indexOf("v")
console.log(newMsg1);

//---- Method Chaining

//multiple line code

// let mg = "  hello  ";
// let newMsg = mg.trim();
// console.log("after trim:",newMsg);
// newMsg = newMsg.toUpperCase()
// console.log("after Uppercase:",newMsg)

// single line Code

let mg = "  hello  ";
let newMsg = mg.trim().toUpperCase(); // Method Chaining
console.log(newMsg);


//---- Slice Method

let str = "ILoveCoding";
console.log(str.slice(-6));

//--- Replace and Repeat Method

let str1 = "ILoveCoding";
console.log(str1.replace("Love","do"));  // Replace Method 
console.log(str1.repeat(2));             // Repeat Method

//---- Practice Qs

// 1

let msg2 = "help!";
let newMsg2 = msg2.trim().toUpperCase();
console.log(newMsg2);

// 2

let name1 = "ApnaCollege";
console.log(name1.slice(4,9));
console.log(name1.indexOf("na"));
console.log(name1.replace("Apna","Our"));

// 3

let string = "ApnaCollege";
console.log(string.slice(4).replace("l","t"));


