import React from 'react';
import { Helmet } from 'react-helmet';
import ImageDraggable from '../../components/DraggableImage';
import Layout from '../../components/Layout';
import { headData } from '../../mock/data';
import Workflow from './workflow';
import OurProjects from './OurProjects';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Ingelux'}</title>
        <html lang={lang || 'es'} />
        <meta name="description" content={description || 'Ingelux'} />
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
