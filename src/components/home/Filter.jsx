import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useCountryContext } from "../../context/CountryContext.jsx";

const Filter = () => {
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
    <div className="relative inline-block">
      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="flex justify-between items-center py-4 px-4 text-md shadow bg-white w-[200px] "
      >
        Filter by Region
        <FaChevronDown className="text-black" />
      </button>
      {isMenuOpen && (
        <div
          className="absolute left-0 mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          style={{ minWidth: "100%" }}
        >
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelectChange(option)}
                className="block w-full px-4 py-2 text-md font-medium text-left text-black hover:bg-gray-100 hover:text-gray-900"
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
