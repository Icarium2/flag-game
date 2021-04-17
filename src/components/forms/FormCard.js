import React, { useState, useEffect } from "react";
import styles from "./FormCard.module.css";

const FormCard = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.answerForm}>
        <input></input>
      </form>
    </div>
  );
};

export default FormCard;
