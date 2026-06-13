import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer>
            <p>&#169; { new Date().getFullYear() } James Paolo Rili</p>
            <div id="socials">
                <a href="https://linkedin.com/in/jprili">
                    <FontAwesomeIcon className="i-link" icon={faLinkedin}/>
                </a>
                <a href="https://github.com/jprili">
                    <FontAwesomeIcon className="i-link" icon={faGithub}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;