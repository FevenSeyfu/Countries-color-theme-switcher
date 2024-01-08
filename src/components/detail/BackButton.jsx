import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const BackButton = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="mt-8">
      <button
        className={`${
          theme === "dark" ? "bg-dark-blue text-white shadow-gray-700" : "bg-white text-black shadow-gray-300"
        } flex justify-evenly items-center  shadow-sm  w-36 py-2 text-xl`}
        onClick={handleClick}
      >
        <FaArrowLeft />
        Back
      </button>
    </div>
  );
};

export default BackButton;
