//------ Assignment Qs

let h1 = document.createElement("h1");
h1.innerHTML = "<b>Assignment Qs</b>";
document.querySelector("body").prepend(h1);

// 1. try out the following events in Event Listener on your own:
   // mouseout, keypress, scroll, load. 

    // mouseout 
        const test = document.getElementById("test");

// Briefly make the list purple when the mouse moves off the
// <ul> element
        test.addEventListener("mouseleave",(event) => {
    // highlight the mouseleave target
        event.target.style.color = "purple";

    // reset the color after a short delay
        setTimeout(() => {
        event.target.style.color = "";
        }, 1000);
    },
  false,
);

// Briefly make an <li> orange when the mouse moves off of it
        test.addEventListener("mouseout",(event) => {
    // highlight the mouseout target
        event.target.style.color = "orange";

    // reset the color after a short delay
        setTimeout(() => {
        event.target.style.color = "";
    }, 500);
  },
  false,
);

    // keypress
    const log = document.getElementById("log");
    const input = document.querySelector("input");

        input.addEventListener("keypress", logKey);

        function logKey(e) {
        log.textContent += ` ${e.code}`;
    };


    // scroll
    let lastKnownScrollPosition = 0;
    let ticking = false;

    function doSomething(scrollPos) {
    // Do something with the scroll position
    }

    document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
        });

        ticking = true;
    }
    });

    // load
    const log2 = document.querySelector(".event-log-contents");
    const reload = document.querySelector("#reload");

        reload.addEventListener("click", () => {
        log.textContent = "";
        setTimeout(() => {
        window.location.reload(true);
        }, 200);
    });

        window.addEventListener("load", (event) => {
        log.textContent += "load\n";
    });

        document.addEventListener("readystatechange", (event) => {
        log.textContent += `readystate: ${document.readyState}\n`;
    });

        document.addEventListener("DOMContentLoaded", (event) => {
        log.textContent += `DOMContentLoaded\n`;
    });

// 2. Create a button on the page using javascript. Add an event listener to the button that changes the button's color to green when it is clicked.

    let btn = document.querySelector("#col");

    function changeColor() {
        console.dir(this.innerText);
        this.style.backgroundColor = "green";
    };

    btn.addEventListener("click", changeColor);


// 3. Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input letters from a-z ,A-Z and space (all other characters should not be detected)
// When ever the user inputs their name,their input should be dynamically visible inside the heading.
// [Please note that no other character apart from the allowed characters should be visible in the heading].


    const inp = document.getElementById("nameInput");
    const display = document.getElementById("displayName");

    inp.addEventListener("input", () => {
      const filtered = inp.value.replace(/[^a-zA-Z ]/g, "");  // Allow only letters and spaces
      display.textContent = filtered;
    });