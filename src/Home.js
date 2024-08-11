import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import SearchAppBar from './components/SearchAppBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
    const [hoveredParagraph, setHoveredParagraph] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const designerRef = useRef(null);
    const developerRef = useRef(null);
    const aboutRef = useRef(null);

    const handleMouseEnter = (paragraph) => setHoveredParagraph(paragraph);
    const handleMouseLeave = () => setHoveredParagraph(null);

    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const getParagraphStyle = (paragraph) => ({
        cursor: 'pointer',
        fontSize: hoveredParagraph === paragraph ? '11rem' : '10rem',
        transition: 'font-size 0.3s ease',
    });

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <div className='back'>
                <video autoPlay muted loop className="background-video">
                    <source src="/b1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <SearchAppBar aboutRef={aboutRef} />
                <div className='text'>
                    <p className='a1'>creative</p>
                    <p
                        onMouseEnter={() => handleMouseEnter('designer')}
                        onMouseLeave={handleMouseLeave}
                        style={!isMobile ? getParagraphStyle('designer') : {}}
                        className='a3'
                    >
                        Designer
                    </p>
                    <p className='a1 a3'>&</p>
                    <p
                        onMouseEnter={() => handleMouseEnter('developer')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => scrollToSection(developerRef)}
                        style={!isMobile ? getParagraphStyle('developer') : {}}
                        className='a2'
                    >                      Developer
                    </p>
                </div>
            </div>

            <div className='about' ref={aboutRef}>
                <div className='photo'></div>
                <h1 className='heading'>Full-Stack Web Developer</h1>
                <p className='theory'>
                    As a dedicated and skilled Full Stack Developer, I possess the relevant expertise required for a full stack development role. My proficiency encompasses both frontend and backend technologies, ensuring a comprehensive understanding of the entire web development process. On the frontend, I have extensive experience with React and various frameworks, enabling me to create dynamic, responsive, and user-friendly interfaces. On the backend, I am well-versed in Node.js and EJS, allowing me to build robust and scalable server-side applications. Additionally, my knowledge extends to databases and the creation of RESTful APIs, ensuring seamless data management and communication between the client and server. With this diverse skill set, I am well-equipped to contribute effectively to any full stack development project.
                </p>

                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/adviti-gangwar-67a415185/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/adviti_gangwar/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://github.com/adviti1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </div>

            <div className='developer' ref={developerRef}>
                <h1 className='head'>Frontend and Backend Web Development Projects</h1>
                <div className='carousel-container'>
                    <Carousel
                        showArrows={true}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                    >
                        <div>
                            <img src="Landing-page.png" alt="Slide 1" />
                            <a href="https://66a66b2c02b89e51ad008d4d--inquisitive-hotteok-4df95e.netlify.app/">
                                <p className="legend">Edutech</p>
                            </a>
                        </div>
                        <div>
                            <img src="Screenshot_11-8-2024_62716_localhost.jpeg" alt="Slide 2" />
                            <a href="https://github.com/adviti1/Admin-User-backend">
                                <p className="legend">Admin-User based backend</p>
                            </a>
                        </div>
                        <div>
                            <img src="Screenshot_11-8-2024_6311_localhost.jpeg" alt="Slide 3" />
                            <a href="https://github.com/adviti1/lms-website">
                                <p className="legend">LMS site</p>
                            </a>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Home;
