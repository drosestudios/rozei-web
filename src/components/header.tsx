"use client";
import { useState } from 'react';
import { usePathname, useRouter } from "next/navigation";
import { articles } from '../../app/articles/articles';

const Header = () => {
  // inside Header component
  const pathname = usePathname();
  const router = useRouter();
  const isBlogPage = pathname.startsWith('/articles');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (path: any) => {
    router.push(path); setMobileMenuOpen(false);
  };

  return (
    <header className="w-full mt-6 p-4 px-8 bg-transparent">
      <nav className="flex xl:max-w-7xl flex-row justify-between items-center w-full mx-auto relative">
        {/* LOGO AND NAME */}
        <div onClick={() => handleNavigation('/')} className="cursor-pointer flex flex-row gap-3 items-center">
          <img src="/image3.png" className="size-9 shadow-lg"/>
          <p className="font-bold text-xl font-poppins text-red-800">ROZEI APP</p>
        </div>

        {/* MIDDLE BUTTONS */}
        <div className="hidden lg:flex flex-row gap-2 items-center absolute left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => handleNavigation('/releases')}
            className="transition-all duration-150 text-sm hover:bg-stone-100 p-2 px-3 rounded-md font-semibold text-zinc-600"
          >
            Resources
          </button>
          <button
            onClick={() => handleNavigation('/articles')}
            className="transition-all duration-150 text-sm hover:bg-stone-100 p-2 px-3 rounded-md font-semibold text-zinc-600"
          >
            Articles
          </button>
          <button
            onClick={() => handleNavigation('/faq')}
            className="transition-all duration-150 text-sm hover:bg-stone-100 p-2 px-3 rounded-md font-semibold text-zinc-600"
          >
            Frequently Asked Questions
          </button>
        </div>

        {/* END BUTTONS */}
        <div className="flex items-center gap-2">
          <button className="hidden rounded-md p-2 px-3 transition-all duration-150
            hover:bg-stone-100 text-sm font-semibold text-zinc-600">
            Log In
          </button>

          <button disabled className="hidden lg:flex gap-2 flex-row dark:text-black dark:bg-white bg-[#282828] hover:bg-[#555555] rounded-lg shadow-lg justify-center items-center p-2 px-3 text-white w-fit disabled:opacity-50">
            <i className="fa-brands fa-safari"></i>
            <p className="font-bold text-sm whitespace-nowrap">Get Rozei free</p>
          </button>

          {/* MOBILE MENU ICON */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:flex lg:hidden items-center justify-center p-2">
            <i className="fa-solid fa-bars text-2xl opacity-60"></i>
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg text-base rounded-xl flex flex-col p-4 gap-4 lg:hidden z-50">
            <p onClick={() => handleNavigation('/releases')} className="cursor-pointer font-semibold text-zinc-600 hover:text-red-900">
              Resources
            </p>
            <p onClick={() => handleNavigation('/articles')} className="cursor-pointer font-semibold text-zinc-600 hover:text-red-900">
              Articles
            </p>
            {isBlogPage && (
              <div className="flex flex-col gap-2">
                {articles.map((post) => (
                  <p key={post.slug} onClick={() => handleNavigation(`/articles/${post.slug}`)}
                    className="cursor-pointer text-zinc-500 hover:text-red-900"
                  >
                    {post.title}
                  </p>
                ))}
              </div>
            )}
            <p onClick={() => handleNavigation('/faq')} className="cursor-pointer font-semibold text-zinc-600 hover:text-red-900">
              Frequently Asked Questions
            </p>

          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
