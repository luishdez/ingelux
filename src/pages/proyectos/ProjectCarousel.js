import React from 'react';
import Carousel from 'react-multi-carousel';
import industry from '../../images/icons/06.svg';
import hotel from '../../images/icons/07.svg';
import car from '../../images/icons/08.svg';
import offices from '../../images/icons/09.svg';
import gas from '../../images/icons/13.svg';

import arrowLeftImg from '../../images/icons/arrow-left.svg';
import arrowRightImg from '../../images/icons/arrow-right.svg';

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
    breakpoint: { min: 500, max: 990 },
    items: 2,
  },
  md: {
    breakpoint: { min: 990, max: 1200 },
    items: 3,
  },
  lg: {
    breakpoint: { min: 1200, max: 10000 },
    items: 4,
  },
};

// eslint-disable-next-line react/prop-types
const ArrowGroup = ({ next, previous }) => (
  <div className="carousel-button-group">
    <button className="btn btn-link" type="button" onClick={() => previous()}>
      <img style={{ height: 54 }} src={arrowLeftImg} alt="move-left" />
    </button>
    <button className="btn btn-link" type="button" onClick={() => next()}>
      <img style={{ height: 54 }} src={arrowRightImg} alt="move-right" />
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
          <img className="icon-feature mb-2" src={industry} style={{ width: 56 }} alt="" />
          <h3>Sector industrial</h3>
          <p className="mt-2 text-feature">
            La iluminación de grandes superficies con una homogeneidad continua es una de nuestras
            especialidades
          </p>
        </div>
        <div className="project-item">
          <img className="icon-feature mb-2" src={hotel} style={{ width: 56 }} alt="" />
          <h3>Hoteles y Retail</h3>
          <p className="mt-2 text-feature">
            Conseguir el confort y el relax de los clientes a la vez que la capacidad de centrar la
            atención en un producto es posible con una buena iluminación
          </p>
        </div>
        <div className="project-item">
          <img className="icon-feature mb-2" src={car} style={{ width: 56 }} alt="" />
          <h3>Concesionarios</h3>
          <p className="mt-2 text-feature">
            La exigencia de un alto rendimiento en el grado de iluminación para mostrar el hasta el
            ultimo detalle del producto en venta
          </p>
        </div>
        <div className="project-item">
          <img className="icon-feature mb-2" src={offices} style={{ width: 56 }} alt="" />
          <h3>Oficinas</h3>
          <p className="mt-2 text-feature">
            El confort visual es un requisito para poder conseguir una mayor productividad en el
            trabajo
          </p>
        </div>
        <div className="project-item">
          <img className="icon-feature mb-2" src={gas} style={{ width: 56 }} alt="" />
          <h3>Gasolineras</h3>
          <p className="mt-2 text-feature">
            Conseguir el confort y el relax de los clientes a la vez que la capacidad de centrar la
            atención en un producto es posible con una buena iluminación
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
