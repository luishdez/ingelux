import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <>
    <Menu />
    {children}
    <Footer />
  </>
);

Layout.propTypes = { children: PropTypes.element.isRequired };

export default Layout;
