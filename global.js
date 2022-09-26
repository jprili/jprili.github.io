// Page initialisation. Adds tildes on the left of the screen.
const init = () => {
    initIntroPage()
}

// intro page initialisation
const initIntroPage = () => {
    let tildeColumn = document.getElementById("tildeColumn")

    let introOverlay = document.getElementById("introOverlay")

    tildeColumn.innerHTML += "<p id=\"cursor\"> &nbsp; </p>";

    let messageMap = new Map([
    [5, "<p class=\"contentMarker\"> welcome to <span id=\"james\">james paolo rili</span>'s personal website!</p>"],
    [7, generateInstruction("home")],
    [8, generateInstruction("projects")],
    [9, generateInstruction("contacts")],
    [11, "<p class =\"contentMarker\"> or click an item in the navigation bar below.</p>"]]
    );

    for (let i = 0; i < 29; i++) {
        tildeColumn.innerHTML += "<p class=\"tildeMarker\"> ~ </p>";

        if (messageMap.has(i)) {
            introOverlay.innerHTML += messageMap.get(i);
        } else {
            introOverlay.innerHTML += "<p class=\"contentMarker\"> &nbsp; </p>";
        }
    }
}

const generateInstruction = (name) => {
    let enter = "<span class=\"blueText\">\&lt;Enter\&gt;</span>";
    return `<p class=\"contentMarker\"> type :${name}${enter} ${normaliseSpace(name, 15)} to go to the ${name} page.</p>`;
}

// align the spaces for the commands.   
const normaliseSpace = (inputString, numSpaces) => {
    let nbspNumber = numSpaces - inputString.length;
    console.log(nbspNumber)

    let initString = "";

    for (let i = 0; i < nbspNumber; i++) {
        initString = initString.concat("&nbsp");
        console.log(`start ${initString} end`)
    }

    return initString;
}

window.onload = init;