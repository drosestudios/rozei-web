import { motion } from 'framer-motion';
import Head from "next/head";

const basicFadeIn = {
    initial: { opacity: 0 }, animate: { opacity: 1 },
    transition: { duration: 0.3, ease: "easeInOut" }
};

export default function Downloads() {
  return (
    <motion.main {...basicFadeIn}>
      <Head><title>Rozei: Stable Releases</title></Head>

      <div className='flex flex-col justify-center items-center mt-20'>
        <h1 className='flex flex-col md:block gap-1 text-7xl font-bold'>
          <span className='drop-shadow-lg outline-bold'>Download <br/> Organize </span>
          <motion.span
            initial={{ backgroundSize: "0% 100%" }}
            animate={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative px-2 text-green-50 bg-gradient-to-r from-green-900 to-green-900 bg-no-repeat"
            style={{ backgroundPosition: "left center", backgroundSize: "0% 100%" }}
          >
            Anime.
          </motion.span>
        </h1>
      </div>

      {/* BROWSER ANNOUNCEMENT */}
      <div className="flex flex-col lg:flex-row gap-6 mt-8 items-center max-w-7xl mx-auto w-full">

        {/* Image */}
        <motion.img
          src="/image8.png"
          className="w-full lg:max-w-3xl xl:max-w-4xl h-auto"
          initial={{ opacity: 0, y: 20, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Text & Button */}
        <div className="hidden lg:flex flex-col gap-2 text-center md:text-left">
          <p className="text-xl md:text-2xl text-zinc-700 font-bold break-words">
            Coming to your browser
          </p>
          <p className="text-lg md:text-lg text-zinc-500 break-words">
            Organize anime instantly <br className="hidden lg:flex"/> — no downloads require.
          </p>
          <button disabled
            className="flex gap-2 items-center bg-black text-white font-semibold px-4 p-2 w-fit
            rounded-lg shadow-lg hover:bg-black/80 transition disabled:opacity-50 mx-auto md:mx-0"
          >
            <span className="flex items-center gap-2">
              <i className="fa-brands fa-safari"></i>
              <i className="fa-brands fa-chrome"></i>
              <i className="fa-brands fa-edge"></i>
            </span>
            Launch Soon
          </button>
        </div>
      </div>

      {/* OTHER PLATFORMS */}
      <div className="w-auto px-12 mx-auto grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4 xl:mt-2 xl:max-w-7xl">
        <div className='relative flex lg:hidden flex-col gap-4 bg-stone-50 rounded-2xl p-3 opacity-80'>
          <span className='absolute top-4 right-4 bg-red-100 text-red-900 px-2 py-1 rounded-lg font-semibold text-sm'>
            Coming Soon
          </span>
          <div className='flex flex-row gap-4 items-center'>
            <i className="fa-brands text-4xl fa-safari"></i>
            <div className='flex flex-col'>
              <p className='font-bold text-lg'>Browser</p>
              <p className='text-zinc-500 text-xs font-medium'>Safari, Chrome or Edge</p>
            </div>
          </div>
        </div>
        <div className='relative flex flex-col gap-4 bg-stone-50 rounded-2xl p-3 opacity-80'>
          <span className='absolute top-4 right-4 bg-red-100 text-red-900 px-2 py-1 rounded-lg font-semibold text-sm'>
            Coming Soon
          </span>
          <div className='flex flex-row gap-4 items-center'>
            <i className="fa-brands text-4xl fa-apple"></i>
            <div className='flex flex-col'>
              <p className='font-bold text-lg'>macOS</p>
              <p className='text-zinc-500 text-xs font-medium'>macOS 12 or later</p>
            </div>
          </div>
        </div>
        <div className='relative flex flex-col gap-4 bg-stone-50 rounded-2xl p-3 opacity-80'>
          <span className='absolute top-4 right-4 bg-red-100 text-red-900 px-2 py-1 rounded-lg font-semibold text-sm'>
            Coming Soon
          </span>
          <div className='flex flex-row gap-4 items-center'>
            <i className="fa-brands text-4xl fa-windows"></i>
            <div className='flex flex-col'>
              <p className='font-bold text-lg'>Windows</p>
              <p className='text-zinc-500 text-xs font-medium'>Windows 10 or later</p>
            </div>
          </div>
        </div>
        <div className='relative flex flex-col gap-4 bg-stone-50 rounded-2xl p-3 opacity-80'>
          <span className='absolute top-4 right-4 bg-red-100 text-red-900 px-2 py-1 rounded-lg font-semibold text-sm'>
            Coming Soon
          </span>
          <div className='flex flex-row gap-4 items-center'>
            <i className="fa-brands text-4xl fa-android"></i>
            <div className='flex flex-col'>
              <p className='font-bold text-lg'>Android</p>
              <p className='text-zinc-500 text-xs font-medium'>Android 14 or later</p>
            </div>
          </div>
        </div>
      </div>

      {/* IOS APP ANNOUNCEMENT */}
      <div className='bg-[#1a1a1a] w-full flex justify-center p-8 md:p-14 mt-24 items-center'>
        <div className='flex relative flex-col md:flex-row gap-10 items-center max-w-6xl w-full'>
          <div className="flex-1 flex flex-col gap-4 items-center text-center md:items-start md:text-left">
            <p className="font-bold text-white drop-shadow-lg text-2xl md:text-3xl">
              Coming to iOS and macOS
            </p>
            <p className="text-white/80 text-base">
              Rozei is coming to iOS, Android, and macOS — and we can’t wait for you to try it!
              Join our Discord to be part of the adventure, get early updates, and connect with fellow fans!
            </p>
            <button
              onClick={() => window.open('https://discord.gg/RspAnpPkqb', '_blank')}
              className="flex gap-2 items-center bg-[#5865F2] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#4752c4] w-fit transition"
            >
              <i className="fa-brands fa-discord"></i>
              Join Community
            </button>
          </div>
          <div className='flex-1 hidden lg:flex justify-center lg:justify-end relative w-full h-[400px]'>
            <img src="/laptop3.png" className='absolute bottom-0 w-3/4 md:w-full scale-110'/>
            <img src="/phone2.png" className='absolute bottom-0 w-1/2 md:w-1/3 scale-105'/>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
