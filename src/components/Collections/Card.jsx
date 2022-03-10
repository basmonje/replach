import { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

// Patrón de diseño: Statefull
const Card = ({ title, id, total_photos: total, cover_photo: photo, tags }) => {
  const [isLoaded, setLoaded] = useState(true);
  const removePlaceholder = () => setLoaded(false);
  return (
    <Article>
      <Link
        to={`/collection/${id}`}
        className="-color-white-700 -color-hover-white-900"
      >
        <figure>
          {isLoaded && (
            <div
              style={{
                background: photo.color,
                width: '100%',
                height: '100%'
              }}
            />
          )}
          <img
            width="100%"
            height="100%"
            onLoad={removePlaceholder}
            src={photo.urls.small}
            alt=""
          />
        </figure>
        <div className="-my-3">
          <span>{title}</span>
        </div>
      </Link>
      <footer className="-pb-4">
        <span className="-color-white-600">{total} Fotos</span>
        <ul className="-flex -flex-wrap -gap-1 -mt-2">
          {tags
            .filter((ite, idx) => idx <= 2)
            .map((item, index) => (
              <li
                key={index}
                className="-bg-white-300 -flex -items-center -py-1 -px-2 -color-white-600 -radius-mini -text-small"
              >
                <Link
                  to={`/photos/search/${item.title}`}
                  className="-color-white-700 -color-hover-white-900"
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </footer>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  flex-direction: column;

  figure {
    width: 100%;
    height: 100%;
    max-height: 240px;
    min-height: 240px;
    overflow: hidden;
    border-radius: 4px;

    img {
      object-fit: cover;
      height: 100%;
    }
  }
`;

export default Card;
