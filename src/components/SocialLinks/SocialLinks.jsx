import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";
import { MdEmail } from "react-icons/md";

import styles from "../../Styles/SocialLinks.module.css"
function SocialLinks() {
    return (
        <div className={styles.Icons__div}>
            <a
                href="https://www.facebook.com/1tsAman/"
                className={styles.Icon}
                rel="noopener noreferrer"
                target='_blank'
            >
                <ImFacebook2 />
            </a>

            <a
                href="https://wa.me/03045461456"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.Icon}
            >
                <ImWhatsapp />
            </a>
            <a
                href="mailto:email@email.de"
                rel="noopener noreferrer"
                className={styles.Icon}
            >
                <MdEmail className={styles.Icon} />
            </a>
        </div>
    )
}

export default SocialLinks