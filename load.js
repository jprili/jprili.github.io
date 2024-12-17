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
        card.querySelector(".date").textContent = `${work.from} \u2012 ${
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

const expandSoftware = (softwareSkill) => {
    if (selectedSkillTab != "software") {
        return
    }
};

const loadSoftwareSkills = (softwareSkills, skillContainer) => {
    skillContainer.className = "flex flex-wrap justify-around";
    skillContainer.innerHTML = ""

    for (let software of softwareSkills) {
        let box = document.createElement("div");
        box.id = software.id;
        box.className = "px-4 rounded-md gap-4";
        box.classList.add(box.id == selectedSoftware ? "bg-1": "bg-none")

        let name = document.createElement("h3");
        name.textContent = software.name;
        name.className = "text-bold";

        box.appendChild(name);

        box.addEventListener("click", () => {
            selectedSoftware = software.id;
            loadSoftwareSkills(softwareSkills, skillContainer)
            expandSoftware(software);
        });

        skillContainer.appendChild(box);
    }
};

const loadOtherSkills = (skills, skillContainer) => {};

const loadSkill = async (skillID) => {
    const response = await fetch("./res/skills.json");
    const skills = await response.json();
    const skill = skills[skillID];

    document.querySelectorAll(".tab-item").forEach((item) => {item.classList.remove("underline")})

    selectedSkillTab = skillID
    document.querySelector(`.tab-item#${selectedSkillTab}`).classList.add("underline")
    let skillContainer = document.getElementById("skill-content");
    skillContainer.innerHTML = "";
    selectedSkillTab = skillID

    if (skillID === "software") {
        loadSoftwareSkills(skill, skillContainer);
    } else {
        loadOtherSkills(skill, skillContainer);
    }
};

const setup = () => {
    loadWork();
    loadSkill(selectedSkillTab);
    expandSoftware(selectedSoftware);

    document.querySelectorAll(".tab-item").forEach((item) => {
        item.addEventListener("click", () => {
            loadSkill(item.id);
        });
    });
};

let selectedSkillTab = "software"
let selectedSoftware = "python"
setup();
