import React from 'react';
import { Helmet } from 'react-helmet';
import { Parallax } from 'react-parallax';
import Layout from '../components/Layout';
import { PortfolioProvider } from '../context/context';
import Hero from '../components/Hero';
import About from '../components/About';
import '../style/main.scss';
import bgOffice from '../images/backgrounds/section-office.jpg';
import Projects from './blockProjects';

import logo1 from '../images/logos/01.png';
import logo2 from '../images/logos/02.png';
import logo3 from '../images/logos/03.png';
import logo4 from '../images/logos/04.png';
import logo5 from '../images/logos/05.png';
import logo6 from '../images/logos/06.png';

export default () => {
  const desc = `En INGELUX Ingeniería e Iluminación ofrecemos soluciones
  innovadoras en proyectos de iluminación. Realizamos estudios lumínicos de
  exterior e interior con Dialux. Especializados en obra nueva y reforma con sustitución a led
  !Entra y conócenos!`;

  const headingStyles = {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    bottom: 30,
    width: '100%',
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Proyectos técnicos de iluminación led | INGELUX</title>
        <html lang="es" />
        <meta name="description" content={desc} />
      </Helmet>
      <Layout>
        <PortfolioProvider>
          <Hero />
          <About />
          <Parallax bgImageSize="10%" bgImage={bgOffice} bgImageAlt="fondo-oficina" strength={300}>
            <div className="text-center" style={{ height: '700px', position: 'relative' }}>
              <div style={headingStyles} className="heading-section text-center">
                Nuestros proyectos
              </div>
            </div>
          </Parallax>
          <Projects />
        </PortfolioProvider>
        <section style={{ marginBottom: 120, marginTop: 100 }} className="container">
          <div className="row project-logos">
            <div className="col-6 col-md-4 col-lg-2">
              <img style={{ maxWidth: 120, marginTop: 8 }} src={logo1} alt="logo1" />
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <img style={{ maxWidth: 160, marginTop: -2 }} src={logo2} alt="logo2" />
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <img style={{ maxWidth: 150, marginTop: -7 }} src={logo3} alt="logo3" />
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <img style={{ maxWidth: 140, marginTop: 3 }} src={logo4} alt="logo4" />
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <img style={{ maxWidth: 160, marginTop: -4 }} src={logo5} alt="logo5" />
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <img style={{ maxWidth: 120, marginTop: 9 }} src={logo6} alt="logo6" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
