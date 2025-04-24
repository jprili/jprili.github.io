import coloursLight from "./colours";

const HeaderButton = ({bClass, style, text}) => {
    return (
        <div className={`${style} px-[10%] md:px-auto hover:bg-(--fg-def) hover:text-(--bg-def) rounded-lg ${bClass} text-left md:text-center animate-inflate`}>
        <p>{text}</p>
        </div>
    );
};

const LoadedSection = ({section}) => {
    switch (section) {
        case "about":
            return <About/>;
        case "projects":
            return <Projects/>;
        case "socials":
            return <Socials/>;
    }
}

const Header = () => {
    return (
        <header>
            <nav className="nav flex flex-col md:flex-row justify-between">
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
            </nav>
        </header>
    );
}


export default Header;
