import portrait from "../../res/portrait.jpg";

const Home = () => {
    return (
        <div className="content home">
            <h1>Hi, I'm James!</h1>
            <div className="intro-body">
            <img className="portrait" src={portrait}/>
            <p className="intro-par">
                I'm an Aspiring Software Engineer and Physicist
                in Vancouver, BC. <br/><br/>

                Currently, I am a student in BCIT Computer 
                Systems Technology program until the end of
                2026. In the future, I would like to be
                involved in computational physics and
                low-level programming. <br/><br/>

                I like to play puzzle games in my spare time.
                Right now, I'm playing <i>Zachtronics' 
                Shenzhen I/O</i>. <br/><br/>

                Feel free to browse around my website,
                and don't hesitate to contact me if there 
                are any questions through the icons at the bottom,
                or browse my projects in 
                the <a href="#/projects">projects</a> page. <br/><br/>
                This site still a work in progress, so
                stay tuned for changes! <br/><br/>

                -- James
            </p>
            </div>
        </div>
    );
}

export default Home;