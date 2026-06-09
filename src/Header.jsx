import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "motion/react";

import PageContext from "./PageContext";
import Content     from "./Content";


/**
 * basic header button
 */
const HeaderButton = ({bClass, style, text}) => {
    let buttonFormat = 
        `${bClass} ${style} rounded-lg md:text-center`;

    return (
        <Link to={`/${bClass}`} className="p-auto">
        <motion.div 
            className={buttonFormat}
            whileHover={{
                scale: 1.2,
                backgroundColor: "var(--fg-def)",
                color: "var(--bg-def)"
            }}
            whileTap={{
                scale: 0.8
            }}
        >
        <p>{text}</p>
        </motion.div>
        </Link>
    );
};

/**
 * header, also acts as landing page
 */
const Header = () => {
    const navFormat = 
        "nav flex flex-col md:flex-row justify-around text-xl";
    return (
        <header className = "sticky top-0">
            <nav className={navFormat}>
                <PageContext value={""}>
                <HeaderButton
                    bClass="about"
                    text="About"
                />
                <HeaderButton
                    bClass="projects"
                    text="Projects"
                />
                <HeaderButton
                    bClass="socials"
                    text="Socials"
                />
                </PageContext>
            </nav>
        </header>
    );
}


export default Header;
