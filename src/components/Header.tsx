import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

const NavDropdown = (props: { children: ReactNode }) => {
    const { children } = props;
    return (
        <nav className="dropdown">
            <button className="dropdown-button">
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <div className="dropdown-content">
                { children }
            </div>
        </nav>
    )
}

const Header = () => {
    let paths: { [key: string]: string } = {
        "home": "/",
        "projects": "/projects",
        "experience": "/experience"
    }
    const { pathname } = useLocation();
    let toRender = (
        <>
        {
            // Could be optimised
            Object.keys(paths)
                .map(
                (x: string) => 
                    pathname == paths[x] ?
                    <Link 
                        key={x} 
                        className="nav-link current" 
                        to={paths[x]}
                    >{x}</Link>
                    : <Link 
                        key={x} 
                        className="nav-link"
                        to={paths[x]}
                    >{x}</Link>
            )
        }
        </>
    )
    return (
        <header>
            <h1> James Paolo Rili </h1>
            <NavDropdown>
                { toRender }
            </NavDropdown>
        </header>
    );
};

export default Header;