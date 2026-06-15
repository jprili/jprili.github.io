import portrait from "../../res/portrait.jpg";

const Home = () => {
    return (
        <div className="content home">
            <h1>Hi, I'm James!</h1>
            <div className="intro-body">
            <img className="portrait" src={portrait}/>
            <p>
                I'm an Aspiring Software Engineer and Physicist
                in Vancouver, BC.

                Currently, I am a student in BCIT Computer 
                Systems Technology program until the end of
                2026. In the future, I would like to be
                involved in computational physics and
                low-level programming.

                I like to play puzzle games in my spare time.
                Right now, <i>Shenzhen I/O</i> from Zachtronics 

                Feel free to browse around my website,
                and don't hesitate to contact me if there 
                are any questions
            </p>
            </div>
        </div>
    );
}

export default Home;