import React from 'react';
import Container from '../components/Container';

// Patrón de diseño: Render props
const Error404 = () => (
  <Container>
    <div>
      <h1>Error 404 😐</h1>
      <p>Página no encontrada</p>
    </div>
  </Container>
);

export default Error404;
