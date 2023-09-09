import { useState } from "react";
import "./country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, population, area } = country;
  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    setVisited(!visited);
  };

  return (
    <div
      className="country"
      style={
        visited
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white" }
      }
    >
      {" "}
      <h3>{name?.official}</h3>
      <h5 style={{ color: "slategray" }}>
        {visited ? " I visited this country" : " "}
      </h5>
      <img
        style={{ height: "200px", width: "300px" }}
        src={flags?.png}
        alt={name?.official}
      />
      <p>Area: {area}</p>
      <p>Population: {population}</p>
      <button onClick={handleVisit} style={{ backgroundColor: "gainsboro" }}>
        {visited ? "Visited" : "Going?"}
      </button>
      {visited ? " " : " Wanna visit?"}
    </div>
  );
};

export default Country;
