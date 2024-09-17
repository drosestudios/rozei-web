import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import AdvancedHeader from '../../components/elements/AdvancedHeader';
const basicFadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3, ease: "easeInOut" }
};

export default function Blog() {
    const [focusedButton, setFocusedButton] = useState('/allposts');

    useEffect(() => {
        const savedFocusedButton = localStorage.getItem('post-filterbtn');
        setFocusedButton(savedFocusedButton);
    }, []);

    // ════════ NAVIGATION PAGE
    const handleNavigation = (path) => {
        localStorage.setItem('post-filterbtn', path);
        setFocusedButton(path);
    };

    const posts = [
        { title: 'Introducing Rosey Into Our New Users', date: '25/08/2024', path: 'post01' },
    ];

    return (
        <motion.main {...basicFadeIn}>
            <Helmet> <title>Our Blog - Rosey</title> </Helmet>

            <div className="mt-6">
                <AdvancedHeader
                    header='LATEST ANNOUNCEMENTS'
                    subheader='All news and upcoming ideas or projects.'
                    icon='chart-simple-horizontal'
                />
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-8 w-full">
                <div className="flex flex-col gap-2 md:w-[250px] w-full">
                    <button onClick={() => handleNavigation('/allposts')} className={`cursor-pointer w-full text-left items-center flex flex-row p-2 rounded-lg h-[45px] ${focusedButton === '/allposts' ? 'bg-stone-100 dark:bg-[#222222]' : 'hover:bg-stone-100 dark:hover:bg-[#333333]'}`}>
                        <i className="ml-1 fi fi-br-note flex text-[15px]"></i>
                        <p className="ml-3 font-bold text-[15px]"> All posts </p>
                    </button>

                    <button onClick={() => handleNavigation('/featuredpost')} className={`cursor-pointer w-full text-left items-center flex flex-row p-2 rounded-lg h-[45px] ${focusedButton === '/featuredpost' ? 'bg-stone-100 dark:bg-[#222222]' : 'hover:bg-stone-100 dark:hover:bg-[#333333]'}`}>
                        <i class="ml-1 fi fi-br-circle-bookmark flex text-[15px]"></i>
                        <p className="ml-3 font-bold text-[15px]"> Featured posts </p>
                    </button>
                </div>

                <div className="flex flex-col w-full gap-4">
                    <p className='sm:block md:hidden text-center font-bold text-[16px]'> ARTICLES </p>
                    {posts.map(post => (
                        <div key={post.path} className="flex flex-row justify-between items-center rounded-lg p-1">
                            <Link to={`/blog/${post.path}`}>
                                <p className="font-bold text-[17px] cursor-pointer hover:underline">{post.title}</p>
                            </Link>
                            <p className="font-normal text-[15px] justify-end">{post.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.main>
    );
}
