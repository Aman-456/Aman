import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/UnderConstruction.module.css";

function E404() {
  return (
    <div className="container-f m-auto m8">
      <h1 className={`${styles.UnderConstruction} m5`}>
        Page Not Found
        <span className={styles.home}>
          <Link to="/">Return Home😢</Link>
        </span>
      </h1>
    </div>
  );
}

export default E404;
