import { parseProjects } from "../data/Project";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
    let cards = parseProjects().map(ProjectCard);
    return (
        <div className="content">
            <h2>Projects and Papers</h2>
            <div className="projects">
                { cards }
            </div>
        </div>
    );
}

export default Projects;