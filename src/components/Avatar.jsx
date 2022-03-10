import propTypes from 'prop-types';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Patrón de diseño: Statefull
const Avatar = ({ src, alt }) => {
  const [isLoaded, setLoaded] = useState(true);
  const removePlaceholder = () => setLoaded(false);

  return (
    <WrapperImage>
      {isLoaded && <div className="placeholder" />}
      <img src={src} alt={alt} onLoad={removePlaceholder} />
    </WrapperImage>
  );
};

const loadingAnimation = keyframes`
  0% {
    background-color: #ffffff0d;
  }
  50% {
    background-color: #ffffff20;
  }
  100% {
    background-color: #ffffff0d;
  }
`;

const WrapperImage = styled.figure`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;

  .placeholder {
    width: 100%;
    height: 100%;
    animation: ${loadingAnimation} 1s infinite;
  }
`;

Avatar.propTypes = {
  // Agregar ruta de imagen
  src: propTypes.string,
  // Agregar descripción para imagen
  alt: propTypes.string
};

export default Avatar;
