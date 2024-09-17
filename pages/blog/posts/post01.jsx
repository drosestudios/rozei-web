import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const basicFadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3, ease: "easeInOut" }
};

export default function Post01() {
    return (
        <motion.div {...basicFadeIn}>
            <Helmet>
                <title>Introducing Rosey: Application - Rosey Blog</title>
            </Helmet>

            <div className="mt-6">
                <div className='flex flex-col gap-6'>
                    <Link to='/blog'>
                        <button className='flex flex-row gap-2 w-auto h-auto items-center group'>
                            <i class="fi fi-br-arrow-small-left flex text-[16px]"></i>
                            <p className='font-bold text-[15px] group-hover:underline'> Go back to blog</p>
                        </button>
                    </Link>

                    <div>
                        <h1 className="text-[40px] font-bold"> Introducing Rosey: Application </h1>
                        <div className='flex flex-row gap-2 mt-4 items-center'>
                            <img src="/icon.webp" className='rounded-[50%] w-[25px]
                            h-[25px] dark:border-white border-black border-[4px]' />
                            <p className="font-bold text-[16px]">Angelo Mejia</p>
                            <p className="text-sm text-gray-500">| 25/08/2024</p>
                        </div>

                        <div className="mt-8 flex flex-col gap-4">
                            <h1 className='font-inter font-bold text-[20px]'> DESIGN AND HISTORY</h1>
                            <p className='font-inter text-gray-500 text-[17px]'> At the studio, rosey is a project that I’ve nurtured with great affection since its creation in 2019/2020, when I began developing it using the .NET stack with WPF (C#). During that time, I encountered numerous challenges, but it was an invaluable learning experience, allowing me to grow and improve from my mistakes. Despite the programming experience I had, I was still quite a novice. However, in 2024, I decided to take the project seriously, making the switch to ElectronJS as my foundation. This transition required me to learn many new things that I was previously unfamiliar with, as I hadn’t been particularly interested in web development languages before.</p>
                            <p className='font-inter text-gray-500 text-[17px]'>It took me several days to transfer the user interface I had originally built in WPF. My knowledge of UI design was minimal at the time. Yet, through the process of adding more features and improving what I had already created, I gained several principles of graphic design and user interface design. Over time, I continued to refine and enhance the interface, ultimately arriving at the current design, which I’m proud of. I’ve always been drawn to achromatic colors (grays, blacks, whites) and minimalism. These two elements served as the foundation for the overall interface design.</p>

                            <h1 className='mt-4 font-inter font-bold text-[20px]'> FUTURE PLANS AND GOALS </h1>
                            <p className='font-inter text-gray-500 text-[17px]'>After much hard work and time invested, I’m happy to introduce my application, an organizer for your anime collection. With Rosey, there are no limits—customize it as you wish, add anything you want, and even use it to organize your movie series or any other entertainment media! I plan to add many more features as the development progresses, including creating versions for every possible operating system (Android, iOS, Windows, Linux). For now, the focus is on supporting macOS, as that’s where I’ve concentrated my efforts.</p>
                            <p className='font-inter text-gray-500 text-[17px]'>I’ve poured a great deal of care into every detail of the application, as I, like my users, enjoy watching anime and intend to use Rosey as my primary app for this purpose.</p>
                            <p className='font-inter text-gray-500 text-[17px]'>In the future, I hope to expand the 'Rosey' brand to encompass additional applications. However, for now, all efforts will be dedicated to supporting and updating Rosey. I’ll be open to all suggestions, and if I find your idea compelling, I’ll gladly incorporate it to give the program even more life throughout its existence. My long-term goal is for Rosey to shine, stand out, and become another essential tool on your phone or computer if you’re a fan of anime or series in general.</p>

                            <h1 className='mt-4 font-inter font-bold text-[20px]'> APPRECIATION AND GRATITUDE </h1>
                            <p className='font-inter text-gray-500 text-[17px]'>We want to express our gratitude to everyone who downloads the application and follows our blog for future updates or news related to Rosey. We are committed to continuously improving every aspect of the app and addressing any issues our users may encounter. It would be an honor to build a brand alongside you—our users, our community.</p>
                            <p className='font-inter text-gray-500 text-[17px]'>I wish the best for the team; currently, it's just me, but I hope to bring on more people to contribute to the development and help me deliver an even more professional and polished product for you. As a fellow fan, I will take great pleasure in working on this project and dedicating a significant portion of my days to its ongoing development in the years to come.</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
