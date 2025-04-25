import { useState, useContext } from "react";
import { 
    BrowserRouter, 
    Routes, 
    Route
} from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { motion } from "motion/react"

import Header      from "./Header";
import Footer      from "./Footer";
import PageContext from "./PageContext";
import About       from "./About";
import Projects    from "./Projects";
import Socials     from "./Socials";
import Content     from "./Content";

const Section = () => {
    return (
        <section id={"content"}>
            <Outlet />
        </section>
    ); 
}


/**
 * intial landing card
 */
const LandingCard = ({name, fold}) => {
    const [isTop, setTop] = useState(false);
    const nameFormat = 
        "text-[32pt] md:text-[46pt] font-bold text-center"; 
    let outerDivFormat = 
        "landing-card flex flex-col gap-4 h-screen";

    return (
        <>
        <div 
            className={outerDivFormat}
        >
            <motion.div 
                className={isTop ? "mx-auto" : "m-auto"}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
            >
                <p className={nameFormat}>{name}</p>
                <Header/>
            <div className = "mt-[5%]">
                <Outlet/>
            </div>
            </motion.div>
        </div>
        <Footer/>
        </>
    );
};


/**
 * base app component
 */
const App = () => {
    const name = "James Paolo Rili";
    const [fold, setFold] = useState(false);
    return (
        <> 
        <BrowserRouter>
            <Routes>
                <Route path="/" 
                    element={(<LandingCard name={name}
                        fold={fold}
                        />)}
                    >
                    <Route path="about" 
                           element={<About/>}
                    />
                    <Route path="projects" 
                           element={<Projects/>}
                    />
                    <Route path="socials" 
                           element={<Socials/>}
                    />
                    <Route path="*" 
                           element={<></>}
                    />
                    </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
};

export default App;
