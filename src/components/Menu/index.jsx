import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import reactScroll from 'react-scroll';
import Icon from '@mdi/react';
import { mdiLinkedin } from '@mdi/js';
import logo from '../../images/logos/right.svg';

const Menu = () => {
  const [isScrolled, setIsOnScrolled] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      const checkScrolled = currPos.y < 0 ? 'navbar-scrolled' : '';

      if (checkScrolled !== isScrolled) {
        setIsOnScrolled(checkScrolled);
      }
    },
    [isScrolled]
  );

  let finalPath = '/';
  if (typeof window !== `undefined`) {
    finalPath = window.location.pathname;
  }

  return (
    <nav className={`navbar fixed-top navbar-expand-md navbar-light ${isScrolled}`}>
      <div className="container">
        <a className="" href="/">
          <img src={logo} alt="" style={{ height: 73 }} loading="lazy" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              {finalPath === '/' && (
                <reactScroll.Link
                  to="nosotros"
                  spy
                  smooth
                  delay={20}
                  offset={-90}
                  duration={600}
                  className="clickable"
                >
                  Nosotros
                </reactScroll.Link>
              )}
              {finalPath !== '/' && <Link to="/#prev-nosotros">Nosotros</Link>}
            </li>
            <li className="nav-item">
              <Link to="/proyectos">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
          <a
            className="nav-link"
            href="https://www.linkedin.com/company/ingelux-ingenier%C3%ADa-e-iluminaci%C3%B3n/"
          >
            <Icon path={mdiLinkedin} title="Linked In" size={1} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
