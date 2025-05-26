//-- Refactoring old code -> let's apply promises to our callback hell

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         h1.style.color = color;
//         resolve("color changed");
//     },  delay);
//   });
// }

// changeColor("red", 1000)
// .then(() =>  {
//     console.log("red color was completed");
//     return changeColor("green", 1000);
// })
// .then(() => {
//     console.log("green color was completed");
//     return changeColor("blue", 1000);
// })
// .then(() => {
//     console.log("blue color was completed");
//     return changeColor("purple", 1000);
// })
// .then(() => {
//     console.log("purple color was completed");
// })


//--------------- async Function

// async function greet() {
//     throw "404 page not found";
//     return "hello";
// }

// greet() 
// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ", result);
// })
// .catch((err) => {
//     console.log("promise was rejected with err", err);
// })

// let demo = async () => {
//     return 5;
// }


//---- await Keyword
//---- await Keyword -> (Handing Rejection with Await) 

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() *10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() *5) +1;
            if(num > 3) {
                reject("promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
    },  delay);
  });
}
    

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);   
    } catch(err) {
        console.log("error caught");
        console.log(err);
    }
    let a = 5;
    console.log(a);
    console.log("new number = ", a + 3);
}


//---- JSON

let jsonRes = '{"fact":"A cat has the ability to rotate their ears 180 degrees,with the help of 32 muscles that they use to control them.","length":113}'


let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);


let student = {
    name: "Jeethu",
    marks: 88,
};


//---- First API request

let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log("data1 =  ",data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2 =  ", data2.fact)
// })
// .catch((err) => {
//     console.log("error -", err);
// });


//---- using Fetch with async-await

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch(e) {
        console.log("ERROR = ", e);
    }
    console.log("bye")
};