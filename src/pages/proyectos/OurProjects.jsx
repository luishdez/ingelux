import React from 'react';
import p1 from '../../images/projects/p1.jpg';
import p2 from '../../images/projects/p2.jpg';
// import p3 from '../../images/projects/p3.jpg';
import p4 from '../../images/projects/p4.jpg';
import p5 from '../../images/projects/p5.jpg';

const ProjectCarousel = () => {
  return (
    <section
      id="our-projects"
      className="container-fluid text-center"
      style={{ marginTop: 40, marginBottom: 80, padding: 0 }}
    >
      <h2>Nuestros Proyectos</h2>
      <div className="row" style={{ marginTop: 80 }}>
        <div className="col-sm-6 mb-3">
          <img src={p1} style={{ width: '100%', marginBottom: 20 }} alt="project" />
          <h3>Sector Industrial</h3>
        </div>
        <div className="col-sm-6 mb-3">
          <img src={p2} style={{ width: '100%', marginBottom: 20 }} alt="project" />
          <h3>Concesionarios</h3>
        </div>
      </div>
      <div className="row" style={{ marginTop: 80 }}>
        <div className="col-md-4 mb-3">
          <img src={p5} style={{ width: '100%', marginBottom: 20 }} alt="project" />
          <h3>Retail</h3>
        </div>
        <div className="col-md-4 mb-3">
          <img src={p4} style={{ width: '100%', marginBottom: 20 }} alt="project" />
          <h3>Gasolineras</h3>
        </div>
        <div className="col-md-4 mb-3">
          <img src={p5} style={{ width: '100%', marginBottom: 20 }} alt="project" />
          <h3>Oficinas</h3>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
