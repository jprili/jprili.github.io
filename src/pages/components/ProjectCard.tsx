import type { Project } from "../../data/Project";

const ProjectCard = (project: Project) => {
    return (
        <div className="p-card" key={project.key}>
            <div className="p-title">
                <h3>{project.name}</h3>
                { /* TODO: tags */ }
            </div>
            <p 
                dangerouslySetInnerHTML={{ 
                    __html: project.desc || "No description found." 
                }}
            />
        </div>
    )
}

export default ProjectCard;