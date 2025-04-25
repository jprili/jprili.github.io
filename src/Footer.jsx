const Footer = () => {
    const format = 
        "footer text-(--fg-def) mb-auto";
    return (
        <footer 
            className={format}
        >
            &copy;{new Date().getFullYear()} James Paolo Rili
        </footer>
    );
}

export default Footer;
