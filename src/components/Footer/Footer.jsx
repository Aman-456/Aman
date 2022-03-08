import React from 'react'
import { aboutme } from '../../Data/data';
import styles from "../../Styles/Footer.module.css"
import SocialLinks from '../SocialLinks/SocialLinks';

function Footer() {
    return (
        <div className={`container-f ${styles.Footer} padding`}>
            <div className={`container flex ${styles.Footer__div}`}>
                <div className={` ${styles.first}`}>
                    <div className={""}>
                        <a href="#hero">
                            <h1>Aman Ullah</h1>
                        </a>
                        <div className={styles.p}>
                            {aboutme}
                        </div>
                    </div>
                    <div className={""}>
                        <SocialLinks />
                    </div>

                </div>
                <div className={`textcenter margin3 ${styles.second}`}>
                    <h3>Copyright@{new Date().getFullYear()}</h3>
                </div>
            </div>
        </div >
    )
}

export default Footer