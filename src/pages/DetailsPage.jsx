import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/common/Layout";
import BackButton from "../components/detail/BackButton";
import CountryDetail from "../components/detail/CountryDetail";
import { useTheme } from "../context/ThemeContext";

const DetailsPage = () => {
  const { id: alpha3Code } = useParams();
  const { theme, toggleTheme } = useTheme();
  return (
    <Layout>
      <div
        className={`${
          theme === "dark"
            ? "bg-very-dark-blue text-white"
            : "bg-gray-100 text-black"
        } px-6  md:px-16 flex flex-1 flex-col w-full h-full md:h-screen`}
      >
        <div>
          <BackButton />
        </div>
        <div>
          <CountryDetail alpha3Code={alpha3Code} />
        </div>
      </div>
    </Layout>
  );
};

export default DetailsPage;
