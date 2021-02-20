/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import phone from '../../images/icons/09.svg';
import place from '../../images/icons/10.svg';
import email from '../../images/icons/11.svg';
import '../../style/main.scss';

export default () => {
  const description = `Especializados en el sector industrial, oficinas, hoteles,
  retail entre otros. !Entra y conoce un poco más sobre nuestros proyectos!`;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contacto | INGELUX Ingeniería e Iluminación</title>
        <html lang="es" />
        <meta name="description" content={description} />
      </Helmet>
      <Layout>
        <section id="contact-hero" className="text-center" style={{ minHeight: 400 }} />
        <section style={{ position: 'relative' }} id="nosotros" className="p-section">
          <div id="prev-nosotros" style={{ position: 'absolute', top: -90 }} />
          <div className="container text-center">
            <div className="row" style={{ margin: 'auto', maxWidth: 1200 }}>
              <div className="col-md-4 mb-4">
                <img className="icon-feature mb-2" src={phone} style={{ width: 56 }} alt="" />
                <h3>Teléfono</h3>
                <p className="mt-2 text-feature">
                  <a href="tel:+34 911 98 40 28">+34 911 98 40 28</a>
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <img className="icon-feature mb-2" src={place} style={{ width: 56 }} alt="" />
                <h3>Localización</h3>
                <p className="mt-2 text-feature">
                  <a href="https://www.google.es/maps/place/Calle+de+los+Arcos,+5,+28033+Madrid/@40.4788491,-3.6474385,17.03z/data=!4m5!3m4!1s0xd422ebefb05be23:0x3ca36f98d390e630!8m2!3d40.4788002!4d-3.6452148">
                    Calle de los Arcos 5 28033 Madrid
                  </a>
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <img className="icon-feature mb-2" src={email} style={{ width: 56 }} alt="" />
                <h3>Email</h3>
                <p className="mt-2 text-feature">
                  <a href="mailto:info@ingeluxsl.com">info@ingeluxsl.com</a>
                </p>
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
            <form action="https://getform.io/f/07c5ebc5-5f85-4829-bd2c-3d80aa99cf2e" method="POST">
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
                <label htmlFor="message">Motivo consulta</label>
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
      </Layout>
    </>
  );
};
