import { useContext, useState } from "react";

import PageContext from "./PageContext";

import Section     from "./Section";

/**
 * basic header button
 */
const HeaderButton = ({bClass, style, text}) => {
    const currentPage = useContext(PageContext);
    let buttonFormat = 
        `${bClass} ${style} px-[10%] rounded-lg text-left \
    md:text-center animate-inflate bg-(--bg-alt)`;
    if (currentPage !== bClass) {
        buttonFormat += 
        "md:px-auto hover:bg-(--fg-def) hover:text-(--bg-def)";
    }
    return (
        <div className={buttonFormat}>
        <p>{text}</p>
        </div>
    );
};

/**
 * header, also acts as landing page
 */
const Header = () => {
    const navFormat = 
        "nav flex flex-col md:flex-row justify-between text-xl";
    return (
        <header>
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
