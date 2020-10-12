import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import { headData } from '../../mock/data';
import { PortfolioProvider } from '../../context/context';

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
        <PortfolioProvider>
          <span className="text-danger">_error_</span>
        </PortfolioProvider>
      </Layout>
    </>
  );
};
