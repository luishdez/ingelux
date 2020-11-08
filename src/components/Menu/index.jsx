import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
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
    <Navbar bg="transparent" expand="md" className={`fixed-top ${isScrolled}`}>
      <div className="container">
        <Navbar.Brand href="/">
          <img src={logo} alt="" style={{ height: 73 }} loading="lazy" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
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
	    <li className="nav-item">
	      <a
		className="nav-link"
		href="https://www.linkedin.com/company/ingelux-ingenier%C3%ADa-e-iluminaci%C3%B3n/"
	      >
		<Icon path={mdiLinkedin} title="Linked In" size={1} />
	      </a>
	    </li>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Menu;
