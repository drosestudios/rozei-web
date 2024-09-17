import { motion } from 'framer-motion';
const hoverEffect = {
    whileHover: { scale: 1.01 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.1 },
};

const ReleaseLogs = ({ version, date, logs, urlpkg, urldmg, subtitle }) => {
  return (
    <section>
      <div className='flex flex-col gap-4'>
        <div className="rounded-lg md:w-[400px] sm:w-full h-auto shadow-md flex flex-col dark:bg-[#222222]">
                <div className="p-5">
                    <div className='flex flex-row justify-between items-center'>
                        <p className='font-bold text-[17px]'> {version} </p>
                        <p className='font-normal text-[15px]'> {date} </p>
                    </div>

                    <div className='flex flex-row mt-4'>
                        <div className='flex flex-col w-full gap-2'>
                            <a href={urldmg}>
                                <motion.button {...hoverEffect} className="flex overflow-hidden dark:text-white hover:bg-[#282828] rounded-md border-[4px] dark:border-white dark:hover:bg-white dark:hover:text-black border-black justify-center items-center h-[35px] w-full p-3 hover:text-white text-black cursor-pointer transition duration-100 ease-in-out">
                                    <i className="fi fi-br-download flex text-[17px]"></i>
                                    <p className="ml-2 font-bold text-[13px]"> Download DMG (Apple Silicon) </p>
                                </motion.button>
                            </a>
                            <a href={urlpkg}>
                                <motion.button {...hoverEffect} className="flex overflow-hidden dark:text-white hover:bg-[#282828] rounded-md border-[4px] dark:border-white dark:hover:bg-white dark:hover:text-black border-black justify-center items-center h-[35px] w-full p-3 hover:text-white text-black cursor-pointer transition duration-100 ease-in-out">
                                    <i className="fi fi-br-download flex text-[17px]"></i>
                                    <p className="ml-2 font-bold text-[13px]"> Download ZIP (Package File) </p>
                                </motion.button>
                            </a>
                        </div>
                    </div>

                    <p className='font-bold text-[15px] mt-6'> {subtitle} </p>
                    <div className='flex flex-col mt-4'>
                        {logs.map((log, index) => (
                            <li key={index}>{log}</li>
                        ))}
                    </div>
                </div>
        </div>
      </div>
    </section>
  );
};

export default ReleaseLogs;
