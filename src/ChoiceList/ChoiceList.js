import React from "react";
import { classNames } from "utils";
import styles from "./ChoiceList.module.css";

const ChoiceGroup = ({ choice, guess }) => {
  const correctnessClass = choice === guess ? styles.correct : styles.incorrect;
  return (
    <div className={classNames(styles.ChoiceGroup, correctnessClass)}>
      <div>{choice}</div>
      <div>{guess}</div>
    </div>
  );
};

const ChoiceList = ({ choices }) => (
  <div>
    {choices.map(([choice, guess], index) => (
      <ChoiceGroup key={index} choice={choice} guess={guess} />
    ))}
  </div>
);

export default ChoiceList;
