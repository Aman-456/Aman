import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import Iframe from '../Iframe/Iframe';

import styles from "../../Styles/CTA.module.css"

function CTA() {

    const btn = useRef(null);
    const [iframe, setiframe] = useState(false);

    return (
        <div className={`${styles.CTA} container-f`}>
            <div className={`container padding flex ${styles.CTA__container}`}>
                <h1>Did you liked my work?</h1>
                <div className={styles.buttons}>
                    <Link to="/contact"><button className={`btn`} >Hire Me!</button></Link>
                    <button ref={btn} onClick={() => setiframe(true)} className={`btn`}>Cv</button>
                </div>
            </div>
            {iframe && <Iframe img={iframe} seti={setiframe} />}
        </div>
    )
}

export default CTA