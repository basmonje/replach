import propTypes from 'prop-types';
import Container from './Container';

// Patrón de diseño: Stateless
const LoadMore = ({ handleClick }) => (
  <Container as="section" className="-my-6 -px-4">
    <div>
      <button
        onClick={handleClick}
        className="-flex -bg-transparent -bg-hover-white-100 -bg-active-white-50 -p-6 -radius-small -w-full -color-white-700 -color-hover-white-900 -b-1 -b-blue-400 -button-cursor"
      >
        Load More
      </button>
    </div>
  </Container>
);

LoadMore.propTypes = {
  handleClick: propTypes.func.isRequired
};

export default LoadMore;
