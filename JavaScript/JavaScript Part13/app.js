//---- Using Axios
// let btn = document.querySelector("button");

// btn.addEventListener("click", async()=> {    
//     let fact = await getFacts();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";


// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(e) {
//         console.log("ERROR = ", e);
//         return "No fact found"
//     }
// };

//---- DogPictures API

// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";


// btn.addEventListener("click", async()=> {    
//     let link = await getImage();
//     console.log(link);
//     let images = document.querySelector("#result");
//     images.setAttribute("src", link);
// })

// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//        return res.data.message;
//     } catch(e) {
//         console.log("ERROR = ", e);
//         return "No image found"
//     }
// };

//==== Sending Headers with API requests

const url3 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { headers: {Accept : "application/json"}};
        let res = await axios.get(url3, config);
        console.log(res.data)    
    } catch(e) {
        console.log(e);
    }
}

//---- Activity using Query Strings

let url4 = "http://universities.hipolabs.com/search?name=";
let btn4 = document.querySelector("button");

btn4.addEventListener("click", async() => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    Show(colArr);
});

function Show(colArr) {
    let list = document.querySelector("#List")
    list.innerText = "";
    for(col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url4+country);
        return res.data;
    } catch(e) {
        console.log("error :", e);
        return [];
    } 
}