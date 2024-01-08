import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useCountryContext } from "../../context/CountryContext.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";

const Filter = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const { filterCountriesByRegion } = useCountryContext();

  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setMenuOpen(false);
    filterCountriesByRegion(option);
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-dark-blue text-white' : 'bg-gray-100 text-black'} relative inline-block`}>
      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="flex justify-between items-center py-4 px-4 text-md shadow w-[200px] "
      >
        Filter by Region
        <FaChevronDown />
      </button>
      {isMenuOpen && (
        <div
          className={`${theme === 'dark' ? 'bg-dark-blue text-white ring-white' : 'bg-white ring-black'}  absolute left-0 mt-1 w-full rounded-md shadow-lg  ring-1  ring-opacity-5 `}
          style={{ minWidth: "100%" }}
        >
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelectChange(option)}
                className={`${theme === 'dark' ? 'text-white hover:bg-gray-800 hover:text-gray-200 ':'text-black hover:bg-gray-100 hover:text-gray-900' } block w-full px-4 py-2 text-md font-medium text-left  `}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
