import { useState } from "react";
import { motion } from "motion/react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";

/**
 * intial landing card
 */
const LandingCard = ({ name, fold }) => {
    const [isTop, setTop] = useState(false);
    const nameFormat = "text-[32pt] md:text-[46pt] font-bold text-center";
    let outerDivFormat = "landing-card flex flex-col gap-4 h-screen";

    return (
        <>
            <div className={outerDivFormat}>
                <motion.div
                    className={isTop ? "mx-auto" : "m-auto"}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transform: isTop ? "" : "translateY(-140px)",
                    }}
                >
                    <p className={nameFormat}>{name}</p>
                    <Header />
                    <motion.div
                        className="mt-[5%]"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transform: "translateX(-20px)",
                        }}
                        exit={{
                            opacity: 0,
                            transform: "translateX(-20px)",
                        }}
                    >
                        <Outlet />
                    </motion.div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default LandingCard;
