import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/UnderConstruction.module.css";
function UnderConstruction({ message }) {
  return (
    <h1 className={`${styles.UnderConstruction}`}>
      {message ? message : "Sorry This Page is in UnderConstruction!!"}{" "}
      <span className={styles.home}>
        <Link to="/">Go Home</Link>
      </span>
    </h1>
  );
}

export default UnderConstruction;
