const favMovie = "avatar";

let guess = prompt("guess my favorite movie");

while( (guess != favMovie) ) {
    if(guess ==  "quit") {
        console.log("you quit");
        break;
    }
    guess = prompt("wrong guess. pleace try agian");
}

if(guess == favMovie) {
    console.log("congrats!!");
}

