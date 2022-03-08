import React from 'react'
import styles from "../../Styles/skillss.module.css"

import { SiTailwindcss, SiBootstrap, SiSass, SiCss3, SiHtml5, SiReact, SiVisualstudiocode, SiNotepadplusplus } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";



export default function SkillsTech() {
    return (
        <div className={`container mt `}>
            <p className="textcenter ">Good Skills and Tools leads better</p>
            <h1 className={`textcenter ${styles.title}`}>Skills and Tools</h1>
            <div className={`container-f flex margin2 ${styles.SkillsTech}`}>
                <div className={` ${styles.skills} padding `}>
                    <h2 className="textcenter ">Skills</h2>
                    <span> <SiHtml5 />Html5</span>
                    <span><SiCss3 />Css3</span>
                    <span><SiSass />SCSS</span>
                    <span><SiBootstrap />Bootstrap</span>
                    <span><SiTailwindcss />TailWind Css</span>
                    <span><SiReact />React Js</span>
                </div>
                <div className={` ${styles.tools} padding`}>
                    <h2 className="textcenter ">Tools</h2>
                    <span><SiVisualstudiocode />VS-Code</span>
                    <span><SiNotepadplusplus />NotePad++</span>
                    <span><FaGitSquare />Git</span>
                </div>
            </div>
        </div>
    )
}
