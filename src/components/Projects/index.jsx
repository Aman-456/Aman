/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useMemo } from "react";
import data from "../../Data/data";
import loading from "../../images/loading.png";
import styles from "../../Styles/Project.module.css";
import Iframe from "../Iframe";
import { Link } from "react-router-dom";

function Projects({ list, project }) {
  const [link, setLink] = useState(null);

  // Filtered projects based on the project prop
  const filteredProjects = useMemo(() => {
    return project
      ? data.filter((item) => {
          const tagMatches = item.tag.some((e) => e.toLowerCase().includes(project.toLowerCase()));
          const titleMatches = item.title.toLowerCase().includes(project.toLowerCase());
          const descriptionMatches = item.description.toLowerCase().includes(project.toLowerCase());
          return tagMatches || titleMatches || descriptionMatches;
        })
      : data.slice(0, list + 1); // Show limited projects if no search term
  }, [project, list]);

  // Image error handler
  const handleImageError = (e) => {
    e.target.src = loading;
  };

  // Handle setting the link state
  const handleSetLink = (id) => {
    setLink(id);
  };

  return (
    <div className="margin1 container-f" id="Portfolio">
      <div className="textcenter margin1">
        <p>My Projects</p>
        <h1>Portfolio</h1>
      </div>

      <div className={`${styles.project__div} container`} id="projectsection">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item) => (
            <div className={styles.project} id={item.id} key={item.id}>
              <div className={styles.img_tag}>
                <img src={item?.img} alt="img" onError={handleImageError} loading="lazy" />
              </div>
              <div className={styles.detail}>
                <h2 className={styles.title}>{item.title}</h2>
                <p>{item.description}</p>
                <div className={`flex ${styles.tags}`}>
                  {item.tag?.map((e, i) => (
                    <span key={i}>{e}</span>
                  ))}
                </div>
                <div className={styles.buttons}>
                  <button className="btn" onClick={() => handleSetLink(item.id)}>
                    View here
                  </button>
                  <a href={item.url} className="btn" target="_blank" rel="noopener noreferrer">
                    Open Link
                  </a>
                </div>
                {link === item.id && <Iframe url={item.url} func={setLink} />}
              </div>
            </div>
          ))
        ) : (
          <h2>No Project Found</h2>
        )}
        {!project && list <= 4 && (
          <Link to="/projects" className="btn">
            Check More Projects
          </Link>
        )}
      </div>
    </div>
  );
}

export default Projects;
