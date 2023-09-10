import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import "./country.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log(visitedCountries);

    const newVisitedCountries = visitedCountries.includes(country)
      ? [...visitedCountries]
      : [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
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
      <div>
        <h3>Visited Countries: {visitedCountries.length}</h3>
        <ul style={{ listStyle: "none" }}>
          {visitedCountries.map((country) => {
            return <li key={country.cca3}>{country}</li>;
          })}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
