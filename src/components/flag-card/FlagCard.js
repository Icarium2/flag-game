import React, { useState, useEffect } from "react";
import { CountryCodes } from "./CountryCodes";
import styles from "./FlagCard.module.css";

const FlagCard = ({ setCountry, country }) => {
  const [availableCountries, setAvailableCountries] = useState(CountryCodes);

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
      <img src={country?.flag} alt="nice try" />
      <div className={styles.questionContainer}>
        <h2 className={styles.question}>
          Which country does this flag belong to?
        </h2>
      </div>
    </div>
  );
};

export default FlagCard;
