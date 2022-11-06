// Page initialisation. Adds tildes on the left of the screen.
const init = () => {
    initIntroPage()
}

// intro page initialisation
const initIntroPage = () => {
    let intro = document.getElementById("intro")

    let messages = ["<p class=\"contentMarker\"> welcome to <span id=\"james\"> \
    james paolo rili</span>'s personal website!</p>",
    generateInstruction("home"),
    generateInstruction("projects"),
    generateInstruction("contacts"),
    "<p class =\"contentMarker\"> or click an item in the navigation bar below.</p>"];

    for (let i = 0; i < messages.length; i++) {
        intro.innerHTML += messages[i];
    }

    let textBox = document.getElementById("command");

    textBox.addEventListener("keydown", function(event) {
        if (event.key === ":" && textBox.style.visibility === "hidden") {
            textBox.style.visibility = "visible";
        }
    });
}

const generateInstruction = (name) => {
    let enter = "<span class=\"blueText\">\&lt;Enter\&gt;</span>";
    return `<p class=\"contentMarker\"> type :${name}${enter} ${normaliseSpace(name, 15)} to go to the ${name} page.</p>`;
}

// align the spaces for the commands.   
const normaliseSpace = (inputString, numSpaces) => {
    let nbspNumber = numSpaces - inputString.length;

    let initString = "";

    for (let i = 0; i < nbspNumber; i++) {
        initString = initString.concat("&nbsp");
    }

    return initString;
}


window.onload = init;