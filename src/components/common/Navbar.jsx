import React from "react";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = (props) => {
  return (
    <div className="bg-white text-black dark:bg-dark-blue dark:text-white flex justify-between px-4 py-4  md:px-16 shadow-md items-center">
      <h1 className="text-lg font-black">Where in the world?</h1>
      <div>
        <button className="flex items-center gap-2 font-black" onClick={props.toggleDarkMode}>
          <IoMoonOutline />
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Navbar;
