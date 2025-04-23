import coloursLight from "./colours";

const HeaderButton = ({bClass, style, text, link}) => {
    return (
        <a className={`${style} px-[10%] md:px-auto hover:bg-(--fg-def) rounded-lg`} href={link}>
        <div className={`${bClass} text-left md:text-center`}>
        <p>{text}</p>
        </div>
        </a>
    );
};

const Header = () => {
    return (
        <header>
            <nav className="nav flex flex-col md:flex-row justify-between">
                <HeaderButton
                    bClass="about"
                    style="animate-inflate"
                    text="About"
                    link="#"
                />
                <HeaderButton
                    bClass="projects"
                    style="animate-inflate"
                    text="Projects"
                    link="projects"
                />
                <HeaderButton
                    bClass="socials"
                    style="animate-inflate"
                    text="Socials"
                    link="socials"
                />
            </nav>
        </header>
    );
}


export default Header;
