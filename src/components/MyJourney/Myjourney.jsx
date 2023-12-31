import React from "react";
import styles from "../../Styles/Myjourney.module.css";
import { educationdata } from "../../Data/data";
function Myjourney() {
  return (
    <div>
      <div className={`container ${styles.Myjourney}`}>
        <h1 className="textcenter ">MY journey</h1>
        {educationdata.map((item, i) => (
          <div key={i} className={`${styles.Myjourney__div}`}>
            <div className={styles.left}>
              <p>{item.datestart}</p>
              <p>{item.dateend}</p>
            </div>
            <div className={`${styles.right} padding`}>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Myjourney;
