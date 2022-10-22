// Page initialisation. Adds tildes on the left of the screen.
const init = () => {
    initIntroPage()
}

// intro page initialisation
const initIntroPage = () => {
    let tildeColumn = document.getElementById("tildeColumn")
    let introOverlay = document.getElementById("introOverlay")
    let messageMap = new Map([
    [07, "<p class=\"contentMarker\"> welcome to <span id=\"james\"> \
    james paolo rili</span>'s personal website!</p>"],
    [09, generateInstruction("home")],
    [10, generateInstruction("projects")],
    [11, generateInstruction("contacts")],
    [13, "<p class =\"contentMarker\"> or click an item in the navigation bar below.</p>"]]
    );

    tildeColumn.innerHTML += "<p id=\"cursor\"> &nbsp; </p>";

    for (let i = 0; i < 40; i++) {
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

    let initString = "";

    for (let i = 0; i < nbspNumber; i++) {
        initString = initString.concat("&nbsp");
    }

    return initString;
}

window.onload = init;