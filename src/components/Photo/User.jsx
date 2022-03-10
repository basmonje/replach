import styled from 'styled-components';
import { Download } from '@basmonje/lib-icon';

import Container from '../Container';
import Avatar from '../Avatar';

// Patrón de diseño: Stateless
const User = ({ user, id }) => (
  <Container as="section" className="-px-4 -py-6 -py-md-9">
    <Wrapper>
      <a
        href={`${user.links.html}?utm_source=replach&utm_medium=referral`}
        target="_blank"
      >
        <Avatar
          src={user.profile_image.small}
          alt={`${user.firstname} ${user.lastname}`}
        />
        <span>{user.username}</span>
      </a>
      <a
        className="download"
        href={`https://unsplash.com/photos/${id}/download?force=true`}
        target="_blank"
      >
        Descargar
        <Download strokeWidth={2} />
      </a>
    </Wrapper>
  </Container>
);

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    color: #dadae2;
    text-decoration: none;
  }

  .download {
    background: #ffffff;
    border-radius: 4px;
    padding: 0.5rem;
    cursor: pointer;
    color: #000;

    &:hover {
      background: #f8f8f8;
    }
  }
`;

export default User;
