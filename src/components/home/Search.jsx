import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useCountryContext } from '../../context/CountryContext';
import { useTheme } from '../../context/ThemeContext';

const Search = () => {
  const { theme, toggleTheme } = useTheme();
  const { filterCountriesByName } = useCountryContext();
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    filterCountriesByName(value);
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-dark-blue text-white' : 'bg-white text-black'} flex gap-2 shadow p-2 md:p-2 text-lg items-center  sm:w-[300px] md:w-[450px]`}>
      <IoSearch/>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchInput}
        onChange={handleInputChange}
        className={`focus:outline-none ${theme === 'dark' ? 'bg-dark-blue text-white' : 'bg-white text-black'}`}
      />
    </div>
  );
};

export default Search;
