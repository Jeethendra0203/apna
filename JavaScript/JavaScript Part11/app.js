//---- Call Stack

function hello() {
    console.log("inside hello fnx");
    console.log("hello");
};

function demo() {
    console.log("calling hello fnx");
    hello();
};

console.log("calling demo fnx");
demo();
console.log("done bye!");

//---- Visualizing the Call stack

function one() {
    return 1;
};

function two() {
    return one() + one();
};

function three() {
    let ans = two() + one();
    console.log(ans);
};

three();

//---- JavaScript is Single Threaded
// synchrous nature

// making JS as Asynchrous nature using methods like setTimeOut.
// setTimeout(() => {
//     console.log("apna college");
// }, 2000);
// setTimeout(() => {
//     console.log("hello world");
// }, 2000);
// console.log("hello...");


//---- Callback Hell

//-- Refactoring old code -> let's apply promises to our callback hell

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        h1.style.color = color;
        resolve("color changed");
    },  delay);
  });
}
    
changeColor("red", 1000)
.then(() =>  {
    console.log("red color was completed");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
})
.then(() => {
    console.log("blue color was completed");
    return changeColor("purple", 1000);
})
.then(() => {
    console.log("purple color was completed");
})

// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("blue", 1000, () => {
//             changeColor("brown", 1000);
//         });
//     });
// });
// callbacks nesting -> Callbcak Hell



//--- Promises

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb("apna college", 
//     () => {
//      console.log("success : your data was saved");
//      savetoDb(
//         "hello world", 
//         () => {
//         console.log("success : data2 saved");
//         savetoDb(
//         "Jeethu", 
//         () => {
//             console.log("success : data3 saved");
//         }, () => {
//             console.log("failure : weak connection");
//         })
//      }, 
//         () => {
//         console.log("failure : weak conection")
//      });
//   },
//     () => {
//      console.log("failure : weak connection. data not saved");
// });


//---- Refactoring with promises


// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//      if(internetSpeed > 4) {
//         resolve("success : data was saved");
//     } else {
//         reject("failure : weak connection.");
//     }
//   });
// }

//---- then() and catch() methods
//---- Promise Chaining
//---- Results & Errors in Promises

    savetoDb("apna college")
    .then((result) => {
        console.log("data1 saved.");
        console.log("result of promise:", result);
        return savetoDb("hello world")
    })
    .then((result) => {
        console.log("data2 saved");
        console.log("result of promise:",result);
        return savetoDb("Jeethu");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("result of promise:",result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log("error of promise:",error);
    }); 