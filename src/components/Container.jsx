import propTypes from 'prop-types';

// Patrón de diseño: Container / stateless
const Container = ({
  as: Component = 'div',
  className = '-px-4',
  children
}) => (
  <Component className={className}>
    <div className="-container -container-md">{children}</div>
  </Component>
);

Container.propTypes = {
  // As nos sirve para cambiar el elemento HTML ej: div, footer, section, etc/.
  as: propTypes.string,
  // Agregar classes
  className: propTypes.string,
  // Children
  children: propTypes.element.isRequired
};

export default Container;
