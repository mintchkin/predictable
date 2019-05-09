import React from "react";
import styles from "./RestartButton.module.css";

const RestartButton = ({ handler }) => (
  <button className={styles.RestartButton} onClick={handler}>
    Restart
  </button>
);

export default RestartButton;
