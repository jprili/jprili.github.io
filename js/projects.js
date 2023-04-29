export const initProjectsPage = async () => {
    let projList = document.getElementById("main");

    let repos = generateAPIMap();  // generates a map object of the API

    projList.innerHTML = ""
    projList.innerHTML += "<p> <span id=\"james\">james'</span> projects:</p>"
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

/**
 * Generates a Map Object from the data obtained.
 * 
 * @returns {Map} map of the data obtained
 */
const generateAPIMap = async () => {
    const source = "https://api.github.com/users/jprili/repos";
    // converting JSON to Map

    let data    = getAPIData(source);
    let dataMap = new Map();

    data.forEach(
        (element, index) => 
        dataMap.set(index, extractObjElements(element))
    );

    return dataMap;
}

/**
 * Retrieves API from source url
 * 
 * @param   {string} source source of the data
 * 
 * @returns {JSON}          API information
 */
 const getAPIData = async (source) => {
    let api = await fetch(source)
                    .then(response => response.json());  
    return api;
}

/**
 * Adds an item to the frontend
 * 
 * @param {string} name name of the item
 * @param {string} url  link to the item
 * @param {string} desc item description
 * 
 * @returns none
 */
const addListItem = (name, url, desc) => {
    let filterNames = ["jprili", "jprili.github.io"];
    let projectsList = document.getElementById("projectsList");

    if (!filterNames.includes(name)) {

        projectsList.innerHTML += `<p class="listItem">
        <a href= \"${url}\">${name}</a>: ${desc} </p>`
    }
}

// Helpers

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