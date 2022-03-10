import { useRef, useState } from 'react';

import styled from 'styled-components';

import useGetSizeImage from '../../hooks/useGetSizeImage';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import Header from './CardHeader';
import Figcaption from './CardFigcaption';

// Patrón de diseño: Statefull
const Card = ({ urls, blur_hash: hash, user, id, color, width, height }) => {
  const [active, setActive] = useState(false);
  const [isLoaded, setLoaded] = useState(true);
  const refCard = useRef();

  const size = useGetSizeImage({ ref: refCard, width, height });

  useIntersectionObserver({
    target: refCard,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setActive(true);
        observerElement.unobserve(refCard.current);
      }
    },
    threshold: 0.05
  });

  const removePlaceholder = () => setLoaded(false);

  return (
    <Article ref={refCard} size={size}>
      {active && (
        <>
          <Header
            size={size}
            isLoaded={isLoaded}
            hash={hash}
            color={color}
            src={urls.regular}
            removePlaceholder={removePlaceholder}
            username={user.username}
          />
          <Figcaption id={id} user={user} />
        </>
      )}
    </Article>
  );
};

const Article = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: ${(props) => (props.size.height ? props.size.height : 320)}px;

  &:hover {
    figcaption {
      display: flex;
    }
  }

  > div {
    position: absolute !important;
  }

  img {
    object-fit: cover;
  }

  .-close-span {
    span {
      width: 250px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @media (min-width: 1020px) {
      span {
        width: 120px;
      }
    }
  }
  figcaption {
    display: none;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    flex-direction: column;

    .nav-photo {
      width: 100%;
      height: 80%;
    }

    > div {
      width: 100%;
      height: 20%;
    }
  }
`;

export default Card;
