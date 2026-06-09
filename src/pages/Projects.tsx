import { parseProjects } from "../data/Project";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
    let cards = parseProjects().map(ProjectCard);
    return (
        <div className="content">
            <div className="projects">
                { cards }
            </div>
        </div>
    );
}

export default Projects;