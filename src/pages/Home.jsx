import React, { useEffect } from "react";
import { useCountryContext } from "../context/CountryContext.jsx";
import Layout from "../components/common/Layout";
import Search from "../components/home/Search";
import Filter from "../components/home/Filter";
import CountryCard from "../components/home/CountryCard";
import { useTheme } from "../context/ThemeContext.jsx";
import Pagination from "../components/home/Pagination.jsx";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const {
    fetchCountries,
    filterCountriesByRegion,
    filterCountriesByName,
    countries,
    filteredCountries,
    selectedRegion,
    currentPage,
    itemsPerPage,
    handlePageChange,
  } = useCountryContext();

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const displayCountries =
    filteredCountries.length > 0 ? filteredCountries : countries;

  const indexOfLastCountry = currentPage * itemsPerPage;
  const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
  const currentCountries = displayCountries
    ? displayCountries.slice(indexOfFirstCountry, indexOfLastCountry)
    : [];

  return (
    <Layout>
      <div
        className='px-6  md:px-16  flex flex-1 flex-col pb-24  h-screen justify-between'
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row my-8">
          <Search />
          <Filter onFilter={filterCountriesByRegion} />
        </div>
        <div className="flex flex-col items-center">
          <div className="grid md:grid-cols-2  lg:grid-cols-4  gap-x-16 gap-y-8 my-4">
            {currentCountries.map((country) => (
              <CountryCard key={country.alpha3Code} country={country} />
            ))}
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={displayCountries.length}
            paginate={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
