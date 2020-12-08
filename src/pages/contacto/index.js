import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import { headData } from '../../mock/data';
import { PortfolioProvider } from '../../context/context';
import phone from '../../images/icons/09.svg';
import place from '../../images/icons/10.svg';
import email from '../../images/icons/11.svg';

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
          <section id="contact-hero" className="text-center" style={{ minHeight: 500 }} />
          <section style={{ position: 'relative' }} id="nosotros" className="p-section">
            <div id="prev-nosotros" style={{ position: 'absolute', top: -90 }} />
            <div className="container text-center">
              <div className="row" style={{ margin: 'auto', maxWidth: 1200 }}>
                <div className="col-md-4 mb-4">
                  <img className="icon-feature mb-2" src={phone} style={{ width: 56 }} alt="" />
                  <h3>Teléfono</h3>
                  <p className="mt-2 text-feature">+34 685 866 594</p>
                </div>
                <div className="col-md-4 mb-4">
                  <img className="icon-feature mb-2" src={place} style={{ width: 56 }} alt="" />
                  <h3>Localización</h3>
                  <p className="mt-2 text-feature">Calle de los Arcos 5 28033 Madrid</p>
                </div>
                <div className="col-md-4 mb-4">
                  <img className="icon-feature mb-2" src={email} style={{ width: 56 }} alt="" />
                  <h3>Email</h3>
                  <p className="mt-2 text-feature">info@ingeluxsl.com</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2>¿En qué podemos ayudarte?</h2>
            <div
              style={{
                margin: 'auto',
                marginTop: 40,
                marginBottom: 100,
                maxWidth: 600,
                padding: 20,
                textAlign: 'left',
              }}
            >
              <form
                action="https://getform.io/f/07c5ebc5-5f85-4829-bd2c-3d80aa99cf2e"
                method="POST"
              >
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" className="form-control" name="name" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="tel">Teléfono</label>
                  <input type="text" className="form-control" name="tel" id="tel" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message" >Motivo consulta</label>
                  <textarea
                    rows="6"
                    type="text"
                    name="message"
                    className="form-control"
                    id="text"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Envíar
                </button>
              </form>
            </div>
          </section>
        </PortfolioProvider>
      </Layout>
    </>
  );
};
