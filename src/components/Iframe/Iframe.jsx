/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { AiFillCloseCircle } from "react-icons/ai";

import { AiOutlineDownload } from "react-icons/ai";

import styles from "../../Styles/Iframe.module.css"

import { list } from "../../Data/image"



function Iframe({ url, func, img, seti }) {

    React.useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode === 27) {
                func?.(null);
                seti?.(null)
            }
        })
    })

    return (
        url !== null && <div className={`${styles.Iframe__div} container-f `}>
            <div className={styles.Iframe}
            >
                {
                    img ?
                        <>
                            < img className={styles.img} src={list.cv} alt="cv" loading='lazy' />
                            <a
                                className={styles.download}
                                href={list.pdf}
                            >
                                <AiOutlineDownload />
                            </a>
                        </>
                        :
                        <iframe
                            title="iframe"
                            src={url}
                            frameBorder="0"
                        />
                }
                <div
                    className={styles.cross}
                    onClick={() => { func?.(null); seti?.(false) }}
                >
                    <AiFillCloseCircle />
                </div>
            </div>

            <div className={styles.overlay}
                onClick={() => { func?.(null); seti?.(false) }}
            ></div>
        </div >
    )
}

export default Iframe