const loadWork = async () => {
    const response = await fetch("./res/work.json");
    const workList = await response.json();
    const previousWork = workList["previous-work"];

    let workExperience = document.getElementById("work-experience-carousel");
    for (work of previousWork) {
        let card = document
            .getElementById("general-card-template")
            .content.cloneNode(true);
        
        card.querySelector(".title").textContent = work.title
        card.querySelector(".date").textContent = new Date(work.from)
        
        workExperience.appendChild(card)

    }
};

const setup = () => {
    loadWork();
};

setup();
