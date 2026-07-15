import raw from "../../res/experience.yaml";

type Experience = {
    key: string;

    affiliation: string;
    title:       string;
    location:    string;

    start:       string;
    end:         string;

    tags:        string[];
}

const parseExperiences = (): Experience[] => {
    let projects: Experience[] = raw
        .map(
            (x: any) => 
                x.experience as Experience
        );
    return projects || [];
}

export { 
    type Experience, 
    parseExperiences
};