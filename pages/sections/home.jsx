import Head from "next/head";
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const RoseyShowcase = dynamic(() => import("../../components/elements/AppShowcase"), { ssr: false });
const RoseyFeatures = dynamic(() => import("../../components/homepage/RoseyFeatures"), { ssr: false });
const RoseyHighlights = dynamic(() => import("../../components/homepage/RoseyHighlights"), { ssr: false });
const RoseyDevelopment = dynamic(() => import("../../components/homepage/RoseyDevelopment"), { ssr: false });
const RoseyStaffTeam = dynamic(() => import("../../components/homepage/RoseyStaffTeam"), { ssr: false });

const hoverEffect = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.3 },
};
const basicFadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3, ease: "easeInOut" }
};

export default function Home() {
  return (
    <motion.main {...basicFadeIn}>
        <Head><title>Rosey - Minimalist, Elegant w/ Anime</title></Head>

        <div className="flex text-center items-center justify-center mt-20 flex-col">
            <div className="flex flex-col ">
                <p className="font-bold text-[25px] mb-2"> バラ色の — Minimalist, <br className="flex md:hidden"></br> Elegant w/ Anime ♥ </p>
                <p className="font-normal text-[17px]"> Rosey is a next-gen organizer for your animes watchlist <br className="hidden md:block"></br>.... where design meets stylish and waifus! </p>
            </div>

            <div className="flex flex-row mt-4 gap-2">
                <motion.button {...hoverEffect} className="button-app flex overflow-hidden dark:text-black dark:bg-white bg-[#282828] hover:bg-[#555555] rounded-md justify-center items-center h-[35px] w-[150px] p-3 text-white cursor-pointer transition duration-100 ease-in-out">
                        <i className="fi fi-br-download flex text-[17px]"></i>
                        <p className="ml-2 font-bold text-[13px]"> Download now </p>
                </motion.button>

                <motion.a {...hoverEffect} href="https://github.com/drosestudios/Rosey" target="_blank" className="flex overflow-hidden dark:text-white dark:border-white hover:bg-[#282828] rounded-md border-[4px] border-black justify-center items-center h-[35px] w-[130px] p-3 hover:text-white dark:hover:bg-white dark:hover:text-black text-black cursor-pointer transition duration-100 ease-in-out">
                        <i className="fi fi-br-square-terminal flex text-[17px]"></i>
                        <p className="ml-2 font-bold text-[13px]"> Repository </p>
                </motion.a>
            </div>
            <div className="flex flex-row mt-4 gap-2 justify-center items-center">
                <i className="fab fa-apple flex text-[15px]"></i>
                <p className="font-normal text-[14px]"> Available for macOS, and soon for Windows</p>
            </div>
        </div>

        <div className="flex flex-col gap-6 mt-20">
            <RoseyFeatures></RoseyFeatures>
            <RoseyShowcase></RoseyShowcase>
            <RoseyHighlights></RoseyHighlights>

            <RoseyDevelopment></RoseyDevelopment>
            <RoseyStaffTeam></RoseyStaffTeam>
        </div>
    </motion.main>
  );
}
