import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import "./country.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitCountries = () => {
    console.log("add this to your country list");
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <>
      <h2>Countries: {countries.length} </h2>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitCountries={handleVisitCountries}
            country={country}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
