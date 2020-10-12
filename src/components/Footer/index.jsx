import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from '../../images/logos/vertical.svg';

const Footer = () => {
  return (
    <footer className="footer p-section" style={{ color: 'white', fontSize: '12px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div style={{ maxWidth: 240 }}>
              <img
                src={logo}
                alt="logo"
                style={{ width: 120, marginBottom: 20, marginLeft: -10 }}
              />
              <div>
                <div className="divider-sm float-left" />
              </div>
              <p className="mt-2" style={{ lineHeight: '24px', color: 'white' }}>
                Creamos proyectos, aplicando lo último en innovación y materiales, el conocimiento y
                la creatividad para favorecer y solucionar las necesidades de todos nuestros
                proyectos.
              </p>
            </div>
          </div>
          <div className="col-md-2">x</div>
          <div className="col-md-2" />
          <div className="col-md-4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
