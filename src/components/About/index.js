import React from 'react';
import icon1 from '../../images/icons/01.svg';
import icon2 from '../../images/icons/02.svg';
import icon3 from '../../images/icons/03.svg';
import icon4 from '../../images/icons/04.svg';

const About = () => {
  return (
    <section className="p-section">
      <div className="container text-center">
        <div className="super-title">Sobre Nosotros</div>
        <div className="divider-sm mb-4" />
        <h2 className="mb-4 pt-1">
          INGELUX Ingeniería e Iluminación <br />
          es una empresa enfocada en el sector industrial
        </h2>
        <p className="mb-5" style={{ marginBottom: 90 }}>
          Lleva ejecutando proyectos de eficiencia energética en pymes y grandes empresas desde
          2013. Desde entonces hemos crecido hasta convertirnos en una empresa referente del sector
          por su profesionalidad, relación calidad-precio del producto y servicio post-venta.
        </p>
        <div className="row">
          <div className="col-sm-6 col-md-3 mb-4">
            <img className="icon-feature mb-2" src={icon1} style={{ width: 56 }} alt="" />
            <h3>Profesionalidad</h3>
            <p className="text-small mt-2 text-feature">
              Cuidamos tanto el trato con el cliente que nos convertimos en parte de tu empresa,
              porque tu éxito, es el nuestro.
            </p>
          </div>
          <div className="col-sm-6 col-md-3 mb-4">
            <img className="icon-feature mb-2" src={icon2} style={{ width: 56 }} alt="" />
            <h3>Un gran equipo</h3>
            <p className="text-small mt-2 text-feature">
              Contamos con un equipo de profesionales cualificados y con amplia experiencia para
              ofrecer el servicio que necesitas.{' '}
            </p>
          </div>
          <div className="col-sm-6 col-md-3 mb-4">
            <img className="icon-feature mb-2" src={icon3} style={{ width: 56 }} alt="" />
            <h3>Lighting designers</h3>
            <p className="text-small mt-2 text-feature">
              Creamos soluciones personalizadas para cada proyecto evaluando los factores de
              eficiencia, estética, calidad y costes.
            </p>
          </div>
          <div className="col-sm-6 col-md-3 mb-4">
            <img className="icon-feature mb-2" src={icon4} style={{ width: 56 }} alt="" />
            <h3>Innovación</h3>
            <p className="text-small mt-2">
              Transformamos los espacios con la iluminación. Trabajando la luz con las luminarias de
              las mejores marcas desde hace más de 8 años.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
