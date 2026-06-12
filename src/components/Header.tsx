import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    let [currentPath, setCurrent] = useState(window.location.pathname);
    let paths: { [key: string]: string } = {
        "home": "/",
        "projects": "/projects"
    }
    let toRender = (
        <>
        {
            // Could be optimised
            Object.keys(paths)
                .map(
                (x: string) => 
                    currentPath == paths[x] ?
                    <Link 
                        key={x} 
                        className="nav-link current" 
                        to={paths[x]}
                        onClick = { () => setCurrent(paths[x]) }
                    >{x}</Link>
                    : <Link 
                        key={x} 
                        className="nav-link"
                        to={paths[x]}
                        onClick = { () => setCurrent(paths[x]) }
                    >{x}</Link>
            )
        }
        </>
    )
    return (
        <header>
            <h1> James Paolo Rili </h1>
            <nav>
                { toRender }
            </nav>
        </header>
    );
};

export default Header;