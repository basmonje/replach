import Container from '../Container';
import Card from './Card';

// Patrón de diseño: Stateless
const Collections = ({ collections }) => (
  <Container className="-px-4 -mt-4 -overflow-hidden">
    <div className="-grid -gap-3 -grid-cols-2 -grid-cols-md-3">
      {collections &&
        collections.map((otherProps) => (
          <Card key={otherProps.id} {...otherProps} />
        ))}
    </div>
  </Container>
);

export default Collections;
