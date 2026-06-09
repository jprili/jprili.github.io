import type { Project } from "../../data/Project";

const ProjectCard = (project: Project) => {
    return (
        <div className="p-card" key={project.key}>
            <h2>{project.name}</h2>
            <p>{project.desc || "No description found."}</p>
        </div>
    )
}

export default ProjectCard;