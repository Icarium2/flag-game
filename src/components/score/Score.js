import React, { useState, useEffect } from "react";
import styles from "./Score.module.css";

export const Score = ({ score }) => {
  return (
    <div className={styles.scoreContainer}>
      <p>points:{score}</p>
    </div>
  );
};
