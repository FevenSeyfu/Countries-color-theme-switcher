import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useCountryContext } from '../../context/CountryContext';

const Search = () => {
  const { filterCountriesByName } = useCountryContext();
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    filterCountriesByName(value);
  };

  return (
    <div className="flex gap-2 shadow p-2 md:p-2 text-lg items-center bg-white sm:w-[300px] md:w-[450px]">
      <IoSearch className="text-black" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchInput}
        onChange={handleInputChange}
        className='focus:outline-none'
      />
    </div>
  );
};

export default Search;
