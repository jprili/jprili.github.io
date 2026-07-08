import ExperienceCard from "../components/ExperienceCard";
import { parseExperiences } from "../data/Experience";


const Experience = () => {
    const cards = parseExperiences()
        .map(ExperienceCard);
    return (
        <div className="content">
            <h2>Professional Experience</h2>
            <div className="projects">
                {cards}
            </div>
        </div>
    )
}

export default Experience;