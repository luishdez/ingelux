/* eslint-disable global-require */
import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import LightBox from '../../components/LightBox';
import p1 from '../../images/projects/industrial.jpg';
import p2 from '../../images/projects/carshop.jpg';
import p3 from '../../images/projects/retail.jpg';
import p4 from '../../images/projects/gas.jpg';
import p5 from '../../images/projects/workplace.jpg';

const getImages = (sector) => [
  require(`../../images/projects/${sector}/1.jpg`),
  require(`../../images/projects/${sector}/2.jpg`),
  require(`../../images/projects/${sector}/3.jpg`),
];

const ProjectCarousel = () => {
  return (
    <SimpleReactLightbox>
      <section
	id="our-projects"
	className="container-fluid text-center"
	style={{ marginTop: 40, marginBottom: 80, padding: 0 }}
      >
	<h2>Nuestros Proyectos</h2>
	<div className="row" style={{ marginTop: 80 }}>
	  <div className="col-sm-6 mb-3">
	    <LightBox images={getImages('industrial')}>
	      <img
		src={p1}
		style={{ cursor: 'pointer', width: '100%', marginBottom: 20 }}
		alt="project"
	      />
	    </LightBox>
	    <h3>Sector Industrial</h3>
	  </div>
	  <div className="col-sm-6 mb-3">
	    <LightBox images={getImages('carshop')}>
	      <img
		src={p2}
		style={{ cursor: 'pointer', width: '100%', marginBottom: 20 }}
		alt="project"
	      />
	    </LightBox>
	    <h3>Concesionarios</h3>
	  </div>
        </div>
	<div className="row" style={{ marginTop: 80 }}>
	  <div className="col-md-4 mb-3">
	    <LightBox images={getImages('retail')}>
	      <img
		src={p3}
		style={{ cursor: 'pointer', width: '100%', marginBottom: 20 }}
		alt="project"
	      />
	    </LightBox>
	    <h3>Retail</h3>
	  </div>
	  <div className="col-md-4 mb-3">
	    <LightBox images={getImages('gas')}>
	      <img
		src={p4}
		style={{ cursor: 'pointer', width: '100%', marginBottom: 20 }}
		alt="project"
	      />
	    </LightBox>
	    <h3>Gasolineras</h3>
	  </div>
	  <div className="col-md-4 mb-3">
	    <LightBox images={getImages('workplace')}>
	      <img
		src={p5}
		style={{ cursor: 'pointer', width: '100%', marginBottom: 20 }}
		alt="project"
	      />
	    </LightBox>
	    <h3>Oficinas</h3>
	  </div>
        </div>
      </section>
    </SimpleReactLightbox>
  );
};

export default ProjectCarousel;
