import React from 'react'
import './CSS/main.css'
import Profile from '../assets/AustinJose.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Linked from '../assets/Linked.jpeg'
import Git from '../assets/Git.png'
const Main = () => {
  return (
    <>
      <header className="home" id="home">
        <div className="home-container">
          <section className="home-profile">
            <img src={Profile} alt="" />
          </section>
          <section className="home-detail">
            <div className="name">
              <h1>Austin Jose David Charles</h1>
            </div>
            <div className="role">
              <h3>Junior Software Developer || Junior Web Developer</h3>
            </div>
            <p>Hi, I’m Austin Jose David Charles, a passionate Full Stack Developer with skills in Java, React, and MySQL. I specialize in building efficient, user-focused applications and enjoy turning ideas into interactive digital experiences. With a dedication to continuous learning, I’m always exploring new technologies to enhance my craft. Take a look at my projects to see my journey and skills in action!</p>
            <div className="home-about">
              <a href='./AustinJose.pdf' download={`AustinJose.pdf`} className='home-link' >Resume CV</a>
              <AnchorLink href='#contact' className='home-link' >Contact Me</AnchorLink>
              <a href="https://www.linkedin.com/in/austin-jose-david-charles24" target='_blank' className='home-link-img' ><img src={Linked} alt="Linked-In Image" width={`60px`} height={`60px`} /></a>
              <a href="https://github.com/Aus-tin2402" target='_blank' className='home-link-img' ><img src={Git} alt="Git Image" width={`60px`} height={`60p`} /></a>
            </div>
          </section>
        </div>
      </header>
    </>
  )
}

export default Main