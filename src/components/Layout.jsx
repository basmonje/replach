import propTypes from 'prop-types';

import Navbar from './Navbar';
import Footer from './Footer';

// Patrón de diseño: Layout
const Layout = ({ children }) => (
  <>
    <div className="bar" />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: propTypes.element.isRequired
};

export default Layout;
