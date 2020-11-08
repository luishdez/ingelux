import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import icon1 from '../../images/icons/01.svg';
import icon2 from '../../images/icons/02.svg';
import icon3 from '../../images/icons/03.svg';
import icon4 from '../../images/icons/04.svg';

const CategoriesCarousel = () => {
  const responsive = {
    md: {
      breakpoint: { min: 900 },
      items: 4,
    },
    sm: {
      breakpoint: { max: 900, min: 0 },
      items: 2,
    },
    xs: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      <div>
	<img className="icon-feature mb-2" src={icon1} style={{ width: 56 }} alt="" />
	<h3>Sector industrial</h3>
	<p className="text-small mt-2 text-feature">
	  Cuidamos tanto el trato con el cliente que nos convertimos en parte de tu empresa, porque
	  tu éxito, es el nuestro.
	</p>
      </div>
      <div>
	<img className="icon-feature mb-2" src={icon1} style={{ width: 56 }} alt="" />
	<h3>Sector industrial</h3>
	<p className="text-small mt-2 text-feature">
	  Cuidamos tanto el trato con el cliente que nos convertimos en parte de tu empresa, porque
	  tu éxito, es el nuestro.
	</p>
      </div>
      <div>
	<img className="icon-feature mb-2" src={icon1} style={{ width: 56 }} alt="" />
	<h3>Sector industrial</h3>
	<p className="text-small mt-2 text-feature">
	  Cuidamos tanto el trato con el cliente que nos convertimos en parte de tu empresa, porque
	  tu éxito, es el nuestro.
	</p>
      </div>
    </Carousel>
  );
};

export default CategoriesCarousel;
