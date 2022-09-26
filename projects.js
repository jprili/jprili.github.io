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

    console.log(dataMap);

    return dataMap;
}

const initProjectsPage = async () => {

    let projectsHead = document.getElementById("projectsHead");

    let repos = await generateAPIMap();

    console.log(repos);

    projectsHead.innerHTML += "<h1>hi :3</h1>"

    for ([key, val] of repos) {
        // key (int)
        // val (Object)
        let name = val["name"];
        let url = val["html_url"];
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
    let projectsList = document.getElementById("projectsList");

    projectsList.innerHTML += `<p><a href= \"${url}\">${name}</a>: ${desc} </p> <br/>`
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
        return "No description.";
    }
}


window.onload = init;