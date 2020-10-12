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
          <Parallax bgImage={bgOffice} bgImageAlt="fondo-oficina" strength={300}>
            <div className="text-center" style={{ height: '700px', position: 'relative' }}>
              <div style={headingStyles} className="heading-section text-center">
                Nuestros proyectos
              </div>
            </div>
          </Parallax>
          <Projects />
        </PortfolioProvider>
      </Layout>
    </>
  );
};
