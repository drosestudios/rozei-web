import React from "react";
import useDarkMode from "./useDarkMode";

const ColorModeToggle = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <button aria-label="Toggle colormode" onClick={() => setTheme(colorTheme === "light" ? "dark" : "light")}
      className="cursor-pointer w-full pl-4 pr-4 md:w-[90px] justify-center items-center flex flex-row dark:border-white border-[4px] border-solid border-black p-[3px] dark:hover:bg-white dark:hover:text-black rounded-lg hover:bg-black hover:text-white">

      {colorTheme === "light" ? (
        <i className="fi fi-br-sun flex text-[16px]"></i> ) : (
        <i className="fi fi-br-moon flex text-[16px]"></i>
      )}

      {colorTheme === "light" ? (
        <p className="hidden md:block ml-1 font-bold text-[15px]"> Light </p> ) : (
        <p className="hidden md:block ml-1 font-bold text-[15px]"> Dark </p>
      )}

    </button>
  );
};

export default ColorModeToggle;
