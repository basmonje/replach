import styled from 'styled-components';
import Container from './Container';

// Patrón de diseño: Stateless
const Loading = () => (
  <Box>
    <Container as="section">
      <div className="box-loader">
        <div className="loader" />
      </div>
    </Container>
  </Box>
);

const Box = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;

  .box-loader {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Loading;
