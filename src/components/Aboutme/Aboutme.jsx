import React from 'react'
import { aboutme } from "../../Data/data"
import RecentWork from "../../components/RecentWork/RecentWork"
import CTA from "../../components/CTA/CTA"
import styles from "../../Styles/Aboutme.module.css"

import { list } from "../../Data/image"
function Aboutme() {
    return (
        <div className={`container-f ${styles.Aboutme}`}>
            <div className="container">
                <h1 className="textcenter">About ME</h1>
                <div className={styles.design}></div>
                <div className={`container-f ${styles.main__content}`}>
                    <p className={` ${styles.p} textcenter`}>hello,</p>
                    <h2 className={`${styles.h2} textcenter `}>i am AmanUllah <br /> I can give your business a new creative start right away !</h2>
                    <div className={`${styles.para}`}>
                        {aboutme}
                    </div>
                    <div className={`mt ${styles.img}`}>
                        <img src={list.laptop} alt="" />
                    </div>

                    <div className="mt">
                        <RecentWork black />
                    </div>
                    <div className="mt">
                        <CTA />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme