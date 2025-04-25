import portrait from "../res/portrait.jpg"

const About = () => {
    return (
        <>
        <img
            className={"rounded-full float-left w-[128px] m-[12px]"}
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
        </>
    );
}

export default About;
