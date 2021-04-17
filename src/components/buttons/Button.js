import React, { useState, useEffect } from "react";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <div className={styles.answerContainer}>
      <button className={styles.answer}>Answer</button>
    </div>
  );
};

export default Button;
