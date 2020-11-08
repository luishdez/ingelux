import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import ProjectCarousel from './ProjectCarousel';

const Workflow = () => {
  return (
    <section style={{ position: 'relative' }} id="nosotros" className="p-section">
      <div id="prev-nosotros" style={{ position: 'absolute', top: -90 }} />
      <div className="container text-center">
        <h2 className="mb-4">Auditoría energética con renderización 3D</h2>
        <p style={{ marginBottom: 60 }}>
          Realizamos para nuestros clientes estudios luminotécnicos, pasando por el análisis de
          necesidades, cumplimientos de normativa, consumos energéticos de la instalación, nuevas
          tecnologías para el control de la iluminación, cálculos luminotécnicos completos con
          renderización 3D de la iluminación proyectada.
        </p>
      </div>
      <ProjectCarousel />
    </section>
  );
};

export default Workflow;
