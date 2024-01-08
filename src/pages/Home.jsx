import React, { useEffect } from "react";
import { useCountryContext } from "../context/CountryContext.jsx";
import Layout from "../components/common/Layout";
import Search from "../components/home/Search";
import Filter from "../components/home/Filter";
import CountryCard from "../components/home/CountryCard";
import { useTheme } from "../context/ThemeContext.jsx";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const {
    fetchCountries,
    filterCountriesByRegion,
    filterCountriesByName,
    countries,
    filteredCountries,
    selectedRegion,
  } = useCountryContext();

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const displayCountries =
    filteredCountries.length > 0 ? filteredCountries : countries;
  return (
    <Layout>
      <div
        className={`${
          theme === "dark"
            ? "bg-very-dark-blue text-white"
            : "bg-gray-100 text-black"
        } px-6  md:px-16  flex flex-1 flex-col h-full `}
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row my-8">
          <Search />
          <Filter onFilter={filterCountriesByRegion} />
        </div>
        <div className="grid md:grid-cols-2  lg:grid-cols-4  gap-8 my-4">
          {displayCountries.slice(0, 8).map((country) => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
