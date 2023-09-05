import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import TrackVisibility from 'react-on-screen'
import 'animate.css'

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Full stack', 'Web developer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
        // eslint-disable-next-line 
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }


    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='aligh-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__slideInLeft" : ""}>
                                    <span className='tagline'>Welcome to my Portfolio</span>
                                    <h1>{`Hi I'm Owen. Java developer, `}<span className='wrap'>{text}</span></h1>
                                    <p>I have 3 years of experience as a Java developer with a bachelor's degree majoring in Computer Science and have a diploma in Software Development at TAFE.<br/>
                                     I finished an online course video application, which is built with the micro-services framework and cloud technologies in the back end and 2 SPA applications in the front end, as a personal project.</p>
                                    <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Headder Img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}