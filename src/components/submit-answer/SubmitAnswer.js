import React, { useRef, useState, useEffect } from "react";
import styles from "./SubmitAnswer.module.css";

const SubmitAnswer = ({ country }) => {
  const answerRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (country?.name === answerRef.current.value) {
      window.alert("right guess bitch");
    } else {
      window.alert("guess again moron");
    }
  };

  return (
    <div className={styles.answerWrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input type="text" ref={answerRef}></input>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.answer}>
            Answer
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitAnswer;
