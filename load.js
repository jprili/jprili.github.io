const getDurationString = (start, end) => {
    const timeDiff = new Date(end - start);
    let yearDiff = timeDiff.getUTCFullYear() - 1970;
    let monthDiff = timeDiff.getUTCMonth() + 1;

    if (monthDiff == 12) {
        yearDiff++;
        monthDiff = 0;
    }

    let toReturn;
    if (yearDiff == 0) {
        toReturn = "";
    } else if (yearDiff == 1) {
        toReturn = `1 y`;
    } else {
        toReturn = `${yearDiff} y`;
    }

    if (yearDiff && monthDiff) {
        toReturn += ", ";
    }

    if (monthDiff == 1) {
        toReturn += "1 mo";
    } else if (monthDiff > 1) {
        toReturn += `${monthDiff} mo`;
    }

    return toReturn;
};

const loadWork = async () => {
    const response = await fetch("./res/work.json");
    const workList = await response.json();
    const previousWork = workList["previous-work"];

    let workExperience = document.getElementById("work-experience-carousel");
    for (let work of previousWork) {
        let card = document
            .getElementById("general-card-template")
            .content.cloneNode(true);

        // Add work date
        card.querySelector(".title").textContent = work.title;
        const dateStart = new Date(work.from);
        const dateEnd = work.to ? new Date(work.to) : new Date();
        card.querySelector(".date").textContent = `${work.from} to ${
            work.to
        } (${getDurationString(dateStart, dateEnd)})`;

        // Add institution and location
        card.querySelector(".institution").textContent = work.institution;
        card.querySelector(".location").textContent = work.location;

        // Add description
        let descriptions = document.createElement("ul");
        descriptions.className = "list-disc";
        for (let description of work.descriptions) {
            let point = document.createElement("li");
            point.textContent = description;

            descriptions.appendChild(point);
        }
        card.querySelector(".description").appendChild(descriptions);

        workExperience.appendChild(card);
    }
};

const expandSoftware = (softwareSkill, skillContainer) => {
    if (selectedSkillTab != "software") {
        return;
    }

    let softwareDiv = document.createElement("div");
    softwareDiv.className = "bg-1 rounded-md";

    let proficiencyElement = document.createElement("p");
    proficiencyElement.textContent = softwareSkill.proficiency;

    let librariesElement = document.createElement("ul");
    for (let library of softwareSkill.libraries) {
        let item = document.createElement("li");
        item.textContent = library;
        librariesElement.appendChild(item);
    }

    softwareDiv.appendChild(proficiencyElement);
    softwareDiv.appendChild(librariesElement);

    skillContainer.appendChild(softwareDiv);
};

const loadSoftwareSkills = (softwareSkills, skillContainer) => {
    let softwareSkillsList = document.createElement("div");
    softwareSkillsList.className = "flex flex-col md:flex-row justify-around";
    skillContainer.innerHTML = "";

    for (let software of softwareSkills) {
        let box = document.createElement("div");
        box.id = software.id;
        box.className =
            "flex-grow mx-1 px-1 rounded-md md:rounded-t-md md:rounded-b-none";
        box.classList.add(box.id == selectedSoftware ? "bg-1" : "bg-none");

        let name = document.createElement("h3");
        name.textContent = software.name;
        name.className = "text-bold";

        box.appendChild(name);

        box.addEventListener("click", () => {
            selectedSoftware = software.id;
            loadSoftwareSkills(softwareSkills, skillContainer);
            expandSoftware(software, skillContainer);
        });

        softwareSkillsList.appendChild(box);
    }

    skillContainer.appendChild(softwareSkillsList);
};

const loadOtherSkills = (skills, skillContainer) => {
    let skillsList = document.createElement("div");
    skillsList.className = "flex flex-col md:flex-row justify-around";
    skillContainer.innerHTML = "";

    for (let skill of skills) {
        let item = document.createElement("p");
        item.className = "rounded-md gap-4";
        item.textContent = skill;

        skillsList.appendChild(item);
    }

    skillContainer.appendChild(skillsList);
};

const loadSkill = async (skillID) => {
    const response = await fetch("./res/skills.json");
    const skills = await response.json();
    const skill = skills[skillID];

    document.querySelectorAll(".tab-item").forEach((item) => {
        item.classList.remove("underline");
    });

    selectedSkillTab = skillID;
    document
        .querySelector(`.tab-item#${selectedSkillTab}`)
        .classList.add("underline");
    let skillContainer = document.getElementById("skill-content");
    skillContainer.innerHTML = "";
    selectedSkillTab = skillID;

    if (skillID === "software") {
        loadSoftwareSkills(skill, skillContainer);
        expandSoftware(skills.software[0], skillContainer);
    } else {
        loadOtherSkills(skill, skillContainer);
    }

    return skills;
};

const setup = async () => {
    loadWork();
    let skills = await loadSkill(selectedSkillTab);
    expandSoftware(
        skills.software[0],
        document.getElementById("skill-content")
    );

    document.querySelectorAll(".tab-item").forEach((item) => {
        item.addEventListener("click", () => {
            loadSkill(item.id);
        });
    });
};

let selectedSkillTab = "software";
let selectedSoftware = "python";
setup();
