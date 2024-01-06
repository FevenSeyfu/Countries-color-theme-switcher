import React, { useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import Search from "../components/home/Search";
import Filter from "../components/home/Filter";
import CountryCard from "../components/home/CountryCard";

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log("error fetching countries", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <Search />
        <Filter />
      </div>

      <div className="grid  md:grid-cols-4 gap-8 mt-12">
        {countries.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
