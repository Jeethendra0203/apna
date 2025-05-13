//---- Object literals

const student = {
    name:"Jeethu",
    age: 22,
};
console.log("----Object literals",student);

const item = {
    price: 100.99,
    discount: 50,
    colors: ["red","blue"]
};
console.log(item);


//---- Creating a Post 

const post = {
    username: "@Jeethu",
    content: "#art",
    likes: 99,
    reposts: 8,
    tags: ["@art","@delta"],
};
console.log("----Creating a Post",post);


//---- Get values

console.log("----Get values");
console.log(post.likes);
console.log(post.content);
console.log(post.tags);
console.log(post.username);


//---- Conversion in Get values

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e",
};

//---- Add / Update values

const student1 = {
    name: "Jeethu",
    age: 22,
    marks: 88,
    city: "delhi",
};
console.log("----Add / Update values")
console.log(student1.height = "177cm")  // Added value
console.log(student1.marks= 77);        // Updated value


//---- Objects of Objects

const classInfo = {
    manoj: {
        grade: "A+",
        city: "delhi", 
    },
    raghu: {
        grade: "A",
        city: "pune", 
    },
    charan: {
        grade: "0",
        city: "Mumbai", 
    }
}
console.log("----Objects of Objects");
console.log(classInfo);

//---- Array of Objects

const classInfo1 = [
    {
        name: "manoj",
        grade: "A+",
        city: "delhi", 
    },
    {
        name: "raghu",
        grade: "A",
        city: "pune", 
    },
    {
        name: "charan",
        grade: "0",
        city: "Mumbai", 
    }
]
console.log("----Array of Objects");
console.log(classInfo1);

//---- Random Integers
 
let rand = Math.floor(Math.random() * 10 ) + 1;
console.log("----Random Integers");
console.log(rand);

//---- Practice Qs

// Generate a rondom number between 1 and 100.

console.log("----Practice Qs");

let rand1 = Math.floor(Math.random() * 100 ) + 1;
console.log(rand1);

// Generate a rondom number between 1 and 5.

console.log("----Practice Qs");

let rand2 = Math.floor(Math.random() * 5 ) + 1;
console.log(rand2);


//---- Guessing game

console.log("----Guessing game");

const max = prompt("enter the max number");

const random = Math.floor(Math.random() * 1);

let guess = prompt("guess the number");

while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    }
    if(guess == random) {
        console.log("you are right! congrats!! random number was", random);
        break;
    } else if(guess < random) {
        guess = prompt("hint: your guess was too samall. please try again");
    } else {
        guess = prompt("hint: your guess was too large. please try again");
    }
}

//---- Practice Qs

// 1. Create a program that generates a random  number representing a dice roll. [The number shuould be between 1 and 6].

console.log("----Practice Qs1")

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice)

// 2. Creating an object representing a car that store the following properties for the / car: name, model, color. / print thr car's name.

const car = {
        name: "Bugatti",
        model: "chiron",
        color: "blue"
    };
console.log("----Practice Qs2")
console.log(car.name);

// 3. create an object Person with thir name, age, and city. / Edit their city's original value to change it to "New York". Add a new propert country and set it to the United States.

const person = {
    name: "Tony",
    age: 25,
    city: "New Jersey",
};
console.log("----Practice Qs3")
console.log(person);
person.city = "New York";
person.country = "United States";
console.log(person);
