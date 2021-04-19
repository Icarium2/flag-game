import React from "react";
import styles from "./Guesses.module.css";

export const Guesses = ({ guesses }) => {
  return (
    <div className={styles.guessesWrapper}>
      <p className={styles.guesses}>Guesses left: </p>
      <p className={styles.guessesCount}> {guesses}</p>
    </div>
  );
};
