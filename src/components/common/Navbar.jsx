import React from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className={`${theme === 'dark' ? 'bg-dark-blue text-white' : 'bg-white text-black'} font-black flex justify-between py-6 px-6  md:px-16 shadow-md items-center text-base md:text-lg lg:text-xl`}>
      <h1>Where in the world?</h1>
      <div>
        <button className="flex items-center gap-2" onClick={toggleTheme}>
          {theme === 'dark' ? (
            <>
              <IoSunnyOutline />
              Light Mode
            </>
          ) : (
            <>
              <IoMoonOutline />
              Dark Mode
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;