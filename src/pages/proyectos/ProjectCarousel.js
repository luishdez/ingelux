import React from 'react';
import Carousel from 'react-multi-carousel';
import icon1 from '../../images/icons/01.svg';

// // Small devices (landscape phones, 576px and up)
// // Medium devices (tablets, 768px and up)
// // Large devices (desktops, 992px and up)
// // Extra large devices (large desktops, 1200px and up)

// 0 - 576px:          Phone
// 576px - 768px       Table Portrait
// 768px - 992px      Table Landscape
// [992px - 1200px]   Desktop Normal Styles
// 1200px +            Big Desktop
const responsive = {
  xs: {
    breakpoint: { min: 0, max: 500 },
    items: 1,
  },
  sm: {
    breakpoint: { min: 900, max: 5000 },
    items: 4,
  },
  md: {
    breakpoint: { max: 900, min: 0 },
    items: 2,
  },
};

// eslint-disable-next-line react/prop-types
const ArrowGroup = ({ next, previous }) => (
  <div className="carousel-button-group">
    <button type="button" onClick={() => previous()}>
      XXXX
    </button>
    <button type="button" onClick={() => next()}>
      BBBB
    </button>
  </div>
);

const ProjectCarousel = () => {
  return (
    <div className="container" style={{ position: 'relative' }}>
      <Carousel
	infinite
	partialVisible
	arrows={false}
	customButtonGroup={<ArrowGroup />}
	renderButtonGroupOutside
	responsive={responsive}
      >
	<div className="project-item">
	  <img className="icon-feature mb-2" src={icon1} style={{ width: 56 }} alt="" />
	  <h3>Sector industrial</h3>
	  <p className="text-small mt-2 text-feature">
	    Cuidamos tanto el trato con el cliente que nos convertimos en parte de tu empresa,
	    porque tu éxito, es el nuestro.
	  </p>
	</div>
	<div className="project-item">
	  <img className="icon-feature mb-2" src={icon1} style={{ width: 56 }} alt="" />
	  <h3>Sector industrial</h3>
	  <p className="text-small mt-2 text-feature">
	    Cuidamos tanto el trato con el cliente que nos convertimos en parte de tu empresa,
	    porque tu éxito, es el nuestro.
	  </p>
	</div>
	<div className="project-item">
	  <img className="icon-feature mb-2" src={icon1} style={{ width: 56 }} alt="" />
	  <h3>Sector industrial</h3>
	  <p className="text-small mt-2 text-feature">
	    Cuidamos tanto el trato con el cliente que nos convertimos en parte de tu empresa,
	    porque tu éxito, es el nuestro.
	  </p>
	</div>
	<div className="project-item">
	  <img className="icon-feature mb-2" src={icon1} style={{ width: 56 }} alt="" />
	  <h3>Sector industrial</h3>
	  <p className="text-small mt-2 text-feature">
	    Cuidamos tanto el trato con el cliente que nos convertimos en parte de tu empresa,
	    porque tu éxito, es el nuestro.
	  </p>
	</div>
	<div className="project-item">
	  <img className="icon-feature mb-2" src={icon1} style={{ width: 56 }} alt="" />
	  <h3>Sector industrial</h3>
	  <p className="text-small mt-2 text-feature">
	    Cuidamos tanto el trato con el cliente que nos convertimos en parte de tu empresa,
	    porque tu éxito, es el nuestro.
	  </p>
	</div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
