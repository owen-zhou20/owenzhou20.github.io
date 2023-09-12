import { useState, useEffect } from 'react'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/screenshot/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
// import { Download } from 'react-bootstrap-icons';
// import { FileSaver,saveAs } from 'file-saver';


export default function NavBar() {

  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  // const downloadfunc = () =>{
  //   const filepath = "{require('../assets/file/CVOwenZhou.pdf')}"
  //   const a = document.createElement('a')
  //   a.href = "{require('../assets/file/CVOwenZhou.pdf')}"
  //   a.download = 'CVOwenZhou.pdf'
  //   a.click();
  // }

  // const saveFile = ()=>{
  //   var FileSaver = require('file-saver');
  //   var blob = new Blob('../assets/file/CVOwenZhou.pdf', {type: "text/plain;charset=utf-8"});
  //   FileSaver.saveAs(blob, "CVOwenZhou.pdf");
  // }

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
                {/* <button className='vvd' onClick={()=>downloadfunc()}><span>Download CV</span></button> */}
                {/* <button className='vvd' onClick={()=>saveFile()}><span>Download CV</span></button> */}
                <button className='vvd'><a href={require('../assets/file/CVOwenZhou.pdf')} style={{color:'white'}}>Download CV</a></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}