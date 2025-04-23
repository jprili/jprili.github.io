import Header from "./Header";
import { useState } from "react";

const LandingCard = ({name}) => {
    return (
        <div className="landing-card flex flex-col gap-4 max-h-1/4 h-screen">
        <div className="m-auto">
        <p className="text-[32pt] md:text-[46pt] font-bold text-center">{name}</p>
        <Header/>
        </div>
        </div>
    );
};

const App = () => {
    const initialPage = "landing";
    const [page, setPage] = useState(initialPage);
    const name = "James Paolo Rili";
    if (page == "landing") {
        return (<LandingCard name={name}/>)
    }
    return (<></>);
};

export default App;
