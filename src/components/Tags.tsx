import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { Project } from "../data/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ICON_LUT: { [key: string]: IconProp} = {
    youtube: faYoutube,
    github:  faGithub,
    link:    faLink
}

const IconLink = (key: string, href: string | null) => {
    if (href == null) {
        return <></>
    }
    return (
        <a className="i-link" href={href}>
            <FontAwesomeIcon icon={ICON_LUT[key]}/>
        </a>
    )
}

const Tags = (project: Project) => {
    return (
        <div 
            className="p-links" 
        > 
        { IconLink("link", project.link) }
        { IconLink("github", project.github) }
        { IconLink("youtube", project.youtube) }
        </div>
    )
}

export { Tags };