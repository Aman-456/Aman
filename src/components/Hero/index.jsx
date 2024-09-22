/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import styles from "../../Styles/Hero.module.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import Iframe from "../Iframe";
function Hero() {
  const btn = useRef(null);
  const hero = useRef(null);
  const [iframe, setiframe] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 240 && btn.current) {
      btn.current.classList?.add("sticky");
    } else if (btn.current) btn.current.classList?.remove("sticky");
  });
  const arr = ["MERN Stack .", " Express .", " Firebase .", " Sass"];
  return (
    <div className={`${styles.Hero} container-f`} ref={hero} id="hero">
      <div className={`container margin3 flex ${styles.Hero__container}`}>
        <div className={`${styles.left} flex `}>
          <div className={`flex ${styles.left__container}`}>
            <p className={styles.hero__tag}>My Passion Is To Create Top Of The Mark Designs For You</p>
            <div className={styles.left__container__textfield}>
              <p>Aman Ullah</p>
              <p>
                {arr.map((e, i) => {
                  return <span key={e}>{e}</span>;
                })}
              </p>
            </div>
            <div className={`${styles.buttons} flex`}>
              <a className={`btn`} ref={btn} href="#Portfolio">
                Portfolio
              </a>
              <button className={`btn`} onClick={() => setiframe(true)}>
                Cv
              </button>
            </div>
            <a href="#projectsection" className={styles.flat__icon__down}>
              <FaAngleDoubleDown />
            </a>
          </div>
        </div>
      </div>
      {iframe && <Iframe img={iframe} seti={setiframe} />}
    </div>
  );
}

export default Hero;
