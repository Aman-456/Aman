import React from "react";
import styles from "../../Styles/RecentWork.module.css";
import { list } from "../../Data/image";

// import data from "../../Data/data.json"

function RecentWork({ black }) {
  const arr = Object.entries(list1);

  return (
    <div className={`container  padding ${styles.RecentWork}  `}>
      <h1 className={`${black && styles.RecentWork__heading} `}>RECENT work</h1>
      <div className={`container ${styles.RecentWork__container} `}>
        {arr.map((e, i) => (
          <div
            className={`${styles.single__img} ${black && styles.blackshadow}`}
            key={i}
          >
            <img src={e[1]} alt="" className={styles.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentWork;
