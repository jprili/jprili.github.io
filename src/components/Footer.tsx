import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer>
            <p>&#169; { new Date().getFullYear() } James Paolo Rili</p>
            <div id="socials">
                <a href=""><FontAwesomeIcon className="i-link" icon={faLinkedin}/></a>
                <a href=""><FontAwesomeIcon className="i-link" icon={faGithub}/></a>
            </div>
        </footer>
    );
}

export default Footer;