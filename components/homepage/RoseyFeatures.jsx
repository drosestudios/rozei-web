// ══════════ OTHER IMPORTS
import { motion } from 'framer-motion';

const RoseyFeatures = () => {
  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }, };
  const textVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }, };

  return (
    <section className="flex justify-center items-center">
      <div className='w-full'>
        <motion.div className="w-full flex md:flex-row flex-col gap-4"
          variants={containerVariants} initial="hidden" animate="visible" transition={{ duration: 0.2, delay: 0.3 }}
        >
          {['MINIMAL', 'ORGANIZE', 'CUSTOM'].map((feature, index) => (
            <motion.div key={feature} className="shadow-md dark:bg-[#222222] w-auto h-auto rounded-md p-4"
              variants={textVariants} initial="hidden" animate="visible"
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className='flex flex-row justify-between'>
                <h1 className="font-bold text-[20px]"> {feature} </h1>

                <div className='flex flex-row gap-2 justify-center items-center'>
                    <div className='bg-red-400 rounded-[50%] w-[15px] h-[15px]'></div>
                    <div className='bg-yellow-200 rounded-[50%] w-[15px] h-[15px]'></div>
                    <div className='bg-green-200 rounded-[50%] w-[15px] h-[15px]'></div>
                </div>
              </div>
              <p className="mt-2 font-normal text-[16px]">
                {feature === 'MINIMAL' && 'Featuring a minimalistic color palette and design scheme, our app prioritizes simplicity and elegance for an enhanced user experience.'}
                {feature === 'ORGANIZE' && 'Easily track and organize the anime you\'ve watched, with unique customization options and display options in both grid and list views.'}
                {feature === 'CUSTOM' && 'We value customization in our workspace, and we want to extend that freedom to you, allowing you to personalize your experience however you choose!'}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoseyFeatures;
