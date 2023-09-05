import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import admin1 from '../assets/img/screenshot/admin1.jpg'
import admin2 from '../assets/img/screenshot/admin2.jpg'
import admin3 from '../assets/img/screenshot/admin3.jpg'
import admin4 from '../assets/img/screenshot/admin4.jpg'
import admin5 from '../assets/img/screenshot/admin5.jpg'
import admin6 from '../assets/img/screenshot/admin6.jpg'
import member1 from '../assets/img/screenshot/member1.jpg'
import member2 from '../assets/img/screenshot/member2.jpg'
import member3 from '../assets/img/screenshot/member3.jpg'
import member4 from '../assets/img/screenshot/member4.jpg'
import member5 from '../assets/img/screenshot/member5.jpg'
import member6 from '../assets/img/screenshot/member6.jpg'
import member7 from '../assets/img/screenshot/member7.jpg'
import member8 from '../assets/img/screenshot/member8.jpg'
import backend1 from '../assets/img/screenshot/backend1.jpg'
import backend2 from '../assets/img/screenshot/backend2.jpg'
import backend3 from '../assets/img/screenshot/backend3.jpg'
import backend4 from '../assets/img/screenshot/backend4.jpg'
import colorSharp2 from '../assets/img/color-sharp2.png'
import TrackVisibility from 'react-on-screen'
import 'animate.css'

export default function Projects() {

    const project1 = [
        {
            title: "Login for Admins and Teachers",
            description: "Users only can see and control the functions which they have permissions. All pictures and videos in cloud",
            imgUrl: admin1,
        },
        {
            title: "Permission list",
            description: "All permissions list can be auth to roles",
            imgUrl: admin2,
        },
        {
            title: "Teacher list",
            description: "Pagenation with conditions select teachers. Add, delete and modify a teacher or batch delete teachers",
            imgUrl: admin3,
        },
        {
            title: "Course list",
            description: "Pagenation with conditions select courses. Add, delete and modify a course for publish or save draft. or batch delete courses",
            imgUrl: admin4,
        },
        {
            title: "Publish course",
            description: "3 steps to publish or save draft for a new course",
            imgUrl: admin5,
        },
        {
            title: "Statistics data ",
            description: "Statistics daily login data and show in a table",
            imgUrl: admin6,
        }
    ]

    const project2 = [
        {
            title: "Homepage for member",
            description: "Member can login and pay for courses and watch videos from cloud. All pictures and videos in cloud",
            imgUrl: member1,
        },
        {
            title: "All courses page",
            description: "Pagenation show all courses and order by best selling, New and price with 2 level coursetype",
            imgUrl: member2,
        },
        {
            title: "Course detial page",
            description: "Show course detail and chapter with videos. Pay for this course or watch video if not necessary",
            imgUrl: member3,
        },
        {
            title: "Register new member",
            description: "By Australia moblie number and verification code message. Can scan QR code to login for Wechat",
            imgUrl: member4,
        },
        {
            title: "Shopping cart",
            description: "Buy a course with course detials and order information",
            imgUrl: member5,
        },
        {
            title: "Scan QR code to pay",
            description: "Scan QR code to pay for a order by Wechat",
            imgUrl: member6,
        }
    ]

    const project3 = [
        {
            title: "Member watch videos",
            description: "Member watch videos from cloud",
            imgUrl: member7,
        },
        {
            title: "Member comment",
            description: "Member comment for a course",
            imgUrl: member8,
        },
        {
            title: "Payment controller",
            description: "Based on springboot2, MyBatis-Plus and MVC",
            imgUrl: backend1,
        },
        {
            title: "Course controller",
            description: "RESTful api and common result to return",
            imgUrl: backend2,
        },
        {
            title: "Course serviceImpl",
            description: "Nacos, openfeign and microservices used",
            imgUrl: backend3,
        },
        {
            title: "Upload file to cloud",
            description: "Ali cloud OSS, VOD, SMS and Wechat QR Code used",
            imgUrl: backend4,
        }
    ]

    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <h2>Projects</h2>
                                    <p>Sv-edu online course website. It is a website for customers to buy and play course videos online.<br/>
                                    This application is made in 3 projects: Back-end, Admin front-end, Member Website</p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Admin front-end</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Member Website</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Back-end</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            project1.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'><Row>
                                        {
                                            project2.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row></Tab.Pane>
                                <Tab.Pane eventKey='third'><Row>
                                        {
                                            project3.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt='colorSharp2'></img>
        </section>
    )
}
