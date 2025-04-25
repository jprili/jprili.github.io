import { useContext } from "react";

import About    from "./about";
import Projects from "./projects";
import Socials  from "./socials";

import PageContext from "./PageContext";

/**
 * routing for pages
 */
const ContentToLoad = () => {
    const page = useContext(PageContext);
    switch (page) {
        case "about":
            return <About/>;
        case "projects":
            return <Projects/>;
        case "socials":
            return <Socials/>;
        case "":
            return <></>;
        default:
            return <p>Not Found</p>
    }
}

const Content = ({page}) => {
    return (
        <PageContext value={page}> 
            <ContentToLoad/>
        </PageContext>
    );
}

export default Section;
