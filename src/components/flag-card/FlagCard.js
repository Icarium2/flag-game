import React, { useEffect } from "react";
import styles from "./FlagCard.module.css";
import { fetchCountry } from "../../helpers";

export const FlagCard = ({ setCountry, country, randomCountry }) => {
  useEffect(() => {
    fetchCountry(setCountry, randomCountry);
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.flagWrapper}>
        {country.flag && <img src={country?.flag} alt="nice try" />}
      </div>
      <div className={styles.questionWrapper}>
        <h2 className={styles.question}>
          What country does this flag belong to?
        </h2>
      </div>
    </div>
  );
};
