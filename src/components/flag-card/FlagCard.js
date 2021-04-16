import React, { useState, useEffect } from "react";
import { CountryCodes } from "./CountryCodes";
import styles from "./FlagCard.module.css";

const FlagCard = () => {
  const [availableCountries, setAvailableCountries] = useState(CountryCodes);
  const [country, setCountry] = useState([]);

  const randomCountry =
    availableCountries[
      Math.floor(Math.random() * availableCountries.length - 1)
    ];

  const fetchCountry = async () => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${randomCountry}`
    );
    const country = await response.json();
    setCountry(country);
  };
  useEffect(() => {
    fetchCountry();
  }, []);
  return (
    <div className={styles.cardContainer}>
      <img src={country.flag} alt="nice try retard" />
    </div>
  );
};

export default FlagCard;
