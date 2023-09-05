import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'

export default function Skills() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-box'>
                            <h2>
                                Skills
                            </h2>
                            <p>Back-end: JAVA EE(Web), SpringBoot2, SpringCloud, AliCloud, Nacos, Feign, SpringSecurity, Gateway, Nginx, Maven, C#<br/>
                             Front-end:  Vue, React, JavaScript, HTML, CSS<br/> 
                             Database:  MySQL, Redis, MyBatis, MyBatis-Plus, JDBC, Microsoft SQL Server<br/> 
                             Test: Postman, Swagger and JUnit<br/>
                             Tools: Git, Docker, IntelliJ IDEA, Visual Studio Code, Maven, Npm(Node.js), Tomcat
                             </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter1}  alt="img" />
                                    <h5>Java EE (Web)</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="img" />
                                    <h5>Vue</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2}  alt="img" />
                                    <h5>React</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1}  alt="img" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3}  alt="img" />
                                    <h5>SpringBoot</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2}  alt="img" />
                                    <h5>SpringCloud</h5>
                                </div>
                            </Carousel>
                        
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt="img"/>
        </section>
    )
}
