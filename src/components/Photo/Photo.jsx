import { useState, useEffect, useRef } from 'react';
import { Blurhash } from 'react-blurhash';
import styled from 'styled-components';

import Container from '../Container';
import useWindowSize from '../../hooks/useWindowSize';

// Patrón de diseño: Statefull
const Photo = ({ imageHeight, imageWidth, urls, user, hash, color }) => {
  const ref = useRef();
  const { width } = useWindowSize();
  const [isLoaded, setIsLoaded] = useState(true);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined
  });

  const removePlaceholder = () => setIsLoaded(false);

  useEffect(() => {
    setSize({
      width: ref.current.offsetWidth,
      height: Math.trunc(imageHeight / (imageWidth / ref.current.offsetWidth))
    });
  }, [ref, width, imageHeight, imageWidth]);

  return (
    <Container as="section" className="">
      <div className="-min-h-medium" ref={ref}>
        {size.width && (
          <Content size={size}>
            {isLoaded && (
              <>
                {hash ? (
                  <Blurhash
                    hash={hash}
                    width={size.width}
                    height={size.height}
                  />
                ) : (
                  <div
                    style={{
                      background: color,
                      width: size.width,
                      height: size.height
                    }}
                  />
                )}
              </>
            )}
            <img
              width={size.width}
              height={size.height}
              src={urls.regular}
              alt={`Photo by ${user.username} on Unsplash`}
              onLoad={removePlaceholder}
              className="image-big"
            />
          </Content>
        )}
      </div>
    </Container>
  );
};

const Content = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: ${(props) => props.size.height || 250}px;

  div,
  img {
    position: absolute !important;
  }
`;
export default Photo;
