import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const posts = [
  { path: 'designing-rozei-a-journey-since-2019', title: 'Designing Rozei: A Journey Since 2019' },
  { path: 'announcing-the-rozei-website', title: 'Announcing the Rozei Website' },
  { path: 'rozei-public-beta-coming-soon', title: 'Rozei Public Beta Coming Soon' }
];

const Header = () => {
  // inside Header component
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');

  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path); setMobileMenuOpen(false);
  };

  return (
    <header className="w-full mt-8 p-4 px-8 bg-transparent">
      <nav className="flex xl:max-w-7xl flex-row justify-between items-center w-full mx-auto relative">
        {/* LOGO AND NAME */}
        <div onClick={() => handleNavigation('/')} className="cursor-pointer flex flex-row gap-3 items-center">
          <img src="/image3.png" className="size-9 shadow-lg"/>
          <p className="font-bold text-xl font-poppins text-red-800">ROZEI</p>
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
            onClick={() => handleNavigation('/blog')}
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
          <button className="hidden lg:flex rounded-md p-2 px-3 transition-all duration-150
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
          <div className="absolute top-full left-0 w-full bg-white shadow-lg text-xl rounded-xl flex flex-col p-4 gap-4 lg:hidden z-50">
            <p onClick={() => handleNavigation('/releases')} className="cursor-pointer font-semibold text-zinc-600 hover:text-zinc-400">
              Resources
            </p>
            <p onClick={() => handleNavigation('/blog')} className="cursor-pointer font-semibold text-zinc-600 hover:text-zinc-400">
              Blog
            </p>
            {isBlogPage && (
              <div className="flex flex-col gap-2">
                {posts.map((post) => (
                  <p
                    key={post.path} onClick={() => handleNavigation(`/blog/${post.path}`)}
                    className="cursor-pointer text-zinc-500 hover:text-red-900"
                  >
                    {post.title}
                  </p>
                ))}
              </div>
            )}
            <p onClick={() => handleNavigation('/faq')} className="cursor-pointer font-semibold text-zinc-600 hover:text-zinc-400">
              Asked Questions
            </p>

          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
