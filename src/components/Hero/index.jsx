import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade top={isDesktop} bottom={isMobile} duration={1000} delay={300} distance="30px">
          <h1 className="hero-title">
            <span className="text-white">Ingeniería e </span>
            <span className="text-color-main">iluminación</span>
          </h1>
        </Fade>
      </Container>
    </section>
  );
};

export default Hero;
