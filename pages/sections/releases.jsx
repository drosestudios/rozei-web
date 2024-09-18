import Head from "next/head";
import dynamic from 'next/dynamic';
import AdvancedHeader from '../../components/elements/AdvancedHeader';
import { motion } from 'framer-motion';

const ComponentReleaseLogs = dynamic(() => import("../../components/releasepage/ReleaseLogs"), { ssr: false });
const basicFadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3, ease: "easeInOut" }
};

export default function Releases() {
  return (
    <motion.main {...basicFadeIn}>
        <Head><title>Stable releases</title></Head>

        <div className="flex md:flex-row flex-col gap-2 mt-6">
            <div className="flex flex-col w-auto h-auto shadow-md rounded-lg p-4 dark:bg-[#222222]">
                <div className='flex flex-row justify-between items-center'>
                    <p className="font-bold text-[20px]">AVAILABILITY</p>
                    <div className="flex flex-row gap-2">
                        <div className='bg-red-400 rounded-[50%] w-[15px] h-[15px]'></div>
                        <div className='bg-yellow-400 rounded-[50%] w-[15px] h-[15px]'></div>
                        <div className='bg-green-400 rounded-[50%] w-[15px] h-[15px]'></div>
                    </div>
                </div>

                <p className="mt-2 font-normal text-[17px]"> Rosey is currently available only on macOS. Future plans may include Windows and Linux.</p>
            </div>
            <div className="flex flex-col w-auto h-auto shadow-md rounded-lg p-4 dark:bg-[#222222]">
            <div className='flex flex-row justify-between items-center'>
                    <p className="font-bold text-[20px]">PRIVACITY</p>
                    <div className="flex flex-row gap-2">
                        <div className='bg-red-400 rounded-[50%] w-[15px] h-[15px]'></div>
                        <div className='bg-yellow-400 rounded-[50%] w-[15px] h-[15px]'></div>
                        <div className='bg-green-400 rounded-[50%] w-[15px] h-[15px]'></div>
                    </div>
                </div>
                <p className="mt-2 font-normal text-[17px]"> Be assured, Rosey does not collect telemetry data or any other information from your computer.</p>
            </div>
        </div>

        <div className="mt-8"> <AdvancedHeader
            header='STABLE RELEASES'
            subheader='All available releases of the application'
            icon='folder-download'/>
        </div>

        <div className="grid grid-flow-row md:grid-cols-2 sm:grid-row-1 gap-2 mt-5">
            <ComponentReleaseLogs version="1.0.0 (Release Candidate)" date="17/09/2024" subtitle='CHANGELOGS'
                urlpkg='https://github.com/drosestudios/rosey/releases/download/untagged-f5f25291077da4915aae/Rosey-1.0.0-arm64-mac.zip'
                urldmg='https://github.com/drosestudios/rosey/releases/download/untagged-f5f25291077da4915aae/Rosey-1.0.0-arm64.dmg'
                logs={[
                    "Initial release based on extensive beta testing.",
                    "Multiple improvements and bug fixes."
            ]}/>
        </div>
    </motion.main>
  );
}
