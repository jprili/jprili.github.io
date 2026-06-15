import { Link, useLocation } from "react-router-dom";

const Header = () => {
    let paths: { [key: string]: string } = {
        "home": "/",
        "projects": "/projects"
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
            <nav>
                { toRender }
            </nav>
        </header>
    );
};

export default Header;