import portrait from "../res/portrait.jpg"

const About = () => {
    return (
        <>
        <div className="mx-auto md:w-3/4">
        <img
            className={"rounded-full float-center sm:float-left w-[128px] m-[18px]"}
            src={portrait}
            alt="James"
        />
        <p className="">
            Hello, I am James, an aspiring Software Engineer
            and Physicist residing in Vancouver.
            I am a former co-op RF Software Engineer in NETGEAR
            and an incoming co-op Junior Software Developer
            in Caracal Technologies.
        </p>
        <br/>
        <p>
            I am interested in physics simulations
            and low-level programming.
            In my free time, I like to play city-building
            and puzzle games.
            Currently though, I am working on this site to
            learn how to use React.js for my upcoming position.
        </p>
        <br/>
        <p className="text-decoration-line">
            Please feel free to contact me via the links in
            the Socials page.
        </p>
        <p>
            -- James
        </p>
        </div>
        </>
    );
}

export default About;
