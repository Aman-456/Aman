import { MdHome } from "react-icons/md";
import { BsCodeSlash, BsFillPersonFill } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import styles from "../../../Styles/Navbar.module.css";

function Aside({ burger, aside, setopen, open }) {
  return (
    <>
      <div className={`${styles.aside_container}  flex  margin3`}>
        <span
          className=" flex"
          onClick={() => {
            burger.current.classList.toggle("active");
            aside.current.classList.toggle(`${styles.aside__left}`);
            setopen(!open);
          }}
        >
          <Link to="/">
            <MdHome className={styles.icon} />
            Portfolio
          </Link>
        </span>
        <span
          className=" flex"
          onClick={() => {
            burger.current.classList.toggle("active");
            aside.current.classList.toggle(`${styles.aside__left}`);
            setopen(!open);
          }}
        >
          <Link to="/Projects">
            <BsCodeSlash className={styles.icon} />
            Projects
          </Link>
        </span>
        <span
          className=" flex"
          onClick={() => {
            burger.current.classList.toggle("active");
            aside.current.classList.toggle(`${styles.aside__left}`);
            setopen(!open);
          }}
        >
          <Link to="/about">
            <BsFillPersonFill className={styles.icon} />
            About
          </Link>
        </span>
        <span
          className=" flex"
          onClick={() => {
            burger.current.classList.toggle("active");
            aside.current.classList.toggle(`${styles.aside__left}`);
            setopen(!open);
          }}
        >
          <Link to="/contact">
            <RiContactsLine className={styles.icon} />
            Contact
          </Link>
        </span>
      </div>
    </>
  );
}
export default Aside;
