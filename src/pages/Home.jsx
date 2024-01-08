import React, { useEffect } from "react";
import { useCountryContext } from "../context/CountryContext.jsx";
import Layout from "../components/common/Layout";
import Search from "../components/home/Search";
import Filter from "../components/home/Filter";
import CountryCard from "../components/home/CountryCard";

const Home = () => {
  const {
    fetchCountries,
    filterCountriesByRegion,
    filterCountriesByName,
    countries,
    filteredCountries,
    selectedRegion
  } = useCountryContext();

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const displayCountries = filteredCountries.length > 0 ? filteredCountries : countries;
  return (
    <Layout>
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <Search />
         <Filter onFilter={filterCountriesByRegion} />
      </div>
      <div className="grid md:grid-cols-2  lg:grid-cols-4  gap-12 my-8">
      { displayCountries.slice(0, 8).map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
