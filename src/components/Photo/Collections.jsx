import styled from 'styled-components';
import Container from '../Container';
import Collection from './Collection';

// Patrón de diseño: Stateless
const Collections = ({ relatedCollections }) => (
  <Container as="section">
    <Content>
      <div className="-my-5">
        <h2 className="title-2">Releted Collections</h2>
      </div>
      <ul className="-grid -grid-cols-2 -grid-cols-md-3 -gap-3">
        {relatedCollections &&
          relatedCollections.results.map((otherProps) => (
            <Collection key={otherProps.id} {...otherProps} />
          ))}
      </ul>
    </Content>
  </Container>
);

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Collections;
