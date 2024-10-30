import React from 'react'
import './footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer-about">
          <div className="footer-email">
            <h1>Email:</h1>
            <a href="austinjosedavid@gmail.com">austinjosedavid@gmail.com</a>
          </div>
          <div className="footer-contact">
            <h1>contact:</h1>
            <a href="">+91 7550273557</a>
          </div>
        </section>
        <section className="footer-portfolio">
          <div>
            <AnchorLink className='links' href='#'>Home</AnchorLink>
          </div>
          <hr />
          <div>
            <AnchorLink className='links' href='#'>About</AnchorLink>
          </div>
          <hr />
          <div>
            <AnchorLink className='links' href='#'>Skill</AnchorLink>
          </div>
          <hr />
          <div>
            <AnchorLink className='links' href='#'>Project</AnchorLink>
          </div>
          <hr />
          <div>
            <AnchorLink className='links' href='#'>Contact</AnchorLink>
          </div>
        </section>
        <section className="footer-links">
          <a href='./AustinJose.pdf' download={`AustinJose.pdf`} className='footer-link' >Resume CV</a>
          <AnchorLink href='#contact' className='footer-link' >Contact Me</AnchorLink>
        </section>
      </footer>
    </>
  )
}

export default Footer