import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const CountryDetail = ({ alpha3Code }) => {
  const [country, setCountry] = useState([]);
  const [borderCountries, setBorderCountries] = useState([]);
  const {
    name,
    flags,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = country;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        const selectedCountry = data.find(
          (country) => country.alpha3Code === alpha3Code
        );
        if (selectedCountry.borders) {
          const borderCountry = selectedCountry.borders.map((border) => {
            let country = data.find((country) => country.alpha3Code === border);
            return [country.name,border];
          });
          setBorderCountries(borderCountry);
        }
        setCountry(selectedCountry);
      } catch (error) {
        console.log("error fetching countries", error);
      }
    };
    

    fetchCountries();
  }, [alpha3Code]);
 
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:gap-24  mt-12 h-[400px]">
      <img src={flags && flags.png} alt={`${name} flag`} className="w-full md:w-2/5" />
      <div className="flex flex-col py-8 gap-6 md:gap-12 w-full">
        <h1 className="font-extrabold text-2xl md:text-4xl">{country.name}</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between w-full text:md  md:text-xl">
          <ul className="flex flex-col gap-2 md:gap-4">
            <li>
              <span className="font-extrabold ">Native Name : </span>
              {nativeName}
            </li>
            <li>
              <span className="font-extrabold ">Population : </span>
              {population}
            </li>
            <li>
              <span className="font-extrabold ">Region : </span>
              {region}
            </li>
            <li>
              <span className="font-extrabold ">Sub Region : </span>
              {subregion}
            </li>
            <li>
              <span className="font-extrabold ">Capital : </span>
              {capital}
            </li>
          </ul>
          <ul className="flex flex-col gap-2 md:gap-4">
            <li>
              <span className="font-extrabold ">Top Level Domain : </span>
              {topLevelDomain}
            </li>
            <li>
              <span className="font-extrabold ">Currencies : </span>
              {currencies && currencies.map((currency) => currency.name)}
            </li>
            <li>
              <span className="font-extrabold ">Languages : </span>
              {languages &&
                languages.map((language) => language.name).join(", ")}
            </li>
          </ul>
        </div>
        {borderCountries.length > 0 && (
         
          <div className="flex flex-col  gap-2 md:flex-row md:items-center ">
            <span className="text-xl md:text-2xl font-extrabold">
              Border Countries:
            </span>
            <ul className="flex flex-row flex-wrap gap-4 items-center">
              {borderCountries.map((border) => (
                <li
                  key={border[1]}
                  className="shadow-sm shadow-gray-400 bg-white py-1 px-4"
                 
                >
                  <Link to={`/${border[1]}`}> {border[0]}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetail;
