import React, { Fragment } from "react";

import ReactTooltip from "react-tooltip";

import SectionTitle from "../UI/SectionTitle";

import { TbCertificate } from "react-icons/tb";

import react from "../../assets/skills/react.png";
import redux from "../../assets/skills/redux.png";
import sass from "../../assets/skills/sass.png";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import javascript from "../../assets/skills/javascript.png";
import node from "../../assets/skills/node.png";
import nextJs from "../../assets/skills/nextjs.png";
import firebase from "../../assets/skills/firebase.png";

import { motion } from "framer-motion";

import "./Skills.scss";

const Skills = () => {
  const certificates = [
    {
      skill: "Programming",
      src: "https://drive.google.com/file/d/10N1qTMHhdSsbm7eJmBzXnS3mK_IUPCRx/view?usp=sharing",
      id: "1-a",
      certificate: [
        {
          id: "1",
          name: "Programming foundation",
          company: "LinkedIn",
          desc: "A series of 10 course that taught me a lot of the things such as programming fundamentals, object oriented design, data structures, Algorithms, design patterns and much more",
        },
      ],
    },
    {
      skill: "HTML & CSS",
      src: "https://drive.google.com/file/d/1i7_y9xUG1oQyBhnEjTSvgf9OkYU5ar6e/view?usp=sharing",
      id: "2-b",
      certificate: [
        {
          id: "2",
          name: "Build Responsive Real-World Website With HTML & CSS",
          company: "Udemy",
          desc: "In the 40 hour course I learned a lot of thing about HTML & CSS starting from the basics and into more advanced topics. I mastered using flex-box and grid layout. I practiced what I learned by making amazing websites",
        },
      ],
    },
    {
      skill: "Java Script",
      src: "https://www.udemy.com/certificate/UC-f32afeb5-246e-4073-a57d-b26844a095b9/",
      id: "3-c",
      certificate: [
        {
          id: "3",
          name: "The Complete JavaScript Course 2022: From Zero to Expert!",
          company: "Udemy",
          desc: "In the 70 hour course I learned all about java script starting from the basics and into more advanced topics. I learned the fundamentals of the language then I learned the OOP and the data structure of the language. I learned how to deal with APIs and asynchronous javaScript. I practiced what I learned by making more complex website with a lot of functionalities",
        },
      ],
    },
    {
      skill: "React",
      src: "https://ude.my/UC-c7aa9939-c33c-46aa-a88a-6a345ba05bbf",
      id: "4-d",
      certificate: [
        {
          id: "4",
          name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
          company: "Udemy",
          desc: "In the 48 hour course I learned all about React-js starting from the basics and into more advanced topics. I learned the JSX syntax then I learned hot to use react hooks. I dived into a lot of various topic and learned it like React Router, Redux, Nextjs frame work, typeScript and much more. I practice what I learned by making powerful websites that use the power of react to achieve better UI",
        },
      ],
    },
  ];

  return (
    <section className="skills">
      <SectionTitle>skills & certificates</SectionTitle>

      <div className="skills__container">
        <div className="skills__list">
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={html} alt="html" />
            </div>
            <p className="skill-name">HTML</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={css} alt="css" />
            </div>
            <p className="skill-name">CSS</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={sass} alt="sass" />
            </div>
            <p className="skill-name">Sass</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={javascript} alt="javascript" />
            </div>
            <p className="skill-name">Javascript</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={react} alt="react" />
            </div>
            <p className="skill-name">React</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={redux} alt="redux" />
            </div>
            <p className="skill-name">redux</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={nextJs} alt="nextJs" />
            </div>
            <p className="skill-name">NextJs</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={node} alt="nodeJs" />
            </div>
            <p className="skill-name">NodeJs</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={firebase} alt="firebase" />
            </div>
            <p className="skill-name">Firebase</p>
          </div>
        </div>

        <div className="skills-certificates">
          {certificates.map((certificate) => {
            return (
              <div key={certificate.id} className="skills-cer">
                <a
                  className="skills-cer-icon"
                  target="_blank"
                  rel="noreferrer"
                  title="see the certificate"
                  href={`${certificate.src}`}
                >
                  <TbCertificate fontSize={40} />{" "}
                </a>
                <div>
                  {certificate.certificate.map((item) => {
                    return (
                      <Fragment key={item.id}>
                        <div
                          key={item.id}
                          className="skills-cer-text"
                          data-tip
                          data-for={item.name}
                        >
                          <h4>{item.name}</h4>
                          <p>{item.company}</p>
                        </div>
                        <ReactTooltip
                          id={item.name}
                          effect="solid"
                          arrowColor="#fff"
                          className="skills-tooltip"
                        >
                          {item.desc}
                        </ReactTooltip>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
