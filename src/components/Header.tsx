import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1> James Paolo Rili </h1>
            <nav>
                <Link to="/">home</Link>
                <Link to="/projects">projects</Link> 
            </nav>
        </header>
    );
};

export default Header;