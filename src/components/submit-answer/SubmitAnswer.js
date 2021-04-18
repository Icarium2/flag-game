import React, { useRef, useState, useEffect } from "react";
import styles from "./SubmitAnswer.module.css";
import { fetchCountry } from "../../helpers/FetchCountry";

export const SubmitAnswer = ({
  setCountry,
  country,
  score,
  setScore,
  randomCountry,
}) => {
  const answerRef = useRef();

  const handleClick = () => {
    if (country?.name === answerRef.current.value) {
      setScore((score += 1));
      fetchCountry(setCountry, randomCountry);
      window.alert("Correct!");
    } else {
      window.alert(`Wrong! This flag belongs to ${country.name}`);
      fetchCountry(setCountry, randomCountry);
    }
  };

  const handlePass = () => {
    fetchCountry(setCountry, randomCountry);
  };

  return (
    <div className={styles.answerWrapper}>
      <div className={styles.inputContainer}>
        <input type="text" ref={answerRef}></input>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleClick} type="button" className={styles.answer}>
          Answer
        </button>
        <button
          onClick={handlePass}
          type="button"
          className={styles.passButton}
        >
          Pass
        </button>
      </div>
    </div>
  );
};
