import React, { useState, useEffect } from "react";
import styles from "./FinishGame.module.css";
import sound1 from "../../assets/sounds/wompwomp.mp4";
import sound2 from "../../assets/sounds/tada.wav";

let womp = new Audio(sound1);
let tada = new Audio(sound2);

export const FinishGame = ({ score }) => {
  setImmediate(() => {
    if (score < 6) {
      womp.play();
    } else {
      tada.play();
    }
  });
  return (
    <div className={styles.endOfGameContainer}>
      <h1 className={styles.endOfGameText}>
        Congratulations, you finished with {score} points!
      </h1>
    </div>
  );
};
