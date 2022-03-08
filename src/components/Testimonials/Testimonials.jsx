/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import styles from "../../Styles/Testimonials.module.css"

const data = [
    {
        message: "Wating for this client response",
        name: "Stephan's B"
    },
    {
        message: "The project was good . looking forward to work with him again",
        name: "Ali"
    },

]

function Slideshow() {
    const [i, seti] = useState(0);
    const fortimeout = React.useRef(null);
    const forcleanup = () => fortimeout.current ? clearTimeout(fortimeout.current) : "";
    useEffect(() => {
        forcleanup();
        fortimeout.current = setTimeout(() => seti(i === data.length - 1 ? 0 : i + 1), 6000);
        return () => forcleanup();
    }, [i]);

    return (
        <div className="container margin1">
            <div className={`${styles.slideshow} `}>
                <div className="textcenter m5">
                    <p style={{ fontSize: "1.1rem" }}>Don't just believe my word</p>
                    <h1>Look at my customers!</h1>
                </div>
                <div className={styles.slideshowSlider}
                    style={{ transform: `translateX(${-i * 100}%)` }}
                >
                    {data.map((item, ind) => (
                        <div className={styles.slide} key={ind} >
                            <div className={styles.forcenter}>
                                <p>{item.message}</p>
                                <h3>{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.slideshowDots}>
                    {data.map((_, idx) => (
                        <div
                            key={idx}
                            className={`${styles.dot} ${i === idx ? styles.active : ""}`}
                            onClick={() => seti(idx)}
                        ></div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Slideshow;