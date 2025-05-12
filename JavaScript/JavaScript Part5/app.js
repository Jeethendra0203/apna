//---- Object literals

const student = {
    name:"Jeethu",
    age: 22,
};
console.log("Object literals",student);

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
console.log("Creating a Post",post);


//---- Get values

console.log("Get values");
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

//---- Random Integers
 
let rand = Math.floor(Math.random() * 10) + 1;
console.log(rand);

//---- Practice Qs

// 

let rand1 = Math.floor(Math.random() * 100) + 1;
console.log(rand1);

//

let rand2 = Math.floor(Math.random() * 5) + 1;
console.log(rand2);


//---- Guessing game

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