import React from "react";
import styles from "./Score.module.css";

export const Score = ({ score }) => {
  return (
    <div className={styles.scoreWrapper}>
      <p className={styles.points}>Points: </p>
      <p className={styles.score}> {score}</p>
    </div>
  );
};
