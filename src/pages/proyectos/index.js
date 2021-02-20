import React from 'react';
import { Helmet } from 'react-helmet';
import ImageDraggable from '../../components/DraggableImage';
import Layout from '../../components/Layout';
import Workflow from './workflow';
import OurProjects from './OurProjects';

export default () => {
  const desc = `Especializados en el sector industrial, oficinas, hoteles,
  retail entre otros. !Entra y conoce un poco más sobre nuestros proyectos!`;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Proyectos ejecutados con existo | INGELUX Ingeniería e Iluminación</title>
        <html lang="es" />
        <meta name="description" content={desc} />
      </Helmet>
      <Layout>
        <section className="projects-hero" style={{ backgroundColor: '#D9D9D9' }}>
          <div className="container text-center">
            <ImageDraggable />
          </div>
        </section>
        <Workflow />
        <OurProjects />
      </Layout>
    </>
  );
};
