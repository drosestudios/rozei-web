import { motion } from 'framer-motion';
const hoverEffect = {
    whileHover: { scale: 1.01 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.1 },
};

const ReleaseLogs = ({ info, version, date, urlpkg, urldmg }) => {
  return (
    <section>
      <div className='flex flex-col gap-4'>
        <div className="rounded-lg w-full h-auto shadow-md flex flex-col dark:bg-[#222222]">
                <div className="p-5">
                    <img src="/app01.png" className='rounded-md w-full h-full' />
                    <div className='flex flex-row gap-4 items-center mt-6'>
                        <p className='font-bold text-[28px]'> {version} </p>
                        <p className='font-normal text-[16px]'> {date} </p>
                    </div>

                    <p className='font-normal text-[17px] mt-4'>{info}</p>

                    <div className='flex flex-row mt-4 border-[1px] border-black rounded-md p-4'>
                        <div className='flex flex-col w-full gap-2'>

                            <div className='flex flex-row gap-2 md:gap-[120px] items-center'>
                                <div className='flex flex-row gap-2 flex-grow'>
                                    <i class="fi fi-br-file-circle-info flex text-[24px]"></i>
                                    <p className='font-bold text-[15px]'>DMG (Apple Silicon)</p>
                                </div>
                                <p className='font-normal text-[15px] hidden md:block flex-shrink-0'>121mb</p>
                                <a href={urldmg} className="flex-shrink-0">
                                    <motion.button {...hoverEffect} className="flex overflow-hidden dark:text-white hover:bg-[#282828] rounded-md border-[4px] dark:border-white dark:hover:bg-white dark:hover:text-black border-black justify-center items-center h-[35px] w-full p-3 hover:text-white text-black cursor-pointer transition duration-100 ease-in-out">
                                        <i className="fi fi-br-download flex text-[17px]"></i>
                                        <p className="ml-2 font-bold text-[13px]"> Download </p>
                                    </motion.button>
                                </a>
                            </div>

                            <div className='flex flex-row gap-2 md:gap-[120px] items-center justify-between'>
                                <div className='flex flex-row gap-2 flex-grow'>
                                    <i class="fi fi-br-file-circle-info flex text-[24px]"></i>
                                    <p className='font-bold text-[15px]'>ZIP (Package File)</p>
                                </div>
                                <p className='font-normal text-[15px] hidden md:block flex-shrink-0'>117mb</p>
                                <a href={urlpkg} className="flex-shrink-0">
                                    <motion.button {...hoverEffect} className="flex overflow-hidden dark:text-white hover:bg-[#282828] rounded-md border-[4px] dark:border-white dark:hover:bg-white dark:hover:text-black border-black justify-center items-center h-[35px] w-full p-3 hover:text-white text-black cursor-pointer transition duration-100 ease-in-out">
                                        <i className="fi fi-br-download flex text-[17px]"></i>
                                        <p className="ml-2 font-bold text-[13px]"> Download </p>
                                    </motion.button>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
        </div>
      </div>
    </section>
  );
};

export default ReleaseLogs;
