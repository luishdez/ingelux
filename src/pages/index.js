import React from 'react';
import { Helmet } from 'react-helmet';
import { Parallax } from 'react-parallax';
import Layout from '../components/Layout';
import { headData } from '../mock/data';
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
  const { title, lang, description } = headData;

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
        <title>{title || 'Ingelux'}</title>
        <html lang={lang || 'es'} />
        <meta name="description" content={description || 'Ingelux'} />
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
        <section className="container mb-5">
          <div className="row project-logos">
            <div className="col-6 col-md-4 col-lg-2">
              <img style={{ maxWidth: 130, marginTop: 6 }} src={logo1} alt="logo1" />
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <img style={{ maxWidth: 160, marginTop: -2 }} src={logo2} alt="logo2" />
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <img style={{ maxWidth: 150, marginTop: -7 }} src={logo3} alt="logo3" />
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <img src={logo4} alt="logo4" />
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <img style={{ maxWidth: 160, marginTop: -4 }} src={logo5} alt="logo5" />
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <img style={{ maxWidth: 120, marginTop: 8 }} src={logo6} alt="logo6" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
