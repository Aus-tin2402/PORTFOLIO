import React from 'react'
import './CSS/skill.css'
import Java from '../assets/Java.jpeg'
import JDBC from '../assets/JDBC.jpeg'
import Hibernate from '../assets/Hibernate.jpeg'
import Servlet from '../assets/Servlet & JSP.jpeg'
import SpringBoot from '../assets/Spring_boot.jpeg'
import Python from '../assets/Python.jpeg'
import Node from '../assets/Node.png'
import Express from '../assets/Express.png'
import Mongo from '../assets/Mongo.png'
import Mysql from '../assets/MySql.jpeg'
import Html from '../assets/HTML.jpeg'
import Css from '../assets/CSS.jpeg'
import JavaScript from '../assets/JavaScript.jpeg'
import React_vite from '../assets/Vite.jpeg'
import Git from '../assets/Git.png'

const Skill = () => {
  return (
    <>
      <header className="skill" id="skill">
        <div className="skill-container">
          <div className="skill-section">
            <article>
              <img src={Java} alt="Java_Image" />
              <h1>Java</h1>
            </article>
            <article>
              <img src={JDBC} alt="JDBC_Image" />
              <h1>JDBC</h1>
            </article>
            <article>
              <img src={Hibernate} alt="Hibernate_JPA_Image" />
              <h1>Hibernate With JPA</h1>
            </article>
            <article>
              <img src={Servlet} alt="Servlet_JSP_Image" />
              <h1>Servlet and JSP</h1>
            </article>
            <article>
              <img src={SpringBoot} alt="SpringBoot_Image" />
              <h1>Spring Boot</h1>
            </article>
            <article>
              <img src={Node} alt="Node_Image" />
              <h1>Node.JS</h1>
            </article>
            <article>
              <img src={Express} alt="Express_Image" />
              <h1>Express.JS</h1>
            </article>
            <article>
              <img src={Mongo} alt="Mongo_Image" />
              <h1>Mongo DB</h1>
            </article>
            <article>
              <img src={Mysql} alt="MySql_Image" />
              <h1>MySql</h1>
            </article>
            <article>
              <img src={Html} alt="HTML_Image" />
              <h1>HTML/HTmL5</h1>
            </article>
            <article>
              <img src={Css} alt="Css_Image" />
              <h1>CSS/CSS3</h1>
            </article>
            <article>
              <img src={JavaScript} alt="JavaScript_Image" />
              <h1>JavaScript</h1>
            </article>
            <article>
              <img src={React_vite} alt="React_Image" />
              <h1>React.JS</h1>
            </article>
            <article>
              <img src={Python} alt="Python_Image" />
              <h1>Python</h1>
            </article>
            <article>
              <img src={Git} alt="Git_Image" />
              <h1>Git/Github</h1>
            </article>
          </div>
        </div>
      </header>
    </>
  )
}

export default Skill