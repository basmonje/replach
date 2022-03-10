import { v4 as uuidv4 } from 'uuid';
import Container from '../Container';
import Card from './Card';

// Patrón de diseño: Stateless
const Gallery = ({ photos }) => (
  <Container as="section" className="-px-4 -mt-4 -overflow-hidden">
    <ul className="-grid -gap-3 -grid-cols-1 -grid-cols-md-2 -grid-cols-lg-3">
      {photos &&
        photos.map((otherProps) => <Card key={uuidv4()} {...otherProps} />)}
    </ul>
  </Container>
);

export default Gallery;
