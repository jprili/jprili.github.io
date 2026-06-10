import raw from "../../res/projects.yaml";

type Project  = {
    key: string;
    name:  string;
    desc:  string | null;
    image: string | null;
    link:  string | null;
}

const parseProjects = (): Project[] => {;
    let projects: Project[] = raw
        .projects
        .map((x: any) => x.project as Project);
    return projects || [];
}

export { 
    type Project, 
    parseProjects 
};