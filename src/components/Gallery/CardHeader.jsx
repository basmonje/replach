import { Blurhash } from 'react-blurhash';

// Patrón de diseño: Stateless
const CardHeader = ({
  size,
  isLoaded,
  hash,
  color,
  src,
  removePlaceholder,
  username
}) => (
  <>
    {size.width && (
      <>
        {isLoaded && (
          <>
            {hash ? (
              <Blurhash hash={hash} width={size.width} height={size.height} />
            ) : (
              <div
                style={{
                  width: size.width,
                  height: size.height,
                  background: color
                }}
              />
            )}
          </>
        )}
        <img
          src={src}
          width={size.width}
          height={size.height}
          onLoad={removePlaceholder}
          alt={`Photo by ${username} on Unsplash`}
        />
      </>
    )}
  </>
);

export default CardHeader;
