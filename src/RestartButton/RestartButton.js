import React from "react";
import styles from "./RestartButton.module.css"

const RestartButton = ({ handler }) => (
  <a href="#" className={styles.RestartButton} onClick={handler}>Restart</a>
);

export default RestartButton;
