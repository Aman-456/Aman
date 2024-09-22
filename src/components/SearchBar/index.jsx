import React from 'react'
import styles from "../../Styles/SearchBar.module.css"
function SearchBar({ setproject }) {

    const serach = React.useRef(null);

    return (
        <div className={`${styles.div} flex container`}>

            <input type="text" className={styles.SearchBar} ref={serach} />
            <button
                className={`btn ${styles.btn}`}
                onClick={() => {
                    setproject(serach.current.value.toLowerCase())
                    window.scrollTo(0, 250)
                }}
            > Serach</button>
        </div >
    )
}

export default SearchBar