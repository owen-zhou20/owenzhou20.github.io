import { useState, useEffect } from 'react'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/screenshot/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'


export default function NavBar() {

  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateSctiveLink = (value) => {
    setActiveLink(value)
  }


  return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateSctiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateSctiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateSctiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <div className='social-icon'>
                <a href='/#'><img src={navIcon1} alt='navIcon1'></img></a>
                <a href='/#'><img src={navIcon2} alt='navIcon2'></img></a>
                <a href='/#'><img src={navIcon3} alt='navIcon3'></img></a>
              </div>
              <Nav>
                <Nav.Link download={'/src/assets/cv/CVOwenZhou.pdf'} href="/src/assets/cv/CVOwenZhou.pdf" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateSctiveLink('connect')}><button className='vvd' onClick={() => onUpdateSctiveLink('connect')}><span>Let's Connect</span></button></Nav.Link>
              </Nav>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}