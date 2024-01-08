import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`${theme === 'dark' ? 'bg-dark-blue text-white' : 'bg-white text-black'}  flex justify-between px-3 py-6  md:px-16 shadow-md items-center text-xl`}>
      <h1 className=" font-black">Where in the world?</h1>
      <div>
        <button className="flex items-center gap-2 font-black" onClick={toggleTheme}>
          <IoMoonOutline />
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Navbar;
