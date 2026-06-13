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
            </p>
            </div>
        </div>
    );
}

export default Home;