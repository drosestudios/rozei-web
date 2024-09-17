import React from "react";
import { motion } from 'framer-motion';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Footer = () => {
  const footerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }, };
  const buttonVariants = { hover: { scale: 1.04 }, tap: { scale: 0.95 }, };

  return (
    <footer className="w-full pb-8 mt-10">
      <motion.div className="flex md:flex-row gap-3 flex-col justify-between items-center"
        initial="hidden" animate="visible" variants={footerVariants} transition={{ duration: 0.5 }}
      >
        <p className="font-semibold text-[20px] flex justify-center items-center">
            © Studios D'Rose 2024
        </p>

        <div className="flex flex-row gap-1">

          <a href="https://twitter.com/studiosdrose" target="_blank" rel="noopener noreferrer">
            <Tippy arrow={false} duration={0} content={<span className='text-[14px] font-semibold'> Twitter </span>}>
              <motion.button className="bg-stone-100 dark:bg-[#222222] rounded-md w-[35px] h-[35px]
              p-2 items-center justify-center flex" whileHover="hover" whileTap="tap" variants={buttonVariants}
              >
                <i className="fab fa-twitter flex text-[20px]"></i>
              </motion.button>
            </Tippy>
          </a>

          <a href="https://instagram.com/studiosdrose" target="_blank" rel="noopener noreferrer">
            <Tippy arrow={false} duration={0} content={<span className='text-[14px] font-semibold'> Instagram </span>}>
              <motion.button
                className="bg-stone-100 dark:bg-[#222222] rounded-md w-[35px] h-[35px]
                p-2 items-center justify-center flex" whileHover="hover" whileTap="tap" variants={buttonVariants}
              >
                <i className="fab fa-instagram flex text-[20px]"></i>
              </motion.button>
            </Tippy>
          </a>

          <a href="https://github.com/drosestudios" target="_blank" rel="noopener noreferrer">
            <Tippy arrow={false} duration={0} content={<span className='text-[14px] font-semibold'> Github </span>}>
              <motion.button
                className="bg-stone-100 dark:bg-[#222222] rounded-md w-[35px] h-[35px]
                p-2 items-center justify-center flex" whileHover="hover" whileTap="tap" variants={buttonVariants}
              >
                <i className="fab fa-github flex text-[20px]"></i>
              </motion.button>
            </Tippy>
          </a>

          <a href="https://discord.gg/RspAnpPkqb" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="bg-black text-white dark:text-black dark:bg-white rounded-md w-auto h-[35px]
                p-2 items-center justify-center flex" whileHover="hover" whileTap="tap" variants={buttonVariants}
              >
                <i className="fab fa-discord flex text-[20px]"></i>
                <p className="ml-2 font-bold text-[13px]"> Join our Discord</p>
              </motion.button>
          </a>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;
