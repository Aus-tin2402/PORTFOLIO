import React, { useState } from 'react'
import './navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const NavBar = () => {
  const [change,setChange]=useState(false);

  const toogleClick=(e)=>{
      setChange(!change);
  }

  return (
    <>
      <nav className="navbar">
        <section className="logo">
          <a href="#">portfolio</a>
        </section>
        <article className={`nav-links ${change ? 'open':''}`}>
          <AnchorLink className='links'href='#home' >Home</AnchorLink>
          <AnchorLink className='links'href='#about' >About</AnchorLink>
          <AnchorLink className='links'href='#skill' >Skill</AnchorLink>
          <AnchorLink className='links'href='#project' >Project</AnchorLink>
          <AnchorLink className='links'href='#contact' >Contact</AnchorLink>
        </article>
        <button className="hamburger" onClick={(e)=>toogleClick(e)}>Menu</button>
      </nav>
    </>
  )
}

export default NavBar