import React from 'react'
import { Col } from 'react-bootstrap'
import Zmage from 'react-zmage'

export default function ProjectCard({title, description, imgUrl}) {

  return (
    <Col sm={6} md={4}>
      {/* <div className='proj-imgbx'> */}
      <div >
        <Zmage src={imgUrl} alt={title} edge={200} backdrop="linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(26,94,215,1) 100%)" 
        zIndex={19260817}/>
        {/* <a onClick={() => Zmage.browsing({ src:imgUrl, alt:title})}><img src={imgUrl} alt={title}/></a> */}
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
