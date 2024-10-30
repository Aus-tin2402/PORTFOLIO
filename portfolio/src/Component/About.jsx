import React from 'react'
import './CSS/about.css'
const About = () => {
  return (
    <>
      <header className="about" id="about">
          <section className="about-container">
            <article className="intro-project">
              <p>Hello! I'm Austin Jose David Charles, a driven Full Stack Developer with a foundation in Java and a strong interest in building robust web applications. With a Master’s degree in Computer Applications and hands-on training in Java Full Stack Development, I have experience in core web technologies like HTML5, CSS3, JavaScript, React.js, Java, and MySQL. My journey in tech has been powered by my curiosity and passion for problem-solving, allowing me to contribute to impactful projects across different domains.</p>
              
              {/* <p>Through these projects, I've honed my skills in both front-end and back-end development, learned how to manage complex data structures, and gained valuable experience in team collaboration and project management. I’m excited to bring my skills and enthusiasm to new projects and contribute to innovative solutions.</p> */}
            </article>
            <aricle className="education">
              <aside className="education-box">
                  <div className="degree">
                    <h1>Degree:</h1>
                    <span>bachelor of computer appplication</span>
                  </div>
                  <div className="college">
                    <h1>College:</h1>
                    <span>Apollo arts and science college </span>
                  </div>
                  <div className="university">
                    <h1>University:</h1>
                    <span>University Of Madras</span>
                  </div>
                  <div className="year-of-passed">
                    <p>2020-2023</p>
                  </div>
              </aside>
              <aside className="education-box">
                  <div className="degree">
                    <h1>Degree:</h1>
                    <span>higher secondary leaving certificate </span>
                  </div>
                  <div className="college">
                    <h1>School:</h1>
                    <span>St.mary's matriculation Higher secondary school </span>
                  </div>
                  <div className="university">
                    <h1>Board:</h1>
                    <span>Tamil Nadu State Board</span>
                  </div>
                  <div className="year-of-passed">
                    <p>2019-2020</p>
                  </div>
              </aside>
              <aside className="education-box">
                  <div className="degree">
                    <h1>Degree:</h1>
                    <span>secondary school leaving certificate</span>
                  </div>
                  <div className="college">
                    <h1>School:</h1>
                    <span>St.mary's matriculation Higher secondary school </span>
                  </div>
                  <div className="university">
                    <h1>Board:</h1>
                    <span>Tamil Nadu State Board</span>
                  </div>
                  <div className="year-of-passed">
                    <p>2017-2018</p>
                  </div>
              </aside>
            </aricle>
          </section>
      </header>
    </>
  )
}

export default About