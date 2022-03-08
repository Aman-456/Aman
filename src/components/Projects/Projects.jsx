import React, { useState } from 'react'
import data from "../../Data/data"
import styles from "../../Styles/Project.module.css"
import Iframe from '../Iframe/Iframe'
import { Link } from "react-router-dom"
function Projects({ list, project }) {

    const [link, setlink] = useState(null)

    return (
        <div className="margin1 container-f" id='Portfolio'>
            <div className="textcenter margin1">
                <p className="">My Projects</p>
                <h1 className=" ">Porftfolio</h1>
            </div>

            <div className={`${styles.project__div} container `} id="projectsection">
                {
                    project
                        ? data.map((item, i) => {
                            const a = item.tag.map(e => e.toLowerCase().includes(project))
                            if (
                                item.description.toLowerCase().includes(project) ||
                                item.title.toLowerCase().includes(project) ||
                                a.includes(true)
                            ) {
                                return (
                                    <div className={styles.project} id={item.id} key={i + i}>
                                        <div className={styles.img_tag}>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className={styles.detail}>
                                            <h2 className={styles.title}>{item.title}</h2>
                                            <p>{item.description}</p>
                                            <div className={`flex ${styles.tags}`}>{item.tag?.map((e, i) => <span key={i}>{e}</span>)}</div>
                                            <button
                                                className="btn"
                                                onClick={(e) => setlink(item.id)}
                                            >
                                                View me
                                            </button>
                                            {
                                                link === item.id && <Iframe url={item.url} func={setlink} />
                                            }
                                        </div>
                                    </div>)
                            }
                        })
                        : data.map((item, i) => {
                            return (
                                i <= list &&
                                <div className={styles.project} id={item.id} key={item.id}>
                                    <div className={styles.img_tag}>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className={styles.detail}>
                                        <h2 className={styles.title}>{item.title}</h2>
                                        <p>{item.description}</p>
                                        <div className={`flex ${styles.tags}`}>{item.tag?.map((e, i) => <span key={i}>{e}</span>)}</div>
                                        <button
                                            className="btn"
                                            onClick={(e) => setlink(item.id)}
                                        >
                                            View me
                                        </button>
                                        {
                                            link === item.id && <Iframe url={item.url} func={setlink} />
                                        }
                                    </div>
                                </div>
                            )
                        })
                }
                {list <= 4 && < Link to="/projects" className="btn">Check More Projects</Link>}
            </div>
        </div >
    )
}

export default Projects