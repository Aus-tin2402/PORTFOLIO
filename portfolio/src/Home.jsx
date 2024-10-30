import React from 'react'
import NavBar from './Pages/NavBar.jsx'
import Main from './Component/Main.jsx'
import Project from './Component/Project.jsx'
import About from './Component/About.jsx'
import Skill from './Component/Skill.jsx'
import Contact from './Component/Contact.jsx'
import Footer from './Pages/Footer.jsx'
const Home = () => {
  return (
    <>
      <NavBar/>
      <Main/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home