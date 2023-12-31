import React from "react";
import styles from "../../Styles/skillss.module.css";

import {
  SiReact,
  SiVisualstudiocode,
  SiJavascript,
  SiPostman,
  SiNextdotjs,
  SiMui,
  SiExpress,
  SiFirebase,
} from "react-icons/si";

import chatgpt from "../../images/chatgpt.png";

import { FaGithub, FaGitSquare } from "react-icons/fa";
import { AiOutlineAntDesign, AiFillApi } from "react-icons/ai";

export default function SkillsTech() {
  const arrSkills = [
    {
      text: "Javascript",
      icon: <SiJavascript />,
    },
    {
      text: "React Js",
      icon: <SiReact />,
    },
    {
      text: "Next Js",
      icon: <SiNextdotjs />,
    },
    {
      text: "MUI",
      icon: <SiMui />,
    },
    {
      text: "ANTD",
      icon: <AiOutlineAntDesign />,
    },
    {
      text: "Express",
      icon: <SiExpress />,
    },
    {
      text: "Firebase",
      icon: <SiFirebase />,
    },
  ];
  const arrTechs = [
    {
      text: "VS-Code",
      icon: <SiVisualstudiocode />,
    },
    {
      text: "Github",
      icon: <FaGithub />,
    },
    {
      text: "Git",
      icon: <FaGitSquare />,
    },
    {
      text: "PostMan",
      icon: <SiPostman />,
    },
    {
      text: "ChatGPT",
      icon: (
        <img
          src={chatgpt}
          alt="chatgpt"
          style={{
            width: "35px",
            marginRight: "1.8rem",
            height: "35px",
            display: "block",
          }}
        />
      ),
    },
  ];
  return (
    <div className={`container mt `}>
      <p className="textcenter ">Good Skills and Tools leads better</p>
      <h1 className={`textcenter ${styles.title}`}>Skills and Tools</h1>
      <div className={`container-f flex margin2 ${styles.SkillsTech}`}>
        <div className={` ${styles.skills} padding `}>
          <h2 className="textcenter ">Skills</h2>
          {arrSkills.map((e, i) => {
            return (
              <span key={i}>
                {e.icon}
                {e.text}
              </span>
            );
          })}
        </div>
        <div className={` ${styles.tools} padding`}>
          <h2 className="textcenter ">Tools</h2>
          {arrTechs.map((e, i) => {
            return (
              <span key={i}>
                {e.icon}
                {e.text}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
