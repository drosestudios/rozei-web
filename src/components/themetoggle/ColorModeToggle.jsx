import React from "react";
import useDarkMode from "./useDarkMode";

const ColorModeToggle = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <button aria-label="Toggle colormode" onClick={() => setTheme(colorTheme === "light" ? "dark" : "light")}
      className="cursor-pointer w-full items-center h-8 md:w-[90px] justify-center flex flex-row dark:border-white border border-zinc-200 hover:border-black dark:hover:bg-white dark:hover:text-black rounded-xl hover:bg-black hover:text-white">

      {colorTheme === "light" ? (
        <i className="fi fi-br-sun flex text-sm"></i> ) : (
        <i className="fi fi-br-moon flex text-sm"></i>
      )}

      {colorTheme === "light" ? (
        <p className="hidden md:block ml-1 font-bold text-sm"> Light </p> ) : (
        <p className="hidden md:block ml-1 font-bold text-sm"> Dark </p>
      )}

    </button>
  );
};

export default ColorModeToggle;
