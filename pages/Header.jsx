import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ColorModeToggle from "../components/themetoggle/ColorModeToggle";

const Header = () => {
    const [focusedButton, setFocusedButton] = useState('/home');
    const navigate = useNavigate();

    useEffect(() => {
        const savedFocusedButton = localStorage.getItem('blog-focusedbtn');
        setFocusedButton(savedFocusedButton);
    }, []);

    // ════════ NAVIGATION PAGE
    const handleNavigation = (path) => {
        localStorage.setItem('blog-focusedbtn', path);
        setFocusedButton(path); navigate(path);
    };

    const expandHover = {
        whileHover: { scale: 1.05 }, transition: { duration: 0.3 },
    };
    const hoverEffect = {
        whileHover: { scale: 1.02 }, whileTap: { scale: 0.95 }, transition: { duration: 0.3 },
    };

    return (
        <header className="mt-2 w-full z-30 flex">
        <div className="w-full h-[50px]">

            <nav className="flex justify-between items-center h-full">
            {/* LOGO AND NAVIGATION */}
            <div className="flex items-center w-auto justify-center flex-row gap-3">
                <motion.img {...expandHover} src="/icon.webp" className="w-[35px] h-[35px] dark:border-white
                rounded-[50%] border-[4px] border-black"/>

                <div className="flex flex-row gap-2">
                    <motion.button onClick={() => handleNavigation('/')} {...hoverEffect} className={`cursor-pointer w-full justify-center items-center flex flex-row p-2 rounded-lg h-[35px] ${focusedButton === '/home' ? 'bg-stone-100 dark:bg-[#222222]' : 'hover:bg-stone-100 dark:hover:bg-[#333333]'}`}>
                            <p className="ml-1 font-bold text-[15px]"> Home </p>
                    </motion.button>

                    <motion.button onClick={() => handleNavigation('/releases')} {...hoverEffect} className={`cursor-pointer w-full justify-center items-center flex flex-row p-2 rounded-lg h-[35px] ${focusedButton === '/releases' ? 'bg-stone-100 dark:bg-[#222222]' : 'hover:bg-stone-100 dark:hover:bg-[#333333]'}`}>
                            <p className="ml-1 font-bold text-[15px]"> Releases </p>
                    </motion.button>

                    <motion.button onClick={() => handleNavigation('/blog')} {...hoverEffect} className={`cursor-pointer w-full justify-center items-center flex flex-row p-2 rounded-lg h-[35px] ${focusedButton === '/blog' ? 'bg-stone-100 dark:bg-[#222222]' : 'hover:bg-stone-100 dark:hover:bg-[#333333]'}`}>
                            <p className="ml-1 font-bold text-[15px]"> Blog </p>
                    </motion.button>

                    {/* <button className="cursor-pointer w-full justify-center items-center flex flex-row
                    dark:hover:bg-[#333333] p-2 hover:bg-stone-100 rounded-lg h-[35px]">
                            <p className="ml-1 font-bold text-[15px]"> Company </p>
                    </button> */}
                </div>
            </div>

            {/* END BUTTONS DISPLAY */}
            <div className="flex flex-row gap-2">
                <motion.div {...hoverEffect}> <ColorModeToggle /> </motion.div>

                <a href='https://github.com/drosestudios/rosey/releases/download/1.0.0/Rosey-1.0.0-arm64-mac.zip'>
                    <motion.button className="md:flex hidden verflow-hidden dark:text-black dark:bg-white bg-[#282828] hover:bg-[#555555] rounded-md justify-center items-center h-[35px] w-full p-3 text-white cursor-pointer transition duration-100 ease-in-out" {...hoverEffect}>
                        <i className="fab fa-apple flex text-[17px]"></i>
                        <p className="ml-2 font-bold text-[13px]"> Download </p>
                    </motion.button>
                </a>

            </div>
            </nav>

        </div>
        </header>
    );
};

export default Header;
