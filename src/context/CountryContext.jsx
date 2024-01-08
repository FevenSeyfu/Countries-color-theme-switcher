import React, { createContext, useContext, useState } from 'react';

const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  const fetchCountries = async () => {
    try {
      const response = await fetch("./data.json");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log("error fetching countries", error);
    }
  };

  const filterCountriesByRegion = (region) => {
    setSelectedRegion(region);

    if (region === 'All') {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((country) => country.region === region);
      setFilteredCountries(filtered);
    }
  };
  const contextValue = {
    countries,
    filteredCountries,
    selectedRegion,
    fetchCountries,
    filterCountriesByRegion,
  };

  return (
    <CountryContext.Provider value={contextValue}>
      {children}
    </CountryContext.Provider>
  );
};

const useCountryContext = () => {
  return useContext(CountryContext);
};

export { CountryProvider, useCountryContext };