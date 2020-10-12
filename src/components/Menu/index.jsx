import React from 'react';
import Icon from '@mdi/react';
import { mdiLinkedin } from '@mdi/js';
import logo from '../../images/logos/right.svg';

const Menu = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-light">
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
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contacto
              </a>
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
