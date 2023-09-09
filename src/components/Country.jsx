import "./country.css";
const Country = ({ country }) => {
  console.log(country.cca3);
  const { name, flags } = country;
  return (
    <div className="country">
      {" "}
      <h3>{name?.official}</h3>
      <img src={flags?.png} alt={name?.official} />
    </div>
  );
};

export default Country;
