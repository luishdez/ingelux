import React from 'react';
import icon1 from '../images/icons/05.svg';
import p1 from '../images/projects/p1.jpg';
import p2 from '../images/projects/p2.jpg';
import p3 from '../images/projects/p3.jpg';

const Projects = () => {
  return (
    <section className="p-section">
      <div className="container text-center">
        <img className="icon-feature mb-1" src={icon1} style={{ width: 56 }} alt="" />
        <h2 className="mb-4 pt-1">
          Nuestros proyectos ejecutados y clientes
          <br />
          satisfechos hablan por nosotros
        </h2>
        <p className="mb-4">
          Contamos con departamento de ingeniería, para la realización estudios lumínicos, con
          objeto de ofrecer el elemento más eficiente y la iluminación más adecuada, al lugar de
          emplazamiento y a la normativa vigente. Este departamento se encarga también del análisis
          continúo de los productos existentes en el mercado.
        </p>
      </div>
      <div className="container-fluid">
        <div className="row" style={{ marginTop: 100, marginBottom: 80 }}>
          <div className="col-md-4 mb-3">
            <img src={p1} style={{ width: '100%' }} alt="project" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={p1} style={{ width: '100%' }} alt="project" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={p1} style={{ width: '100%' }} alt="project" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
