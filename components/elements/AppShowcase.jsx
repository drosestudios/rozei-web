import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppShowcase = () => {
  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }, };
  const settingsSlider = { dots: true, infinite: true, speed: 350, arrows: false, };

  return (
    <section>
      <motion.div className="rounded-md w-full h-auto shadow-md flex flex-col dark:bg-[#222222]"
        initial="hidden" animate="visible" variants={containerVariants} transition={{ duration: 0.3 }}
      >
        {/* IMAGE BACK AND PREVIEW */}
        <div className="p-5 flex flex-col gap-3 md:gap-16">
          <div className="flex dark:bg-white rounded-md flex-row items-center justify-center">
            <Slider {...settingsSlider} className='w-full h-full md:h-[465px] rounded-lg'>
                <motion.img src="/app02.png" className=" object-cover rounded-lg"
                        initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}/>
                <motion.img src="/app01.png" className="object-cover rounded-lg"
                        initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}/>
                <motion.img src="/app03.png" className="object-cover rounded-lg"
                        initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}/>
            </Slider>
          </div>

          <div className="text-justify">
            <motion.p className="text-[16px] font-medium whitespace-wrap text-black dark:text-gray-100"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
            >
              Manage your viewed anime list effortlessly with Rosey, the fast and easy-to-use organizer designed for anime enthusiasts. Unlike other options that rely on external databases like AniList, Rosey allows you to add shows manually and customize your collection to your liking in a grid-like gallery. Enjoy a clean, minimalist view of all the anime you've watched, making it simple to track your progress and organize your favorites without complications.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AppShowcase;
