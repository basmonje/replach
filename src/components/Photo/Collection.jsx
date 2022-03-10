import { useState, useRef, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useWindowSize from '../../hooks/useWindowSize';

// Patrón de diseño: Statefull
const Collection = ({
  title,
  id,
  total_photos: total,
  preview_photos: preview,
  user
}) => {
  const observerSize = useRef();
  const [isLoaded, setLoaded] = useState(true);
  const [sizeImage, setSizeImage] = useState({
    width: undefined,
    height: undefined
  });
  const { width } = useWindowSize();
  const removePlaceholder = () => setLoaded(false);

  useEffect(() => {
    setSizeImage({
      width: observerSize.current.offsetWidth,
      height: observerSize.current.offsetWidth
    });
  }, [width, observerSize]);

  return (
    <Article>
      <header className="-flex -flex-row -items-center -content-between -mb-3">
        <a className="title-3" href={`/collection/${id}`}>
          <span>{title}</span>
        </a>
        <span>{total}</span>
      </header>
      <section>
        {preview.map((otherProps) => (
          <Link key={otherProps.id} to={`/photo/${otherProps.id}`}>
            <div className="box" ref={observerSize}>
              <>
                {sizeImage.width && (
                  <>
                    {isLoaded && otherProps.blur_hash && (
                      <Blurhash
                        hash={otherProps.blur_hash}
                        width={sizeImage.width}
                        height={sizeImage.height}
                      />
                    )}
                    <img
                      src={otherProps.urls.thumb}
                      alt={`Photo by ${user.username} on Unsplash`}
                      onLoad={removePlaceholder}
                      width={sizeImage.width}
                      height={sizeImage.height}
                    />
                  </>
                )}
              </>
            </div>
          </Link>
        ))}
      </section>
    </Article>
  );
};

const Article = styled.article`
  background: #ffffff0d;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    overflow: hidden;
    a {
      width: 100px;
      text-decoration: none;
      display: flex;
      color: #dadae2;

      @media (min-width: 468px) {
        width: 290px;
      }

      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;

    .box {
      overflow: hidden;
      border-radius: 4px;
      display: flex;

      img {
        object-fit: cover;
      }

      div {
        border-radius: 4px;
        position: absolute !important;
      }
    }
  }
`;

export default Collection;
