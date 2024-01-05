import React from "react";
import Layout from "../components/common/Layout";
import Search from "../components/home/Search";
import Filter from "../components/home/Filter";
import CountryCard from "../components/home/CountryCard";
import data from "../assets/data.json";

const Home = () => {
  const countries = data;
  return (
    <Layout>
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <Search />
        <Filter />
      </div>

      <div className="grid  md:grid-cols-4 gap-8">
        {countries.map((country) => {
          <CountryCard country={country}/>;
        })}
      </div>
    </Layout>
  );
};

export default Home;
