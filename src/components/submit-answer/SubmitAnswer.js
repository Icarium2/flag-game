import React, { useRef, useState, useEffect } from "react";
import styles from "./SubmitAnswer.module.css";
import { fetchCountry } from "../../helpers/FetchCountry";
import userEvent from "@testing-library/user-event";

export const SubmitAnswer = ({
  setCountry,
  country,
  score,
  setScore,
  randomCountry,
}) => {
  const answerRef = useRef();
  const [correctGuess, setCorrectGuess] = useState(false);
  const [wrongGuess, setWrongGuess] = useState(false);

  const handleClick = () => {
    if (country?.name.toLowerCase() === answerRef.current.value.toLowerCase()) {
      setScore((score += 1));
      setCorrectGuess(true);
      setTimeout(() => {
        setCorrectGuess(false);
        fetchCountry(setCountry, randomCountry);
      }, 2000);
    } else {
      setWrongGuess(true);
    }
    answerRef.current.value = "";
  };

  const handlePass = () => {
    setWrongGuess(false);
    setCorrectGuess(false);
    fetchCountry(setCountry, randomCountry);
    answerRef.current.value = "";
  };

  return (
    <div className={styles.answerWrapper}>
      <div className={styles.messageWrapper}>
        {correctGuess && <h3 class={styles.correctMessage}>Correct!</h3>}
        {wrongGuess && (
          <h3 className={styles.wrongMessage}>
            Incorrect. It belongs to: {country?.name}
          </h3>
        )}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          onKeyPress={(e) => e.key === "Enter" && handleClick()}
          ref={answerRef}
        ></input>
      </div>
      <div className={styles.buttonContainer}>
        <button
          disabled={wrongGuess}
          onClick={handleClick}
          type="button"
          className={styles.answer}
        >
          Answer
        </button>
        <button
          onClick={handlePass}
          type="button"
          className={styles.passButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};
