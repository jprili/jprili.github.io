import { useState, useContext } from "react";

import Header      from "./Header";
import PageContext from "./PageContext";
import About       from "./About";
import Projects    from "./Projects";
import Socials     from "./Socials";
import Content     from "./Content";

const Section = () => {
    const context = useContext(PageContext);
    return (
        <section className="content">
            <Content value={context}/>
        </section>
    ); 
}


/**
 * intial landing card
 */
const LandingCard = ({name}) => {
    const outerDivFormat = 
        "landing-card flex flex-col gap-4 max-h-1/4 h-screen";
    const nameFormat = 
        "text-[32pt] md:text-[46pt] font-bold text-center"; 

    return (
        <div className={outerDivFormat}>
            <div className="m-auto">
                <p className={nameFormat}>{name}</p>
                <Header/>
            </div>
        </div>
    );
};


/**
 * base app component
 */
const App = () => {
    const initialPage = "landing";
    const [page, setPage] = useState(initialPage);
    const name = "James Paolo Rili";
    return (
        <>
        <LandingCard name={name}/>
        <Section/>
        </>
    );
};

export default App;
