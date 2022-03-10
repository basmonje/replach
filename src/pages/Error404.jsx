import Container from '../components/Container';

import SEO from '../components/SEO';

// Patrón de diseño: Render props
const Error404 = () => (
  <Container>
    <SEO title="Not found" />
    <div>
      <h1>Error 404 😐</h1>
      <p>Página no encontrada</p>
    </div>
  </Container>
);

export default Error404;
