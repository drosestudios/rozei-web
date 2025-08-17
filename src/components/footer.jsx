"use client";
import { Separator } from '@/components/ui/separator'
import { useRouter } from 'next/navigation';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Footer = () => {
  const router = useRouter();
  const handleNavigation = (path) => router.push(path);

  return (
    <footer className="w-full bg-[#1a1a1a] p-6 md:p-12 pb-14 md:pb-14">
      <section className="w-full flex flex-col max-w-6xl mx-auto gap-6 md:gap-0">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 md:gap-0 w-full">

          {/* LOGO AND LEGALS */}
          <div className="flex flex-col md:flex-row gap-0 md:gap-4 items-center text-center md:text-left">
            <img src="/image3.png" className="size-9 shadow-xl" />
            <p className="font-bold text-white mt-4 md:mt-0 text-base">Rozei LTD © 2025</p>
            <div className="flex flex-row items-center gap-2 md:gap-4">
              <Separator orientation='vertical' className='h-3 hidden md:block'/>
              <p onClick={() => handleNavigation('/license')} className="font-medium text-base text-white/80 hover:underline cursor-pointer">
                License
              </p>
              <Separator orientation='vertical' className='h-3 hidden md:block'/>
              <p onClick={() => handleNavigation('/terms')} className="font-medium text-base text-white/80 hover:underline cursor-pointer">
                Privacy and TOS
              </p>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4 text-white items-center">
            <a href="https://twitter.com/rozeiapp" target="_blank" rel="noopener noreferrer">
              <Tippy arrow={false} duration={0} content={<span className='text-sm font-semibold'> Twitter / X</span>}>
                <i className="fab fa-twitter hover:opacity-50 text-xl"></i>
              </Tippy>
            </a>
            <a href="https://instagram.com/rozeiapp" target="_blank" rel="noopener noreferrer">
              <Tippy arrow={false} duration={0} content={<span className='text-sm font-semibold'> Instagram </span>}>
                <i className="fab fa-instagram hover:opacity-50 text-xl"></i>
              </Tippy>
            </a>
            <a href="https://threads.net/@rozeiapp" target="_blank" rel="noopener noreferrer">
              <Tippy arrow={false} duration={0} content={<span className='text-sm font-semibold'> Threads </span>}>
                <i className="fab fa-threads hover:opacity-50 text-xl"></i>
              </Tippy>
            </a>
            <a href="https://discord.gg/RspAnpPkqb" target="_blank" rel="noopener noreferrer">
              <Tippy arrow={false} duration={0} content={<span className='text-sm font-semibold'> Discord </span>}>
                <i className="fab fa-discord hover:opacity-50 text-xl"></i>
              </Tippy>
            </a>
          </div>

        </div>

      </section>
    </footer>
  );
};

export default Footer;
