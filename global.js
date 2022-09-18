// Page initialisation. Adds tildes on the left of the screen.
function init() {
    if (document.getElementById("homebody")) {
        initHome();
    } else if (document.getElementById("projectsbody")) {
        initProjects();
    } else {
        initContact();
    }
}

function initHome() {
    var mainbody = document.getElementById("homebody");
    const homebodyIndices = {
        8 : generateWelcome(),
        10 : generateInstruction("home"),
        11 : generateInstruction("projects"),
        12 : generateInstruction("contact"),
        14 : "or click an item on the navigation bar below."
    };



    for (var i = 0; i < 30; i++) {
        let emptyline = "<p class='tildeMarker'> ~ </p>";
        let firstTilde = "<p> <span class='tildeMarker'> ~ </span>";

        for (const [key, val] of Object.entries(homebodyIndices)) {
            if (i == key) {
                mainbody.innerHTML += firstTilde.concat(val, "</p>")
                i++
            }
        }

        mainbody.innerHTML += emptyline;
    }

    function generateWelcome() {
        let james = " <span id='james'>james paolo rili</span>";
        let welcome_start = "welcome to";
        let welcome_end = "'s personal website!";

        return welcome_start.concat(james, welcome_end);
    }

    function generateInstruction(name) {
        let entertext = "<span class='bluetext'>&lt;Enter&gt;</span>";
        
        return "type ".concat(":", name, entertext, " to display ", name, " page.");
    }
}

function initProjects() {
    var mainbody = document.getElementById("projectsbody");

    for (var i = 0; i < 30; i++) {
        let emptyline = "<p class='tildeMarker'> ~ </p>";
        let firstTilde = "<p> <span class='tildeMarker'> ~ </span>";

        mainbody.innerHTML += emptyline;
    }
}

function initContact() {
    var mainbody = document.getElementById("contactbody");

    for (var i = 0; i < 30; i++) {
        let emptyline = "<p class='tildeMarker'> ~ </p>";
        let firstTilde = "<p> <span class='tildeMarker'> ~ </span>";

        mainbody.innerHTML += emptyline;
    }
}

function appendNbSp(num) {
    let spaces = "";

    for (var i = 0; i < num; i++) {
         spaces.concat("&nbsp;");
    }

    return spaces;
}

window.onload = init;
