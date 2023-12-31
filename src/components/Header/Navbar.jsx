import React, { useRef, useState, useEffect } from "react";
import styles from "../../Styles/Navbar.module.css";
import { Link } from "react-router-dom";
import Iframe from "../Iframe/Iframe";
import Aside from "./Aside/Aside";

import { list1 } from "../../Data/image";

function Navbar() {
  const ref = useRef(null);
  const aside = useRef(null);
  const burger = useRef(null);
  const [open, setopen] = useState(false);
  const [cv, setcv] = useState(false);
  useEffect(
    () => (aside.current.style.top = ref?.current.clientHeight + "px"),
    []
  );
  useEffect(
    () =>
      (aside.current.style.left =
        ref.current.getBoundingClientRect().left + "px"),
    [open]
  );
  window.addEventListener("resize", () => {
    if (aside.current) {
      aside.current.style.top = ref.current.clientHeight + "px";
      aside.current.style.left =
        ref.current.getBoundingClientRect().left + "px";
    }
  });
  return (
    <>
      <div className={`container flex ${styles.navbar}`} ref={ref}>
        <div className={`container flex`}>
          <div className={styles.left}>
            <div
              ref={burger}
              className={"burger"}
              onClick={(e) => {
                e.currentTarget.classList.toggle("active");
                aside.current.classList.toggle(`${styles.aside__left}`);
                setopen(!open);
              }}
            >
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
            <Link to="/">
              <h3 className={styles.logo}> AmanUllah</h3>
            </Link>
          </div>
          <div className={`flex ${styles.right}`}>
            <Link className={styles.right__btn} to="/projects">
              Projects
              <span className={styles.number}>{Object.keys(list1).length}</span>
            </Link>
            <button className={styles.right__btn} onClick={() => setcv(true)}>
              cv
            </button>
          </div>
        </div>
      </div>
      <div className={`padding ${styles.aside}`} ref={aside}>
        <Aside burger={burger} aside={aside} setopen={setopen} open={open} />
        {open && (
          <div
            className={styles.blur}
            onClick={() => {
              aside.current.classList.toggle(`${styles.aside__left}`);
              burger.current.classList.toggle("active");
              setopen(!open);
            }}
          ></div>
        )}
      </div>
      {cv && <Iframe img={cv} seti={setcv} />}
    </>
  );
}
export default Navbar;
