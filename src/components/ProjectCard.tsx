import type { Project } from "../data/Project";
import { Tags } from "../components/Tags";

const ProjectCard = (project: Project) => {
    return (
        <div className="p-card" key={project.key}>
            <div className="p-title">
                <h3>{project.name}</h3>
                { Tags(project) }
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