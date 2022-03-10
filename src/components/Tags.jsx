import { Link } from 'react-router-dom';
import Container from './Container';

// Patrón de diseño: Stateless
const Tags = ({ tags }) => (
  <Container as="section">
    <ul className="-flex -flex-wrap -gap-2 -mt-6">
      {tags &&
        tags.map((props) => (
          <Link
            to={`/photos/search/${props.title}`}
            key={props.title}
            className="-py-1 -px-2 -radius-mini -flex -color-white-600 -color-hover-white -bg-white-400"
          >
            {props.title}
          </Link>
        ))}
    </ul>
  </Container>
);

export default Tags;
