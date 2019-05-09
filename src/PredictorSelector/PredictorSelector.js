import React from "react";
import styles from "./PredictorSelector.module.css";

const PredictorSelector = ({ predictors, handleChange }) => (
  <select className={styles.PredictorSelector} onChange={handleChange}>
    {predictors.map(key => (
      <option className={styles.predictorOption} value={key}>
        {key}
      </option>
    ))}
  </select>
);

export default PredictorSelector;
