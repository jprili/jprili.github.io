import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { motion } from "motion/react";

import Header from "./Header";
import Footer from "./Footer";
import PageContext from "./PageContext";
import About from "./About";
import Projects from "./Projects";
import Socials from "./Socials";
import Content from "./Content";
import LandingCard from "./LandingCard"

/**
 * base app component
 */
const App = () => {
    const name = "James Paolo Rili";
    const [fold, setFold] = useState(false);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <LandingCard name={name} fold={fold} />
                    }>
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="socials" element={<Socials />} />
                        <Route path="*" element={<></>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
