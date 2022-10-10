const init = () => {
    initProjectsPage();
}

const generateAPIMap = async () => {
    const source = "https://api.github.com/users/jprili/repos";
    // converting JSON to Map

    let data = await getAPIData(source);
    let dataMap = new Map();

    data.forEach((element, index) => dataMap.set(index,
     extractObjElements(element)));

    return dataMap;
}

const initProjectsPage = async () => {

    let projList = document.getElementById("projectsList");

    let repos = await generateAPIMap();

    projList.innerHTML += "<h1> <span id=\"james\">james'</span> projects:</h1>"
    projList.innerHTML += "<br/>"

    for ([key, val] of repos) {
        // key (int)
        // val (Object)
        let name = val["name"];
        let url = val["url"];
        let desc = guardNull(val["desc"]); // string or null

        addListItem(name, url, desc);
    }

}
    
 const getAPIData = async (source) => {
    let api = await fetch(source)
    .then(response => response.json());  
    return api;
}

const addListItem = (name, url, desc) => {
    let filterNames = ["jprili", "jprili.github.io"];
    let projectsList = document.getElementById("projectsList");

    if (!filterNames.includes(name)) {

        projectsList.innerHTML += `<p class="listItem">
        <a href= \"${url}\">${name}</a>: ${desc} </p>`
    }
}

// takes an object and returns needed values
const extractObjElements = (objInElement) => {    
    let objVal = {name: objInElement['name'],
    url: objInElement['html_url'],
    desc: objInElement['description']};

    return objVal;
}

const guardNull = (inputString) => {
    if (inputString) {
        return inputString;
    } else {
        return "No description yet.";
    }
}


window.onload = init;